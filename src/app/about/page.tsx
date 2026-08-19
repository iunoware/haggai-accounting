import { constructMetadata } from "@/src/lib/seo";
import CompanyStory from "./(components)/CompanyStory";
import FounderSection from "./(components)/FounderSection";
import Hero from "./(components)/Hero";
import MissionSection from "./(components)/MissionSection";
import VisionSection from "./(components)/VisionSection";
import WhyChooseUsSection from "./(components)/WhyChooseUs";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata = constructMetadata({
  title: "About Haggai Business solutions | Trusted Offshore Accounting Partner",
  description:
    "Learn how Haggai Business solutions helps businesses grow through dedicated offshore accounting teams, financial expertise, and long-term client partnerships.",
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
