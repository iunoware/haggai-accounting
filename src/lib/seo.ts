import { Metadata } from "next";

export const SITE_NAME = "Haggai Business Solutions";
export const SITE_URL = "https://www.haggaibs.com/";
export const DEFAULT_OG_IMAGE = "/images/home-hero.png";

export interface ConstructMetadataParams {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: ConstructMetadataParams): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  const defaultKeywords = [
    "Offshore Accounting Services",
    "Accounting Services",
    "Bookkeeping Services",
    "Offshore Bookkeeping",
    "Financial Reporting",
    "Payroll Services",
    "Virtual CFO",
    "Accounting Outsourcing",
    "Dedicated Offshore Accounting Team",
    "CPA Firm Support",
    "Startup Accounting",
    "SaaS Accounting",
    "E-commerce Accounting",
    "Fractional CFO Support",
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@HaggaiAccounting",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
