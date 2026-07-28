"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white font-manrope overflow-hidden border-t border-slate-800/80">
      {/* Top Accent Line */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Haggai Accounting Logo"
                  width={140}
                  height={40}
                  className="h-9 w-auto object-contain brightness-200"
                />
              </Link>

              <p className="text-sm font-manrope text-slate-400 leading-relaxed max-w-sm">
                Haggai combines experienced financial CPAs, dedicated offshore
                teams, and modern accounting software to help ambitious
                businesses scale with total clarity.
              </p>
            </div>

            {/* Newsletter / Contact Prompt */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-bold tracking-wider font-manrope text-secondary uppercase block mb-2">
                Stay Ahead Financially
              </span>
              <div className="flex items-center gap-2 max-w-sm font-manrope">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-xs text-white placeholder-slate-500 font-manrope focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold font-manrope text-white transition-all hover:bg-[#004870]"
                  aria-label="Subscribe"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-manrope text-slate-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-primary transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white tracking-wide mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs font-manrope text-slate-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Full-Charge Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Dedicated Offshore Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Payroll &amp; Tax Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Virtual CFO &amp; Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white tracking-wide mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs font-manrope text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  100 Financial Plaza, Suite 400
                  <br />
                  New York, NY 10005
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 text-secondary shrink-0" />
                <span>+1 (800) 555-HAGGAI</span>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeIcon className="h-4 w-4 text-secondary shrink-0" />
                <span>contact@haggaiaccounting.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Haggai Accounting. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
