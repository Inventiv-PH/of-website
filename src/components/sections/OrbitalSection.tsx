"use client";

const layers = [
  {
    tag: "Behavior Layer",
    title: "Accounts that act like users",
    text: "Controlled subscription pacing, natural interaction cadence, likes and comments distributed organically over time.",
  },
  {
    tag: "Account Structure",
    title: "Depth and diversity at scale",
    text: "Mix of aged and fresh accounts, profile diversity, geographic spread, and a 24/7 creation pipeline keeping the pool full.",
  },
  {
    tag: "Deployment Control",
    title: "You set the pace",
    text: "Adjust delivery speed to match any agreement. Full pacing control from a single dashboard, designed to minimize exposure.",
  },
];

const stats = [
  { val: "3", suffix: "+", lbl: "Account tiers" },
  { val: "800", suffix: "+", lbl: "Account pool" },
  { val: "24", suffix: "/7", lbl: "Pipeline active" },
];

const svgs = [
  <svg key="sub" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>,
  <svg key="dm" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  <svg key="lke" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  <svg key="tip" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="geo" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  <svg key="que" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
];

export default function OrbitalSection() {
  return (
    <section
      style={{
        padding: "clamp(40px, 10vh, 100px) 5%",
        background: "var(--pc-glass)",
        borderTop: "1px solid var(--pc-glass-border)",
        borderBottom: "1px solid var(--pc-glass-border)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div
          className="orbital-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 6fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* ── Left: Redesigned text side ── */}
          <div className="reveal">
            <div className="section-label-el">Quality &amp; Stability</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "14px",
              }}
            >
              Three Layers of<br />Infrastructure That Holds
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--pc-text2)",
                lineHeight: 1.6,
                maxWidth: "380px",
                marginBottom: "20px",
              }}
            >
              Anyone can send bots. We build accounts that actually behave like users — three coordinated layers working in tandem.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 0,
                marginBottom: "20px",
                padding: "12px 0",
                borderTop: "1px solid var(--pc-glass-border)",
                borderBottom: "1px solid var(--pc-glass-border)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.lbl}
                  style={{
                    padding: i === 0 ? "0 28px 0 0" : "0 28px",
                    borderRight: i < stats.length - 1 ? "1px solid var(--pc-glass-border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                    }}
                  >
                    <span style={{ color: "var(--pc-accent-bright)" }}>{s.val}</span>
                    {s.suffix}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "var(--pc-text3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "6px",
                    }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline-style layer breakdown */}
            <div style={{ position: "relative" }}>
              {/* Vertical connector line */}
              <div
                style={{
                  position: "absolute",
                  left: "27.5px", // Center of the 55px circle
                  top: "12px",
                  bottom: "12px",
                  width: "1px",
                  background: "linear-gradient(to bottom, rgba(139,46,60,0.5) 0%, rgba(139,46,60,0.08) 100%)",
                  pointerEvents: "none",
                }}
              />

              {layers.map((l, i) => (
                <div
                  key={l.tag}
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: i < layers.length - 1 ? "20px" : 0,
                    alignItems: "flex-start",
                  }}
                >
                  {/* Numbered dot */}
                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle at top left, rgba(200,60,80,0.9), rgba(139,46,60,0.8))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 2,
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#fff",
                      boxShadow: "0 0 0 4px var(--pc-bg), 0 0 0 6px rgba(139,46,60,0.5), 0 0 30px var(--pc-accent-glow-strong), inset 0 2px 4px rgba(255,255,255,0.4)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: "8px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "var(--pc-accent-bright)",
                        marginBottom: "6px",
                      }}
                    >
                      {l.tag}
                    </div>
                    <div
                      style={{
                        color: "var(--pc-text)",
                        fontWeight: 700,
                        fontSize: "15px",
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        marginBottom: "6px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {l.title}
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--pc-text2)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {l.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Orbital ring system ── */}
          <div className="reveal delay-2">
            <div
              style={{
                position: "relative",
                width: "440px",
                height: "440px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              className="orbital-system"
            >
              {/* Pool size pill */}
              <div
                className="reveal delay-3"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  background: "var(--pc-card-bg)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--pc-glass-border-accent)",
                  borderRadius: "100px",
                  padding: "8px 24px 8px 8px",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "var(--pc-text)",
                  letterSpacing: "0.01em",
                  zIndex: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 8px 32px var(--pc-shadow-medium)",
                }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1px solid rgba(139,46,60,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(139,46,60,0.9)",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                800+ accounts
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  maxWidth: "380px",
                }}
              >
                <svg
                  viewBox="0 0 300 300"
                  style={{ width: "100%", height: "100%", overflow: "visible" }}
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="pglow2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(222,80,112,0.18)" />
                      <stop offset="100%" stopColor="rgba(139,46,60,0)" />
                    </radialGradient>
                    {/* Shadow for segments */}
                    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.4" floodColor="#000" />
                    </filter>
                  </defs>

                  {/* Ambient glow */}
                  <circle cx="150" cy="150" r="130" fill="url(#pglow2)" />

                  {/* ───────────────────────────────────────────────────────── */}
                  {/* Layer 1: Inner Ribbon (3 Segments)                        */}
                  {/* ───────────────────────────────────────────────────────── */}
                  {(() => {
                    const r = 50; // Inner Radius
                    const strokeWidth = 32;
                    const c = 2 * Math.PI * r;
                    const segments = [
                      { color: "#E8607A", pct: 0.35, gap: 4 },
                      { color: "#8B2E3C", pct: 0.40, gap: 4 },
                      { color: "#4A1825", pct: 0.25, gap: 4 },
                    ];

                    let currentOffset = 0;
                    return segments.map((seg, i) => {
                      const dashLength = (c * seg.pct) - seg.gap;
                      const element = (
                        <circle
                          key={`l1-${i}`}
                          cx="150" cy="150" r={r}
                          fill="none"
                          stroke={seg.color}
                          strokeWidth={strokeWidth}
                          strokeDasharray={`${dashLength} ${c}`}
                          strokeDashoffset={-currentOffset}
                          transform="rotate(-90 150 150)"
                          filter="url(#drop-shadow)"
                        />
                      );
                      currentOffset += c * seg.pct;
                      return element;
                    });
                  })()}

                  {/* ───────────────────────────────────────────────────────── */}
                  {/* Layer 2: Middle Ribbon (6 Segments, houses SVGs)          */}
                  {/* ───────────────────────────────────────────────────────── */}
                  {(() => {
                    const r = 90; // Middle radius
                    const strokeWidth = 40;
                    const c = 2 * Math.PI * r;
                    const colors = [
                      "#F4B2A0", // Peach
                      "#E8908A", // Coral
                      "#D16A70", // Pink/Red
                      "#AE475C", // Deep Crimson
                      "#752A3F", // Dark Plum
                      "#421C2A", // Very Dark Purple
                    ];

                    let currentOffset = 0;
                    return colors.map((color, i) => {
                      // We'll evenly divide into 6 segments
                      const pct = 1 / 6;
                      const gap = 3;
                      const dashLength = (c * pct) - gap;

                      const element = (
                        <g key={`l2-${i}`}>
                          <circle
                            cx="150" cy="150" r={r}
                            fill="none"
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${dashLength} ${c}`}
                            strokeDashoffset={-currentOffset}
                            transform="rotate(-90 150 150)"
                            filter="url(#drop-shadow)"
                          />
                        </g>
                      );
                      currentOffset += c * pct;
                      return element;
                    });
                  })()}

                  {/* ───────────────────────────────────────────────────────── */}
                  {/* Layer 3: Outer Ribbon (8 Segments alternating/styled)     */}
                  {/* ───────────────────────────────────────────────────────── */}
                  {(() => {
                    const r = 130; // Outer radius
                    const strokeWidth = 32;
                    const c = 2 * Math.PI * r;
                    // We'll do 8 distinct shades or a gradient of opacities
                    const opacities = [0.8, 0.6, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05];

                    let currentOffset = 0;
                    return opacities.map((op, i) => {
                      const pct = 1 / 8;
                      const gap = 4;
                      const dashLength = (c * pct) - gap;

                      const element = (
                        <circle
                          key={`l3-seg-${i}`}
                          cx="150" cy="150" r={r}
                          fill="none"
                          stroke={`rgba(139,46,60,${op})`}
                          strokeWidth={strokeWidth}
                          strokeDasharray={`${dashLength} ${c}`}
                          strokeDashoffset={-currentOffset}
                          transform="rotate(-90 150 150)"
                          filter="url(#drop-shadow)"
                        />
                      );
                      currentOffset += c * pct;
                      return element;
                    });
                  })()}

                  {/* Center Hub */}
                  <circle cx="150" cy="150" r="28" fill="var(--pc-svg-hub)" filter="url(#drop-shadow)" />
                  <circle cx="150" cy="150" r="20" fill="rgba(139,46,60,0.15)" stroke="rgba(201,96,112,0.4)" strokeWidth="1" strokeDasharray="4 2" />
                  <circle cx="150" cy="150" r="10" fill="#C96070" filter="url(#drop-shadow)" />

                  {/* SVGs on the Middle Segments (Layer 2) */}
                  {svgs.map((svg, i) => {
                    // Start from top (-90deg), spread evenly in 6ths.
                    // The center of each 1/6th slice is (1/6)/2 = 1/12th past the start of the slice.
                    const sliceAngleOffset = (360 / 6) / 2; // 30 degrees
                    const angleDeg = -90 + (i * 60) + sliceAngleOffset;
                    const angleRad = (angleDeg * Math.PI) / 180;

                    const rInner = 90; // Middle of Layer 2
                    const x1 = Math.round((150 + rInner * Math.cos(angleRad)) * 100) / 100;
                    const y1 = Math.round((150 + rInner * Math.sin(angleRad)) * 100) / 100;

                    // We wrap the SVG in a small background pill to make it stand out on the colorful ribbons.
                    // The background color matches dark mode aesthetics to pop against the colored slices.
                    return (
                      <g key={`svg-icon-${i}`} transform={`translate(${x1}, ${y1})`}>
                        <circle cx="0" cy="0" r="14" fill="var(--pc-svg-hub)" filter="url(#drop-shadow)" />
                        <circle cx="0" cy="0" r="14" fill="var(--pc-svg-icon-bg)" stroke="var(--pc-svg-icon-border)" strokeWidth="1" />
                        <g transform="translate(-7, -7)" style={{ color: "var(--pc-text)" }}>
                          {svg}
                        </g>
                      </g>
                    );
                  })}
                </svg>

                {/* Absolutely positioned notifications linked to SVGs */}
                {(() => {
                  // Index 1 = DM, Index 3 = Tip
                  // Recalculating their exact px positions over the SVG
                  const renderNotification = (i: number, content: React.ReactNode, offsetX: number, offsetY: number) => {
                    const sliceAngleOffset = (360 / 6) / 2;
                    const angleDeg = -90 + (i * 60) + sliceAngleOffset;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const rInner = 90;
                    // Converting SVG 300x300 viewBox coords (150 center) to % for absolute CSS positioning
                    const xPct = Math.round(((150 + rInner * Math.cos(angleRad)) / 300) * 10000) / 100;
                    const yPct = Math.round(((150 + rInner * Math.sin(angleRad)) / 300) * 10000) / 100;

                    return (
                      <div
                        key={`notif-${i}`}
                        className="reveal delay-4"
                        style={{
                          position: "absolute",
                          left: `calc(${xPct}% + ${offsetX}px)`,
                          top: `calc(${yPct}% + ${offsetY}px)`,
                          zIndex: 30,
                        }}
                      >
                        {content}
                      </div>
                    );
                  };

                  return (
                    <>
                      {/* DM (Index 1) - macOS style notification */}
                      {renderNotification(1, (
                        <div
                          style={{
                            background: "var(--pc-notif-bg)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid var(--pc-notif-border)",
                            borderRadius: "16px",
                            padding: "10px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            boxShadow: "0 10px 40px var(--pc-shadow-heavy), inset 0 1px 1px var(--pc-card-inset)",
                            color: "var(--pc-notif-text)",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                            minWidth: "220px",
                            maxWidth: "260px",
                          }}
                        >
                          <div style={{ position: "relative" }}>
                            {/* Profile Mock */}
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--pc-notif-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--pc-notif-text4)" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                              </svg>
                            </div>
                            {/* App Icon Mock (White badge) */}
                            <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "14px", height: "14px", background: "#ffffff", borderRadius: "4px", border: "2px solid var(--pc-notif-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="6" height="6" viewBox="0 0 24 24" fill="#635BFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                              </svg>
                            </div>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0px" }}>
                              <div style={{ fontWeight: 600, fontSize: "12px", color: "var(--pc-notif-text)", letterSpacing: "0.01em" }}>Alex Smith</div>
                              <div style={{ fontSize: "10px", color: "var(--pc-notif-text3)", fontWeight: 400 }}>2m ago</div>
                            </div>
                            <div style={{ fontSize: "11px", color: "var(--pc-notif-text2)", lineHeight: 1.35 }}>
                              Reacted ❤️ to &quot;Hi there! wanna chat?&quot;
                            </div>
                          </div>
                        </div>
                      ), -60, -90)}

                      {/* Tip (Index 3) - Tip creator pill */}
                      {renderNotification(3, (
                        <div
                          style={{
                            background: "var(--pc-card-bg)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid var(--pc-glass-border-accent)",
                            borderRadius: "100px",
                            padding: "6px 14px 6px 6px",
                            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "var(--pc-text)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            boxShadow: "none",
                            whiteSpace: "nowrap"
                          }}
                        >
                          <span
                            style={{
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              background: "rgba(139,46,60,0.2)",
                              border: "1px solid rgba(201,96,112,0.6)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#F07090",
                              flexShrink: 0,
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="1" x2="12" y2="23" />
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          </span>
                          Tip Creator $20
                        </div>
                      ), -160, -10)}

                      {/* Analytics (Index 5) - Frosted glass bar chart */}
                      {renderNotification(5, (
                        <div
                          style={{
                            background: "var(--pc-notif-bg)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                            border: "1px solid var(--pc-notif-border)",
                            borderTop: "1px solid var(--pc-notif-border)",
                            borderRadius: "16px",
                            padding: "16px",
                            boxShadow: "0 10px 40px var(--pc-shadow-heavy), inset 0 1px 0 var(--pc-card-inset)",
                            color: "var(--pc-notif-text)",
                            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                            minWidth: "150px",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                            <div style={{ fontWeight: 600, fontSize: "11px", color: "var(--pc-notif-text4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Activity</div>
                            <div style={{ color: "#4ade80", fontSize: "12px", fontWeight: 700 }}>+42%</div>
                          </div>
                          {/* Mini Bar Chart Row */}
                          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "6px", height: "44px", opacity: 0.9 }}>
                            {[40, 65, 80, 100].map((h, idx) => (
                              <div key={idx} style={{
                                width: "12px",
                                height: `${h}%`,
                                background: idx === 3 ? "linear-gradient(180deg, #F07090 0%, #C96070 100%)" : "var(--pc-notif-text3)",
                                borderRadius: "3px"
                              }} />
                            ))}
                          </div>
                        </div>
                      ), -170, -110)}
                    </>
                  );
                })()}

                {/* Outer orbital rings (very subtle decorative rings) */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", pointerEvents: "none" }}>
                  {/* Subtle pulsing large ring */}
                  <div className="animate-glow-pulse" style={{ position: "absolute", width: "105%", height: "105%", borderRadius: "50%", border: "1px solid rgba(139,46,60,0.08)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                  {/* Rotating dashed ring */}
                  <div className="animate-orbit-cw-slower" style={{ position: "absolute", width: "115%", height: "115%", borderRadius: "50%", border: "1px dashed rgba(200,60,80,0.15)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .orbital-grid {
            grid-template-columns: 1fr !important;
          }
          .orbital-system {
            transform: scale(0.7);
            transform-origin: top center;
            margin-bottom: -156px;
          }
        }
        @media (max-width: 600px) {
          .orbital-system {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}


