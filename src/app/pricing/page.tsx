import { constructMetadata } from "@/src/lib/seo";
import PricingHero from "./(components)/Hero";
import PricingPlans from "./(components)/PricingPlans";
import PlanComparison from "./(components)/PlanComparison";
import PricingFaq from "./(components)/FaqSection";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata = constructMetadata({
  title: "Simple & Transparent Accounting Pricing | Haggai Accounting",
  description:
    "Compare flexible accounting plans designed for startups, growing businesses, CPA firms, and enterprises with transparent pricing and no hidden fees.",
  path: "/pricing",
  keywords: [
    "Simple & Transparent Accounting Pricing",
    "Accounting Plans",
    "Transparent Pricing",
    "No Hidden Fees",
    "Startup Accounting Plans",
    "CPA Firm Pricing",
  ],
});

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col font-body bg-white text-slate-900">
      {/* 1. Hero Section */}
      <PricingHero />

      {/* 2. Data-Driven Spotlight Pricing Stage */}
      <PricingPlans />

      {/* 3. Interactive Plan Comparison Matrix */}
      <PlanComparison />

      {/* 4. Frequently Asked Questions Section */}
      <PricingFaq />

      {/* 5. Call To Action / Financial Dashboard Signature Interaction */}
      <FinancialDashboardCTA />
    </div>
  );
}
