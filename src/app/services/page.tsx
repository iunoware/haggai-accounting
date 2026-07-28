import HowWeWork from "./(components)/HowWeWork";
import AccountingSoftwareExpertise from "./(components)/AccountingSoftwareExpertise";
import Hero from "./(components)/Hero";
import WhiteLabelServices from "./(components)/WhiteLabelServices";
import ServicesFaq from "./(components)/ServicesFaq";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

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
