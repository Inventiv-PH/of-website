import Link from "next/link";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Download", href: "/download" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Telegram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Discord", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--pc-glass-border)",
        padding: "60px 5% 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "15vw",
          fontWeight: 900,
          whiteSpace: "nowrap",
          color: "rgba(255,255,255,0.025)",
          letterSpacing: "-0.05em",
          pointerEvents: "none",
          lineHeight: 1,
          fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
        }}
      >
        PROMOCORE
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr repeat(4, 1fr)",
          gap: "40px",
        }}
        className="footer-grid"
      >
        {/* Brand col */}
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Promo<span style={{ color: "var(--pc-accent-bright)" }}>Core</span>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--pc-text3)",
              marginTop: "12px",
              lineHeight: 1.6,
              maxWidth: "220px",
            }}
          >
            Automated subscriber and engagement platform for OnlyFans promo operators.
          </p>
        </div>

        {/* Link cols */}
        {cols.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--pc-text3)",
                marginBottom: "16px",
              }}
            >
              {col.title}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "13px",
                      color: "var(--pc-text2)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--pc-text)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--pc-text2)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            marginTop: "48px",
            paddingTop: "20px",
            borderTop: "1px solid var(--pc-glass-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--pc-text3)",
              letterSpacing: "0.08em",
            }}
          >
            © 2025 PromoCore · All rights reserved
          </span>
          <span
            className="status-ok"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "#5ABB6A",
            }}
          >
            <span className="animate-glow-pulse" style={{ fontSize: "8px" }}>●</span>
            All Systems Operational
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
