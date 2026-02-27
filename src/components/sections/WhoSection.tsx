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
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
              color: "#fff",
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
              className={`reveal${i > 0 ? ` delay-${i}` : ""}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "2px solid transparent",
                borderRadius: "16px",
                padding: "32px 26px",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--pc-accent)";
                el.style.background = "rgba(139,46,60,0.05)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(139,46,60,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "transparent";
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255,255,255,0.1)",
                  lineHeight: 1,
                  marginBottom: "16px",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                {c.num}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  marginBottom: "10px",
                  color: "#fff",
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
        @media (max-width: 900px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
