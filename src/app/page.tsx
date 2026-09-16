/* eslint-disable @typescript-eslint/no-unused-vars */
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
  title: "Home | Accounting, Payroll & Business Solutions | Haggai Business Solutions",
  description:
    "Scale your business with professional accounting, bookkeeping, payroll, financial reporting, and business support services from Haggai Business Solutions. Reliable solutions tailored to your business needs.",
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
