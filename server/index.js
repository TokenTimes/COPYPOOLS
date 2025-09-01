import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const POLY_BASE = "https://gamma-api.polymarket.com";

// Helper to fetch markets from Polymarket
async function fetchMarketsPage({
  cursor = "",
  active = true,
  limit = 1000,
} = {}) {
  const url = new URL(`${POLY_BASE}/markets`);
  if (cursor) url.searchParams.set("cursor", cursor);
  // Use closed=false to get truly active markets instead of active=true
  if (active !== undefined) url.searchParams.set("closed", String(!active));
  // Set a high limit to get more results
  url.searchParams.set("limit", String(limit));
  // You can add other filters as needed: category, archived, etc.
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`Polymarket HTTP ${res.status}`);
  return res.json();
}

function normalizeMarket(m) {
  // Outcomes can be provided in different shapes. We'll try common fields.
  let outcomesRaw = m.outcomes || m.prices || [];

  // Handle JSON string outcomes
  if (typeof outcomesRaw === "string") {
    try {
      outcomesRaw = JSON.parse(outcomesRaw);
    } catch (e) {
      outcomesRaw = [];
    }
  }

  // Ensure it's an array
  if (!Array.isArray(outcomesRaw)) {
    outcomesRaw = [];
  }

  const outcomes = outcomesRaw.map((o, index) => {
    // Handle string outcomes vs object outcomes
    if (typeof o === "string") {
      return {
        name: o,
        price: 0,
        implied_prob: 0,
        liquidity: null,
      };
    }

    const prob = typeof o?.price === "number" ? o.price : o?.probability ?? 0;
    return {
      name: o?.name ?? o?.outcome ?? `Option ${index + 1}`,
      price: prob,
      implied_prob: prob,
      liquidity: o?.liquidity ?? null,
    };
  });

  const status = (m?.status || "").toLowerCase();
  return {
    source: "polymarket",
    market_id: m.condition_id || m.id || "",
    title: m.title || m.question || "",
    category: m.category || null,
    status:
      status === "active" ? "open" : status || (m.active ? "open" : "closed"),
    url: m?.slug ? `https://polymarket.com/event/${m.slug}` : null,
    outcomes,
    volume: m.volume ?? null,
    liquidity: m.liquidity ?? null,
    end_date: m?.end_date || m?.endDate || null,
    last_updated: new Date().toISOString(),
  };
}

// GET /api/polymarket?active=true&limit=1000
app.get("/api/polymarket", async (req, res) => {
  try {
    const active =
      req.query.active !== undefined ? req.query.active === "true" : true;
    const hardLimit = Math.min(Number(req.query.limit || 1000), 5000); // safety cap

    const results = [];

    // For now, just fetch one large batch since Polymarket API doesn't seem to use cursor pagination
    // in the way we expected. We'll request the full limit at once.
    const page = await fetchMarketsPage({ active, limit: hardLimit });
    const markets = Array.isArray(page) ? page : page.data || [];

    for (const m of markets) {
      results.push(normalizeMarket(m));
      if (results.length >= hardLimit) break;
    }

    res.json({ count: results.length, markets: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err?.message || err) });
  }
});

// Bet365 integration (using The Odds API as example)
const ODDS_API_KEY = process.env.ODDS_API_KEY;
const ODDS_BASE = "https://api.the-odds-api.com/v4";

function normalizeBet365Event(ev) {
  console.log("🔍 Normalizing event:", {
    id: ev.id,
    sport_key: ev.sport_key,
    home_team: ev.home_team,
    away_team: ev.away_team,
    bookmakers_available: ev.bookmakers?.length || 0,
  });

  // Accept any bookmaker in the payload (not just bet365)
  const bookmaker = (ev.bookmakers || [])[0]; // Take first available bookmaker
  if (!bookmaker) {
    console.log("❌ No bookmaker found for event:", ev.id);
    return null;
  }

  console.log("📊 Using bookmaker:", {
    key: bookmaker.key,
    title: bookmaker.title,
    markets_count: bookmaker.markets?.length || 0,
  });
  const markets = bookmaker.markets || [];
  console.log(
    "🎯 Available markets:",
    markets.map((m) => ({
      key: m.key,
      outcomes_count: m.outcomes?.length || 0,
    }))
  );

  // Take the primary H2H market if present; otherwise first market
  const mkt = markets.find((m) => m.key === "h2h") || markets[0];
  if (!mkt) {
    console.log("❌ No market found for bookmaker:", bookmaker.key);
    return null;
  }

  console.log("✅ Using market:", {
    key: mkt.key,
    outcomes_count: mkt.outcomes?.length || 0,
  });

  const outcomes = (mkt.outcomes || []).map((o) => {
    const decimal = Number(o.price || o.odds || 0);
    const implied = decimal > 1 ? 1 / decimal : 0;
    return {
      name: o.name,
      price: decimal,
      implied_prob: implied,
      liquidity: null,
    };
  });

  return {
    source: "bet365",
    market_id: String(ev.id || `${ev.sport_key}:${ev.commence_time}`),
    title:
      ev.home_team && ev.away_team
        ? `${ev.home_team} vs ${ev.away_team}`
        : ev.title || "Match",
    category: ev.sport_key || null,
    status: "open",
    url: null,
    commence_time: ev.commence_time || null,
    outcomes,
    volume: null,
    liquidity: null,
    end_date: ev.commence_time || null,
    last_updated: new Date().toISOString(),
  };
}

