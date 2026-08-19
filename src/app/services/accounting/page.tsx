"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  // CalendarDaysIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

gsap.registerPlugin(ScrollTrigger);

const ledgerItems = [
  {
    code: "BK",
    title: "Bookkeeping",
    description: "Clean, accurate books maintained continuously, not just at month-end.",
  },
  {
    code: "GL",
    title: "General Ledger Management",
    description: "A GL you can trust for decision-making.",
  },
  {
    code: "AP",
    title: "Accounts Payable",
    description: "Timely, accurate vendor payments and expense tracking.",
  },
  {
    code: "AR",
    title: "Accounts Receivable",
    description: "Faster collections, fewer outstanding balances.",
  },
  {
    code: "FR",
    title: "Financial Reporting",
    description: "Clear reports that tell you where the business actually stands.",
  },
  {
    code: "MEC",
    title: "Month-End Close",
    description: "A structured, repeatable close process - no more scrambling.",
  },
  {
    code: "CS",
    title: "Controller Support",
    description: "Senior-level oversight without a full-time controller salary.",
  },
  {
    code: "FPA",
    title: "FP&A Support",
    description: "Forecasting and analysis to guide business decisions.",
  },
  {
    code: "ERP",
    title: "ERP Support",
    description:
      "Hands-on experience across QuickBooks Online, NetSuite, Xero, Zoho, and Tally Prime.",
    tags: ["QuickBooks Online", "NetSuite", "Xero", "Zoho", "Tally Prime"],
  },
];

const backOfficeItems = [
  "Back-office operations management",
  "Data management and clean-up",
  "Process documentation",
  "Business reporting",
  "Workflow automation",
];

