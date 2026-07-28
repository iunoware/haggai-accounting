import { Metadata } from "next";
import PricingHero from "./(components)/Hero";
import PricingPreview from "../(components)/PricingPreview";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata: Metadata = {
  title: "Simple, Transparent Pricing | Haggai Accounting",
  description:
    "Flexible accounting plans designed to match your current business needs with zero hidden fees.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col font-body bg-white text-slate-900">
      {/* 1. Hero Section */}
      <PricingHero />

      {/* 2. Pricing Plans */}
      <div id="pricing-plans">
        <PricingPreview />
      </div>

      {/* 3. Call To Action / Financial Dashboard Signature Interaction */}
      <FinancialDashboardCTA />
    </div>
  );
}
