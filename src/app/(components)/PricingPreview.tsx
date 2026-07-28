"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const plans = [
  {
    id: "starter",
    name: "Starter",
    bestFor: "Startups & Small Businesses",
    description: "Ideal for businesses beginning their accounting journey.",
    ctaText: "Get Started",
    ctaHref: "/contact?plan=starter",
    isFeatured: false,
    icon: RocketLaunchIcon,
    features: [
      "Monthly ledger bookkeeping",
      "Bank & credit card reconciliation",
      "Quarterly financial statements",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    bestFor: "Growing Businesses",
    description:
      "A complete accounting solution with dedicated support for businesses ready to scale.",
    ctaText: "Talk to an Expert",
    ctaHref: "/contact?plan=growth",
    isFeatured: true,
    icon: SparklesIcon,
    features: [
      "Everything in Starter",
      "Monthly P&L & Balance Sheet reporting",
      "Dedicated Senior CPA oversight",
      "Payroll & tax compliance support",
      "Faster month-end closes",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    bestFor: "Large Organizations",
    description:
      "Tailored accounting services for businesses with complex financial operations.",
    ctaText: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
    isFeatured: false,
    icon: BuildingOffice2Icon,
    features: [
      "Custom multi-entity bookkeeping",
      "Dedicated offshore accounting team",
      "Virtual CFO advisory & forecasting",
      "Priority 24/7 dedicated support",
    ],
  },
];

export default function PricingPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
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
          start: "top 75%",
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

      // Featured center card rises first
      if (featuredCardRef.current) {
        tl.fromTo(
          featuredCardRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1.05, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        );
      }

      // Side cards slide in
      if (leftCardRef.current) {
        tl.fromTo(
          leftCardRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        );
      }
      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=0.6"
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

      // Gentle floating animation on featured card
      if (featuredCardRef.current) {
        gsap.to(featuredCardRef.current, {
          y: -8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden bg-[#0B1120] py-20 sm:py-24 lg:py-28 font-body text-white"
    >
      {/* Radial Blue Spotlight Background Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:h-[700px] sm:w-[700px] rounded-full bg-blue-600/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-4 py-1.5 text-xs font-semibold text-blue-400 shadow-sm backdrop-blur-md sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-blue-400"
                aria-hidden="true"
              />
              Transparent Pricing
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="pricing-heading"
            className="font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Simple pricing built around{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
          >
            Haggai offers flexible accounting solutions designed for businesses of different
            sizes, with transparent pricing and zero hidden complexity.
          </p>
        </div>

        {/* MAIN EXPERIENCE: SPOTLIGHT PRICING CARDS SHOWCASE */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
          {/* PLAN 1: STARTER (Left Card) */}
          <div
            ref={leftCardRef}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] p-7 lg:p-8 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-950/20 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                {plans[0].bestFor}
              </span>
              <RocketLaunchIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
            </div>

            <h3 className="font-heading text-2xl font-semibold text-white">
              {plans[0].name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
              {plans[0].description}
            </p>

            <div className="mt-6 border-t border-slate-800 pt-6 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                What&apos;s Included:
              </span>
              {plans[0].features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircleIcon className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={plans[0].ctaHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-blue-500 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{plans[0].ctaText}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* PLAN 2: GROWTH (CENTER FEATURED SPOTLIGHT CARD) */}
          <div
            ref={featuredCardRef}
            className="group relative overflow-hidden rounded-3xl border-2 border-blue-500 bg-[#111827] p-8 lg:p-9 shadow-2xl shadow-blue-600/25 transition-all duration-300 lg:scale-[1.05] z-20 hover:shadow-blue-600/40 hover:scale-[1.07]"
          >
            {/* Glowing Spotlight Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-600/20 blur-2xl group-hover:bg-blue-600/30 transition-all duration-500"
            />

            {/* "Most Popular" Floating Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-1 text-xs font-bold text-white shadow-md shadow-blue-600/30">
                <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {plans[1].badge}
              </span>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                {plans[1].bestFor}
              </span>
            </div>

            <h3 className="font-heading text-3xl font-semibold text-white">
              {plans[1].name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[40px]">
              {plans[1].description}
            </p>

            <div className="mt-6 border-t border-slate-800 pt-6 space-y-3">
              <span className="text-xs font-semibold text-blue-300 block mb-2">
                Everything in Starter, plus:
              </span>
              {plans[1].features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-xs font-medium text-slate-100">
                  <CheckCircleIcon className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={plans[1].ctaHref}
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>{plans[1].ctaText}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* PLAN 3: ENTERPRISE (Right Card) */}
          <div
            ref={rightCardRef}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] p-7 lg:p-8 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-950/20 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                {plans[2].bestFor}
              </span>
              <BuildingOffice2Icon className="h-5 w-5 text-slate-400" aria-hidden="true" />
            </div>

            <h3 className="font-heading text-2xl font-semibold text-white">
              {plans[2].name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
              {plans[2].description}
            </p>

            <div className="mt-6 border-t border-slate-800 pt-6 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Tailored Enterprise Features:
              </span>
              {plans[2].features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircleIcon className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={plans[2].ctaHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-blue-500 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{plans[2].ctaText}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div ref={bottomCtaRef} className="mt-16 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2">
            Need something tailored to your business?
          </h3>

          <p className="mx-auto text-sm text-slate-400 max-w-xl mb-6">
            Every business is unique. Let&apos;s build a pricing plan that fits your exact accounting needs and scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>View Full Pricing</span>
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
