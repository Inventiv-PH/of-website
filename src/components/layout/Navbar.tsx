"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#solution", label: "Platform" },
  { href: "/#how", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
];

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "16px 5%",
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
              gap: "clamp(12px, 2vw, 32px)",
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
                whiteSpace: "nowrap",
              }}
            >
              Promo<span style={{ color: "var(--pc-accent-bright)" }}>Core</span>
            </Link>

            {/* Nav links (hidden on mobile) */}
            <div className="nav-links" style={{ display: "flex", gap: "24px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--pc-text2)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
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

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              style={{
                background: "none",
                border: "1px solid var(--pc-glass-border)",
                borderRadius: "100px",
                padding: "5px 10px",
                color: "var(--pc-text2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "10px",
                fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                letterSpacing: "0.1em",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pc-glass-border-accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--pc-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--pc-glass-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--pc-text2)";
              }}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>


          </div>

          {/* Right side controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                whiteSpace: "nowrap",
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

            {/* Hamburger button (mobile only) */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                display: "none",
                background: menuOpen ? "var(--pc-accent)" : "rgba(255,255,255,0.03)",
                border: "1px solid var(--pc-glass-border)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: menuOpen ? "#fff" : "var(--pc-text)",
                fontSize: "16px",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            .nav-links { display: none !important; }
            .live-indicator { display: none !important; }
            .hamburger-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "var(--pc-bg)",
            display: "flex",
            flexDirection: "column",
            padding: "96px 5% 40px",
            overflowY: "auto",
          }}
        >
          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(28px, 8vw, 40px)",
                  fontWeight: 800,
                  color: "var(--pc-text)",
                  textDecoration: "none",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--pc-glass-border)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                  letterSpacing: "-0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--pc-accent-bright)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--pc-text)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div style={{ marginTop: "auto", paddingTop: "40px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              href="/download"
              className="btn-neon"
              onClick={() => setMenuOpen(false)}
              style={{ justifyContent: "center" }}
            >
              ↓ Download Platform
            </Link>

          </div>
        </div>
      )}
    </>
  );
}
