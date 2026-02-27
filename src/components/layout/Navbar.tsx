"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: "16px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Capsule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--pc-glass-border)",
            borderRadius: "100px",
            padding: "10px 20px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.02em",
              textDecoration: "none",
              color: "var(--pc-text)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Promo<span style={{ color: "var(--pc-accent-bright)" }}>Core</span>
          </Link>

          {/* Nav links */}
          <div
            className="nav-links"
            style={{ display: "flex", gap: "24px" }}
          >
            {[
              { href: "/#solution", label: "Platform" },
              { href: "/#how", label: "How it works" },
              { href: "/pricing", label: "Pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
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
            ))}
          </div>

          {/* Live indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--pc-text2)",
            }}
          >
            <div
              className="animate-glow-pulse"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--pc-accent-bright)",
                boxShadow: "0 0 8px var(--pc-accent)",
              }}
            />
            <span>System Live</span>
          </div>
        </div>

        {/* Download button */}
        <Link
          href="/download"
          style={{
            background: "var(--pc-accent)",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 0 20px var(--pc-accent-glow)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--pc-accent-bright)";
            el.style.boxShadow = "0 0 40px var(--pc-accent-glow-strong)";
            el.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--pc-accent)";
            el.style.boxShadow = "0 0 20px var(--pc-accent-glow)";
            el.style.transform = "scale(1)";
          }}
        >
          Download
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
