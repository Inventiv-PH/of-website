const cards = [
  {
    num: "01",
    title: "Agencies",
    desc: "Managing multiple models across active promo agreements. Scale delivery without adding manual hours or burning your real fan base.",
  },
  {
    num: "02",
    title: "High-Volume Promo Operators",
    desc: "Running Telegram, IG, or Reddit promo deals at volume. Hit required numbers consistently across every agreement.",
  },
  {
    num: "03",
    title: "Advanced Solo Creators",
    desc: "Fulfilling collaboration agreements without sacrificing your own content schedule or real subscriber relationships.",
  },
];

export default function WhoSection() {
  return (
    <section
      style={{
        padding: "100px 5%",
        background: "transparent",
        color: "var(--pc-text)",
        borderTop: "1px solid var(--pc-glass-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal">
          <div
            className="section-label-el"
            style={{ color: "var(--pc-accent)" }}
          >
            Who It&apos;s For
          </div>
          <h2
            style={{
              color: "var(--pc-text)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Built for Operators Who Understand the System
          </h2>
        </div>

        <div
          className="who-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {cards.map((c, i) => (
            <div
              key={c.num}
              className={`who-card reveal${i > 0 ? ` delay-${i}` : ""}`}
              style={{
                background: "var(--pc-glass)",
                border: "2px solid transparent",
                borderRadius: "16px",
                padding: "32px 26px",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div
                className="who-num"
                style={{
                  fontSize: "clamp(32px, 10vw, 52px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  color: "transparent",
                  WebkitTextStroke: "2px var(--pc-stroke-outline)",
                  lineHeight: 1,
                  marginBottom: "16px",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                {c.num}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  marginBottom: "10px",
                  color: "var(--pc-text)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--pc-text2)", lineHeight: 1.6 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .who-card:hover {
          border-color: var(--pc-accent) !important;
          background: rgba(139,46,60,0.05) !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px rgba(139,46,60,0.1) !important;
        }
        .who-card:hover .who-num {
          -webkit-text-stroke: 2px var(--pc-accent) !important;
          color: rgba(139, 46, 60, 0.15) !important;
        }

        @media (max-width: 900px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 481px) and (max-width: 900px) {
          .who-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
