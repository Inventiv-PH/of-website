"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pricingPlans } from "@/components/sections/PricingSection";

type Step = "account" | "plan" | "activate";

export default function SignupPage() {
  useReveal();
  const [step, setStep] = useState<Step>("account");

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            {/* Step indicator */}
            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "48px",
                justifyContent: "center",
              }}
            >
              {(["account", "plan", "activate"] as Step[]).map((s, i, arr) => (
                <div
                  key={s}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background:
                        step === s
                          ? "var(--pc-accent)"
                          : arr.indexOf(step) > i
                          ? "rgba(139,46,60,0.3)"
                          : "rgba(255,255,255,0.06)",
                      border: `1px solid ${step === s ? "var(--pc-accent-bright)" : "var(--pc-glass-border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: step === s ? "#fff" : "var(--pc-text3)",
                      transition: "all 0.3s",
                      boxShadow: step === s ? "0 0 16px var(--pc-accent-glow)" : "none",
                    }}
                  >
                    {arr.indexOf(step) > i ? "✓" : i + 1}
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: step === s ? 700 : 400,
                      color: step === s ? "var(--pc-text)" : "var(--pc-text3)",
                      textTransform: "capitalize",
                      fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                    }}
                  >
                    {s}
                  </span>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: "32px",
                        height: "1px",
                        background: "var(--pc-glass-border)",
                        marginLeft: "4px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step panels */}
            {step === "account" && (
              <AccountStep onNext={() => setStep("plan")} />
            )}
            {step === "plan" && (
              <PlanStep onNext={() => setStep("activate")} />
            )}
            {step === "activate" && <ActivateStep />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="reveal"
      style={{
        background: "var(--pc-glass)",
        border: "1px solid var(--pc-glass-border)",
        borderRadius: "20px",
        padding: "40px",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {children}
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: "12px",
        fontWeight: 600,
        color: "var(--pc-text2)",
        marginBottom: "8px",
        fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </label>
  );
}

function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--pc-glass-border)",
        borderRadius: "10px",
        padding: "12px 16px",
        fontSize: "14px",
        color: "var(--pc-text)",
        outline: "none",
        transition: "border-color 0.2s",
        fontFamily: "var(--font-inter-var), Inter, sans-serif",
      }}
      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--pc-glass-border-accent)")}
      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--pc-glass-border)")}
    />
  );
}

function AccountStep({ onNext }: { onNext: () => void }) {
  return (
    <FormCard>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: 800,
          marginBottom: "8px",
          fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
        }}
      >
        Create Your Account
      </h1>
      <p style={{ fontSize: "13px", color: "var(--pc-text2)", marginBottom: "32px" }}>
        Free to set up. No payment required until you activate.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <FormLabel>Email address</FormLabel>
          <FormInput type="email" placeholder="operator@example.com" />
        </div>
        <div>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" placeholder="Min. 12 characters" />
        </div>
        <div>
          <FormLabel>Confirm password</FormLabel>
          <FormInput type="password" placeholder="Repeat your password" />
        </div>

        <button
          onClick={onNext}
          style={{
            background: "var(--pc-accent)",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            padding: "14px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
            boxShadow: "0 0 24px var(--pc-accent-glow)",
            transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
            marginTop: "8px",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "var(--pc-accent-bright)";
            (e.target as HTMLElement).style.boxShadow = "0 0 40px var(--pc-accent-glow-strong)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "var(--pc-accent)";
            (e.target as HTMLElement).style.boxShadow = "0 0 24px var(--pc-accent-glow)";
          }}
        >
          Continue →
        </button>

        <p style={{ fontSize: "12px", color: "var(--pc-text3)", textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="#" style={{ color: "var(--pc-accent-bright)", textDecoration: "none" }}>
            Sign in
          </Link>
        </p>
      </div>
    </FormCard>
  );
}

function PlanStep({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<string>("Monthly Access");

  return (
    <div className="reveal">
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 800,
          marginBottom: "8px",
          fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          textAlign: "center",
        }}
      >
        Choose a Plan
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--pc-text2)",
          marginBottom: "32px",
          textAlign: "center",
        }}
      >
        Select the option that fits your workflow.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelected(plan.name)}
            style={{
              background: selected === plan.name ? "rgba(139,46,60,0.12)" : "var(--pc-glass)",
              border: `1px solid ${selected === plan.name ? "rgba(139,46,60,0.5)" : "var(--pc-glass-border)"}`,
              borderRadius: "14px",
              padding: "20px 22px",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--pc-text)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                  marginBottom: "4px",
                }}
              >
                {plan.name}
                {plan.popular && (
                  <span
                    style={{
                      marginLeft: "10px",
                      background: "var(--pc-accent)",
                      color: "#fff",
                      fontSize: "9px",
                      padding: "2px 8px",
                      borderRadius: "100px",
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    popular
                  </span>
                )}
              </div>
              <div style={{ fontSize: "12px", color: "var(--pc-text3)" }}>
                {plan.type}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--pc-text)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                {plan.price}
              </div>
              <div style={{ fontSize: "11px", color: "var(--pc-text3)" }}>{plan.period}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        style={{
          width: "100%",
          background: "var(--pc-accent)",
          color: "#fff",
          border: "none",
          borderRadius: "100px",
          padding: "14px",
          fontSize: "14px",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          boxShadow: "0 0 24px var(--pc-accent-glow)",
          transition: "all 0.25s",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.background = "var(--pc-accent-bright)";
          (e.target as HTMLElement).style.boxShadow = "0 0 40px var(--pc-accent-glow-strong)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = "var(--pc-accent)";
          (e.target as HTMLElement).style.boxShadow = "0 0 24px var(--pc-accent-glow)";
        }}
      >
        Proceed to Payment →
      </button>

      <p
        style={{
          fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
          fontSize: "10px",
          color: "var(--pc-text3)",
          textAlign: "center",
          marginTop: "16px",
          letterSpacing: "0.08em",
        }}
      >
        {'// secured by stripe · no card stored'}
      </p>
    </div>
  );
}

function ActivateStep() {
  return (
    <FormCard>
      <div style={{ textAlign: "center" }}>
        {/* Success icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(40,160,80,0.15)",
            border: "1px solid rgba(40,160,80,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            margin: "0 auto 24px",
            boxShadow: "0 0 30px rgba(40,160,80,0.15)",
          }}
        >
          ✓
        </div>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: 900,
            marginBottom: "12px",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          }}
        >
          You&apos;re Live.
        </h2>
        <p style={{ fontSize: "14px", color: "var(--pc-text2)", lineHeight: 1.7, marginBottom: "32px" }}>
          Your account is active. Download the platform and sign in to start your first campaign.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/download" className="btn-neon" style={{ justifyContent: "center" }}>
            ↓ Open Download Page
          </Link>
          <Link href="/" className="btn-ghost" style={{ justifyContent: "center" }}>
            Back to Home
          </Link>
        </div>

        <p
          style={{
            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "var(--pc-text3)",
            marginTop: "24px",
            letterSpacing: "0.08em",
          }}
        >
          {'// a receipt has been sent to your email'}
        </p>
      </div>
    </FormCard>
  );
}
