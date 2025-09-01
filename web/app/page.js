"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useBalance } from "wagmi";
import { WalletConnect } from "../components/WalletConnect";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://copypools-production.up.railway.app";

// USDT contract address on Arbitrum
const USDT_ADDRESS_ARBITRUM = "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9";

export default function HomePage() {
  const { isConnected, address } = useAppKitAccount();

  // Fetch USDT balance on Arbitrum
  const {
    data: usdtBalance,
    isLoading: balanceLoading,
    error: balanceError,
  } = useBalance({
    address: address,
    token: USDT_ADDRESS_ARBITRUM,
    chainId: 42161, // Arbitrum One
    enabled: !!address, // Only fetch when address is available
  });

  // Debug logging
  useEffect(() => {
    console.log("Balance fetch debug:", {
      address,
      usdtBalance,
      balanceLoading,
      balanceError,
      isConnected,
    });
  }, [address, usdtBalance, balanceLoading, balanceError, isConnected]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [minLiquidity, setMinLiquidity] = useState("");
  const [onlyOpen, setOnlyOpen] = useState(true);
  const [selectedMarkets, setSelectedMarkets] = useState(new Set());
  const [displayLimit, setDisplayLimit] = useState(50);
  const [investmentAmount, setInvestmentAmount] = useState("");

  // Separate memory for each tab's selections
  const [polymarketSelections, setPolymarketSelections] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("polymarket-selections");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const [bet365Selections, setBet365Selections] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bet365-selections");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });

  const [rainMemory, setRainMemory] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("polymarket-rain-memory");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });
  const [countdown, setCountdown] = useState(3600); // 60 minutes = 3600 seconds
  const [activeTab, setActiveTab] = useState("polymarket");
  const [sport, setSport] = useState("soccer_epl");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [regions, setRegions] = useState("uk,eu");
  const [previousMarkets, setPreviousMarkets] = useState(new Set());
  const [newMarkets, setNewMarkets] = useState(new Set());

  // Store all data from both tabs for cross-tab access
  const [allPolymarketData, setAllPolymarketData] = useState([]);
  const [allBet365Data, setAllBet365Data] = useState([]);

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

      // Store data for cross-tab access
      if (activeTab === "polymarket") {
        setAllPolymarketData(newData);
      } else {
        setAllBet365Data(newData);
      }
    } catch (e) {
      setError(String(e.message || e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab, onlyOpen, sport, regions]);

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

  // Sync selectedMarkets with tab-specific memory
  useEffect(() => {
    if (activeTab === "polymarket") {
      setSelectedMarkets(polymarketSelections);
    } else {
      setSelectedMarkets(bet365Selections);
    }
  }, [activeTab, polymarketSelections, bet365Selections]);

  // Save selections to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "polymarket-selections",
        JSON.stringify([...polymarketSelections])
      );
    }
  }, [polymarketSelections]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "bet365-selections",
        JSON.stringify([...bet365Selections])
      );
    }
  }, [bet365Selections]);

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
          fetchData(true);
          return 3600; // Reset countdown to 60 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, onlyOpen, sport, regions]);

  // Save rain memory to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "polymarket-rain-memory",
        JSON.stringify([...rainMemory])
      );
    }
  }, [rainMemory]);

  const toggleRainMemory = (marketId, checked) => {
    const newRainMemory = new Set(rainMemory);
    if (checked) {
      newRainMemory.add(marketId);
    } else {
      newRainMemory.delete(marketId);
    }
    setRainMemory(newRainMemory);
  };

  // Investment validation
  const investmentValue = parseFloat(investmentAmount) || 0;
  const availableBalance = usdtBalance ? parseFloat(usdtBalance.formatted) : 0;
  const totalQuestions = polymarketSelections.size + bet365Selections.size;
  const investmentPerQuestion =
    totalQuestions > 0 ? investmentValue / totalQuestions : 0;

  const investmentError = useMemo(() => {
    if (!investmentAmount) return "";
    if (investmentValue > availableBalance)
      return "Investment amount exceeds available balance";
    if (totalQuestions > 0 && investmentPerQuestion < 10)
      return "Investment per question must be at least $10";
    return "";
  }, [
    investmentAmount,
    investmentValue,
    availableBalance,
    totalQuestions,
    investmentPerQuestion,
  ]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    let filtered = rows.filter((m) => {
      const matchesQuery =
        !q ||
        m.title?.toLowerCase().includes(q) ||
        m.category?.toLowerCase().includes(q);

      const matchesLiquidity =
        !minLiquidity || Number(m.liquidity || 0) >= Number(minLiquidity);

      return matchesQuery && matchesLiquidity;
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
          // Default sort by date
          aVal = new Date(
            a.end_date || a.commence_time || "1970-01-01"
          ).getTime();
          bVal = new Date(
            b.end_date || b.commence_time || "1970-01-01"
          ).getTime();
      }

      if (typeof aVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      } else {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }
    });

    // Apply display limit
    return filtered.slice(0, displayLimit);
  }, [rows, query, minLiquidity, displayLimit, sortBy, sortOrder]);

  // JSON preview data - includes selections from both tabs
  const jsonPreviewData = useMemo(() => {
    const allSelectedData = [];

    // Add selected Polymarket data
    const polymarketSelected = allPolymarketData.filter((m) =>
      polymarketSelections.has(m.market_id)
    );
    allSelectedData.push(...polymarketSelected);

    // Add selected Bet365 data
    const bet365Selected = allBet365Data.filter((m) =>
      bet365Selections.has(m.market_id)
    );
    allSelectedData.push(...bet365Selected);

    const questions = allSelectedData.map((market) => ({
      question: market.title,
      options: market.outcomes?.map((outcome) => outcome.name) || [],
      invested:
        totalQuestions > 0 && investmentValue > 0 ? investmentPerQuestion : 0,
    }));

    // Calculate USDT balance with better error handling
    let usdtBalanceValue = 0;
    if (balanceLoading) {
      usdtBalanceValue = "loading...";
    } else if (balanceError) {
      usdtBalanceValue = `error: ${balanceError.message}`;
    } else if (usdtBalance) {
      usdtBalanceValue = parseFloat(usdtBalance.formatted);
    }

    return {
      questions: questions,
      funding_wallet: address || null,
      remaining_usdt_balance: usdtBalanceValue,
      total_invested_usdt: investmentValue || 0,
    };
  }, [
    allPolymarketData,
    allBet365Data,
    polymarketSelections,
    bet365Selections,
    address,
    usdtBalance,
    balanceLoading,
    balanceError,
    investmentValue,
    totalQuestions,
    investmentPerQuestion,
  ]);

  // Selection handlers
  const handleSelectAll = (checked) => {
    const newSelected = checked
      ? new Set(filtered.map((m) => m.market_id))
      : new Set();
    setSelectedMarkets(newSelected);

    // Update the appropriate tab's memory
    if (activeTab === "polymarket") {
      setPolymarketSelections(newSelected);
    } else {
      setBet365Selections(newSelected);
    }
  };

  const handleSelectMarket = (marketId, checked) => {
    // Update the current tab's selections
    const newSelected = new Set(selectedMarkets);
    if (checked) {
      newSelected.add(marketId);
    } else {
      newSelected.delete(marketId);
    }
    setSelectedMarkets(newSelected);

    // Update the appropriate tab's memory
    if (activeTab === "polymarket") {
      setPolymarketSelections(newSelected);
    } else {
      setBet365Selections(newSelected);
    }
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
    a.download = `selected-markets-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Export to Rain
  const exportToRain = () => {
    if (polymarketSelections.size + bet365Selections.size === 0) return;

    // Log to console for now (could be extended to actual Rain integration)
    console.log("Exported to Rain:", jsonPreviewData);
    alert(`Exported ${jsonPreviewData.length} markets to Rain!`);
  };

  // Utility functions
  const fmtNumber = (n) => {
    if (!n) return "—";
    return Number(n).toLocaleString();
  };

  const fmtDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleDateString();
    } catch {
      return "—";
    }
  };

  // Table components
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

  function Td({ children, style = {} }) {
    return (
      <td
        style={{
          padding: "8px",
          borderBottom: "1px solid #eee",
          fontSize: 13,
          ...style,
        }}
      >
        {children}
      </td>
    );
  }

  // Show wallet connect screen if not connected
  if (!isConnected) {
    return <WalletConnect />;
  }

  return (
    <>
      <WalletConnect />
      <div
        className="main-container"
        style={{
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
          padding: 16,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Tab Interface */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex" }}>
            <button
              className={`tab-button ${
                activeTab === "polymarket" ? "active" : ""
              }`}
              onClick={() => setActiveTab("polymarket")}
              style={{
                flex: 1,
                padding: "12px 24px",
                border: "none",
                backgroundColor:
                  activeTab === "polymarket"
                    ? "rgba(220, 236, 78, 1)"
                    : "#f8f9fa",
                color: activeTab === "polymarket" ? "black" : "#495057",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              📊 Polymarket
            </button>
            <button
              className={`tab-button ${activeTab === "bet365" ? "active" : ""}`}
              onClick={() => setActiveTab("bet365")}
              style={{
                flex: 1,
                padding: "12px 24px",
                border: "none",
                backgroundColor:
                  activeTab === "bet365" ? "rgba(220, 236, 78, 1)" : "#f8f9fa",
                color: activeTab === "bet365" ? "black" : "#495057",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              ⚽ Bet365
            </button>
          </div>
        </div>

        <div
          className="controls-section"
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <input
            className="control-input"
            type="text"
            placeholder="Search title or category…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: 8, minWidth: 280 }}
          />
          <input
            className="control-input"
            type="number"
            min={0}
            placeholder="Min liquidity"
            value={minLiquidity}
            onChange={(e) => setMinLiquidity(e.target.value)}
            style={{ padding: 8, width: 160 }}
          />
          <select
            className="control-input"
            value={displayLimit}
            onChange={(e) => setDisplayLimit(Number(e.target.value))}
            style={{ padding: 8, width: 120 }}
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
            <option value={100}>Show 100</option>
            <option value={200}>Show 200</option>
            <option value={500}>Show 500</option>
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
                className="control-input"
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
                className="control-input"
                type="text"
                value={regions}
                onChange={(e) => setRegions(e.target.value)}
                style={{ padding: 8, width: 120 }}
                placeholder="uk,eu,us,au"
              />
            </>
          )}
        </div>

        {/* Investment controls */}
        <div
          className="investment-box"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginBottom: 12,
            padding: 12,
            backgroundColor: "#2a2a2a",
            borderRadius: 4,
            border: investmentError ? "1px solid #dc3545" : "1px solid #444",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}
          >
            Invest USDT:
          </span>
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            style={{
              width: "100px",
              padding: "4px 8px",
              borderRadius: "4px",
              border: investmentError ? "1px solid #dc3545" : "1px solid #555",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              fontSize: "14px",
            }}
          />
          <span style={{ color: "#888", fontSize: "12px" }}>
            Balance: ${availableBalance.toFixed(2)}
          </span>
          {totalQuestions > 0 && investmentValue > 0 && (
            <span style={{ color: "#888", fontSize: "12px" }}>
              ${investmentPerQuestion.toFixed(2)}/question
            </span>
          )}
          <span style={{ color: "#ffffff", fontSize: "12px" }}>
            ({polymarketSelections.size + bet365Selections.size} selected)
          </span>
          {investmentError && (
            <span
              style={{ color: "#dc3545", fontSize: "12px", fontWeight: "500" }}
            >
              {investmentError}
            </span>
          )}
        </div>

        {loading && <p className="loading">Loading…</p>}
        {error && (
          <p className="error" style={{ color: "crimson" }}>
            {error}
          </p>
        )}

        {!loading && !error && (
          <div
            className="main-content"
            style={{ display: "flex", gap: 16, height: "65vh" }}
          >
            {/* Main table - 70% width */}
            <div
              className="table-container"
              style={{
                flex: "0 0 70%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="table-wrapper"
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
                      zIndex: 100,
                    }}
                  >
                    <tr>
                      <Th
                        className="select-column"
                        style={{ width: 50, textAlign: "center" }}
                      >
                        <input
                          type="checkbox"
                          checked={
                            selectedMarkets.size === filtered.length &&
                            filtered.length > 0
                          }
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          style={{
                            cursor: "pointer",
                            transform: "scale(1.2)",
                          }}
                          title={
                            selectedMarkets.size === filtered.length &&
                            filtered.length > 0
                              ? "Deselect All"
                              : "Select All"
                          }
                        />
                      </Th>
                      <Th
                        className="date-column clickable"
                        style={{
                          cursor: "pointer",
                          userSelect: "none",
                          transition: "background-color 0.2s",
                          "&:hover": { backgroundColor: "#e9ecef" },
                        }}
                        onClick={() => handleSort("date")}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#e9ecef")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#fafafa")
                        }
                      >
                        Date{" "}
                        <span
                          className="sort-arrow"
                          style={{
                            color: sortBy === "date" ? "#007bff" : "#6c757d",
                          }}
                        >
                          {sortBy === "date"
                            ? sortOrder === "asc"
                              ? "↑"
                              : "↓"
                            : "↕"}
                        </span>
                      </Th>
                      <Th className="title-column">Title</Th>
                      <Th className="status-column">Status</Th>
                      {activeTab === "polymarket" && (
                        <Th
                          className="liquidity-column clickable"
                          style={{
                            cursor: "pointer",
                            userSelect: "none",
                            transition: "background-color 0.2s",
                          }}
                          onClick={() => handleSort("liquidity")}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#e9ecef")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#fafafa")
                          }
                        >
                          Liquidity{" "}
                          <span
                            className="sort-arrow"
                            style={{
                              color:
                                sortBy === "liquidity" ? "#007bff" : "#6c757d",
                            }}
                          >
                            {sortBy === "liquidity"
                              ? sortOrder === "asc"
                                ? "↑"
                                : "↓"
                              : "↕"}
                          </span>
                        </Th>
                      )}
                      <Th className="outcomes-column">Top outcomes</Th>
                      <Th className="rain-column" style={{ width: 80 }}>
                        Rain
                      </Th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((m) => (
                      <tr
                        key={m.market_id}
                        style={{
                          backgroundColor: newMarkets.has(m.market_id)
                            ? "#d4edda"
                            : "transparent",
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
                        <Td>{m.status}</Td>
                        {activeTab === "polymarket" && (
                          <Td>{fmtNumber(m.liquidity) || "—"}</Td>
                        )}
                        <Td>
                          {(m.outcomes || []).slice(0, 3).map((o, i) => (
                            <span
                              key={i}
                              style={{
                                display: "inline-block",
                                marginRight: 8,
                              }}
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
              className="json-preview-container"
              style={{
                flex: "0 0 30%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="json-preview"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 4,
                  backgroundColor: "#f8f9fa",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="json-header"
                  style={{
                    padding: 12,
                    borderBottom: "1px solid #ddd",
                    backgroundColor: "#e9ecef",
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  JSON Preview ({jsonPreviewData.questions.length} selected)
                </div>
                <div
                  className="json-content"
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: 12,
                  }}
                >
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
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Export to Rain Button - Centered below table and JSON preview */}
        {!loading && !error && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <button
              className="export-button"
              onClick={exportToRain}
              disabled={polymarketSelections.size + bet365Selections.size === 0}
              style={{
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor:
                  polymarketSelections.size + bet365Selections.size > 0
                    ? "rgba(220, 236, 78, 1)"
                    : "#ccc",
                color:
                  polymarketSelections.size + bet365Selections.size > 0
                    ? "black"
                    : "white",
                border: "none",
                borderRadius: 8,
                cursor:
                  polymarketSelections.size + bet365Selections.size > 0
                    ? "pointer"
                    : "not-allowed",
                minWidth: "200px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                if (polymarketSelections.size + bet365Selections.size > 0) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              Export to Rain
            </button>
          </div>
        )}
      </div>
    </>
  );
}