export default function AccountingServices() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const animatedSelectors = [
        ".haggai-acct-eyebrow",
        ".haggai-acct-line",
        ".haggai-acct-description",
        ".haggai-acct-action",
        ".haggai-acct-hero-visual",
        ".haggai-acct-ledger-header",
        ".haggai-acct-row",
        ".haggai-acct-backoffice-title",
        ".haggai-acct-pill",
        ".haggai-acct-quote",
        ".haggai-acct-cta",
      ];

      if (reduceMotion) {
        gsap.set(animatedSelectors, {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          scaleX: 1,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      // Hero
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-acct-hero",
            start: "top 75%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-acct-eyebrow",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".haggai-acct-line",
          { opacity: 0, yPercent: 110 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".haggai-acct-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".haggai-acct-action",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          ".haggai-acct-hero-visual",
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.35",
        );

      // Ledger ("What You Get")
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-acct-ledger",
            start: "top 78%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-acct-ledger-header",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        )
        .fromTo(
          ".haggai-acct-row",
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.2",
        );

      // Back office
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-acct-backoffice",
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-acct-backoffice-title",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        )
        .fromTo(
          ".haggai-acct-pill",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.2",
        );

      // Why it matters
      gsap.fromTo(
        ".haggai-acct-quote",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-acct-why",
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".haggai-acct-quote-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: ".haggai-acct-why",
            start: "top 78%",
            once: true,
          },
        },
      );

      // CTA
      gsap.fromTo(
        ".haggai-acct-cta",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-acct-cta",
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="relative bg-bg">
      {/* Hero*/}
      <section
        className="haggai-acct-hero relative overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-16 lg:flex lg:items-center lg:pt-32 lg:pb-20 font-body text-slate-900"
        style={{ backgroundImage: "url('/images/service-bg.png')" }}
      >
        {/* Subtle overlay to ensure high text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40 lg:via-white/70"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column — Content */}
            <div className="lg:col-span-7 xl:col-span-6">
              <div className="haggai-acct-eyebrow mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Accounting Services
                </span>
              </div>

              <h1 className="font-cormorant text-[2.6rem] font-medium leading-[0.95] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[3.75rem]">
                <span className="block overflow-hidden pb-2">
                  <span className="haggai-acct-line block">An Outsourced Accounting</span>
                </span>

                <span className="block overflow-hidden pb-3">
                  <span className="haggai-acct-line block italic text-primary">
                    Department You Can Rely On.
                  </span>
                </span>
              </h1>

              <p className="haggai-acct-description mt-6 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                From day-to-day bookkeeping to month-end close and financial reporting, we
                handle the accounting work that keeps your business running - accurately, on
                time, every time.
              </p>

              <div className="haggai-acct-action mt-9">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,89,138,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
                >
                  Schedule a Discovery Call
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right Column — Visual */}
            <div className="haggai-acct-hero-visual relative flex items-center justify-center lg:col-span-5 xl:col-span-6">
              <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
                <div className="relative aspect-4/3 w-full overflow-hidden p-1">
                  <Image
                    src="/images/service-1.png"
                    alt="Haggai Finance & Accounting Services Visual"
                    fill
                    sizes="(max-width: 1200px) 100vw, 520px"
                    priority
                    className="object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Ledger */}
      <section className="haggai-acct-ledger relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                  What You Get
                </span>
              </div>

              <h2 className="max-w-2xl font-cormorant text-4xl font-semibold leading-[0.95] tracking-tight text-[#0c2e2d] sm:text-5xl lg:text-6xl">
                Every line item,
                <br />
                <span className="text-primary/90">covered.</span>
              </h2>
            </div>

            <div className="border-l border-primary/15 pl-5 lg:pb-1">
              <p className="font-manrope text-sm leading-7 text-slate-500">
                A complete accounting function designed to keep your books organised, your
                obligations on track, and your business ready for what comes next.
              </p>
            </div>
          </div>

          {/* Ledger */}
          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_20px_60px_rgba(12,46,45,0.06)]">
            {/* Ledger top bar */}
            <div className="flex items-center justify-between border-b border-primary/10 bg-soft/40 px-5 py-3.5 sm:px-7">
              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
                Accounting Services
              </span>

              <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                What&apos;s Included
              </span>
            </div>

            {/* Items */}
            <div>
              {ledgerItems.map((item, index) => (
                <div
                  key={item.code}
                  className="group relative border-b border-primary/8 last:border-b-0"
                >
                  <div className="relative grid gap-5 px-5 py-6 transition-all duration-300 hover:bg-soft/35 sm:grid-cols-[72px_1fr_32px] sm:items-start sm:px-7 sm:py-7">
                    {/* Hover accent */}
                    <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Number */}
                    <div className="flex items-start">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-soft/60 font-manrope text-xs font-bold text-primary transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-cormorant text-2xl font-semibold leading-tight text-[#0c2e2d] sm:text-[1.7rem]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-3xl font-manrope text-sm leading-6 text-slate-500 sm:text-[0.94rem]">
                        {item.description}
                      </p>

                      {item.tags ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-primary/10 bg-soft/50 px-2.5 py-1 font-manrope text-[10px] font-semibold tracking-wide text-primary/75 transition-colors duration-300 group-hover:border-primary/15 group-hover:bg-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {/* Arrow */}
                    <div className="hidden pt-1 sm:flex sm:justify-end">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/10 text-primary/40 transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary/20 group-hover:text-primary">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 10h11M10.5 5.5L15 10l-4.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom statement */}
            <div className="flex flex-col gap-3 border-t border-primary/10 bg-primary px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="font-manrope text-xs leading-5 text-white/65">
                One accounting partner. One connected financial function.
              </p>

              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Complete Coverage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Back-Office & Process Support */}
      <section className="haggai-acct-backoffice relative py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-linear-to-br from-soft/60 via-white to-white p-7 shadow-[0_12px_40px_rgba(12,46,45,0.06)] sm:p-10 lg:p-12">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-secondary/5 blur-3xl"
            />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white text-primary shadow-sm">
                    <ClipboardDocumentListIcon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <div>
                    <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                      Also Included
                    </span>

                    <h3 className="mt-1 font-cormorant text-3xl font-semibold leading-tight text-[#0c2e2d] sm:text-[2rem]">
                      Back-Office &amp; Process Support
                    </h3>
                  </div>
                </div>

                <p className="max-w-sm font-manrope text-sm leading-6 text-[#0c2e2d]/60 sm:text-right">
                  The operational support that keeps your financial processes organized,
                  consistent, and moving forward.
                </p>
              </div>

              {/* Support Items */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {backOfficeItems.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-primary/10 bg-white/80 px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.415.005L3.3 9.27a1 1 0 011.4-1.43l4.03 3.95 6.55-6.5a1 1 0 011.424 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <span className="font-manrope text-sm font-medium leading-5 text-[#0c2e2d]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-primary/10" />

                <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/50">
                  Supporting Your Business Behind the Scenes
                </span>

                <div className="h-px flex-1 bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters*/}
      {/* <section className="haggai-acct-why relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-soft/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Why It Matters to You
          </span>

          <p className="haggai-acct-quote mt-6 font-cormorant text-[1.8rem] font-medium leading-tight text-[#0c2e2d] sm:text-[2.3rem]">
            You get the financial visibility and discipline of an{" "}
            <span className="italic text-primary">enterprise accounting department</span>,
            without the cost of building one in-house.
          </p>

          <span
            aria-hidden="true"
            className="haggai-acct-quote-rule mx-auto mt-8 block h-px w-24 bg-accent"
          />
        </div>
      </section> */}

      <section className="haggai-payroll-why relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="absolute inset-0 bg-primary" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[70px_70px]"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft/70">
            Why It Matters to You
          </span>

          <div className="haggai-payroll-quote mt-6">
            <span
              aria-hidden="true"
              className="font-cormorant block text-[5rem] italic leading-none text-accent/70 sm:text-[6rem]"
            >
              &ldquo;
            </span>

            <blockquote className="-mt-8 font-cormorant text-[1.8rem] font-medium italic leading-tight text-white sm:-mt-10 sm:text-[2.3rem]">
              You get the financial visibility and discipline of an{" "}
              <span className="text-accent">enterprise accounting department</span>{" "}
              without the cost of building one in-house.
            </blockquote>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent/60" />

              <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-soft/60">
                The Haggai Standard
              </span>

              <span className="h-px w-10 bg-accent/60" />
            </div>
          </div>
        </div>
      </section>

      <FinancialDashboardCTA />
    </div>
  );
}
