import { constructMetadata } from "@/src/lib/seo";
import CompanyStory from "./(components)/CompanyStory";
import FounderSection from "./(components)/FounderSection";
import Hero from "./(components)/Hero";
import MissionSection from "./(components)/MissionSection";
import VisionSection from "./(components)/VisionSection";
import WhyChooseUsSection from "./(components)/WhyChooseUs";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata = constructMetadata({
  title: "About Us | Accounting & Business Solutions | Haggai Business Solutions",
  description:
    "Learn about Haggai Business Solutions and our approach to delivering reliable accounting, bookkeeping, payroll, financial reporting, and business support services for growing businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero />
      <CompanyStory />
      <FounderSection />
      <MissionSection />
      <VisionSection />
      <WhyChooseUsSection />
      <FinancialDashboardCTA />
    </>
  );
}
