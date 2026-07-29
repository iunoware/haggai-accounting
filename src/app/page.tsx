import { constructMetadata } from "@/src/lib/seo";
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

export const metadata = constructMetadata({
  title: "Home | Haggai Accounting",
  description:
    "Scale your business with offshore accounting, bookkeeping, payroll, and financial reporting services from Haggai Accounting. Trusted accounting support tailored to your business.",
  path: "/",
  keywords: [
    "Offshore Accounting Services",
    "Accounting Services",
    "Bookkeeping Services",
    "Offshore Bookkeeping",
    "Financial Reporting",
    "Payroll Services",
    "Virtual CFO",
    "Accounting Outsourcing",
    "Dedicated Offshore Accounting Team",
  ],
});

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
