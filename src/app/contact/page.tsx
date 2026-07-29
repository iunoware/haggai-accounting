import { constructMetadata } from "@/src/lib/seo";
import ContactForm from "./(components)/ContactForm";
import ContactHero from "./(components)/ContactHero";
import ContactInformation from "./(components)/ContactInformation";

export const metadata = constructMetadata({
  title: "Contact Haggai Accounting | Speak with Our Accounting Experts",
  description:
    "Get in touch with Haggai Accounting to discuss bookkeeping, offshore accounting, payroll, financial reporting, or a customized accounting solution for your business.",
  path: "/contact",
  keywords: [
    "Contact Haggai Accounting",
    "Speak with Accounting Experts",
    "Bookkeeping Consultation",
    "Offshore Accounting Quote",
    "Customized Accounting Solution",
  ],
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
