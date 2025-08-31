import { useEffect, useMemo, useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://copypools-production.up.railway.app";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [minLiquidity, setMinLiquidity] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(true);
  const [selectedMarkets, setSelectedMarkets] = useState(new Set());
  const [displayLimit, setDisplayLimit] = useState(50);
  const [rainMemory, setRainMemory] = useState(() => {
    const saved = localStorage.getItem("polymarket-rain-memory");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [countdown, setCountdown] = useState(3600); // 60 minutes = 3600 seconds
  const [activeTab, setActiveTab] = useState("polymarket");
  const [sport, setSport] = useState("soccer_epl");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [regions, setRegions] = useState("uk,eu");
  const [previousMarkets, setPreviousMarkets] = useState(new Set());
  const [newMarkets, setNewMarkets] = useState(new Set());

  // Fetch data based on active tab
  const fetchData = async (isRefresh = false) => {
    setLoading(true);
    setError("");
    try {
      let url;
      if (activeTab === "polymarket") {
        url = new URL(`${API_BASE}/api/polymarket`);
        url.searchParams.set("active", String(onlyOpen));
        url.searchParams.set("limit", "1000");
      } else {
        url = new URL(`${API_BASE}/api/bet365`);
        url.searchParams.set("sport", sport);
        url.searchParams.set("regions", regions);
        url.searchParams.set("markets", "h2h");
        url.searchParams.set("limit", "500");
      }

      const res = await fetch(url);
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || res.statusText);

      const newData = json.markets || [];
      const currentMarketIds = new Set(newData.map((m) => m.market_id));

      if (isRefresh && previousMarkets.size > 0) {
        // Find truly new markets that weren't in the previous fetch
        const discoveredNew = new Set();
        newData.forEach((market) => {
          if (!previousMarkets.has(market.market_id)) {
            discoveredNew.add(market.market_id);
          }
        });
        setNewMarkets(discoveredNew);

        // Clear new market indicators after 60 seconds
        if (discoveredNew.size > 0) {
          setTimeout(() => {
            setNewMarkets(new Set());
          }, 60000);
        }
      }

      setPreviousMarkets(currentMarketIds);
      setRows(newData);
    } catch (e) {
      setError(String(e.message || e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab, onlyOpen, sport, regions]);

  // Format countdown time
  const formatCountdown = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Sorting function
  const handleSort = (column) => {
    console.log("Sorting by:", column, "Current:", sortBy, sortOrder);
    if (sortBy === column) {
      const newOrder = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(newOrder);
      console.log("Changed order to:", newOrder);
    } else {
      setSortBy(column);
      setSortOrder("desc");
      console.log("Changed column to:", column, "order: desc");
    }
  };

  // Auto-refresh with countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Trigger refresh with new pool detection
          fetchData(true);
          return 3600; // Reset countdown to 60 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, onlyOpen, sport, regions]);

  const filtered = useMemo(() => {
    let filtered = rows.filter((m) => {
      const q = query.trim().toLowerCase();
      const byText =
        !q ||
        m.title?.toLowerCase().includes(q) ||
        m.category?.toLowerCase().includes(q);
      const byLiq =
        minLiquidity === "" || Number(m.liquidity || 0) >= Number(minLiquidity);
      return byText && byLiq;
    });

    // Apply sorting
    console.log("Applying sort - sortBy:", sortBy, "sortOrder:", sortOrder);
    filtered.sort((a, b) => {
      let aVal, bVal;

      switch (sortBy) {
        case "liquidity":
          aVal = Number(a.liquidity || 0);
          bVal = Number(b.liquidity || 0);
          break;
        case "date":
          aVal = new Date(
            a.end_date || a.commence_time || "1970-01-01"
          ).getTime();
          bVal = new Date(
            b.end_date || b.commence_time || "1970-01-01"
          ).getTime();
          // Debug date sorting
          if (Math.random() < 0.01) {
            // Log 1% of comparisons
            console.log(
              "Date sort:",
              a.title?.substring(0, 20),
              "vs",
              b.title?.substring(0, 20),
              "dates:",
              a.end_date || a.commence_time,
              "vs",
              b.end_date || b.commence_time
            );
          }
          break;
        case "title":
          aVal = (a.title || "").toLowerCase();
          bVal = (b.title || "").toLowerCase();
          break;
        case "volume":
          aVal = Number(a.volume || 0);
          bVal = Number(b.volume || 0);
          break;
        default:
          aVal = new Date(
            a.end_date || a.commence_time || "1970-01-01"
          ).getTime();
          bVal = new Date(
            b.end_date || b.commence_time || "1970-01-01"
          ).getTime();
      }

      if (typeof aVal === "string") {
        if (sortOrder === "asc") {
          return aVal.localeCompare(bVal);
        } else {
          return bVal.localeCompare(aVal);
        }
      } else {
        if (sortOrder === "asc") {
          return aVal - bVal;
        } else {
          return bVal - aVal;
        }
      }
    });

    // Apply display limit
    return filtered.slice(0, displayLimit);
  }, [rows, query, minLiquidity, displayLimit, sortBy, sortOrder]);

  // JSON preview data
  const jsonPreviewData = useMemo(() => {
    const selectedData = filtered.filter((m) =>
      selectedMarkets.has(m.market_id)
    );

    return selectedData.map((market) => ({
      question: market.title,
      market_id: market.market_id,
      category: market.category,
      status: market.status,
      url: market.url,
      options:
        market.outcomes?.map((outcome) => ({
          name: outcome.name,
          probability: outcome.implied_prob,
          price: outcome.price,
        })) || [],
      liquidity: market.liquidity,
      volume: market.volume,
      end_date: market.end_date,
    }));
  }, [filtered, selectedMarkets]);

  // Selection handlers
  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedMarkets(new Set(filtered.map((m) => m.market_id)));
    } else {
      setSelectedMarkets(new Set());
    }
  };

  const handleSelectMarket = (marketId, checked) => {
    const newSelected = new Set(selectedMarkets);
    if (checked) {
      newSelected.add(marketId);
    } else {
      newSelected.delete(marketId);
    }
    setSelectedMarkets(newSelected);
  };

  // Export to JSON
  const exportToJSON = () => {
    // Create and download JSON file
    const blob = new Blob([JSON.stringify(jsonPreviewData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `polymarket-export-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Export to Rain
  const exportToRain = () => {
    if (selectedMarkets.size === 0) return;

    // Add selected markets to Rain memory
    const newRainMemory = new Set([...rainMemory, ...selectedMarkets]);
    setRainMemory(newRainMemory);

    // Save to localStorage
    localStorage.setItem(
      "polymarket-rain-memory",
      JSON.stringify([...newRainMemory])
    );

    // Clear selection after export
    setSelectedMarkets(new Set());

    // You could add API call to Rain system here
    console.log("Exported to Rain:", jsonPreviewData);
  };

  // Toggle Rain memory for individual market
  const toggleRainMemory = (marketId, checked) => {
    const newRainMemory = new Set(rainMemory);
    if (checked) {
      newRainMemory.add(marketId);
    } else {
      newRainMemory.delete(marketId);
    }
    setRainMemory(newRainMemory);
    localStorage.setItem(
      "polymarket-rain-memory",
      JSON.stringify([...newRainMemory])
    );
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
        padding: 16,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Tab Interface */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", borderBottom: "2px solid #e9ecef" }}>
          <button
            onClick={() => setActiveTab("polymarket")}
            style={{
              padding: "12px 24px",
              border: "none",
              backgroundColor:
                activeTab === "polymarket" ? "#007bff" : "transparent",
              color: activeTab === "polymarket" ? "white" : "#007bff",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
              marginRight: 4,
            }}
          >
            📊 Polymarket
          </button>
          <button
            onClick={() => setActiveTab("bet365")}
            style={{
              padding: "12px 24px",
              border: "none",
              backgroundColor:
                activeTab === "bet365" ? "#007bff" : "transparent",
              color: activeTab === "bet365" ? "white" : "#007bff",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            ⚽ Bet365
          </button>
        </div>
      </div>

      <div
        style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}
      >
        <input
          placeholder="Search title or category…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 8, minWidth: 280 }}
        />
        <input
          type="number"
          min={0}
          placeholder="Min liquidity"
          value={minLiquidity}
          onChange={(e) => setMinLiquidity(e.target.value)}
          style={{ padding: 8, width: 160 }}
        />
        <select
          value={displayLimit}
          onChange={(e) => setDisplayLimit(Number(e.target.value))}
          style={{ padding: 8, width: 120 }}
        >
          <option value={20}>Show 20</option>
          <option value={50}>Show 50</option>
          <option value={100}>Show 100</option>
          <option value={200}>Show 200</option>
          <option value={500}>Show 500</option>
          <option value={1000}>Show 1000</option>
        </select>

        {/* Polymarket-specific controls */}
        {activeTab === "polymarket" && (
          <label
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <input
              type="checkbox"
              checked={onlyOpen}
              onChange={(e) => setOnlyOpen(e.target.checked)}
            />{" "}
            Only open
          </label>
        )}

        {/* Bet365-specific controls */}
        {activeTab === "bet365" && (
          <>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              style={{ padding: 8, width: 180 }}
            >
              <option value="soccer_epl">Premier League</option>
              <option value="soccer_uefa_champs_league">
                Champions League
              </option>
              <option value="basketball_nba">NBA</option>
              <option value="mma_mixed_martial_arts">MMA</option>
              <option value="tennis_atp">ATP Tennis</option>
            </select>
            <input
              value={regions}
              onChange={(e) => setRegions(e.target.value)}
              style={{ padding: 8, width: 120 }}
              placeholder="uk,eu,us,au"
            />
          </>
        )}
      </div>

      {/* Export controls */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 12,
          padding: 12,
          backgroundColor: "#f0f8ff",
          borderRadius: 4,
          border: "1px solid #cce7ff",
        }}
      >
        <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <input
            type="checkbox"
            checked={
              selectedMarkets.size === filtered.length && filtered.length > 0
            }
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          Select All ({selectedMarkets.size} selected)
        </label>
        <button
          onClick={exportToJSON}
          disabled={selectedMarkets.size === 0}
          style={{
            padding: "8px 16px",
            backgroundColor: selectedMarkets.size > 0 ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: selectedMarkets.size > 0 ? "pointer" : "not-allowed",
          }}
        >
          Export Selected to JSON ({selectedMarkets.size})
        </button>
      </div>

      {/* Auto-refresh countdown */}
      <div
        style={{
          marginBottom: 12,
          padding: 8,
          backgroundColor: newMarkets.size > 0 ? "#d4edda" : "#e8f4fd",
          borderRadius: 4,
          textAlign: "center",
          fontSize: 14,
          color: newMarkets.size > 0 ? "#155724" : "#0066cc",
          border: newMarkets.size > 0 ? "1px solid #c3e6cb" : "none",
        }}
      >
        {newMarkets.size > 0 ? (
          <>
            🆕 {newMarkets.size} new pool{newMarkets.size > 1 ? "s" : ""}{" "}
            discovered! | Next refresh in {formatCountdown(countdown)}
          </>
        ) : (
          <>🔄 Auto-refresh in {formatCountdown(countdown)} | Scanning for new pools...</>
        )}
      </div>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && (
        <>
          <div
            style={{
              marginBottom: 16,
              padding: 12,
              backgroundColor: "#f8f9fa",
              borderRadius: 4,
            }}
          >
            <strong>
              Showing {filtered.length} of {rows.length} markets
              {newMarkets.size > 0 && (
                <span style={{ color: "#28a745", marginLeft: 8 }}>
                  • {newMarkets.size} new
                </span>
              )}
            </strong>
            {displayLimit < rows.length &&
              ` (limited to first ${displayLimit})`}
          </div>
        </>
      )}

      {!loading && !error && (
        <div style={{ display: "flex", gap: 16, height: "65vh" }}>
          {/* Main table - 70% width */}
          <div
            style={{
              flex: "0 0 70%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "100%",
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: 4,
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#fafafa",
                    zIndex: 1,
                  }}
                >
                  <tr>
                    <Th style={{ width: 50 }}>Select</Th>
                    <Th
                      style={{ 
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "background-color 0.2s",
                        "&:hover": { backgroundColor: "#e9ecef" }
                      }}
                      onClick={() => handleSort("date")}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#e9ecef"}
                      onMouseOut={(e) => e.target.style.backgroundColor = "#fafafa"}
                    >
                      Date{" "}
                      <span style={{ color: sortBy === "date" ? "#007bff" : "#6c757d" }}>
                        {sortBy === "date"
                          ? sortOrder === "asc"
                            ? "↑"
                            : "↓"
                          : "↕"}
                      </span>
                    </Th>
                    <Th>Title</Th>
                    <Th>Category</Th>
                    <Th>Status</Th>
                    {activeTab === "polymarket" && (
                      <Th
                        style={{ 
                          cursor: "pointer",
                          userSelect: "none",
                          transition: "background-color 0.2s"
                        }}
                        onClick={() => handleSort("liquidity")}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#e9ecef"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#fafafa"}
                      >
                        Liquidity{" "}
                        <span style={{ color: sortBy === "liquidity" ? "#007bff" : "#6c757d" }}>
                          {sortBy === "liquidity"
                            ? sortOrder === "asc"
                              ? "↑"
                              : "↓"
                            : "↕"}
                        </span>
                      </Th>
                    )}
                    <Th>Top outcomes</Th>
                    <Th style={{ width: 80 }}>Rain</Th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m) => (
                    <tr
                      key={m.market_id}
                      style={{
                        borderTop: "1px solid #eee",
                        backgroundColor: newMarkets.has(m.market_id)
                          ? "#d4edda"
                          : "transparent",
                        borderLeft: newMarkets.has(m.market_id)
                          ? "4px solid #28a745"
                          : "none",
                      }}
                    >
                      <Td>
                        <input
                          type="checkbox"
                          checked={selectedMarkets.has(m.market_id)}
                          onChange={(e) =>
                            handleSelectMarket(m.market_id, e.target.checked)
                          }
                        />
                      </Td>
                      <Td>{fmtDate(m.end_date || m.commence_time)}</Td>
                      <Td>{m.title}</Td>
                      <Td>{m.category || "—"}</Td>
                      <Td>{m.status}</Td>
                      {activeTab === "polymarket" && (
                        <Td>{fmtNumber(m.liquidity) || "—"}</Td>
                      )}
                      <Td>
                        {(m.outcomes || []).slice(0, 3).map((o, i) => (
                          <span
                            key={i}
                            style={{ display: "inline-block", marginRight: 8 }}
                          >
                            {o.name}:{" "}
                            {o.implied_prob != null
                              ? (o.implied_prob * 100).toFixed(1) + "%"
                              : "—"}
                          </span>
                        ))}
                      </Td>
                      <Td>
                        <input
                          type="checkbox"
                          checked={rainMemory.has(m.market_id)}
                          onChange={(e) =>
                            toggleRainMemory(m.market_id, e.target.checked)
                          }
                          style={{
                            accentColor: "#28a745",
                          }}
                        />
                        {rainMemory.has(m.market_id) && (
                          <span
                            style={{
                              color: "#28a745",
                              fontSize: 12,
                              marginLeft: 4,
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* JSON Preview - 30% width */}
          <div
            style={{
              flex: "0 0 30%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Export to Rain Button */}
            <button
              onClick={exportToRain}
              disabled={selectedMarkets.size === 0}
              style={{
                width: "100%",
                padding: "12px 16px",
                marginBottom: 12,
                backgroundColor: selectedMarkets.size > 0 ? "#28a745" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: selectedMarkets.size > 0 ? "pointer" : "not-allowed",
                fontSize: 14,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              🌧️ Export to Rain ({selectedMarkets.size})
            </button>

            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: 4,
                backgroundColor: "#f8f9fa",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: 12,
                  borderBottom: "1px solid #ddd",
                  backgroundColor: "#e9ecef",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                JSON Preview ({jsonPreviewData.length} selected)
              </div>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: 12,
                }}
              >
                {jsonPreviewData.length > 0 ? (
                  <pre
                    style={{
                      fontSize: 11,
                      lineHeight: 1.4,
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      fontFamily:
                        "Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
                    }}
                  >
                    {JSON.stringify(jsonPreviewData, null, 2)}
                  </pre>
                ) : (
                  <div
                    style={{
                      color: "#6c757d",
                      fontStyle: "italic",
                      textAlign: "center",
                      padding: 20,
                    }}
                  >
                    Select markets to preview JSON
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Th({ children, style = {}, onClick, ...props }) {
  return (
    <th
      style={{
        textAlign: "left",
        fontWeight: 600,
        fontSize: 14,
        padding: "10px 8px",
        background: "#fafafa",
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td style={{ fontSize: 14, padding: "10px 8px", verticalAlign: "top" }}>
      {children}
    </td>
  );
}

function fmtNumber(x) {
  if (x == null) return "";
  try {
    return Number(x).toLocaleString();
  } catch {
    return String(x);
  }
}

function fmtDate(x) {
  if (!x) return "—";
  const d = new Date(x);
  if (Number.isNaN(+d)) return String(x);
  return d.toLocaleString();
}
