import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const pricingPlans = [
  {
    popular: false,
    type: "ONE-TIME",
    name: "Engagement Pack",
    price: "$49",
    period: "per pack",
    description: "For targeted boosts",
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
  {
    popular: false,
    type: "ONE-TIME",
    name: "Subscriber Pack",
    price: "$79",
    period: "per pack",
    description: "For rapid scaling",
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
    popular: true,
    type: "SUBSCRIPTION",
    name: "Monthly Access",
    price: "$149",
    period: "/ month",
    description: "For consistent growth",
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
];

export default function PricingSection({ topPadding = "100px" }: { topPadding?: string }) {
  const container = useRef<HTMLElement>(null);

  return (
    <section
      id="pricing"
      ref={container}
      style={{
        padding: `${topPadding} 5%`,
        color: "var(--pc-text)",
        background: "transparent",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        <div className="reveal" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "rgba(176,51,71,1)",
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
              marginBottom: "16px"
            }}
          >
            Try It Out First, Then Choose a Strategy.
          </h2>
          <p style={{ color: "var(--pc-text2)", fontSize: "15px", marginBottom: "48px" }}>
            Simple plans, simple prices. Only pay for what you really need. Change or cancel your plan at anytime.
          </p>
        </div>

        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {pricingPlans.map((plan) => (
            <PriceCard key={plan.name} plan={plan} />
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

const CubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const CheckIcon = () => (
  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "var(--pc-check-bg)", border: "1px solid var(--pc-check-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--pc-check-stroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export function PriceCard({
  plan,
}: {
  plan: (typeof pricingPlans)[0];
}) {
  return (
    <div
      className="price-card-gsap"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: plan.popular ? "var(--pc-card-bg-popular)" : "var(--pc-card-bg-alt)",
        border: plan.popular ? "1px solid rgba(176,51,71, 0.3)" : "1px solid var(--pc-card-border)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        boxShadow: plan.popular ? "0 20px 40px var(--pc-shadow-medium), inset 0 1px 1px var(--pc-card-inset)" : "0 8px 32px var(--pc-shadow-light)",
        height: "100%",
        padding: "32px 24px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1.03)";
        if (plan.popular) {
          el.style.borderColor = "rgba(176,51,71, 0.6)";
          el.style.boxShadow = "0 24px 50px rgba(176,51,71, 0.15), inset 0 1px 1px rgba(255,255,255,0.1)";
        } else {
          el.style.borderColor = "var(--pc-glass-border-accent)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1)";
        if (plan.popular) {
          el.style.borderColor = "rgba(176,51,71, 0.3)";
          el.style.boxShadow = `0 20px 40px var(--pc-shadow-medium), inset 0 1px 1px var(--pc-card-inset)`;
        } else {
          el.style.borderColor = "var(--pc-card-border)";
        }
      }}
    >
      {plan.popular && (
        <div style={{ position: "absolute", top: 0, right: 0, width: "var(--pc-popular-glow-size)", height: "var(--pc-popular-glow-size)", background: "var(--pc-popular-glow)", pointerEvents: "none", filter: "var(--pc-popular-glow-blur)" }} />
      )}

      {/* Icon */}
      <div style={{ color: "var(--pc-feature-text)", marginBottom: "32px" }}>
        <CubeIcon />
      </div>

      {/* Header section */}
      <div style={{ marginBottom: "24px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "var(--pc-text3)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "10px",
          }}
        >
          {plan.type}
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 500,
            marginBottom: "12px",
            color: "var(--pc-text)",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          }}
        >
          {plan.name}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <span
            style={{
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--pc-text)",
              fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
              lineHeight: 1,
            }}
          >
            {plan.price}
          </span>
          {plan.popular && (
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "11px", fontFamily: "var(--font-inter-var), 'Inter', sans-serif", color: "#10b981", background: "rgba(16, 185, 129, 0.12)", padding: "4px 10px", borderRadius: "100px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, width: "fit-content" }}>SAVE 15%</span>
              <span style={{ fontSize: "11px", fontFamily: "var(--font-inter-var), 'Inter', sans-serif", color: "#e11d48", background: "rgba(225, 29, 72, 0.12)", padding: "4px 10px", borderRadius: "100px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, width: "fit-content" }}>BEST VALUE</span>
            </div>
          )}
        </div>
        <div style={{ fontSize: "12px", color: "var(--pc-period-text)", fontWeight: 400 }}>
          {plan.period}
        </div>
      </div>

      {/* Description */}
      <div style={{ fontSize: "14px", color: "var(--pc-desc-text)", marginBottom: "32px", position: "relative", zIndex: 1 }}>
        {plan.description}
      </div>

      {/* Features & Button section */}
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginBottom: "40px",
            flexGrow: 1,
            padding: 0,
            margin: "0 0 32px 0",
          }}
        >
          {plan.features.map((f) => (
            <li
              key={f}
              style={{
                fontSize: "13px",
                color: "var(--pc-feature-text)",
                display: "flex",
                gap: "12px",
                alignItems: "center",
                lineHeight: 1.5,
              }}
            >
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={plan.ctaHref}
          style={{
            display: "block",
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "center",
            textDecoration: "none",
            transition: "all 0.2s ease",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            background: plan.ctaFill ? "rgba(176,51,71,1)" : "transparent",
            color: plan.ctaFill ? "#fff" : "var(--pc-text)",
            border: plan.ctaFill ? "1px solid rgba(176,51,71,1)" : "1px solid var(--pc-check-border)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = plan.ctaFill ? "rgba(200,60,80,1)" : "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = plan.ctaFill ? "rgba(176,51,71,1)" : "transparent";
          }}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
