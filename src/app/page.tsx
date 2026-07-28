import HeroSection from "./(components)/Hero";
import PainPoints from "./(components)/PainPoints";
import OurSolutions from "./(components)/OurSolutions";
import WhyHaggai from "./(components)/WhyHaggai";
import HowWeWork from "./(components)/HowWeWork";
import ServicesOverview from "./(components)/ServicesOverview";
import IndustriesWeServe from "./(components)/IndustriesWeServe";
import PricingPreview from "./(components)/PricingPreview";
import MeetTheFounder from "./(components)/MeetTheFounder";
import Testimonials from "./(components)/Testimonials";
import FinancialDashboardCTA from "../components/FinancialDashboardCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPoints />
      <OurSolutions />
      <WhyHaggai />
      <HowWeWork />
      <ServicesOverview />
      <IndustriesWeServe />
      <PricingPreview />
      <MeetTheFounder />
      <Testimonials />
      <FinancialDashboardCTA />
    </>
  );
}
