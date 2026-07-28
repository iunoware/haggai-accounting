"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  BanknotesIcon,
  DocumentTextIcon,
  InboxArrowDownIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  ArrowRightIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const supportingServices = [
  {
    title: "Payroll Management",
    description:
      "Accurate, on-time payroll processing and tax withholdings for your team.",
    icon: BanknotesIcon,
    href: "/services#payroll",
  },
  {
    title: "Tax Preparation",
    description:
      "Comprehensive tax compliance, filing, and strategy to prevent year-end stress.",
    icon: DocumentTextIcon,
    href: "/services#tax",
  },
  {
    title: "Accounts Payable",
    description:
      "Streamlined bill payments, vendor management, and cash flow optimization.",
    icon: InboxArrowDownIcon,
    href: "/services#ap",
  },
  {
    title: "Accounts Receivable",
    description:
      "Invoicing, payment tracking, and collections for predictable incoming cash flow.",
    icon: ArrowPathIcon,
    href: "/services#ar",
  },
  {
    title: "Compliance Support",
    description:
      "Regulatory oversight, audit readiness, and corporate governance compliance.",
    icon: ShieldCheckIcon,
    href: "/services#compliance",
  },
  {
    title: "Virtual CFO Services",
    description:
      "High-level financial forecasting, budgeting, and strategic growth advisory.",
    icon: ChartPieIcon,
    href: "/services#cfo",
  },
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (featuredCardRef.current) {
        tl.fromTo(
          featuredCardRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (bottomCtaRef.current) {
        tl.fromTo(
          bottomCtaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      }

      if (featuredCardRef.current) {
        const imgEl = featuredCardRef.current.querySelector(
          ".floating-services-img"
        );
        if (imgEl) {
          gsap.to(imgEl, {
            y: -10,
            duration: 3.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-overview"
      aria-labelledby="services-overview-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-24 font-body text-slate-900"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Accounting Services
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="services-overview-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Everything your business needs to manage accounting with{" "}
            <span className="text-primary">confidence.</span>
          </h2>

          {/* Supporting Text */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai offers end-to-end accounting solutions designed to support
            your business at every stage of growth, ensuring accuracy,
            compliance, and strategic clarity.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6 lg:gap-8">
          {/* TOP: LARGE FEATURED SERVICE CARD */}
          <div
            ref={featuredCardRef}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Top primary accent bar */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* LEFT */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-3">
                  Core Accounting Service
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-950 leading-tight">
                  Bookkeeping &amp; Financial Reporting
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  Accurate bookkeeping and timely financial reporting form the
                  bedrock of a healthy business. We maintain immaculate ledgers
                  and deliver clear monthly financial statements so you always
                  know where your business stands.
                </p>

                {/* Key Highlights */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft text-primary mt-0.5">
                      <DocumentCheckIcon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 font-heading">
                        Accurate Financial Records
                      </h4>
                      <p className="text-xs text-slate-600">
                        Reconciled accounts, categorized expenses, and
                        audit-ready ledgers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft text-primary mt-0.5">
                      <ChartBarIcon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 font-heading">
                        Monthly Reporting
                      </h4>
                      <p className="text-xs text-slate-600">
                        P&amp;L statements, balance sheets, and custom management
                        reports delivered on schedule.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-soft text-primary mt-0.5">
                      <ArrowTrendingUpIcon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 font-heading">
                        Business Performance Insights
                      </h4>
                      <p className="text-xs text-slate-600">
                        Actionable executive summaries to help you optimize
                        profitability and cash flow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="floating-services-img relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-inner">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center">
                    <Image
                      src="/images/services-illustration.png"
                      alt="Bookkeeping and financial reporting dashboard illustration"
                      width={600}
                      height={450}
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SIX SUPPORTING SERVICE CARDS */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Supporting Services Cards"
          >
            {supportingServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-primary before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center"
                  role="listitem"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                        <Icon
                          className="h-5 w-5 stroke-[1.8]"
                          aria-hidden="true"
                        />
                      </div>

                      <ArrowRightIcon
                        className="h-5 w-5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-semibold text-slate-950 transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-primary">
                    <span>Explore details</span>
                    <ArrowRightIcon
                      className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div ref={bottomCtaRef} className="mt-14 sm:mt-16 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-950 mb-3">
            Need a complete accounting solution?
          </h3>

          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          >
            <span>Explore All Services</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <p className="mt-3 text-sm font-medium text-slate-600 sm:text-base">
            Discover every service Haggai provides to help your business grow.
          </p>
        </div>
      </div>
    </section>
  );
}
