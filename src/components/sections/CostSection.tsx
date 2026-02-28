"use client";

import { useBarReveal } from "@/hooks/useReveal";

const bullets = [
  {
    num: "01",
    title: "Funnel Dilution",
    text: "You redirect real earners to other pages, thinning your core funnel and hurting long-term retention.",
  },
  {
    num: "02",
    title: "Content Exhaustion",
    text: "You over-post to hit required numbers and burn through your catalog faster than you can refill it.",
  },
  {
    num: "03",
    title: "Growth Stall",
    text: "Fulfilling agreements eats time that should go toward building your own acquisition strategy.",
  },
  {
    num: "04",
    title: "Capacity Lock-In",
    text: "Drawn-out agreements hold your slots hostage — you can't take new clients until old ones clear.",
  },
];

const comparisons = [
  {
    label: "TIME_SPENT — PER WEEK",
    beforeVal: "~12 hrs",
    afterVal: "~2 hrs",
    beforePct: "85%",
    afterPct: "17%",
    reduction: "6× less",
  },
  {
    label: "AGREEMENT_COMPLETION — DAYS",
    beforeVal: "9 days",
    afterVal: "2 days",
    beforePct: "90%",
    afterPct: "20%",
    reduction: "4.5× faster",
  },
];

export default function CostSection() {
  useBarReveal();

  return (
    <section
      style={{
        padding: "120px 5%",
        borderTop: "1px solid var(--pc-glass-border)",
        borderBottom: "1px solid var(--pc-glass-border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="cost-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* ── Left: Problem breakdown ── */}
          <div className="reveal">
            {/* Label */}
            <div className="section-label-el">The Problem</div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                marginBottom: "40px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                color: "var(--pc-text)",
              }}
            >
              Manual Promos Are<br />Bleeding Your Operation
            </h2>

            {/* Numbered bullet items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {bullets.map((b) => (
                <div key={b.num} style={{ display: "flex", gap: "22px", alignItems: "flex-start" }}>
                  {/* Large faded number */}
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "56px",
                      fontWeight: 800,
                      color: "rgba(139, 46, 60, 0.45)",
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "72px",
                      textAlign: "right",
                      letterSpacing: "-0.04em",
                      userSelect: "none",
                    }}
                  >
                    {b.num}
                  </span>
                  {/* Content with left accent */}
                  <div
                    style={{
                      borderLeft: "2px solid rgba(139, 46, 60, 0.4)",
                      paddingLeft: "20px",
                      paddingTop: "6px",
                    }}
                  >
                    <div
                      style={{
                        color: "var(--pc-text)",
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "5px",
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {b.title}
                    </div>
                    <p
                      style={{
                        color: "var(--pc-text2)",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "var(--pc-text3)",
                marginTop: "36px",
                fontStyle: "italic",
                paddingLeft: "66px",
              }}
            >
              There&apos;s a better way to run your agreements.
            </p>
          </div>

          {/* ── Right: Comparison dashboard ── */}
          <div className="reveal delay-1">
            <div
              style={{
                background: "var(--pc-bg3)",
                border: "1px solid var(--pc-glass-border)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "18px 28px",
                  borderBottom: "1px solid var(--pc-glass-border)",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "7px" }}>
                  {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                    <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "var(--pc-text3)",
                    letterSpacing: "0.05em",
                  }}
                >
                  promo_audit.dashboard
                </span>
              </div>

              {/* Comparison rows */}
              <div style={{ padding: "8px 0" }}>
                {comparisons.map((c, idx) => (
                  <div
                    key={c.label}
                    style={{
                      padding: "28px 28px 24px",
                      borderBottom: idx < comparisons.length - 1 ? "1px solid var(--pc-glass-border)" : "none",
                    }}
                  >
                    {/* Row label */}
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                        fontSize: "9px",
                        color: "var(--pc-text3)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        marginBottom: "20px",
                      }}
                    >
                      {c.label}
                    </div>

                    {/* BEFORE row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "6px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "rgba(220,70,80,0.65)",
                          width: "54px",
                          textAlign: "right",
                          flexShrink: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Before
                      </span>
                      <div
                        style={{
                          flex: 1,
                          height: "22px",
                          background: "rgba(255,255,255,0.04)",
                          borderRadius: "5px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="bar-fill"
                          style={{
                            width: c.beforePct,
                            height: "100%",
                            borderRadius: "5px",
                            background: "linear-gradient(90deg, rgba(176,51,71,0.55), rgba(220,60,80,0.85))",
                            boxShadow: "0 0 16px rgba(200,55,70,0.25)",
                            transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "rgba(220,70,80,0.85)",
                          width: "70px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {c.beforeVal}
                      </span>
                    </div>

                    {/* AFTER row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "rgba(61,171,98,0.65)",
                          width: "54px",
                          textAlign: "right",
                          flexShrink: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        After
                      </span>
                      <div
                        style={{
                          flex: 1,
                          height: "22px",
                          background: "rgba(255,255,255,0.04)",
                          borderRadius: "5px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="bar-fill"
                          style={{
                            width: c.afterPct,
                            height: "100%",
                            borderRadius: "5px",
                            background: "linear-gradient(90deg, rgba(42,122,69,0.55), rgba(61,171,98,0.85))",
                            boxShadow: "0 0 16px rgba(55,155,90,0.25)",
                            transition: "width 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s",
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "rgba(61,171,98,0.88)",
                          width: "70px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {c.afterVal}
                      </span>
                    </div>

                    {/* Reduction pill */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "rgba(61,171,98,0.8)",
                          background: "rgba(61,171,98,0.08)",
                          border: "1px solid rgba(61,171,98,0.2)",
                          borderRadius: "100px",
                          padding: "3px 10px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        ↓ {c.reduction}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cost-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
