"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  CogIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  TruckIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industriesData = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: ShieldCheckIcon,
    shortDesc:
      "HIPAA-compliant accounting, medical billing tracking & payroll.",
    strengths: [
      "Regulatory compliance & audit readiness",
      "Specialized medical billing reconciliation",
      "Multi-provider payroll accuracy",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    icon: BuildingOfficeIcon,
    shortDesc: "Job costing, progress billing & contractor payroll management.",
    strengths: [
      "Project job costing & WIP tracking",
      "Subcontractor tax & 1099 compliance",
      "Equipment asset depreciation tracking",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: CogIcon,
    shortDesc: "Inventory valuation, COGS tracking & supply chain accounting.",
    strengths: [
      "Raw materials & inventory accounting",
      "Cost of Goods Sold (COGS) optimization",
      "Vendor payable management & terms",
    ],
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingBagIcon,
    shortDesc: "Multi-channel sales reconciliation & sales tax automation.",
    strengths: [
      "Shopify & Amazon payout reconciliation",
      "Multi-state sales tax compliance",
      "Real-time inventory profit margins",
    ],
  },
  {
    id: "tech-saas",
    name: "Technology & SaaS",
    icon: ComputerDesktopIcon,
    shortDesc:
      "ARR/MRR tracking, deferred revenue & investor financial reporting.",
    strengths: [
      "ASC 606 revenue recognition",
      "Subscription metrics (ARR, CAC, Churn)",
      "Venture audit & investor reporting",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: SparklesIcon,
    shortDesc: "POS integration, tip allocation & daily revenue audits.",
    strengths: [
      "POS & merchant payment sync",
      "Tip allocation & payroll compliance",
      "Prime cost & margin management",
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: TruckIcon,
    shortDesc: "Fleet cost allocation, freight invoicing & driver payroll.",
    strengths: [
      "Fuel & maintenance expense tracking",
      "Freight billing & Accounts Receivable",
      "Multi-state driver payroll processing",
    ],
  },
  {
    id: "services",
    name: "Professional Services",
    icon: BriefcaseIcon,
    shortDesc:
      "Time-tracking billing, partner distributions & client retainers.",
    strengths: [
      "Retainer & project-based accounting",
      "Utilization & realization tracking",
      "Partner equity & dividend planning",
    ],
  },
];

export default function IndustriesWeServe() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeIndustry = industriesData[activeIndex];

  const handleSelectIndustry = (index: number) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 150);
  };

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

      if (hubRef.current) {
        tl.fromTo(
          hubRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (infoPanelRef.current) {
        tl.fromTo(
          infoPanelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
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

      if (hubRef.current) {
        const floatingEl = hubRef.current.querySelector(".floating-hub-img");
        if (floatingEl) {
          gsap.to(floatingEl, {
            y: -10,
            duration: 4,
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
      id="industries"
      aria-labelledby="industries-heading"
      className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-24 font-body text-slate-900"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(0,89,138,0.03),rgba(255,255,255,0))]"
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
              Industries We Serve
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="industries-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Built for businesses across every{" "}
            <span className="text-primary">stage of growth.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai supports businesses across multiple industries by
            understanding the unique financial, reporting, payroll, and
            compliance requirements of each sector.
          </p>
        </div>

        {/* MAIN EXPERIENCE */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column Industry Cards (4 items on Desktop) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col space-y-3.5">
            {industriesData.slice(0, 4).map((industry, index) => {
              const Icon = industry.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={industry.id}
                  onClick={() => handleSelectIndustry(index)}
                  onMouseEnter={() => handleSelectIndustry(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary bg-soft/40 shadow-lg shadow-primary/5 scale-[1.02] ring-2 ring-primary/15"
                      : "border-slate-200/90 bg-white shadow-xs hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/20 rotate-3"
                            : "bg-soft text-primary group-hover:bg-primary group-hover:text-white"
                        }`}
                      >
                        <Icon
                          className="h-5 w-5 stroke-[1.8]"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-sm font-semibold text-slate-950 group-hover:text-primary transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {industry.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon
                      className={`h-4 w-4 text-primary transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Centerpiece: Illustration + Dynamic Detail Panel */}
          <div
            ref={hubRef}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="floating-hub-img relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-primary/5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
              >
                <div className="h-72 w-72 rounded-full border border-dashed border-secondary animate-spin-slow" />
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center">
                <Image
                  src="/images/industries-ecosystem.png"
                  alt="Interconnected business ecosystem surrounded by industry specialization"
                  width={600}
                  height={450}
                  priority
                  className="h-full w-full object-contain p-2 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Dynamic Info Panel */}
            <div
              ref={infoPanelRef}
              className={`mt-6 w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md shadow-primary/5 transition-opacity duration-300 ${
                isFading ? "opacity-30" : "opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-white shadow-xs">
                  {activeIndustry.name}
                </span>
                <span className="text-xs font-semibold text-primary">
                  Haggai Industry Expertise
                </span>
              </div>

              <p className="text-sm font-medium text-slate-700 mt-2">
                {activeIndustry.shortDesc}
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-2">
                  Specialized Financial Strengths
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-800">
                  {activeIndustry.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-center gap-1.5 bg-soft/50 rounded-lg p-2 border border-secondary/20 shadow-2xs"
                    >
                      <CheckCircleIcon className="h-4 w-4 text-primary shrink-0" />
                      <span className="leading-tight">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Industry Cards (4 items on Desktop) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col space-y-3.5">
            {industriesData.slice(4, 8).map((industry, index) => {
              const actualIndex = index + 4;
              const Icon = industry.icon;
              const isActive = actualIndex === activeIndex;
              return (
                <button
                  type="button"
                  key={industry.id}
                  onClick={() => handleSelectIndustry(actualIndex)}
                  onMouseEnter={() => handleSelectIndustry(actualIndex)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary bg-soft/40 shadow-lg shadow-primary/5 scale-[1.02] ring-2 ring-primary/15"
                      : "border-slate-200/90 bg-white shadow-xs hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/20 rotate-3"
                            : "bg-soft text-primary group-hover:bg-primary group-hover:text-white"
                        }`}
                      >
                        <Icon
                          className="h-5 w-5 stroke-[1.8]"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-sm font-semibold text-slate-950 group-hover:text-primary transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {industry.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon
                      className={`h-4 w-4 text-primary transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* TABLET / MOBILE ALL CARDS GRID */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:hidden"
          >
            {industriesData.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  key={industry.id}
                  onClick={() => handleSelectIndustry(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary bg-soft/50 shadow-md ring-2 ring-primary/20"
                      : "border-slate-200/90 bg-white shadow-xs hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-soft text-primary"
                        }`}
                      >
                        <Icon
                          className="h-5 w-5 stroke-[1.8]"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-slate-950">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {industry.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ArrowRightIcon
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div ref={bottomCtaRef} className="mt-14 sm:mt-16 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-950 mb-3">
            Looking for accounting expertise tailored to your industry?
          </h3>

          <Link
            href="/about#industries"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          >
            <span>Explore Industries</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <p className="mt-3 text-sm font-medium text-slate-600 sm:text-base">
            Learn how Haggai supports businesses across a wide range of sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
