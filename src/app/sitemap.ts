import { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo";

export const dynamic = "force-static";

const paths = [
  "",
  "about/",
  "services/",
  "services/accounting/",
  "services/payroll/",
  "industries/",
  "why-offshore/",
  "contact/",
  // "pricing/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: today,
  }));

  // return [
  //   { url: "https://haggaibs.com", lastModified: today },
  //   { url: "https://haggaibs.com/about/", lastModified: today },
  //   { url: "https://haggaibs.com/services/", lastModified: today },
  //   { url: "https://haggaibs.com/services/accounting/", lastModified: today },
  //   { url: "https://haggaibs.com/services/payroll/", lastModified: today },
  //   { url: "https://haggaibs.com/industries/", lastModified: today },
  //   { url: "https://haggaibs.com/why-offshore/", lastModified: today },
  //   { url: "https://haggaibs.com/contact/", lastModified: today },
  // ];
}