// GET /api/bet365?sport=soccer_epl&regions=uk,eu&markets=h2h&limit=200
app.get("/api/bet365", async (req, res) => {
  console.log("=== BET365 API REQUEST STARTED ===");
  console.log("Request params:", req.query);
  console.log("ODDS_API_KEY exists:", !!ODDS_API_KEY);

  try {
    if (!ODDS_API_KEY) {
      console.log("No API key found, returning mock data");
      // Return comprehensive mock data if no API key
      const sport = req.query.sport || "soccer_epl";
      let mockData = [];

      if (sport === "soccer_epl") {
        mockData = [
          {
            source: "bet365",
            market_id: "epl-1",
            title: "Manchester United vs Liverpool",
            category: "soccer_epl",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Manchester United",
                price: 2.5,
                implied_prob: 0.4,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.2,
                implied_prob: 0.3125,
                liquidity: null,
              },
              {
                name: "Liverpool",
                price: 2.8,
                implied_prob: 0.357,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 86400000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "epl-2",
            title: "Chelsea vs Arsenal",
            category: "soccer_epl",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Chelsea",
                price: 2.1,
                implied_prob: 0.476,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.5,
                implied_prob: 0.286,
                liquidity: null,
              },
              {
                name: "Arsenal",
                price: 3.0,
                implied_prob: 0.333,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 172800000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "epl-3",
            title: "Manchester City vs Tottenham",
            category: "soccer_epl",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Manchester City",
                price: 1.8,
                implied_prob: 0.556,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.8,
                implied_prob: 0.263,
                liquidity: null,
              },
              {
                name: "Tottenham",
                price: 4.2,
                implied_prob: 0.238,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 259200000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "epl-4",
            title: "Newcastle vs Brighton",
            category: "soccer_epl",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Newcastle",
                price: 2.3,
                implied_prob: 0.435,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.3,
                implied_prob: 0.303,
                liquidity: null,
              },
              {
                name: "Brighton",
                price: 3.1,
                implied_prob: 0.323,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 345600000).toISOString(),
            last_updated: new Date().toISOString(),
          },
        ];
      } else if (sport === "basketball_nba") {
        mockData = [
          {
            source: "bet365",
            market_id: "nba-1",
            title: "Los Angeles Lakers vs Boston Celtics",
            category: "basketball_nba",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Los Angeles Lakers",
                price: 2.1,
                implied_prob: 0.476,
                liquidity: null,
              },
              {
                name: "Boston Celtics",
                price: 1.8,
                implied_prob: 0.556,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 432000000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "nba-2",
            title: "Golden State Warriors vs Miami Heat",
            category: "basketball_nba",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Golden State Warriors",
                price: 1.9,
                implied_prob: 0.526,
                liquidity: null,
              },
              {
                name: "Miami Heat",
                price: 1.95,
                implied_prob: 0.513,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 518400000).toISOString(),
            last_updated: new Date().toISOString(),
          },
        ];
      } else if (sport === "soccer_uefa_champs_league") {
        mockData = [
          {
            source: "bet365",
            market_id: "ucl-1",
            title: "Real Madrid vs Barcelona",
            category: "soccer_uefa_champs_league",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Real Madrid",
                price: 2.2,
                implied_prob: 0.455,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.4,
                implied_prob: 0.294,
                liquidity: null,
              },
              {
                name: "Barcelona",
                price: 2.6,
                implied_prob: 0.385,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 604800000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "ucl-2",
            title: "Bayern Munich vs PSG",
            category: "soccer_uefa_champs_league",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Bayern Munich",
                price: 1.9,
                implied_prob: 0.526,
                liquidity: null,
              },
              {
                name: "Draw",
                price: 3.6,
                implied_prob: 0.278,
                liquidity: null,
              },
              { name: "PSG", price: 3.8, implied_prob: 0.263, liquidity: null },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 691200000).toISOString(),
            last_updated: new Date().toISOString(),
          },
        ];
      } else if (sport === "tennis_atp") {
        mockData = [
          {
            source: "bet365",
            market_id: "atp-1",
            title: "Novak Djokovic vs Carlos Alcaraz",
            category: "tennis_atp",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Novak Djokovic",
                price: 2.1,
                implied_prob: 0.476,
                liquidity: null,
              },
              {
                name: "Carlos Alcaraz",
                price: 1.8,
                implied_prob: 0.556,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 777600000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "atp-2",
            title: "Rafael Nadal vs Daniil Medvedev",
            category: "tennis_atp",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Rafael Nadal",
                price: 2.3,
                implied_prob: 0.435,
                liquidity: null,
              },
              {
                name: "Daniil Medvedev",
                price: 1.7,
                implied_prob: 0.588,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 864000000).toISOString(),
            last_updated: new Date().toISOString(),
          },
        ];
      } else if (sport === "mma_mixed_martial_arts") {
        mockData = [
          {
            source: "bet365",
            market_id: "mma-1",
            title: "Jon Jones vs Stipe Miocic",
            category: "mma_mixed_martial_arts",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Jon Jones",
                price: 1.6,
                implied_prob: 0.625,
                liquidity: null,
              },
              {
                name: "Stipe Miocic",
                price: 2.4,
                implied_prob: 0.417,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 950400000).toISOString(),
            last_updated: new Date().toISOString(),
          },
          {
            source: "bet365",
            market_id: "mma-2",
            title: "Islam Makhachev vs Charles Oliveira",
            category: "mma_mixed_martial_arts",
            status: "open",
            url: null,
            outcomes: [
              {
                name: "Islam Makhachev",
                price: 1.8,
                implied_prob: 0.556,
                liquidity: null,
              },
              {
                name: "Charles Oliveira",
                price: 2.0,
                implied_prob: 0.5,
                liquidity: null,
              },
            ],
            volume: null,
            liquidity: null,
            end_date: new Date(Date.now() + 1036800000).toISOString(),
            last_updated: new Date().toISOString(),
          },
        ];
      }

      // Add some randomization to simulate new markets appearing
      const now = Date.now();
      const randomSeed = Math.floor(now / 60000); // Changes every minute
      const shouldAddExtra = randomSeed % 3 === 0; // Add extra markets every 3 minutes

      if (shouldAddExtra && sport === "soccer_epl") {
        mockData.push({
          source: "bet365",
          market_id: `epl-extra-${randomSeed}`,
          title: "Aston Villa vs West Ham",
          category: "soccer_epl",
          status: "open",
          url: null,
          outcomes: [
            {
              name: "Aston Villa",
              price: 2.0,
              implied_prob: 0.5,
              liquidity: null,
            },
            { name: "Draw", price: 3.1, implied_prob: 0.323, liquidity: null },
            {
              name: "West Ham",
              price: 3.8,
              implied_prob: 0.263,
              liquidity: null,
            },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 1123200000).toISOString(),
          last_updated: new Date().toISOString(),
        });
      }

      return res.json({ count: mockData.length, markets: mockData });
    }

    const sport = req.query.sport || "soccer_epl";
    const regions = req.query.regions || "us,uk,eu,au";
    const markets = req.query.markets || "h2h";
    const oddsFormat = req.query.oddsFormat || "decimal";

    console.log("API call parameters:");
    console.log("- sport:", sport);
    console.log("- regions:", regions);
    console.log("- markets:", markets);
    console.log("- oddsFormat:", oddsFormat);

    const url = new URL(`${ODDS_BASE}/sports/${sport}/odds`);
    url.searchParams.set("regions", regions);
    url.searchParams.set("markets", markets);
    url.searchParams.set("oddsFormat", oddsFormat);
    url.searchParams.set("apiKey", ODDS_API_KEY);

    console.log(
      "Full API URL:",
      url.toString().replace(ODDS_API_KEY, "***API_KEY***")
    );

    console.log("Making fetch request to Odds API...");
    const resp = await fetch(url, { headers: { accept: "application/json" } });
    console.log("Fetch completed. Status:", resp.status);
    console.log(
      "Response headers:",
      Object.fromEntries(resp.headers.entries())
    );

    const json = await resp.json();
    console.log("JSON parsed successfully");
    console.log("Response data type:", typeof json);
    console.log("Is array:", Array.isArray(json));
    console.log("Data length:", json?.length || 0);

    if (json?.length > 0) {
      console.log("First event sample:", JSON.stringify(json[0], null, 2));
    }

    if (!resp.ok) {
      const msg = json?.message || resp.statusText;
      console.error(`❌ Odds API error: ${msg}`);
      console.error("Full error response:", json);
      return res.status(resp.status).json({ error: `Odds API error: ${msg}` });
    }

    const results = [];
    console.log(`Processing ${json.length} events from API...`);

    for (let i = 0; i < json.length; i++) {
      const ev = json[i];
      console.log(`Processing event ${i + 1}/${json.length}:`, {
        id: ev.id,
        sport_key: ev.sport_key,
        home_team: ev.home_team,
        away_team: ev.away_team,
        bookmakers_count: ev.bookmakers?.length || 0,
      });

      if (ev.bookmakers && ev.bookmakers.length > 0) {
        console.log(
          `Event ${i + 1} bookmakers:`,
          ev.bookmakers.map((b) => ({
            key: b.key,
            title: b.title,
            markets_count: b.markets?.length || 0,
          }))
        );
      }

      const norm = normalizeBet365Event(ev);
      if (norm) {
        console.log(`✅ Event ${i + 1} normalized successfully:`, norm.title);
        results.push(norm);
      } else {
        console.log(`❌ Event ${i + 1} failed normalization`);
      }
    }

    console.log(
      `🎯 Final result: Normalized ${results.length} events from ${json.length} raw events`
    );

    const limit = Math.min(Number(req.query.limit || 200), 1000);
    results.sort((a, b) =>
      (a.commence_time || "").localeCompare(b.commence_time || "")
    );

    // If no results from real API, fallback to mock data
    if (results.length === 0) {
      console.log("No results from Odds API, falling back to mock data");
      const sport = req.query.sport || "soccer_epl";
      let mockData = [];

      // Show diverse sports and categories
      mockData = [
        {
          source: "bet365",
          market_id: "epl-fallback-1",
          title: "Arsenal vs Chelsea",
          category: "soccer_epl",
          status: "open",
          url: null,
          outcomes: [
            {
              name: "Arsenal",
              price: 2.1,
              implied_prob: 0.476,
              liquidity: null,
            },
            { name: "Draw", price: 3.3, implied_prob: 0.303, liquidity: null },
            {
              name: "Chelsea",
              price: 3.5,
              implied_prob: 0.286,
              liquidity: null,
            },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 86400000).toISOString(),
          last_updated: new Date().toISOString(),
        },
        {
          source: "bet365",
          market_id: "nba-fallback-1",
          title: "Lakers vs Warriors",
          category: "basketball_nba",
          status: "open",
          url: null,
          outcomes: [
            {
              name: "Lakers",
              price: 1.9,
              implied_prob: 0.526,
              liquidity: null,
            },
            {
              name: "Warriors",
              price: 1.9,
              implied_prob: 0.526,
              liquidity: null,
            },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 172800000).toISOString(),
          last_updated: new Date().toISOString(),
        },
        {
          source: "bet365",
          market_id: "tennis-fallback-1",
          title: "Djokovic vs Nadal",
          category: "tennis_atp",
          status: "open",
          url: null,
          outcomes: [
            {
              name: "Djokovic",
              price: 1.6,
              implied_prob: 0.625,
              liquidity: null,
            },
            { name: "Nadal", price: 2.4, implied_prob: 0.417, liquidity: null },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 259200000).toISOString(),
          last_updated: new Date().toISOString(),
        },
        {
          source: "bet365",
          market_id: "mma-fallback-1",
          title: "Jones vs Miocic",
          category: "mma_mixed_martial_arts",
          status: "open",
          url: null,
          outcomes: [
            { name: "Jones", price: 1.4, implied_prob: 0.714, liquidity: null },
            {
              name: "Miocic",
              price: 2.8,
              implied_prob: 0.357,
              liquidity: null,
            },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 345600000).toISOString(),
          last_updated: new Date().toISOString(),
        },
        {
          source: "bet365",
          market_id: "ucl-fallback-1",
          title: "Real Madrid vs Bayern Munich",
          category: "soccer_uefa_champs_league",
          status: "open",
          url: null,
          outcomes: [
            {
              name: "Real Madrid",
              price: 2.2,
              implied_prob: 0.455,
              liquidity: null,
            },
            { name: "Draw", price: 3.1, implied_prob: 0.323, liquidity: null },
            {
              name: "Bayern Munich",
              price: 3.0,
              implied_prob: 0.333,
              liquidity: null,
            },
          ],
          volume: null,
          liquidity: null,
          end_date: new Date(Date.now() + 432000000).toISOString(),
          last_updated: new Date().toISOString(),
        },
      ];

      return res.json({
        count: mockData.length,
        markets: mockData,
      });
    }

    res.json({
      count: Math.min(results.length, limit),
      markets: results.slice(0, limit),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err?.message || err) });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
