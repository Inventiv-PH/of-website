"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CostSection from "@/components/sections/CostSection";
import SolutionBento from "@/components/sections/SolutionBento";
import OrbitalSection from "@/components/sections/OrbitalSection";
import WhoSection from "@/components/sections/WhoSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CostSection />
        <SolutionBento />
        <OrbitalSection />
        <WhoSection />
        <HowItWorks />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
