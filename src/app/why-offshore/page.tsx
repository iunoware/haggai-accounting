import { constructMetadata } from "@/src/lib/seo";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";
import OffshoreHero from "./(components)/OffshoreHero";
import WhyOffshoreHaggai from "./(components)/WhyOffshoreHaggai";
import DedicatedAccountingTeam from "./(components)/DedicatedAccountingTeam";
import TraditionalHiringComparison from "./(components)/TraditionalHiringComparison";

export const metadata = constructMetadata({
  title:
    "Why Offshore Accounting? Benefits for Growing Businesses | Haggai Business Solutions",
  description:
    "Discover how offshore accounting helps businesses reduce costs, access experienced accounting professionals, improve efficiency, and scale confidently with Haggai Business Solutions.",
  path: "/why-offshore",
});

export default function WhyOffshorePage() {
  return (
    <>
      <OffshoreHero />
      <WhyOffshoreHaggai />
      <DedicatedAccountingTeam />
      <TraditionalHiringComparison />
      <FinancialDashboardCTA />
    </>
  );
}
