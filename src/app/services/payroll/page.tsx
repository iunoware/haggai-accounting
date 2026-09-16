import PayrollServicesClient from "./(components)/PayrollServicesClient";
import { constructMetadata } from "@/src/lib/seo";

export const metadata = constructMetadata({
  title: "Payroll Services & Management | Haggai Business Solutions",
  description:
    "Simplify payroll with reliable payroll processing, employee salary management, compliance support, and reporting services from Haggai Business Solutions, tailored to your business.",
  path: "/payroll",
});

export default function PayrollServices() {
  return <PayrollServicesClient />;
}
