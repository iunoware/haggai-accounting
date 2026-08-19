import { constructMetadata } from "@/src/lib/seo";
import IndustriesHero from "./(components)/Hero";
import WhoWeServe from "./(components)/WhoWeServe";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata = constructMetadata({
  title: "Industries We Serve | Industry-Specific Accounting Solutions",
  description:
    "Discover accounting solutions tailored for CPA firms, accounting firms, startups, SaaS companies, Fractional CFO firms, and e-commerce businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col font-body bg-bg text-slate-900">
      {/* 1. Hero Section */}
      <IndustriesHero />

      {/* 2. Who We Serve Interactive Business Type Selector */}
      <WhoWeServe />

      {/* 3. Call To Action / Financial Dashboard Signature Interaction */}
      <FinancialDashboardCTA />
    </div>
  );
}
