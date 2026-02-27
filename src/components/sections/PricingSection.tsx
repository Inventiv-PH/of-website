import Link from "next/link";

export const pricingPlans = [
  {
    popular: true,
    type: "SUBSCRIPTION",
    name: "Monthly Access",
    price: "$149",
    period: "/ month",
    features: [
      "Full subscriber bot access",
      "Engagement automation included",
      "Unlimited campaigns",
      "Priority account pool",
      "Delivery speed controls",
      "Cancel anytime",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/signup",
    ctaFill: true,
  },
  {
    popular: false,
    type: "ONE-TIME",
    name: "Subscriber Pack",
    price: "$79",
    period: "per pack",
    features: [
      "500 automated subscriber accounts",
      "Paced delivery over 3–7 days",
      "Account diversity included",
      "No subscription required",
      "Purchase multiple packs",
    ],
    ctaLabel: "Buy Pack",
    ctaHref: "/signup",
    ctaFill: false,
  },
  {
    popular: false,
    type: "ONE-TIME",
    name: "Engagement Pack",
    price: "$49",
    period: "per pack",
    features: [
      "Likes, comments, and views",
      "Distributed over natural timeframes",
      "Tip and message simulation",
      "Works standalone or with subs",
      "No subscription required",
    ],
    ctaLabel: "Buy Pack",
    ctaHref: "/signup",
    ctaFill: false,
  },
];

export default function PricingSection({ topPadding = "120px" }: { topPadding?: string }) {
  return (
    <section id="pricing" style={{ padding: `${topPadding} 5% 120px`, color: "#fff", background: "transparent" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "rgba(176,51,71,1)", // Dark red accent
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "20px", height: "1px", background: "rgba(176,51,71,1)" }} />
            PRICING
            <div style={{ width: "20px", height: "1px", background: "rgba(176,51,71,1)" }} />
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            }}
          >
            Simple, Operator-Friendly Plans
          </h2>
        </div>

        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "56px",
            alignItems: "stretch", // Ensures cards are equal height
          }}
        >
          {pricingPlans.map((plan, i) => (
            <PriceCard key={plan.name} plan={plan} delay={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export function PriceCard({
  plan,
  delay,
}: {
  plan: (typeof pricingPlans)[0];
  delay: number;
}) {
  return (
    <div
      className={`reveal${delay > 0 ? ` delay-${delay}` : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: plan.popular ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.015)",
        border: plan.popular ? "1px solid rgba(176,51,71,0.5)" : "1px solid rgba(255,255,255,0.05)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        boxShadow: plan.popular ? "0 12px 40px rgba(176,51,71,0.08)" : "none",
        height: "100%", // Fill parent height in grid
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        if (plan.popular) {
          el.style.borderColor = "rgba(176,51,71,0.8)";
          el.style.boxShadow = "0 16px 50px rgba(176,51,71,0.15)";
        } else {
          el.style.borderColor = "rgba(255,255,255,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "none";
        if (plan.popular) {
          el.style.borderColor = "rgba(176,51,71,0.5)";
          el.style.boxShadow = "0 12px 40px rgba(176,51,71,0.08)";
        } else {
          el.style.borderColor = "rgba(255,255,255,0.05)";
        }
      }}
    >
      {plan.popular && (
        <div
          style={{
            background: "rgba(176,51,71,0.8)",
            color: "#fff",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            textAlign: "center",
            padding: "8px",
            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {'// MOST POPULAR'}
        </div>
      )}

      {/* Header section */}
      <div
        style={{
          padding: plan.popular ? "32px 32px 24px" : "40px 32px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          flexGrow: 0,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
            fontSize: "11px",
            color: plan.popular ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "16px",
          }}
        >
          {plan.type}
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 800,
            marginBottom: "20px",
            color: "#fff",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          }}
        >
          {plan.name}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span
            style={{
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fff",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              lineHeight: 1,
            }}
          >
            {plan.price}
          </span>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{plan.period}</span>
        </div>
      </div>

      {/* Features & Button section */}
      <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "40px",
            flexGrow: 1, // pushes button to bottom
          }}
        >
          {plan.features.map((f) => (
            <li
              key={f}
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "rgba(176,51,71,0.9)", fontWeight: 700, flexShrink: 0, fontSize: "12px", marginTop: "2px" }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={plan.ctaHref}
          style={{
            display: "block",
            width: "100%",
            padding: "16px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            transition: "all 0.2s ease",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            background: plan.ctaFill ? "rgba(176,51,71,0.8)" : "rgba(255,255,255,0.02)",
            color: plan.ctaFill ? "#fff" : "rgba(255,255,255,0.8)",
            border: plan.ctaFill ? "1px solid rgba(176,51,71,1)" : "1px solid rgba(255,255,255,0.04)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            if (plan.ctaFill) {
              el.style.background = "rgba(200,60,80,0.9)";
            } else {
              el.style.background = "rgba(255,255,255,0.05)";
              el.style.borderColor = "rgba(255,255,255,0.1)";
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            if (plan.ctaFill) {
              el.style.background = "rgba(176,51,71,0.8)";
            } else {
              el.style.background = "rgba(255,255,255,0.02)";
              el.style.borderColor = "rgba(255,255,255,0.04)";
            }
          }}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
