import { constructMetadata } from "@/src/lib/seo";
import HowWeWork from "./(components)/HowWeWork";
import AccountingSoftwareExpertise from "./(components)/AccountingSoftwareExpertise";
import Hero from "./(components)/Hero";
import WhiteLabelServices from "./(components)/WhiteLabelServices";
import ServicesFaq from "./(components)/ServicesFaq";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

export const metadata = constructMetadata({
  title: "Accounting & Bookkeeping Services | Haggai Accounting",
  description:
    "Explore bookkeeping, payroll, financial reporting, compliance, virtual CFO, and offshore accounting services designed to support growing businesses.",
  path: "/services",
  keywords: [
    "Accounting & Bookkeeping Services",
    "Bookkeeping Services",
    "Payroll Services",
    "Financial Reporting",
    "Virtual CFO",
    "Offshore Accounting Services",
    "CPA Firm Support",
  ],
});

export default function Services() {
  return (
    <>
      <Hero />
      <WhiteLabelServices />
      <AccountingSoftwareExpertise />
      <HowWeWork />
      <ServicesFaq />
      <FinancialDashboardCTA />
    </>
  );
}
