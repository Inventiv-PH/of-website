"use client";

import { useState, useEffect } from "react";

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

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

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
    <button
      onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 998,
        background: "var(--pc-nav-capsule)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--pc-glass-border)",
        borderRadius: "100px",
        padding: "8px 14px",
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
  );
}
