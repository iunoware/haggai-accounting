import { constructMetadata } from "@/src/lib/seo";
import AccountingServicesClient from "./(components)/AccountingServicesClient";

export const metadata = constructMetadata({
  title: "Accounting Services & Bookkeeping | Haggai Business Solutions",
  description:
    "Improve financial accuracy with professional accounting, bookkeeping, financial reporting, accounts management, and business finance support from Haggai Business Solutions.",
  path: "/accounting-services",
});

export default function AccountingServices() {
  return <AccountingServicesClient />;
}
