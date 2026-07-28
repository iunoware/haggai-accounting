"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  CalculatorIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clientTypes = [
  {
    id: "cpa-firms",
    name: "CPA Firms",
    shortDesc:
      "White-label accounting support that helps CPA firms expand capacity while maintaining quality and confidentiality.",
    fullDesc:
      "Haggai serves as a seamless white-label accounting partner for CPA firms looking to scale client capacity without inflating domestic overhead. We handle daily bookkeeping, write-up work, and financial prep under strict NDA compliance.",
    icon: AcademicCapIcon,
    image: "/images/serve-cpa.png",
    benefits: [
      "Dedicated White-Label Support",
      "Strict NDA & Data Confidentiality",
      "Senior CPA Quality Supervision",
      "Instant Operational Capacity Expansion",
    ],
  },
  {
    id: "accounting-firms",
    name: "Accounting Firms",
    shortDesc:
      "Reliable offshore bookkeeping and accounting support that reduces workload and improves operational efficiency.",
    fullDesc:
      "Expand your practice margins and eliminate team burnout. Our dedicated offshore accountants integrate directly into your firm's existing software stack to execute daily transactions, account reconciliations, and routine ledgers.",
    icon: CalculatorIcon,
    image: "/images/serve-accounting.png",
    benefits: [
      "Full Integration with QuickBooks & Xero",
      "Standardized Operating Procedures",
      "Significant Overhead Cost Reduction",
      "Predictable Monthly SLA Delivery",
    ],
  },
  {
    id: "fractional-cfo",
    name: "Fractional CFO Firms",
    shortDesc:
      "Accounting operations support that allows Fractional CFOs to focus on strategic advisory and client relationships.",
    fullDesc:
      "Focus on high-value strategic advisory, financial modeling, and client relationships while Haggai powers your back-office execution with timely month-end closes and reliable financial reporting.",
    icon: ChartBarIcon,
    image: "/images/serve-cfo.png",
    benefits: [
      "Clean Month-End Close Packages",
      "Custom Executive Management Reports",
      "Operational Back-Office Execution",
      "Direct Daily Line of Communication",
    ],
  },
  {
    id: "startups",
    name: "Startups",
    shortDesc:
      "Scalable accounting support that grows alongside your business while keeping financial records accurate and organized.",
    fullDesc:
      "From initial seed funding to Series A growth, Haggai establishes institutional-grade bookkeeping so founders can focus on product-market fit, investor updates, and cash runway optimization.",
    icon: RocketLaunchIcon,
    image: "/images/serve-startups.png",
    benefits: [
      "Audit-Ready Financial Statements",
      "Runway & Cash Flow Visibility",
      "Investor & Board Reporting Support",
      "Flexible Resource Scaling as You Grow",
    ],
  },
  {
    id: "saas-companies",
    name: "SaaS Companies",
    shortDesc:
      "Specialized accounting for subscription-based businesses with recurring revenue and financial reporting expertise.",
    fullDesc:
      "Subscription accounting requires specialized revenue recognition and metrics. Haggai manages ASC 606 compliance, deferred revenue schedules, and key metrics like ARR, MRR, CAC, and Churn.",
    icon: ComputerDesktopIcon,
    image: "/images/serve-saas.png",
    benefits: [
      "ASC 606 Revenue Recognition",
      "Deferred Revenue & Billing Schedules",
      "Subscriptions & Cohort Metrics Tracking",
      "Billing Integration (Stripe & Chargebee)",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce Businesses",
    shortDesc:
      "Accounting solutions designed for online businesses managing high transaction volumes and inventory-related financial operations.",
    fullDesc:
      "High transaction volume, inventory valuation, and multi-channel payouts require precision. Haggai reconciles Shopify, Amazon, and Stripe payouts while automating multi-state sales tax compliance.",
    icon: ShoppingBagIcon,
    image: "/images/serve-ecommerce.png",
    benefits: [
      "Multi-Channel Payout Reconciliation",
      "COGS & Inventory Valuation Tracking",
      "Sales Tax Automation & Filing Support",
      "Real-Time Gross Margin Visibility",
    ],
  },
];

