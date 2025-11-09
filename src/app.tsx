// src/App.tsx
import React, { useEffect } from "react";
import { sdk } from "@farcaster/miniapp‑sdk";

function App() {
  useEffect(() => {
    // Menandakan ke host bahwa aplikasi telah siap
    sdk.actions.ready();
  }, []);

  const handleViewCollection = () => {
    sdk.actions.openUrl("https://YOUR_DOMAIN.com");
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "2rem",
      fontFamily: "sans‑serif",
      backgroundColor: "#111",
      color: "#fff",
      minHeight: "100vh"
    }}>
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 800 }}>Based Vice Toads</h1>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          Mint Based Vice Toads. New PFPs on Base, stay based.
        </p>
        <button
          onClick={handleViewCollection}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            background: "#1e90ff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Lihat Koleksi
        </button>
      </header>

      <main style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
        <img
          src="https://YOUR_DOMAIN.com/screenshot1.png"
          alt="Screenshot Based Vice Toads 1"
          style={{ maxWidth: "90%", height: "auto", borderRadius: "8px" }}
        />
        <img
          src="https://YOUR_DOMAIN.com/screenshot2.png"
          alt="Screenshot Based Vice Toads 2"
          style={{ maxWidth: "90%", height: "auto", borderRadius: "8px" }}
        />
      </main>

      <footer style={{ marginTop: "4rem", borderTop: "1px solid #333", paddingTop: "2rem", color: "#aaa" }}>
        <p>© 2025 Based Vice Toads. All rights reserved.</p>
        <p>Farcaster: <a href="https://warpcast.com/ameldoxg" target="_blank" rel="noreferrer" style={{ color: "#1e90ff" }}>@ameldoxg</a></p>
      </footer>
    </div>
  );
}

export default App;
