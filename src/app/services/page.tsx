import HowWeWork from "./(components)/HowWeWork";
import AccountingSoftwareExpertise from "./(components)/AccountingSoftwareExpertise";
import Hero from "./(components)/Hero";
import WhiteLabelServices from "./(components)/WhiteLabelServices";
import ServicesFaq from "./(components)/ServicesFaq";

export default function Services() {
  return (
    <>
      <Hero />
      <WhiteLabelServices />
      <AccountingSoftwareExpertise />
      <HowWeWork />
      <ServicesFaq />
      {/* <CTA /> */}
    </>
  );
}
