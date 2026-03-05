"use client";

import { useReveal } from "@/hooks/useReveal";

const bullets = [
  {
    num: "01",
    title: "Lost Revenue",
    text: "Promo shoutouts send your paying fans to other pages. That's money walking out of your funnel.",
  },
  {
    num: "02",
    title: "Over-Posting",
    text: "Hitting required numbers means flooding your feed. Your content library burns out faster than you can replace it.",
  },
  {
    num: "03",
    title: "Slower Growth",
    text: "Every hour spent fulfilling promos is an hour not spent building your own audience.",
  },
  {
    num: "04",
    title: "Longer Agreements",
    text: "Deals that should wrap up in days end up stretching into weeks.",
  },
];

const comparisons = [
  {
    label: "TIME_SPENT // PER WEEK",
    beforeVal: "~12", beforeUnit: "hrs",
    afterVal: "~2", afterUnit: "hrs",
    beforePct: "85%",
    afterPct: "14%",
    reduction: "↓ 6× less",
  },
  {
    label: "AGREEMENT_COMPLETION // DAYS",
    beforeVal: "9", beforeUnit: "days",
    afterVal: "2", afterUnit: "days",
    beforePct: "85%",
    afterPct: "19%",
    reduction: "↓ 4.5× faster",
  },
];

export default function CostSection() {
  useReveal();

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
              Promo Strategies Cost You<br />More Than Just Real Fans
            </h2>

            {/* Numbered bullet items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {bullets.map((b) => (
                <div key={b.num} style={{ display: "flex", gap: "22px", alignItems: "flex-start" }}>
                  {/* Large faded number */}
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "36px",
                      fontWeight: 800,
                      color: "var(--pc-accent-bright)",
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "52px",
                      textAlign: "right",
                      letterSpacing: "-0.02em",
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
                        fontWeight: 800,
                        fontSize: "16px",
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
                fontSize: "20px",
                color: "var(--pc-text)",
                marginTop: "36px",
                fontWeight: 800,
                paddingLeft: "66px",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              What if you could finish agreements faster without losing real fans?
            </p>
          </div>

          {/* ── Right: Comparison dashboard ── */}
          <div className="reveal delay-1">
            <div
              style={{
                background: "var(--pc-card-bg)",
                border: "1px solid var(--pc-card-border-accent)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 16px 60px var(--pc-shadow-heavy), 0 0 0 1px rgba(139,46,60,0.08)",
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
                      padding: "18px 24px",
                      borderBottom: idx < comparisons.length - 1 ? "1px solid var(--pc-glass-border)" : "none",
                    }}
                  >
                    {/* Row label */}
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "var(--pc-text)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        marginBottom: "14px",
                      }}
                    >
                      {c.label}
                    </div>

                    {/* BEFORE row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "rgba(220,70,80,0.65)",
                          width: "46px",
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
                          height: "18px",
                          background: "var(--pc-bar-track)",
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
                            boxShadow: "0 0 12px rgba(200,55,70,0.25)",
                            transition: "width 1.6s cubic-bezier(0.25,1,0.5,1) 0.1s",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "4px",
                          width: "58px",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "rgba(220,70,80,0.9)",
                            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {c.beforeVal}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 400,
                            color: "rgba(220,70,80,0.65)",
                            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          }}
                        >
                          {c.beforeUnit}
                        </span>
                      </div>
                    </div>

                    {/* AFTER row */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "rgba(61,171,98,0.65)",
                          width: "46px",
                          textAlign: "right",
                          flexShrink: 0,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        After
                      </span>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            height: "18px",
                            background: "var(--pc-bar-track)",
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
                              boxShadow: "0 0 12px rgba(55,155,90,0.25)",
                              transformOrigin: "left",
                              transitionDelay: "0.5s", // delay the after bar slightly
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "4px",
                          width: "58px",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "rgba(61,171,98,0.9)",
                            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {c.afterVal}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 400,
                            color: "rgba(61,171,98,0.65)",
                            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          }}
                        >
                          {c.afterUnit}
                        </span>
                      </div>
                    </div>
                    {/* Reduction pill */}
                    <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "58px", marginTop: "10px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                          fontSize: "11px",
                          color: "rgba(61,171,98,0.9)",
                          background: "rgba(61,171,98,0.1)",
                          border: "1px solid rgba(61,171,98,0.3)",
                          borderRadius: "100px",
                          padding: "5px 14px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {c.reduction}
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
