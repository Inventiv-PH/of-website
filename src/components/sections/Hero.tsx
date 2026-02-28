import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Glow blobs */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(139,46,60,0.12) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "20%",
          right: "-5%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(139,46,60,0.08) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      <section
        className="hero-section"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* ── Left column: text ── */}
        <div
          className="animate-fade-up hero-left"
          style={{ padding: "clamp(20px, 5vw, 40px) clamp(20px, 4vw, 40px) clamp(20px, 5vw, 40px) max(24px, 7vw)" }}
        >
          <h1
            style={{
              fontSize: "clamp(26px, 4.2vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "var(--pc-text)", display: "block" }}>
              Complete Promo Deals Faster
            </span>
            <span
              style={{
                display: "block",
                background:
                  "linear-gradient(90deg, #C96070 0%, #b03347 35%, rgba(232,232,232,0.3) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automated Subscriber Accounts
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 1.4vw, 17px)",
              color: "var(--pc-text2)",
              maxWidth: "460px",
              fontWeight: 400,
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Automated accounts that subscribe, tip, message, and engage to help you
            hit required numbers faster without sacrificing real fans.
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/download" className="btn-neon">
              ↓ Download Platform
            </Link>
            <Link href="/pricing" className="btn-ghost">
              View Pricing →
            </Link>
          </div>
          <p
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
            overflow: "hidden",
          }}
        >
          <div className="hero-img-wrapper" style={{ width: "100%", position: "relative", flexShrink: 0 }}>
            <Image
              src="/mockup-desktop.png"
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
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
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
            height: 280px !important;
            justify-content: center !important;
          }
          .hero-img-wrapper {
            width: 90% !important;
            right: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .hero-right {
            height: 200px !important;
          }
          .hero-img-wrapper {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
