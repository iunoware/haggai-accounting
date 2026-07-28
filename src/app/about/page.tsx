import CompanyStory from "./(components)/CompanyStory";
import Hero from "./(components)/Hero";
import MissionSection from "./(components)/MissionSection";
import VisionSection from "./(components)/VisionSection";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <CompanyStory />
      <MissionSection />
      <VisionSection />
    </>
  );
}
