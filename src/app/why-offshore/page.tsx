import { constructMetadata } from "@/src/lib/seo";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";
import OffshoreHero from "./(components)/OffshoreHero";
// import WhyOffshoreHaggai from "./(components)/WhyOffshoreHaggai";
// import DedicatedAccountingTeam from "./(components)/DedicatedAccountingTeam";
// import TraditionalHiringComparison from "./(components)/TraditionalHiringComparison";

export const metadata = constructMetadata({
  title: "Why Haggai | Reliable Accounting & Business Support Solutions",
  description:
    "Discover the Haggai difference with accurate accounting, dependable payroll, financial reporting, and business support solutions designed to improve efficiency and simplify operations.",
  path: "/why-haggai",
});

export default function WhyOffshorePage() {
  return (
    <>
      <OffshoreHero />
      {/* <WhyOffshoreHaggai />
      <DedicatedAccountingTeam />
      <TraditionalHiringComparison /> */}
      <FinancialDashboardCTA />
    </>
  );
}
