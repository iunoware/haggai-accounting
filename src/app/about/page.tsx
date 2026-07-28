import CompanyStory from "./(components)/CompanyStory";
import FounderSection from "./(components)/FounderSection";
import Hero from "./(components)/Hero";
import MissionSection from "./(components)/MissionSection";
import VisionSection from "./(components)/VisionSection";
import WhyChooseUsSection from "./(components)/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <CompanyStory />
      <FounderSection />
      <MissionSection />
      <VisionSection />
      <WhyChooseUsSection />
      {/* <CTA /> */}
    </>
  );
}
