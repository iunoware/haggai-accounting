"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  // ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F2740] text-white font-manrope overflow-hidden border-t border-secondary/20">
      {/* Background Radial Glow Effects */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"
      />

      {/* Top Accent Line */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-linear-to-r from-[#00598A] via-[#508BC0] to-[#E29E21]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Brand Info & Newsletter */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/haggai-logo.png"
                  alt="Haggai Accounting Logo"
                  width={150}
                  height={45}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="text-xs sm:text-sm font-manrope text-soft/80 leading-relaxed max-w-sm">
                Haggai delivers transparent business solutions and dedicated
                offshore teams, empowering growing businesses with complete
                financial clarity and trusted long-term partnerships.
              </p>

              {/* Brand Pillars Highlights */}
              {/* <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Transparent Accounting",
                  "Offshore Teams",
                  "Financial Clarity",
                  "Long-Term Partnerships",
                ].map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#163454] px-2.5 py-1 text-[11px] font-medium text-soft/90 border border-secondary/20"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {pillar}
                  </span>
                ))}
              </div> */}
            </div>

            {/* Newsletter Input Prompt */}
            {/* <div className="mt-8 pt-6 border-t border-secondary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-0.5 bg-accent rounded-full" />
                <span className="text-xs font-semibold tracking-wider font-manrope text-secondary uppercase">
                  Stay Ahead Financially
                </span>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 max-w-sm font-manrope"
              >
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full rounded-xl bg-[#163454] border border-secondary/25 px-4 py-2.5 text-xs text-soft placeholder-soft/50 font-manrope focus:outline-none focus:border-secondary focus:ring-1 focus:ring-[#508BC0] transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold font-manrope text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 shadow-md shadow-[#00598A]/30 shrink-0"
                  aria-label="Subscribe to Newsletter"
                >
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div> */}
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-cormorant text-xl font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="h-4 w-0.5 bg-accent rounded-full inline-block" />
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-manrope">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Why Haggai", href: "/why-offshore" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-soft/80 hover:text-secondary transition-colors duration-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="font-cormorant text-xl font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="h-4 w-0.5 bg-accent rounded-full inline-block" />
              Services
            </h4>
            <ul className="space-y-3 text-xs font-manrope">
              {[
                { name: "Services Hub", href: "/services/" },
                { name: "Accounting Services", href: "/services/accounting" },
                { name: "Payroll Services", href: "/services/payroll" },
                {
                  name: "Supply Chain Services",
                  href: "/services/supply-chain",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-soft/80 hover:text-secondary transition-colors duration-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative">
                      {service.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="font-cormorant text-xl font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="h-4 w-0.5 bg-accent rounded-full inline-block" />
              Contact
            </h4>
            <ul className="space-y-3.5 text-xs font-manrope text-soft/80">
              <li className="group flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 text-secondary shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-accent" />
                <span className="leading-tight">
                  Plot No-719, Viswashanthi Nagar 4th street,
                  <br />
                  Madurai, Tamil Nadu, India.
                </span>
              </li>
              <li className="group flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 text-secondary shrink-0 transition-colors duration-300 group-hover:text-accent" />
                <a
                  href="tel:+919789997028"
                  target="_blank"
                  className="hover:text-secondary transition-colors"
                >
                  +91 978 999 7028
                </a>
              </li>
              <li className="group flex items-center gap-2.5">
                <EnvelopeIcon className="h-4 w-4 text-secondary shrink-0 transition-colors duration-300 group-hover:text-accent" />
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@haggaiaccounting.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@haggaibs.com
                </a>
              </li>
              <li className="group flex items-center gap-2.5">
                <ClockIcon className="h-4 w-4 text-secondary shrink-0 transition-colors duration-300 group-hover:text-accent" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
              {/* <li className="pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-xs text-soft/80 hover:text-secondary transition-all duration-300"
                  aria-label="Connect with Haggai Accounting on LinkedIn"
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-xl bg-[#163454] border border-secondary/25 text-secondary transition-all duration-300 group-hover:text-accent group-hover:border-accent/50 group-hover:scale-110 shadow-xs">
                    <svg
                      className="h-4 w-4 fill-currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </span>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="mt-16 pt-8 border-t border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope text-soft/70">
          <div></div>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">
              {" "}
              <a href="https://www.iunoware.com/" target="_blank">
                {" "}
                Iunoware Pvt Ltd.{" "}
              </a>{" "}
            </span>{" "}
            All rights reserved.
          </p>

          {/* <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-secondary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
