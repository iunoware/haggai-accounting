import { constructMetadata } from "@/src/lib/seo";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";
import OffshoreHero from "./(components)/OffshoreHero";
import WhyOffshoreHaggai from "./(components)/WhyOffshoreHaggai";
import DedicatedAccountingTeam from "./(components)/DedicatedAccountingTeam";
import TraditionalHiringComparison from "./(components)/TraditionalHiringComparison";

export const metadata = constructMetadata({
  title:
    "Why Offshore Accounting? Benefits for Growing Businesses | Haggai Accounting",
  description:
    "Discover how offshore accounting helps businesses reduce costs, access experienced accounting professionals, improve efficiency, and scale confidently with Haggai Accounting.",
  path: "/why-offshore",
  keywords: [
    "Why Offshore Accounting",
    "Offshore Accounting Benefits",
    "Reduce Accounting Costs",
    "Experienced Accounting Professionals",
    "Scale Accounting Confidently",
    "Accounting Outsourcing",
  ],
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
