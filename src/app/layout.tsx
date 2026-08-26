import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/src/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Offshore Accounting Services | Haggai Business Solutions",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Scale your business with offshore accounting, bookkeeping, payroll, and financial reporting services from Haggai Business Solutions. Trusted accounting support tailored to your business.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/haggai_fav_icon.png",
    shortcut: "/images/haggai_fav_icon.png",
    apple: "/images/haggai_fav_icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Offshore Accounting Services | Haggai Business Solutions",
    description:
      "Scale your business with offshore accounting, bookkeeping, payroll, and financial reporting services from Haggai Business Solutions. Trusted accounting support tailored to your business.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Professional Offshore Accounting Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Accounting Services | Haggai Business Solutions",
    description:
      "Scale your business with offshore accounting, bookkeeping, payroll, and financial reporting services from Haggai Business Solutions. Trusted accounting support tailored to your business.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@HaggaiAccounting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#00598A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="flex min-h-screen flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
