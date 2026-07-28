import ContactForm from "./(components)/ContactForm";
import ContactHero from "./(components)/ContactHero";
import ContactInformation from "./(components)/ContactInformation";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
    </>
  );
}
