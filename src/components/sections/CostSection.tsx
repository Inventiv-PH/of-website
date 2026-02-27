"use client";

import { useBarReveal } from "@/hooks/useReveal";

const bullets = [
  { icon: "↗", text: "You send real earners to other pages, diluting your core funnel." },
  { icon: "⟳", text: "You over-post to hit required numbers and exhaust your content." },
  { icon: "⏳", text: "You slow your own growth while trying to fulfill agreements." },
  { icon: "📋", text: "You drag agreements out longer than necessary, tying up capacity." },
];

const timeRows = [
  { lbl: "Manual", width: "85%", val: "~12h", red: true },
  { lbl: "Automated", width: "18%", val: "~2h", red: false },
];

const daysRows = [
  { lbl: "Manual", width: "90%", val: "9 days", red: true },
  { lbl: "Automated", width: "22%", val: "2 days", red: false },
];

export default function CostSection() {
  useBarReveal();

  return (
    <section
      style={{
        padding: "120px 5%",
        background: "transparent",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="cost-grid"
        >
          {/* Left */}
          <div className="reveal">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#ff5100", // Bright red/accent
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "24px",
              }}
            >
              <div style={{ width: "20px", height: "1px", background: "#ff5100" }} />
              THE PROBLEM
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                marginBottom: "40px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                color: "#fff",
              }}
            >
              Promo Strategies Cost You More Than Just Real Fans
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {bullets.map((b, i) => (
                <div
                  key={b.text}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(176,51,71,0.5)"; // Match the red glow highlight on hover
                    el.style.background = "rgba(176,51,71,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.05)";
                    el.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>{b.icon}</div>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>{b.text}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", marginTop: "32px", fontStyle: "italic" }}>
              There&apos;s a better way to complete your agreements.
            </p>
          </div>

          {/* Right — mock dashboard window */}
          <div className="reveal delay-1">
            <div
              style={{
                background: "rgba(20,20,20,0.6)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "16px",
                padding: "48px 40px",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              <ChartLabel>{'// TIME_SPENT — MANUAL VS AUTOMATED'}</ChartLabel>
              <BarGroup rows={timeRows} />

              <div
                style={{
                  marginTop: "48px",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  paddingTop: "40px",
                }}
              >
                <ChartLabel>{'// AGREEMENT_COMPLETION — DAYS'}</ChartLabel>
                <BarGroup rows={daysRows} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cost-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ChartLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
        fontSize: "13px",
        color: "rgba(255,255,255,0.45)",
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        marginBottom: "36px",
      }}
    >
      {children}
    </div>
  );
}

function BarGroup({
  rows,
}: {
  rows: { lbl: string; width: string; val: string; red: boolean }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {rows.map((r) => (
        <div key={r.lbl} style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              width: "80px",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {r.lbl}
          </span>
          <div
            style={{
              flex: 1,
              height: "8px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "100px",
              overflow: "hidden",
            }}
          >
            <div
              className="bar-fill"
              style={{
                width: r.width,
                height: "100%",
                borderRadius: "100px",
                background: r.red
                  ? "linear-gradient(90deg, rgba(176,51,71,0.6), rgba(200,60,80,0.9))"
                  : "linear-gradient(90deg, rgba(42,122,69,0.6), rgba(61,171,98,0.9))",
                boxShadow: r.red ? "0 0 12px rgba(176,51,71,0.2)" : "0 0 12px rgba(61,171,98,0.2)",
                transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              width: "60px",
            }}
          >
            {r.val}
          </span>
        </div>
      ))}
    </div>
  );
}
