"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { num: "01", title: "Download the installer", desc: "Click the button for your OS above. The installer is ~80MB." },
  { num: "02", title: "Run the installer", desc: "Open the downloaded file and follow the on-screen setup steps. No admin rights required on Mac." },
  { num: "03", title: "Launch PromoCore", desc: "Open the app from your Applications folder (Mac) or Start Menu (Windows)." },
  { num: "04", title: "Sign in or create an account", desc: "Log in with your PromoCore credentials. New users can register directly in the app." },
  { num: "05", title: "Activate your plan", desc: "Navigate to Settings → Subscription and enter your license key or connect your purchase." },
];

const troubleshootItems = [
  {
    q: "Mac says the app is from an unidentified developer",
    a: "Right-click the app icon and select 'Open', then click 'Open' in the dialog that appears. You only need to do this once. This is a standard macOS Gatekeeper prompt for apps distributed outside the App Store.",
  },
  {
    q: "Windows Defender or antivirus flags the installer",
    a: "This can occur with new software releases. The installer is safe. You can whitelist the file in your antivirus settings, or temporarily disable real-time protection during installation.",
  },
  {
    q: "The app won't launch after installation",
    a: "Ensure your OS is up to date (Windows 10+ / macOS 12+). If the issue persists, try re-downloading the installer — a corrupted download is the most common cause.",
  },
  {
    q: "I don't see my subscription after signing in",
    a: "Allow up to 60 seconds after activation for the license to sync. If the issue persists, go to Settings → Subscription and click 'Refresh License'.",
  },
  {
    q: "Where are the app logs located?",
    a: "Mac: ~/Library/Application Support/PromoCore/logs/ · Windows: %APPDATA%\\PromoCore\\logs\\. Share these with support if you're reporting an issue.",
  },
];

export default function DownloadPage() {
  useReveal();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section style={{ padding: "100px 5% 80px", textAlign: "center" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="reveal">
              <div className="section-label-el" style={{ justifyContent: "center" }}>
                Download
              </div>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 900,
                  lineHeight: 0.97,
                  letterSpacing: "-0.04em",
                  marginBottom: "20px",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                Get PromoCore
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--pc-text2)",
                  lineHeight: 1.7,
                  marginBottom: "48px",
                }}
              >
                Free to download. Payment required to activate features. Available for Windows and Mac.
              </p>
            </div>

            {/* OS buttons */}
            <div
              className="reveal delay-1"
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <OSButton
                os="Windows"
                icon="⊞"
                subtitle="Windows 10 / 11"
                href="#"
              />
              <OSButton
                os="macOS"
                icon=""
                subtitle="macOS 12 Monterey+"
                href="#"
              />
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
              {'// version 2.4.1 · released Jan 2025 · ~80MB'}
            </p>
          </div>
        </section>

        {/* Install steps */}
        <section
          style={{
            padding: "80px 5%",
            borderTop: "1px solid var(--pc-glass-border)",
            borderBottom: "1px solid var(--pc-glass-border)",
            background: "rgba(255,255,255,0.015)",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="reveal">
              <div className="section-label-el">Install Steps</div>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                  marginBottom: "40px",
                }}
              >
                Up and Running in Minutes
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`reveal${i > 0 ? ` delay-${Math.min(i, 4)}` : ""}`}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    background: "var(--pc-glass)",
                    border: "1px solid var(--pc-glass-border)",
                    borderRadius: "14px",
                    padding: "20px 22px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--pc-accent)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      flexShrink: 0,
                      boxShadow: "0 0 16px var(--pc-accent-glow)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        marginBottom: "6px",
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                      }}
                    >
                      {s.title}
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--pc-text2)", lineHeight: 1.6 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="reveal delay-4"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              <p style={{ fontSize: "14px", color: "var(--pc-text2)", marginBottom: "16px" }}>
                Already have an account?
              </p>
              <Link
                href="/signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--pc-accent-bright)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(176,51,71,0.4)",
                  paddingBottom: "2px",
                  transition: "border-color 0.2s",
                }}
              >
                Sign in or activate your plan →
              </Link>
            </div>
          </div>
        </section>

        {/* Troubleshooting FAQ */}
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: "40px" }}>
              <div className="section-label-el">Troubleshooting</div>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                }}
              >
                Common Issues
              </h2>
            </div>

            <div className="reveal delay-1">
              <Accordion type="single" collapsible className="w-full">
                {troubleshootItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`ts-${i}`}
                    style={{ borderBottom: "1px solid var(--pc-glass-border)" }}
                  >
                    <AccordionTrigger
                      style={{
                        fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "var(--pc-text)",
                        textAlign: "left",
                        padding: "18px 0",
                      }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent
                      style={{
                        fontSize: "13px",
                        color: "var(--pc-text2)",
                        lineHeight: 1.7,
                        paddingBottom: "18px",
                      }}
                    >
                      {item.a}
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

function OSButton({
  os,
  icon,
  subtitle,
  href,
}: {
  os: string;
  icon: string;
  subtitle: string;
  href: string;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        background: "var(--pc-glass)",
        border: "1px solid var(--pc-glass-border)",
        borderRadius: "16px",
        padding: "24px 40px",
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        minWidth: "180px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--pc-glass-border-accent)";
        el.style.boxShadow = "0 0 30px rgba(139,46,60,0.12)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--pc-glass-border)";
        el.style.boxShadow = "none";
        el.style.transform = "none";
      }}
    >
      <span style={{ fontSize: "32px" }}>{icon}</span>
      <div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--pc-text)",
            fontFamily: "var(--font-manrope-var), Manrope, sans-serif",
          }}
        >
          ↓ Download for {os}
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "var(--pc-text3)",
            marginTop: "4px",
            fontFamily: "var(--font-jetbrains-var), 'JetBrains Mono', monospace",
          }}
        >
          {subtitle}
        </div>
      </div>
    </a>
  );
}
