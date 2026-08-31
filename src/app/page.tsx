import { constructMetadata } from "@/src/lib/seo";
import HeroSection from "./(components)/Hero";
import WhoWeWorkWith from "./(components)/WhoWeWorkWith";
import PainPoints from "./(components)/PainPoints";
import OurSolutions from "./(components)/OurSolutions";
import EngagementModels from "./(components)/EngagementModels";
import WhyHaggai from "./(components)/WhyHaggai";
import HowWeWork from "./(components)/HowWeWork";
// import ServicesOverview from "./(components)/ServicesOverview";
import IndustriesWeServe from "./(components)/IndustriesWeServe";
import PricingPreview from "./(components)/PricingPreview";
import MeetTheFounder from "./(components)/MeetTheFounder";
import Testimonials from "./(components)/Testimonials";
import FaqSection from "./(components)/FaqSection";
import FinancialDashboardCTA from "../components/FinancialDashboardCTA";
import Technology from "./(components)/Technology";

export const metadata = constructMetadata({
  title: "Home | Haggai Business Solutions",
  description:
    "Scale your business with offshore accounting, bookkeeping, payroll, and financial reporting services from Haggai Business Solutions. Trusted accounting support tailored to your business.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeWorkWith />
      <OurSolutions />
      <EngagementModels />
      <WhyHaggai />
      <PainPoints />
      <Technology />
      <IndustriesWeServe />
      <MeetTheFounder />
      <HowWeWork />
      {/* <ServicesOverview /> */}
      {/* <PricingPreview /> */}
      <Testimonials />
      <FaqSection />
      <FinancialDashboardCTA />
    </>
  );
}
