import { constructMetadata } from "@/src/lib/seo";
import HowWeWork from "../(components)/HowWeWork";
// import AccountingSoftwareExpertise from "./(components)/AccountingSoftwareExpertise";
import Hero from "./(components)/Hero";
import WhiteLabelServices from "./(components)/WhiteLabelServices";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";
import ServicesHub from "./(components)/ServiceHub";

export const metadata = constructMetadata({
  title: "Accounting & Bookkeeping Services | Haggai Business Solutions",
  description:
    "Explore bookkeeping, payroll, financial reporting, compliance, virtual CFO, and offshore accounting services designed to support growing businesses.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <Hero />
      <ServicesHub />
      <WhiteLabelServices />
      {/* <AccountingSoftwareExpertise /> */}
      <HowWeWork />
      <FinancialDashboardCTA />
    </>
  );
}
