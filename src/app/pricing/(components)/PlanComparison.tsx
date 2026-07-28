"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CheckIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ValueIndicatorBadge from "./ValueIndicatorBadge";
import { comparisonCategoriesData } from "../(config)/comparisonConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const planHeaders = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    period: "/ mo",
    bestFor: "Startups",
    isFeatured: false,
    ctaLabel: "Get Started",
    ctaLink: "/contact?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$999",
    period: "/ mo",
    bestFor: "Growing Businesses",
    isFeatured: true,
    badge: "Most Popular",
    ctaLabel: "Get Started",
    ctaLink: "/contact?plan=growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "Tailored Scope",
    bestFor: "Large Organizations",
    isFeatured: false,
    ctaLabel: "Talk to an Advisor",
    ctaLink: "/contact?plan=enterprise",
  },
];

export default function PlanComparison() {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            badgeRef.current,
            headingRef.current,
            paragraphRef.current,
            matrixRef.current,
          ],
          {
            opacity: 1,
            y: 0,
          }
        );
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Badge fades upward
      if (badgeRef.current) {
        timeline.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }

      // 2. Heading reveals
      if (headingRef.current) {
        timeline.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      // 3. Supporting text fades
      if (paragraphRef.current) {
        timeline.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      // 4. Matrix container appears & rows stagger
      if (matrixRef.current) {
        timeline.fromTo(
          matrixRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );

        const rows = matrixRef.current.querySelectorAll(".comparison-row");
        if (rows.length > 0) {
          timeline.fromTo(
            rows,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.04,
              ease: "power2.out",
            },
            "-=0.5"
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="plan-comparison"
      aria-labelledby="comparison-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 font-body text-slate-900"
    >
      {/* Background ambient radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_35%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/4 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
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
              Compare Plans
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="comparison-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            See exactly what&apos;s included in{" "}
            <span className="text-primary">every plan.</span>
          </h2>

          {/* Supporting Paragraph (Max 3 lines) */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed"
          >
            Compare services, support levels and included features side by side to
            confidently choose the accounting plan that best fits your business.
          </p>
        </div>

        {/* MAIN COMPARISON MATRIX CONTAINER */}
        <div
          ref={matrixRef}
          className="mt-14 sm:mt-16 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-primary/5"
        >
          {/* Scrollable Container for Mobile & Tablet */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left">
              {/* STICKY PLAN HEADERS */}
              <thead className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
                <tr>
                  {/* Left Column: Feature Label Header */}
                  <th
                    scope="col"
                    className="w-2/5 p-5 align-bottom font-heading text-lg sm:text-xl font-bold text-slate-950"
                  >
                    <span>Features &amp; Services</span>
                    <span className="block text-xs font-medium font-body text-slate-500 mt-1">
                      Side-by-side plan breakdown
                    </span>
                  </th>

                  {/* 3 Plan Columns */}
                  {planHeaders.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      onMouseEnter={() => setHoveredColumn(plan.id)}
                      onMouseLeave={() => setHoveredColumn(null)}
                      className={`w-1/5 p-5 text-center align-top transition-colors duration-300 ${
                        plan.isFeatured
                          ? "border-x-2 border-primary bg-gradient-to-b from-soft/30 via-white to-white"
                          : hoveredColumn === plan.id
                          ? "bg-soft/20"
                          : ""
                      }`}
                    >
                      {/* Fixed height top badge container for PERFECT horizontal alignment across all 3 columns */}
                      <div className="h-6 flex items-center justify-center mb-1.5">
                        {plan.isFeatured && plan.badge ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                            <SparklesIcon
                              className="h-3 w-3"
                              aria-hidden="true"
                            />
                            {plan.badge}
                          </span>
                        ) : null}
                      </div>

                      {/* Best For Pill */}
                      <div className="min-h-6 flex items-center justify-center mb-1.5">
                        <span className="inline-block rounded-full bg-soft/70 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                          {plan.bestFor}
                        </span>
                      </div>

                      {/* Plan Title */}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 leading-tight">
                        {plan.name}
                      </h3>

                      {/* Pricing */}
                      <div className="mt-2 flex items-baseline justify-center gap-1">
                        <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-950">
                          {plan.price}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {plan.period}
                        </span>
                      </div>

                      {/* Action CTA Button */}
                      <div className="mt-3.5">
                        <Link
                          href={plan.ctaLink}
                          className={`inline-flex w-full items-center justify-center gap-1 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                            plan.isFeatured
                              ? "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-[#004870]"
                              : "border border-primary text-primary hover:bg-soft/60"
                          }`}
                        >
                          <span>{plan.ctaLabel}</span>
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* MATRIX FEATURE CATEGORIES & ROWS */}
              <tbody>
                {comparisonCategoriesData.map((category) => (
                  <tr key={category.name} className="contents">
                    {/* Category Header Row */}
                    <td
                      colSpan={4}
                      className="bg-slate-100/80 px-6 py-3.5 border-y border-slate-200/80"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-base sm:text-lg font-bold text-slate-950 tracking-wide">
                          {category.name}
                        </span>
                        <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                          {category.description}
                        </span>
                      </div>
                    </td>

                    {/* Feature Rows under this category */}
                    {category.features.map((feature, idx) => (
                      <tr
                        key={feature.id}
                        className={`comparison-row group/row transition-colors duration-200 ${
                          idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                        } hover:bg-soft/40`}
                      >
                        {/* Feature Name */}
                        <td className="p-4 sm:p-5 border-b border-slate-100 font-medium text-xs sm:text-sm text-slate-800">
                          <span className="group-hover/row:text-primary transition-colors">
                            {feature.name}
                          </span>
                        </td>

                        {/* Starter Value */}
                        <td
                          onMouseEnter={() => setHoveredColumn("starter")}
                          onMouseLeave={() => setHoveredColumn(null)}
                          className={`p-4 sm:p-5 text-center border-b border-slate-100 ${
                            hoveredColumn === "starter" ? "bg-soft/20" : ""
                          }`}
                        >
                          <ValueIndicatorBadge indicator={feature.starter} />
                        </td>

                        {/* Growth Value (Featured Column with primary border) */}
                        <td
                          onMouseEnter={() => setHoveredColumn("growth")}
                          onMouseLeave={() => setHoveredColumn(null)}
                          className={`p-4 sm:p-5 text-center border-b border-slate-100 border-x-2 border-primary/40 ${
                            hoveredColumn === "growth" ? "bg-soft/30" : "bg-soft/10"
                          }`}
                        >
                          <ValueIndicatorBadge indicator={feature.growth} />
                        </td>

                        {/* Enterprise Value */}
                        <td
                          onMouseEnter={() => setHoveredColumn("enterprise")}
                          onMouseLeave={() => setHoveredColumn(null)}
                          className={`p-4 sm:p-5 text-center border-b border-slate-100 ${
                            hoveredColumn === "enterprise" ? "bg-soft/20" : ""
                          }`}
                        >
                          <ValueIndicatorBadge indicator={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM REASSURANCE */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Have questions about specific feature scope or custom service levels?{" "}
            <Link
              href="/contact"
              className="text-primary font-bold underline underline-offset-4 hover:text-[#004870]"
            >
              Contact our team for a detailed walkthrough
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