export default function WhoWeServe() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const detailContentRef = useRef<HTMLDivElement>(null);

  const activeClient = clientTypes[activeTab];

  // Initial GSAP Entrance Animation
  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
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

      if (cardsGridRef.current) {
        const cards = Array.from(cardsGridRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }

      if (detailPanelRef.current) {
        tl.fromTo(
          detailPanelRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        );
      }

      // Continuous subtle floating animation for illustration
      if (illustrationRef.current) {
        const floatEl = illustrationRef.current.querySelector(".floating-detail-img");
        if (floatEl) {
          gsap.to(floatEl, {
            y: -8,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      }
    },
    { scope: containerRef }
  );

  // Tab Switching Animation Timeline
  const handleTabChange = (index: number) => {
    if (index === activeTab || isAnimating) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setActiveTab(index);
      return;
    }

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    // Fade out current panel elements
    tl.to([illustrationRef.current, detailContentRef.current], {
      opacity: 0,
      y: -10,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(index);
      },
    });

    // Fade in new panel elements
    tl.fromTo(
      illustrationRef.current,
      { opacity: 0, y: 15, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
    );

    tl.fromTo(
      detailContentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
      "-=0.35"
    );

    // Stagger benefit items
    if (detailContentRef.current) {
      const listItems = detailContentRef.current.querySelectorAll(".benefit-item");
      if (listItems.length > 0) {
        tl.fromTo(
          listItems,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: "power2.out" },
          "-=0.3"
        );
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="who-we-serve"
      aria-labelledby="who-we-serve-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 font-body text-slate-900"
    >
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Who We Serve
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="who-we-serve-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Accounting solutions designed around the way your{" "}
            <span className="text-primary">business operates.</span>
          </h2>

          {/* Supporting Paragraph (Max 3 lines) */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed"
          >
            Every business has unique accounting workflows, financial reporting
            requirements and operational challenges. Explore the business type that best
            matches yours and discover how Haggai can support your growth.
          </p>
        </div>

        {/* BUSINESS TYPE SELECTOR - TOP GRID (6 CARDS) */}
        <div
          ref={cardsGridRef}
          role="tablist"
          aria-label="Select business type to view accounting solutions"
          className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            const isActive = index === activeTab;

            return (
              <div
                key={client.id}
                role="tab"
                id={`tab-${client.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${client.id}`}
                tabIndex={0}
                onClick={() => handleTabChange(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleTabChange(index);
                  }
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive
                    ? "border-primary bg-soft/50 shadow-lg shadow-primary/5 scale-[1.02] ring-2 ring-primary/15"
                    : "border-slate-200/90 bg-white shadow-xs hover:border-primary/40 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                {/* Active Indicator Bar on Top */}
                <div
                  aria-hidden="true"
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isActive ? "bg-primary opacity-100" : "bg-transparent opacity-0"
                  }`}
                />

                <div>
                  {/* Card Header: Icon & Arrow */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20 rotate-3"
                          : "bg-soft text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-3"
                      }`}
                    >
                      <Icon className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
                    </div>

                    <ArrowRightIcon
                      className={`h-5 w-5 text-primary transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-1"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title & Short Description */}
                  <h3
                    className={`mt-5 font-heading text-xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-slate-950 group-hover:text-primary"
                    }`}
                  >
                    {client.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {client.shortDesc}
                  </p>
                </div>

                {/* Bottom Active Label */}
                <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold">
                  <span
                    className={isActive ? "text-primary font-bold" : "text-slate-500 group-hover:text-primary"}
                  >
                    {isActive ? "Currently Selected" : "Click to Explore"}
                  </span>
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DYNAMIC DETAIL PANEL (BELOW CARDS) */}
        <div
          ref={detailPanelRef}
          role="tabpanel"
          id={`panel-${activeClient.id}`}
          aria-labelledby={`tab-${activeClient.id}`}
          className="mt-8 sm:mt-10 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-primary/5"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT COLUMN: CUSTOM AI ILLUSTRATION FOR SELECTED CLIENT TYPE */}
            <div ref={illustrationRef} className="lg:col-span-6 flex items-center justify-center">
              <div className="floating-detail-img relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-inner">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center">
                  <Image
                    src={activeClient.image}
                    alt={`${activeClient.name} accounting illustration`}
                    width={640}
                    height={480}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02] rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DYNAMIC CONTENT DETAILS & BENEFITS */}
            <div ref={detailContentRef} className="lg:col-span-6 flex flex-col justify-center">
              <div className="mb-4 inline-block">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                  {activeClient.name} Solution
                </span>
              </div>

              <h3 className="font-heading text-3xl font-semibold text-slate-950 sm:text-4xl leading-tight">
                Accounting Support Built for {activeClient.name}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                {activeClient.fullDesc}
              </p>

              {/* KEY BENEFITS CHECKLIST */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
                  Key Operational Benefits
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800">
                  {activeClient.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="benefit-item flex items-center gap-2.5 rounded-xl border border-slate-200/60 bg-soft/40 p-3 shadow-2xs"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-2xs">
                        <CheckCircleIcon className="h-4.5 w-4.5 stroke-[2]" />
                      </div>
                      <span className="leading-tight font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
