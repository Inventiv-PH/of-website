
export default function SolutionBento() {
  return (
    <section id="solution" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        {/* Centered heading */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label-el">Promo Strategies</div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: "16px",
              color: "var(--pc-text)",
            }}
          >
            Built for Operators<br />Who Actually Scale
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "var(--pc-text2)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            You&apos;re running promos — but keep hitting the same walls every time.
          </p>
        </div>

        {/* 4-card staggered row */}
        <div className="strat-row">
          <StratCard
            size="large"
            visual="pie"
            accent
            delay=""
            title="Hard to "
            highlight="explain your results"
            desc={'Clients ask "Why these keys?" "What drove growth?" "Why no orders?" — and you scramble for answers.'}
          />
          <StratCard
            size="small"
            visual="pulse"
            delay="delay-1"
            title="No "
            highlight="confidence"
            after=" in your setup"
            desc="You launch campaigns but can't tell if they're dialed in correctly or just burning spend."
          />
          <StratCard
            size="small"
            visual="loop"
            delay="delay-2"
            title="The "
            highlight="same approach"
            after=", every time"
            desc="Repeating identical setups without strategy, numbers, or structure to back it up."
          />
          <StratCard
            size="large"
            visual="ceiling"
            accent
            delay="delay-3"
            title="Hitting a "
            highlight="ceiling"
            desc="You want more volume but fear things breaking when you scale beyond what you can handle alone."
          />
        </div>
      </div>

      <style jsx>{`
        .strat-row {
          display: flex;
          gap: 14px;
          align-items: flex-end;
        }
        @media (max-width: 860px) {
          .strat-row {
            flex-wrap: wrap;
            align-items: stretch;
          }
        }
        @media (max-width: 520px) {
          .strat-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Card Component ─── */

function StratCard({
  size,
  visual,
  accent,
  delay,
  title,
  highlight,
  after,
  desc,
}: {
  size: "large" | "small";
  visual: "pie" | "pulse" | "loop" | "ceiling";
  accent?: boolean;
  delay: string;
  title: string;
  highlight: string;
  after?: string;
  desc: string;
}) {
  const isLarge = size === "large";

  return (
    <div className={`sc reveal ${delay} ${accent ? "sc--accent" : "sc--muted"} ${isLarge ? "sc--large" : "sc--small"}`}>
      {/* Corner dot indicator */}
      <div className="sc-dot" />

      {/* Visual area */}
      <div className="sc-visual">
        {visual === "pie" && <PieVisual />}
        {visual === "pulse" && <PulseVisual />}
        {visual === "loop" && <LoopVisual />}
        {visual === "ceiling" && <CeilingVisual />}
      </div>

      {/* Text area */}
      <div className="sc-text">
        <h3>
          {title}
          <span>{highlight}</span>
          {after}
        </h3>
        <p>{desc}</p>
      </div>

      <style jsx>{`
        .sc {
          position: relative;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
        }
        .sc--small {
          flex: 0.78;
          height: 270px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }
        .sc--large {
          flex: 1.45;
          height: 390px;
          background: linear-gradient(
            158deg,
            rgba(139, 46, 60, 0.18) 0%,
            rgba(139, 46, 60, 0.06) 50%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(139, 46, 60, 0.3);
          box-shadow: 0 0 80px rgba(139, 46, 60, 0.08),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        .sc:hover {
          transform: translateY(-4px);
        }
        .sc--small:hover {
          border-color: rgba(255, 255, 255, 0.13);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }
        .sc--large:hover {
          border-color: rgba(139, 46, 60, 0.48);
          box-shadow: 0 16px 60px rgba(139, 46, 60, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }
        .sc-dot {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          z-index: 2;
        }
        .sc-visual {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 12px 8px;
          overflow: hidden;
        }
        .sc-text {
          padding: 16px 20px 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }
        .sc--large .sc-text {
          padding: 20px 26px 26px;
        }
        h3 {
          font-size: 13.5px;
          font-weight: 700;
          line-height: 1.4;
          color: var(--pc-text);
          margin: 0 0 7px;
          font-family: var(--font-manrope-var), Manrope, sans-serif;
        }
        .sc--large h3 {
          font-size: 15px;
        }
        h3 span {
          color: #c96070;
        }
        p {
          font-size: 12.5px;
          color: var(--pc-text2);
          line-height: 1.62;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

/* ─── SVG Visuals ─── */

function PieVisual() {
  // Donut chart: C = 2π×62 ≈ 390
  // Segments with ~5-unit gaps: S1=158, S2=105, S3=70
  return (
    <svg
      viewBox="0 0 200 200"
      style={{ width: "100%", height: "100%", maxHeight: "230px" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(222,80,112,0.18)" />
          <stop offset="100%" stopColor="rgba(139,46,60,0)" />
        </radialGradient>
        <linearGradient id="pseg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F07090" />
          <stop offset="100%" stopColor="#C96070" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="100" cy="100" r="90" fill="url(#pglow)" />

      {/* Track */}
      <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="26" />

      {/* Segment 1 — bright crimson-pink, 40% */}
      <circle
        cx="100" cy="100" r="62" fill="none"
        stroke="url(#pseg1)" strokeWidth="26"
        strokeDasharray="158 232" strokeDashoffset="0"
        transform="rotate(-90 100 100)"
      />

      {/* Segment 2 — medium crimson, 27% */}
      <circle
        cx="100" cy="100" r="62" fill="none"
        stroke="#8B2E3C" strokeWidth="26"
        strokeDasharray="105 285" strokeDashoffset="-163"
        transform="rotate(-90 100 100)"
      />

      {/* Segment 3 — dark crimson, 18% */}
      <circle
        cx="100" cy="100" r="62" fill="none"
        stroke="#4A1825" strokeWidth="26"
        strokeDasharray="70 320" strokeDashoffset="-273"
        transform="rotate(-90 100 100)"
      />

      {/* Donut hole */}
      <circle cx="100" cy="100" r="46" fill="#0d0c0e" />

      {/* Center decoration */}
      <circle cx="100" cy="100" r="14" fill="rgba(139,46,60,0.15)" stroke="rgba(201,96,112,0.28)" strokeWidth="1" />
      <circle cx="100" cy="100" r="4" fill="#C96070" />

      {/* Annotation dot — upper right (on segment 1, ~30°) */}
      {/* outer edge at 30°: x≈138, y≈35 */}
      <line x1="136" y1="37" x2="155" y2="22" stroke="#E8607A" strokeWidth="1" strokeOpacity="0.45" />
      <circle cx="158" cy="20" r="5.5" fill="rgba(240,112,144,0.15)" stroke="#E8607A" strokeWidth="1.5" />
      <circle cx="158" cy="20" r="2.5" fill="#E8607A" />

      {/* Annotation dot — lower left (segment 2, ~210°) */}
      {/* outer edge at 210°: x≈35, y≈153 */}
      <line x1="53" y1="149" x2="38" y2="163" stroke="#8B2E3C" strokeWidth="1" strokeOpacity="0.45" />
      <circle cx="36" cy="165" r="4.5" fill="rgba(139,46,60,0.25)" stroke="rgba(139,46,60,0.5)" strokeWidth="1" />

      {/* Ambient dot far right */}
      <circle cx="178" cy="104" r="2.5" fill="rgba(201,96,112,0.3)" />
    </svg>
  );
}

function PulseVisual() {
  return (
    <svg
      viewBox="0 0 200 160"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* Expanding rings */}
      {([68, 52, 38, 24] as number[]).map((r, i) => (
        <circle
          key={i} cx="100" cy="80" r={r}
          fill="none" stroke="#8B2E3C" strokeWidth="1"
          strokeOpacity={0.06 + i * 0.08}
        />
      ))}

      {/* Inner glowing ring */}
      <circle cx="100" cy="80" r="18"
        fill="rgba(139,46,60,0.08)"
        stroke="#C96070" strokeWidth="1.5" strokeOpacity="0.42"
      />

      {/* Center */}
      <circle cx="100" cy="80" r="7" fill="rgba(139,46,60,0.4)" stroke="#8B2E3C" strokeWidth="1" />
      <circle cx="100" cy="80" r="3" fill="#C96070" />

      {/* Cardinal dots on outer ring */}
      <circle cx="100" cy="12" r="2.5" fill="rgba(201,96,112,0.28)" />
      <circle cx="166" cy="57" r="2"   fill="rgba(201,96,112,0.22)" />
      <circle cx="166" cy="103" r="2"  fill="rgba(201,96,112,0.18)" />
      <circle cx="100" cy="148" r="2"  fill="rgba(201,96,112,0.18)" />
    </svg>
  );
}

function LoopVisual() {
  const rows = [18, 52, 86] as number[];
  const labels = ["CAMPAIGN_A", "CAMPAIGN_A", "CAMPAIGN_A"];

  return (
    <svg
      viewBox="0 0 200 155"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {rows.map((y, i) => (
        <g key={i} opacity={1 - i * 0.2}>
          <rect x="18" y={y} width="90" height="20" rx="5" fill="rgba(201,96,112,0.42)" />
          <rect x="116" y={y} width="44" height="20" rx="5" fill="rgba(139,46,60,0.3)" />
          <rect x="168" y={y} width="16" height="20" rx="5" fill="rgba(61,21,32,0.65)" />
          <text
            x="63" y={y + 14}
            fill="rgba(255,255,255,0.18)"
            fontSize="7.5"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {labels[i]}
          </text>
        </g>
      ))}

      {/* Repeat indicator */}
      <text
        x="100" y="136"
        fill="rgba(201,96,112,0.38)"
        fontSize="11"
        fontFamily="monospace"
        textAnchor="middle"
        letterSpacing="1"
      >
        ↺ repeated
      </text>
    </svg>
  );
}

function CeilingVisual() {
  const pts: [number, number][] = [[10, 142], [50, 118], [95, 88], [140, 58], [182, 48], [215, 48]];
  const linePath = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const areaPath =
    pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ") +
    " L 215 175 L 10 175 Z";

  return (
    <svg
      viewBox="0 0 220 175"
      style={{ width: "100%", height: "100%", maxHeight: "230px" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="carea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#8B2E3C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B2E3C" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {([42, 82, 122] as number[]).map(y => (
        <line key={y} x1="0" y1={y} x2="220" y2={y}
          stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#carea)" />

      {/* Chart line */}
      <path d={linePath}
        stroke="#C96070" strokeWidth="2.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Ceiling limit line */}
      <line x1="0" y1="36" x2="220" y2="36"
        stroke="rgba(201,96,112,0.55)" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* LIMIT badge */}
      <rect x="144" y="24" width="38" height="14" rx="3" fill="rgba(139,46,60,0.32)" />
      <text x="163" y="34.5"
        fill="rgba(230,100,120,0.88)"
        fontSize="7.5" fontFamily="monospace"
        textAnchor="middle" letterSpacing="0.6"
      >
        LIMIT
      </text>

      {/* Data point dots */}
      {pts.slice(0, -1).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4"
          fill="#C96070"
          stroke="rgba(0,0,0,0.4)" strokeWidth="1.5"
        />
      ))}

      {/* Blocked upward arrow */}
      <line x1="200" y1="48" x2="200" y2="30"
        stroke="rgba(201,96,112,0.4)" strokeWidth="1.5" strokeDasharray="2.5 2.5" />
      <path d="M 194 36 L 200 27 L 206 36"
        stroke="rgba(201,96,112,0.4)" strokeWidth="1.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
