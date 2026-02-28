"use client";

const layers = [
  {
    tag: "Behavior Layer",
    title: "Accounts that act like users",
    text: "Controlled subscription pacing, natural interaction cadence, likes and comments distributed organically over time.",
  },
  {
    tag: "Account Structure",
    title: "Depth and diversity at scale",
    text: "Mix of aged and fresh accounts, profile diversity, geographic spread, and a 24/7 creation pipeline keeping the pool full.",
  },
  {
    tag: "Deployment Control",
    title: "You set the pace",
    text: "Adjust delivery speed to match any agreement. Full pacing control from a single dashboard, designed to minimize exposure.",
  },
];

const stats = [
  { val: "3", suffix: "+", lbl: "Account tiers" },
  { val: "800", suffix: "+", lbl: "Account pool" },
  { val: "24", suffix: "/7", lbl: "Pipeline active" },
];

// Ring node labels — clean monospace symbols
const r1 = ["SUB", "DM", "LKE", "TIP", "GEO", "QUE"];
const r2 = ["▸", "◆", "○", "●", "▫", "◇", "▪", "✦", "■", "▲"];
const r3 = ["·", "·", "·", "·", "·", "·", "·", "·", "·"];

export default function OrbitalSection() {
  return (
    <section
      style={{
        padding: "100px 5%",
        background: "var(--pc-glass)",
        borderTop: "1px solid var(--pc-glass-border)",
        borderBottom: "1px solid var(--pc-glass-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="orbital-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 6fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* ── Left: Redesigned text side ── */}
          <div className="reveal">
            <div className="section-label-el">Quality &amp; Stability</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "14px",
              }}
            >
              Three Layers of<br />Infrastructure That Holds
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--pc-text2)",
                lineHeight: 1.7,
                maxWidth: "380px",
                marginBottom: "32px",
              }}
            >
              Anyone can send bots. We build accounts that actually behave like users — three coordinated layers working in tandem.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 0,
                marginBottom: "36px",
                padding: "20px 0",
                borderTop: "1px solid var(--pc-glass-border)",
                borderBottom: "1px solid var(--pc-glass-border)",
              }}
            >
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
                      fontSize: "38px",
                      fontWeight: 800,
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

            {/* Timeline-style layer breakdown */}
            <div style={{ position: "relative" }}>
              {/* Vertical connector line */}
              <div
                style={{
                  position: "absolute",
                  left: "11px",
                  top: "12px",
                  bottom: "12px",
                  width: "1px",
                  background: "linear-gradient(to bottom, rgba(139,46,60,0.5) 0%, rgba(139,46,60,0.08) 100%)",
                  pointerEvents: "none",
                }}
              />

              {layers.map((l, i) => (
                <div
                  key={l.tag}
                  style={{
                    display: "flex",
                    gap: "22px",
                    marginBottom: i < layers.length - 1 ? "26px" : 0,
                    alignItems: "flex-start",
                  }}
                >
                  {/* Numbered dot */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: i === 0
                        ? "rgba(139,46,60,0.35)"
                        : "rgba(139,46,60,0.1)",
                      border: `1px solid ${i === 0 ? "rgba(176,51,71,0.6)" : "rgba(139,46,60,0.28)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: i === 0 ? "#C96070" : "var(--pc-text3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--pc-accent-bright)",
                        marginBottom: "5px",
                      }}
                    >
                      {l.tag}
                    </div>
                    <div
                      style={{
                        color: "var(--pc-text)",
                        fontWeight: 700,
                        fontSize: "13.5px",
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        marginBottom: "5px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {l.title}
                    </div>
                    <p
                      style={{
                        fontSize: "12.5px",
                        color: "var(--pc-text2)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {l.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Orbital ring system ── */}
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
              {/* Pool size pill */}
              <div
                className="animate-glow-pulse"
                style={{
                  position: "absolute",
                  top: "30px",
                  right: "44px",
                  background: "rgba(139,46,60,0.18)",
                  border: "1px solid rgba(139,46,60,0.45)",
                  borderRadius: "100px",
                  padding: "5px 14px",
                  fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#C96070",
                  letterSpacing: "0.08em",
                  zIndex: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C96070", display: "inline-block" }} />
                800+ accounts
              </div>

              {/* Ring 1 — inner, crimson-tinted nodes */}
              <Ring
                size={240}
                animClass="animate-orbit-cw-slow"
                nodes={r1}
                radius={120}
                counterClass="animate-counter-cw-slow"
                nodeStyle="r1"
              />

              {/* Ring 2 — middle, glass nodes */}
              <Ring
                size={380}
                animClass="animate-orbit-ccw-slow"
                nodes={r2}
                radius={190}
                counterClass="animate-counter-ccw-slow"
                nodeStyle="r2"
              />

              {/* Ring 3 — outer, minimal dots */}
              <Ring
                size={500}
                animClass="animate-orbit-cw-slower"
                nodes={r3}
                radius={250}
                counterClass="animate-counter-cw-slower"
                nodeStyle="r3"
              />

              {/* Hub */}
              <div
                className="animate-glow-pulse-slow"
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(139,46,60,0.45) 0%, rgba(139,46,60,0.12) 65%, transparent 100%)",
                  border: "1px solid rgba(139,46,60,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(139,46,60,0.35), 0 0 80px rgba(139,46,60,0.15)",
                  zIndex: 10,
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "#C96070",
                    letterSpacing: "0.08em",
                  }}
                >
                  CORE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                    fontSize: "8px",
                    color: "rgba(201,96,112,0.5)",
                    letterSpacing: "0.06em",
                  }}
                >
                  live
                </span>
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
            transform: scale(0.7);
            transform-origin: top center;
            margin-bottom: -156px;
          }
        }
        @media (max-width: 600px) {
          .orbital-system {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Ring Component ── */

function Ring({
  size,
  animClass,
  nodes,
  radius,
  counterClass,
  nodeStyle,
}: {
  size: number;
  animClass: string;
  nodes: string[];
  radius: number;
  counterClass: string;
  nodeStyle: "r1" | "r2" | "r3";
}) {
  const angleStep = 360 / nodes.length;

  const getNodeStyles = (): React.CSSProperties => {
    if (nodeStyle === "r1") {
      return {
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        background: "rgba(139,46,60,0.22)",
        border: "1px solid rgba(176,51,71,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
        fontSize: "8.5px",
        fontWeight: 700,
        color: "#C96070",
        letterSpacing: "0.04em",
        boxShadow: "0 0 12px rgba(139,46,60,0.2)",
      };
    }
    if (nodeStyle === "r2") {
      return {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        color: "rgba(255,255,255,0.4)",
      };
    }
    // r3 — tiny dots
    return {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "rgba(139,46,60,0.55)",
      border: "1px solid rgba(176,51,71,0.4)",
    };
  };

  const getRingBorder = () => {
    if (nodeStyle === "r1") return "1px solid rgba(139,46,60,0.3)";
    if (nodeStyle === "r2") return "1px solid rgba(255,255,255,0.07)";
    return "1px solid rgba(139,46,60,0.12)";
  };

  const nodeStyles = getNodeStyles();
  const halfSize = (nodeStyle === "r3" ? 8 : nodeStyle === "r1" ? 38 : 28) / 2;

  return (
    <div
      className={animClass}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        border: getRingBorder(),
      }}
    >
      {nodes.map((label, i) => {
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
              marginTop: `-${halfSize}px`,
              marginLeft: `-${halfSize}px`,
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
            }}
          >
            <div className={counterClass} style={nodeStyles}>
              {nodeStyle !== "r3" ? label : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
