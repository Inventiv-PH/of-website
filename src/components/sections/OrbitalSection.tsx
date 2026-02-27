"use client";

const infoCards = [
  {
    tag: "Behavior Layer",
    text: "Controlled subscription pacing · Natural interaction patterns · Likes and comments distributed over time",
  },
  {
    tag: "Account Structure",
    text: "Mix of aged and fresh accounts · Profile diversity · Geographic distribution · Ongoing creation pipeline",
  },
  {
    tag: "Deployment Control",
    text: "You control delivery speed · Adjust pacing to match agreements · Designed to reduce detection risk",
  },
];

const stats = [
  { val: "3", suffix: "+", lbl: "Account tiers" },
  { val: "800", suffix: "+", lbl: "Account pool" },
  { val: "24", suffix: "/7", lbl: "Pipeline active" },
];

// Ring 1 nodes (radius 120, 6 nodes every 60deg)
const r1 = ["👤","💬","❤️","💸","📍","⏱"];
// Ring 2 nodes (radius 190, 10 nodes every 36deg)
const r2 = ["👥","🔒","📱","🌍","🔄","📊","⚡","🎯","🛡","📈"];
// Ring 3 nodes (radius 250, 9 nodes every ~40deg)
const r3 = ["✓","●","◆","▸","○","✦","■","◇","▪"];

export default function OrbitalSection() {
  return (
    <section
      style={{
        padding: "100px 5%",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid var(--pc-glass-border)",
        borderBottom: "1px solid var(--pc-glass-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="orbital-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left text */}
          <div className="reveal">
            <div className="section-label-el">Quality &amp; Stability</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              }}
            >
              Built for Quality and Stability
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--pc-text2)",
                marginTop: "16px",
                lineHeight: 1.7,
                maxWidth: "380px",
              }}
            >
              Anyone can send bots. We build accounts that actually behave like users. Three layers of infrastructure working in tandem.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 0, marginTop: "32px" }}>
              {stats.map((s, i) => (
                <div
                  key={s.lbl}
                  style={{
                    padding: i === 0 ? "0 28px 0 0" : "0 28px",
                    borderRight: i < stats.length - 1 ? "1px solid var(--pc-glass-border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                    }}
                  >
                    <span style={{ color: "var(--pc-accent-bright)" }}>{s.val}</span>
                    {s.suffix}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "var(--pc-text3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "6px",
                    }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px" }}>
              {infoCards.map((c) => (
                <div
                  key={c.tag}
                  style={{
                    background: "var(--pc-glass)",
                    border: "1px solid var(--pc-glass-border)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--pc-accent-bright)",
                      marginBottom: "8px",
                    }}
                  >
                    {c.tag}
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--pc-text2)", lineHeight: 1.6 }}>
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Orbital ring system */}
          <div className="reveal delay-2">
            <div
              style={{
                position: "relative",
                width: "520px",
                height: "520px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              className="orbital-system"
            >
              {/* Pill label */}
              <div
                className="animate-glow-pulse"
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "50px",
                  background: "rgba(139,46,60,0.2)",
                  border: "1px solid rgba(139,46,60,0.4)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#C96070",
                  letterSpacing: "0.1em",
                  zIndex: 20,
                }}
              >
                +800 accounts
              </div>

              {/* Ring 1 */}
              <Ring
                size={240}
                animClass="animate-orbit-cw-slow"
                nodes={r1}
                radius={120}
                counterClass="animate-counter-cw-slow"
                iconSize="md"
              />

              {/* Ring 2 */}
              <Ring
                size={380}
                animClass="animate-orbit-ccw-slow"
                nodes={r2}
                radius={190}
                counterClass="animate-counter-ccw-slow"
                iconSize="md"
              />

              {/* Ring 3 */}
              <Ring
                size={500}
                animClass="animate-orbit-cw-slower"
                nodes={r3}
                radius={250}
                counterClass="animate-counter-cw-slower"
                iconSize="sm"
              />

              {/* Hub */}
              <div
                className="animate-glow-pulse-slow"
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(139,46,60,0.4) 0%, rgba(139,46,60,0.1) 60%, transparent 100%)",
                  border: "1px solid rgba(139,46,60,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  boxShadow: "0 0 40px rgba(139,46,60,0.3), 0 0 80px rgba(139,46,60,0.15)",
                  zIndex: 10,
                }}
              >
                ⚙️
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .orbital-grid {
            grid-template-columns: 1fr !important;
          }
          .orbital-system {
            width: 320px !important;
            height: 320px !important;
            transform: scale(0.6);
          }
        }
      `}</style>
    </section>
  );
}

function Ring({
  size,
  animClass,
  nodes,
  radius,
  counterClass,
  iconSize,
}: {
  size: number;
  animClass: string;
  nodes: string[];
  radius: number;
  counterClass: string;
  iconSize: "sm" | "md";
}) {
  const angleStep = 360 / nodes.length;
  const px = iconSize === "sm" ? "28px" : iconSize === "md" ? "32px" : "36px";
  const fontSize = iconSize === "sm" ? "13px" : "16px";

  return (
    <div
      className={animClass}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        border: "1px solid rgba(139,46,60,0.18)",
      }}
    >
      {nodes.map((icon, i) => {
        const angle = i * angleStep;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              transformOrigin: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "50%",
              left: "50%",
              marginTop: "-18px",
              marginLeft: "-18px",
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          >
            <div
              className={counterClass}
              style={{
                width: px,
                height: px,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}
