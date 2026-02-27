
export default function SolutionBento() {
  return (
    <section id="solution" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="section-label-el">The Platform</div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Automated Subscriber &amp; Engagement Accounts
          </h2>
        </div>

        {/* Bento grid */}
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "14px",
            marginTop: "48px",
          }}
        >
          {/* Large card */}
          <BentoCard
            icon="👥"
            title="Subscriber Bots"
            desc="Deploy automated subscriber accounts to hit required fan counts on schedule. Controlled pacing to match your agreement timelines precisely."
            pills={["Paced Delivery", "Account Pool", "Real Profiles", "Geo Targeting"]}
            large
            revealDelay=""
          />

          {/* Accent card */}
          <BentoCard
            icon="⚡"
            title="Built for Operators"
            desc="Designed specifically for OnlyFans promo ecosystems. Full delivery control from day one."
            accent
            revealDelay="delay-1"
          />

          {/* Normal card */}
          <BentoCard
            icon="💬"
            title="Engagement Automation"
            desc="Automated likes and visible activity distributed naturally over time."
            revealDelay="delay-2"
          />

          {/* Wide card */}
          <BentoCard
            icon="💸"
            title="Tip & Message Activity"
            desc="Simulate tip and message interactions. Supports agreements that require demonstrated revenue activity alongside subscriber counts. Works standalone or layered over subscriber delivery."
            wide
            revealDelay="delay-1"
          />

          {/* Normal card */}
          <BentoCard
            icon="⚙️"
            title="Deployment Control"
            desc="You control every aspect of delivery speed, pacing, and scale."
            revealDelay="delay-2"
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  desc,
  pills,
  large,
  wide,
  accent,
  revealDelay,
}: {
  icon: string;
  title: string;
  desc: string;
  pills?: string[];
  large?: boolean;
  wide?: boolean;
  accent?: boolean;
  revealDelay: string;
}) {
  const baseStyle: React.CSSProperties = {
    background: accent ? "var(--pc-accent)" : "var(--pc-glass)",
    border: `1px solid ${accent ? "var(--pc-accent-bright)" : "var(--pc-glass-border)"}`,
    borderRadius: "20px",
    padding: large ? "36px" : "28px",
    transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s cubic-bezier(0.4,0,0.2,1)",
    boxShadow: accent ? "0 0 40px rgba(139,46,60,0.3)" : "none",
    gridColumn: large ? "span 2" : wide ? "span 2" : "span 1",
    gridRow: large ? "span 2" : "span 1",
  };

  return (
    <div
      className={`reveal ${revealDelay}`}
      style={baseStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-2px)";
        if (!accent) el.style.borderColor = "var(--pc-glass-border-accent)";
        el.style.boxShadow = accent
          ? "0 0 60px rgba(139,46,60,0.45)"
          : "0 0 30px rgba(139,46,60,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "none";
        el.style.borderColor = accent ? "var(--pc-accent-bright)" : "var(--pc-glass-border)";
        el.style.boxShadow = accent ? "0 0 40px rgba(139,46,60,0.3)" : "none";
      }}
    >
      <div
        style={{
          width: large ? "52px" : "44px",
          height: large ? "52px" : "44px",
          borderRadius: "10px",
          background: accent ? "rgba(255,255,255,0.15)" : "rgba(139,46,60,0.15)",
          border: `1px solid ${accent ? "rgba(255,255,255,0.25)" : "rgba(139,46,60,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: large ? "24px" : "20px",
          marginBottom: large ? "24px" : "18px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: large ? "22px" : "16px",
          fontWeight: 700,
          marginBottom: large ? "14px" : "10px",
          lineHeight: 1.2,
          color: accent ? "#fff" : "var(--pc-text)",
          fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: accent ? "rgba(255,255,255,0.8)" : "var(--pc-text2)",
          lineHeight: 1.6,
        }}
      >
        {desc}
      </p>
      {pills && pills.length > 0 && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
          {pills.map((p) => (
            <span
              key={p}
              style={{
                padding: "4px 12px",
                borderRadius: "100px",
                fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "rgba(139,46,60,0.15)",
                border: "1px solid rgba(139,46,60,0.3)",
                color: "#C96070",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
