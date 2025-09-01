"use client";

import { useAppKitAccount } from "@reown/appkit/react";
import { useDisconnect } from "wagmi";
import { modal } from "../lib/wallet-config";

export function WalletConnect() {
  const { isConnected, address } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    modal.open();
  };

  const handleDisconnect = () => {
    if (confirm("Are you sure you want to disconnect your wallet?")) {
      disconnect();
    }
  };

  if (isConnected) {
    return (
      <div
        className="wallet-header"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 10000,
          backgroundColor: "#2a2a2a",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #444",
          fontSize: "14px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#28a745",
              borderRadius: "50%",
            }}
          />
          <span>
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={handleDisconnect}
            style={{
              marginLeft: "8px",
              padding: "4px 8px",
              fontSize: "12px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(220, 236, 78, 1)";
              e.target.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#dc3545";
              e.target.style.color = "white";
            }}
          >
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div
        className="wallet-connect-container"
        style={{
          backgroundColor: "#2a2a2a",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "320px",
          width: "100%",
          border: "1px solid #444",
        }}
      >
        {/* Logo and Title - Larger than header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            gap: "16px",
          }}
        >
          <img
            src="/drops_logo.png"
            alt="DROPS"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: "600",
              color: "rgba(220, 236, 78, 1)",
              fontFamily: "omedium, system-ui, -apple-system, Segoe UI, Roboto",
            }}
          >
            DROPS
          </h1>
        </div>

        <button
          onClick={handleConnect}
          style={{
            width: "100%",
            padding: "16px 24px",
            fontSize: "18px",
            fontWeight: "600",
            backgroundColor: "rgba(220, 236, 78, 0.82)",
            color: "black",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(220, 236, 78, 1)";
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "rgba(220, 236, 78, 0.82)";
            e.target.style.color = "white";
          }}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
