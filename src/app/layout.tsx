import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-var",
  subsets: ["latin"],
  // Manrope is a variable font — max weight 800, CSS 900 maps to 800
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PromoCore — Automated Subscriber Platform",
  description:
    "Automated accounts that subscribe, tip, message, and engage to help you hit required numbers faster without sacrificing real fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
