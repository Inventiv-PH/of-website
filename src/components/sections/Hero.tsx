"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedLines from "@/components/ui/AnimatedLines";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SEGMENTS = [
  { text: "Complete Promo Deals ", gradient: false },
  { text: "Faster with ", gradient: false },
  { text: "Automated Subscriber ", gradient: true },
  { text: "Accounts", gradient: true },
];

const SUBLINE = "Automated accounts that subscribe, tip, message, and engage to help you hit required numbers faster without sacrificing real fans.";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Fade in CTAs from the bottom
    tl.from([ctaRef.current, textRef.current], {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.4");
  }, { scope: container });

  return (
    <div ref={container} style={{ position: "relative", overflow: "hidden" }}>
      {/* ── Fiber bundle background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Soft ambient base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 58% 50%, rgba(139,46,60,0.18) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />

        <AnimatedLines />
      </div>

      <section
        className="hero-section"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        {/* ── Left column: text ── */}
        <div
          className="hero-left"
          style={{ padding: "clamp(20px, 5vw, 40px) clamp(20px, 4vw, 40px) clamp(20px, 5vw, 40px) max(24px, 7vw)" }}
        >
          <h1
            ref={headlineRef}
            style={{
              fontSize: "clamp(24px, 3.4vw, 50px)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              marginBottom: "20px",
              filter: "var(--pc-shadow-drop-filter)",
            }}
          >
            {SEGMENTS.map((seg, idx) => {
              const gradStyle: React.CSSProperties = seg.gradient ? {
                background: "linear-gradient(90deg, #C96070 0%, #b03347 45%, var(--pc-text) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } : { color: "var(--pc-text)" };

              return (
                <span key={idx} className="hero-headline-segment" style={{ display: "inline-block", ...gradStyle }}>
                  {seg.text}
                </span>
              );
            })}
          </h1>

          <p
            ref={sublineRef}
            style={{
              fontSize: "clamp(14px, 1.4vw, 17px)",
              color: "var(--pc-text2)",
              maxWidth: "460px",
              fontWeight: 400,
              lineHeight: 1.7,
              marginBottom: "36px",
              textShadow: "var(--pc-shadow-text)",
            }}
          >
            {SUBLINE}
          </p>

          <div
            ref={ctaRef}
            className="hero-cta"
            style={{
              display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap",
            }}
          >
            <Link href="/download" className="btn-neon">
              ↓ Download Platform
            </Link>
            <Link href="/pricing" className="btn-ghost">
              View Pricing →
            </Link>
          </div>
          <p
            ref={textRef}
            style={{
              marginTop: "14px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "var(--pc-text3)",
              letterSpacing: "0.05em",
            }}
          >
            Download is free. Payment required to activate features.
          </p>
        </div>

        {/* ── Right column: mockup ── */}
        <div
          className="animate-fade-up hero-right"
          style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "clamp(16px, 4vw, 64px)",
          }}
        >
          <div className="hero-img-wrapper" style={{ width: "100%", position: "relative", flexShrink: 0 }}>
            <Image
              src="/mock-up.svg"
              alt="PromoCore dashboard mockup"
              width={1400}
              height={1050}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />

            {/* ── Floating feature badges ── */}
            <div className="feature-badges" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              {([
                // LG — left side, upper-middle (beside laptop frame, clear of screen)
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Automated Messaging",
                  top: "30%", left: "1%", delay: "0.35s", neonDelay: "1.5s", size: "lg",
                },
                // LG — bottom-right, below keyboard
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                  label: "Automated Tipping",
                  top: "83%", left: "46%", delay: "0.55s", neonDelay: "2.5s", size: "lg",
                },
                // BASE — left side, lower (below laptop screen)
                {
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  label: "Live Monitoring",
                  top: "65%", left: "1%", delay: "0.75s", neonDelay: "3.5s", size: "base",
                },
                // SM — top area, near laptop edge
                {
                  icon: (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  label: "Pool of Subscribers",
                  top: "2%", left: "38%", delay: "0.95s", neonDelay: "4.5s", size: "sm",
                },
              ] as { icon: React.ReactNode; label: string; top: string; left: string; delay: string; neonDelay: string; size: "lg" | "base" | "sm" }[]).map(({ icon, label, top, left, delay, neonDelay, size }) => {
                const s = {
                  lg: { iconBox: "34px", text: "14px", pad: "9px 20px 9px 9px", gap: "10px" },
                  base: { iconBox: "28px", text: "12px", pad: "7px 16px 7px 7px", gap: "8px" },
                  sm: { iconBox: "24px", text: "11px", pad: "6px 13px 6px 6px", gap: "7px" },
                }[size];
                return (
                  <div
                    key={label}
                    style={{
                      position: "absolute",
                      top,
                      left,
                      background: "var(--pc-card-bg)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid var(--pc-glass-border-accent)",
                      borderRadius: "100px",
                      padding: s.pad,
                      display: "flex",
                      alignItems: "center",
                      gap: s.gap,
                      animation: `popOut 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay} both, neonPulse 6s ease-in-out ${neonDelay} infinite`,
                      whiteSpace: "nowrap",
                      zIndex: 20,
                    }}
                  >
                    <span
                      style={{
                        width: s.iconBox,
                        height: s.iconBox,
                        borderRadius: "50%",
                        background: "var(--pc-accent-glow)",
                        border: "1px solid var(--pc-glass-border-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--pc-accent-bright)",
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        fontSize: s.text,
                        fontWeight: 700,
                        color: "var(--pc-text)",
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 140px 0 100px !important;
            min-height: auto !important;
          }
          .hero-left {
            padding: 0 24px !important;
            text-align: center;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
