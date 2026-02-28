const steps = [
  {
    num: "01",
    phase: "Phase 1",
    title: "Download the Platform",
    desc: "Available for Windows and Mac. Free to download, no account needed upfront.",
  },
  {
    num: "02",
    phase: "Phase 2",
    title: "Connect Your Account",
    desc: "Link your PromoCore account and configure your target creator profiles.",
  },
  {
    num: "03",
    phase: "Phase 3",
    title: "Activate Subscription",
    desc: "Select your plan and activate. Features unlock immediately upon payment.",
  },
  {
    num: "04",
    phase: "Phase 4",
    title: "Launch Subscribers",
    desc: "Configure pacing, set targets, and deploy. Monitor delivery in real time.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        padding: "100px 5%",
        background: "var(--pc-glass)",
        borderTop: "1px solid var(--pc-glass-border)",
        borderBottom: "1px solid var(--pc-glass-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="section-label-el" style={{ justifyContent: "center" }}>
            How It Works
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Up and Running in Four Steps
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper" style={{ position: "relative" }}>

          {/* ── Track rail ── */}
          <div
            className="track-line"
            style={{
              position: "absolute",
              top: "52px",           /* vertically centered on the 56px nodes */
              left: "calc(12.5% - 2px)",
              right: "calc(12.5% - 2px)",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, var(--pc-accent) 20%, var(--pc-accent-bright) 50%, var(--pc-accent) 80%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "flowTrack 4s linear infinite",
              zIndex: 0,
              boxShadow: "0 0 12px var(--pc-accent-glow)",
              opacity: 0.8,
            }}
          />

          {/* ── Steps grid ── */}
          <div
            className="how-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`reveal${i > 0 ? ` delay-${i}` : ""}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 16px",
                  position: "relative",
                }}
              >
                {/* Phase label above node */}
                <div
                  style={{
                    fontFamily:
                      "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--pc-accent-bright)",
                    marginBottom: "10px",
                    lineHeight: 1.6,
                    height: "15px", // Force a fixed height to make exact math easier
                  }}
                >
                  {s.phase}
                </div>

                {/* Node circle — sits on the track */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--pc-accent-bright) 0%, var(--pc-accent) 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily:
                      "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                    fontSize: "15px",
                    fontWeight: 800,
                    boxShadow:
                      "0 0 0 4px var(--pc-bg3, #151820), 0 0 0 6px rgba(139,46,60,0.5), 0 0 30px var(--pc-accent-glow-strong), inset 0 2px 4px rgba(255,255,255,0.4)",
                    flexShrink: 0,
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  {s.num}
                </div>

                {/* Vertical connector from node to content */}
                <div
                  style={{
                    width: "2px",
                    height: "32px",
                    background:
                      "linear-gradient(180deg, var(--pc-accent-glow-strong), transparent)",
                    margin: "0",
                    flexShrink: 0,
                  }}
                />

                {/* Content card */}
                <div
                  style={{
                    background: "var(--pc-glass)",
                    border: "1px solid var(--pc-glass-border)",
                    borderTop: "1px solid var(--pc-glass-border)",
                    borderRadius: "16px",
                    padding: "24px 20px",
                    width: "100%",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                    transition:
                      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--pc-glass-border-accent)";
                    el.style.borderTopColor = "var(--pc-accent-bright)";
                    el.style.boxShadow = "0 20px 40px -10px rgba(0,0,0,0.7), 0 0 40px rgba(139,46,60,0.15), inset 0 1px 0 rgba(255,255,255,0.1)";
                    el.style.transform = "translateY(-6px) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--pc-glass-border)";
                    el.style.borderTopColor = "var(--pc-glass-border)";
                    el.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)";
                    el.style.transform = "none";
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    opacity: 0.5,
                  }} />
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      marginBottom: "10px",
                      color: "var(--pc-text)",
                      fontFamily:
                        "var(--font-manrope-var), Manrope, sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--pc-text2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* Arrow connector to next step (not on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="step-arrow"
                    style={{
                      position: "absolute",
                      top: "41px",     /* align with node center (15px label + 10px gap + 28px half node) - 12 (half height) */
                      right: "-12px",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, var(--pc-bg3), var(--pc-bg2))",
                      borderRadius: "50%",
                      border: "1px solid rgba(139,46,60,0.5)",
                      boxShadow: "0 0 15px rgba(139,46,60,0.2)",
                      zIndex: 3,
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "var(--pc-accent-bright)",
                      animation: "pulseArrow 2s infinite alternate",
                    }}
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowTrack {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulseArrow {
          0% { transform: translateX(0); box-shadow: 0 0 10px rgba(139,46,60,0.1); }
          100% { transform: translateX(4px); box-shadow: 0 0 20px rgba(139,46,60,0.4); }
        }
        @media (max-width: 900px) {
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .track-line {
            display: none;
          }
          .step-arrow {
            display: none !important;
          }
          /* Vertical track for mobile */
          .timeline-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 27px;
            width: 2px;
            background: linear-gradient(
              180deg,
              var(--pc-accent) 0%,
              rgba(176, 51, 71, 0.2) 100%
            );
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .how-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .timeline-wrapper::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
