import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="download" style={{ padding: "80px 5%" }}>
      <div
        className="reveal cta-box"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "var(--pc-glass)",
          border: "1px solid var(--pc-glass-border)",
          borderRadius: "28px",
          padding: "80px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(139,46,60,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label-el" style={{ justifyContent: "center", marginBottom: "16px" }}>
            Get Started
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              marginBottom: "32px",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Finish Agreements Faster.
            <br />
            Keep Your Real Fans.
          </h2>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/download"
              className="btn-neon"
              style={{ fontSize: "16px", padding: "18px 44px" }}
            >
              ↓ Download Now
            </Link>
          </div>

          <p
            style={{
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--pc-text3)",
              letterSpacing: "0.1em",
              marginTop: "14px",
            }}
          >
            {'// windows & mac supported · free to download · payment activates features'}
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-box {
            padding: 48px 28px !important;
            border-radius: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .cta-box {
            padding: 36px 20px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
