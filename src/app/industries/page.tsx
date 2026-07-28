import { Metadata } from "next";
import IndustriesHero from "./(components)/Hero";
import WhoWeServe from "./(components)/WhoWeServe";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata: Metadata = {
  title: "Industries We Support | Haggai Accounting",
  description:
    "Tailored accounting solutions for CPA firms, startups, SaaS companies, e-commerce, and growing businesses.",
};

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col font-body bg-white text-slate-900">
      {/* 1. Hero Section */}
      <IndustriesHero />

      {/* 2. Who We Serve Interactive Business Type Selector */}
      <WhoWeServe />

      {/* 3. Call To Action / Financial Dashboard Signature Interaction */}
      <FinancialDashboardCTA />
    </div>
  );
}