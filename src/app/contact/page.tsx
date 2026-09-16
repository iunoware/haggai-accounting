import { constructMetadata } from "@/src/lib/seo";
import ContactForm from "./(components)/ContactForm";
import ContactHero from "./(components)/ContactHero";
import ContactInformation from "./(components)/ContactInformation";

export const metadata = constructMetadata({
  title: "Contact Us | Haggai Business Solutions",
  description:
    "Get in touch with Haggai Business Solutions for professional accounting, bookkeeping, payroll, financial reporting, and business support services tailored to your organization's needs.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInformation />
      <ContactForm />
    </>
  );
}
