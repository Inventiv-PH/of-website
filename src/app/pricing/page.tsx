"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/PricingSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need an account to download?",
    a: "No. The platform is free to download. You only need to create an account and activate a plan to use the features.",
  },
  {
    q: "What's the difference between the monthly plan and one-time packs?",
    a: "The monthly plan gives you ongoing access to all features: subscriber bots, engagement automation, and unlimited campaigns. One-time packs are single purchases for a fixed number of subscribers or engagement actions, with no subscription commitment.",
  },
  {
    q: "Can I cancel the monthly plan anytime?",
    a: "Yes. There are no long-term contracts. Cancel anytime from your account dashboard. Your access continues until the end of the billing period.",
  },
  {
    q: "Can I buy multiple one-time packs?",
    a: "Yes. You can purchase multiple subscriber packs or engagement packs as needed. Each pack is processed and delivered independently.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major credit and debit cards via Stripe. Cryptocurrency options may be available. Contact support for details.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer refunds on unused packs within 48 hours of purchase. Monthly subscriptions are non-refundable after activation. See our full refund policy for details.",
  },
];

export default function PricingPage() {
  useReveal();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <PricingSection topPadding="40px" />

        {/* FAQ */}
        <section style={{ padding: "80px 5%", borderTop: "1px solid var(--pc-glass-border)" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
              <div className="section-label-el" style={{ justifyContent: "center" }}>
                FAQ
              </div>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                Common Questions
              </h2>
            </div>

            <div className="reveal delay-1">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    style={{
                      borderBottom: "1px solid var(--pc-glass-border)",
                    }}
                  >
                    <AccordionTrigger
                      style={{
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "var(--pc-text)",
                        textAlign: "left",
                        padding: "20px 0",
                      }}
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent
                      style={{
                        fontSize: "13px",
                        color: "var(--pc-text2)",
                        lineHeight: 1.7,
                        paddingBottom: "20px",
                      }}
                    >
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
