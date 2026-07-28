import CompanyStory from "./(components)/CompanyStory";
import FounderSection from "./(components)/FounderSection";
import Hero from "./(components)/Hero";
import MissionSection from "./(components)/MissionSection";
import VisionSection from "./(components)/VisionSection";
import WhyChooseUsSection from "./(components)/WhyChooseUs";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

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
