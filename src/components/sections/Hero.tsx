import Link from "next/link";

export default function Hero() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
      {/* Glow blobs */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(139,46,60,0.1) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "40%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139,46,60,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
          padding: "120px 0 80px",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div className="animate-fade-up hero-left">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(139,46,60,0.12)",
              border: "1px solid rgba(139,46,60,0.3)",
              padding: "6px 14px",
              borderRadius: "100px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C96070",
              marginBottom: "28px",
            }}
          >
            <span className="animate-glow-pulse" style={{ fontSize: "7px" }}>●</span>
            Promo Automation Platform
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(44px, 5.5vw, 76px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Automated Growth.{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--pc-accent-bright) 0%, rgba(232,232,232,0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                paddingRight: "0.1em",
              }}
            >
              Zero Fan Friction.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "16px",
              color: "var(--pc-text2)",
              maxWidth: "480px",
              fontWeight: 400,
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            Automated accounts that subscribe, tip, message, and engage to help you hit required numbers faster without sacrificing real fans.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginBottom: "14px" }}>
            <Link href="/download" className="btn-neon">
              ↓ Download Platform
            </Link>
            <Link href="/pricing" className="btn-ghost">
              View Pricing →
            </Link>
          </div>

          {/* Microcopy */}
          <p
            style={{
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--pc-text3)",
              letterSpacing: "0.08em",
            }}
          >
            {'// download is free. payment required to activate features.'}
          </p>
        </div>

        {/* Right — mock window */}
        <div className="animate-fade-up hero-right">
          <div
            className="animate-float"
            style={{
              background: "rgba(30, 30, 30, 0.4)", // Dark grey translucent
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              {["#FF5F57", "#FFBD2E", "#28C840"].map((c, i) => (
                <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
              ))}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.3)",
                  marginLeft: "12px",
                  letterSpacing: "0.05em",
                }}
              >
                PromoCore — Campaign Manager
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {[
                  { lbl: "Subs\nDelivered", val: "2,840", sub: "↑ +340 today" },
                  { lbl: "Engagement\nRate", val: "6.2%", sub: "On target" },
                  { lbl: "Accounts\nActive", val: "184", sub: "Pool healthy" },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    style={{
                      background: "rgba(30,30,30,0.4)", // more solid, less transparent looking
                      border: "1px solid rgba(255,255,255,0.04)",
                      borderRadius: "14px",
                      padding: "24px 20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "130px",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "pre-wrap", lineHeight: 1.4 }}>{s.lbl}</div>
                    <div style={{ fontSize: "36px", fontWeight: 600, lineHeight: 1, fontFamily: "var(--font-inter-var), 'Inter', sans-serif", color: "#fff", marginTop: "16px" }}>{s.val}</div>
                    <div style={{ fontSize: "12px", color: "#5ea366", marginTop: "16px", fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace" }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Scan rows */}
              <div
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  position: "relative",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  { label: "Creator A — Oct", progress: "487 / 500", status: "Active", done: false },
                  { label: "Creator B — Eng", progress: "156 / 200", status: "Active", done: false },
                  { label: "Creator C — Tips", progress: "50 / 50", status: "Done", done: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto",
                      alignItems: "center",
                      gap: "24px",
                      padding: "16px 20px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.02)",
                      borderRadius: "10px",
                      position: "relative",
                    }}
                  >
                    {/* Removed Linethrough for Done row */}

                    <span style={{ fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace", fontSize: "13px", color: "rgba(255,255,255,0.6)", zIndex: 1 }}>{row.label}</span>
                    <span style={{ fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace", fontSize: "13px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap", marginLeft: "auto", zIndex: 1 }}>{row.progress}</span>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "4px 12px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                        background: "transparent",
                        color: row.done ? "#b03347" : "#5ea366",
                        border: `1px solid ${row.done ? "rgba(176,51,71,0.4)" : "rgba(94,163,102,0.4)"}`,
                        whiteSpace: "nowrap",
                        zIndex: 1,
                      }}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </div >
  );
}
