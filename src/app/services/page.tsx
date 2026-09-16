import { constructMetadata } from "@/src/lib/seo";
import HowWeWork from "../(components)/HowWeWork";
// import AccountingSoftwareExpertise from "./(components)/AccountingSoftwareExpertise";
import Hero from "./(components)/Hero";
import WhiteLabelServices from "./(components)/WhiteLabelServices";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";
import ServicesHub from "./(components)/ServiceHub";

export const metadata = constructMetadata({
  title: "Our Services | Accounting, Payroll & Finance Solutions | Haggai",
  description:
    "Explore Haggai Business Solutions' accounting, bookkeeping, payroll, financial reporting, and supply chain services designed to streamline operations and support business growth.",
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
