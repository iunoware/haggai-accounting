"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CheckCircleIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinancialDashboardCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const widgetsContainerRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);

  // Animated state counter for Financial Health
  const [healthScore, setHealthScore] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setHealthScore(92);
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          onEnter: () => {
            // Animate health counter when scrolling into view
            gsap.to(
              { val: 0 },
              {
                val: 92,
                duration: 1.8,
                ease: "power2.out",
                onUpdate: function () {
                  setHealthScore(Math.round(this.targets()[0].val));
                },
              },
            );
          },
        },
      });

      // 1. Badge reveal
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      // 2. Heading reveal
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 3. Paragraph reveal
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 4. Dashboard transformation: Blur dissolves and dashboard scales into view
      if (dashboardRef.current) {
        tl.fromTo(
          dashboardRef.current,
          { opacity: 0, y: 40, scale: 0.96, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }

      // 5. Individual widgets reveal sequentially
      if (widgetsContainerRef.current) {
        const widgets = Array.from(widgetsContainerRef.current.children);
        tl.fromTo(
          widgets,
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }

      // 6. Bottom Highlight Panel & CTAs reveal last
      if (bottomPanelRef.current) {
        tl.fromTo(
          bottomPanelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
      }

      // Micro Animation: Dashboard gentle continuous floating motion
      if (dashboardRef.current) {
        gsap.to(dashboardRef.current, {
          y: -8,
          duration: 4.5,
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
      id="financial-dashboard-cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#f7f7f7] py-20 sm:py-24 lg:py-28 font-body text-slate-900"
    >
      {/* Pure white base with subtle radial blue ambient background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_45%,rgba(0,89,138,0.04),rgba(255,255,255,0))]"
      />

      {/* Very soft floating geometric light shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-1/4 h-105 w-105 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Ready to Grow?
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="cta-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Your business deserves a{" "}
            <span className="text-primary">clearer financial picture.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai helps businesses gain complete visibility over their finances
            through accurate bookkeeping, timely reporting and dedicated
            accounting support.
          </p>
        </div>

        {/* MAIN EXPERIENCE: PREMIUM SAAS FINANCIAL DASHBOARD UI (3x2 GRID) */}
        <div className="mt-10 lg:mt-16 max-w-5xl mx-auto">
          <div
            ref={dashboardRef}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-primary/10 transition-all duration-500"
          >
            {/* Top SaaS Browser / App Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 bg-slate-100/70 px-5 sm:px-7 py-3.5 text-xs">
              {/* Traffic Light Control Dots */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 hidden sm:inline-block font-mono font-medium text-slate-500">
                  haggai.app/executive-dashboard
                </span>
              </div>

              {/* App Status Indicator & Client Context */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync Active
                </span>
                <span className="hidden md:inline-block font-semibold text-slate-700">
                  Apex Tech Solutions
                </span>
              </div>
            </div>

            {/* DASHBOARD WIDGETS GRID (6 WIDGETS IN 3x2 LAYOUT) */}
            <div
              ref={widgetsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 bg-slate-50/50"
            >
              {/* WIDGET 1: FINANCIAL HEALTH (Circular Progress) */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Financial Health
                  </span>
                  <ShieldCheckIcon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-4 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* SVG Circular Ring Meter */}
                    <svg className="h-28 w-28 -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary transition-all duration-1000 ease-out"
                        strokeDasharray={`${healthScore}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="font-heading text-2xl font-bold text-slate-950">
                        {healthScore}%
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                        Healthy
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Score based on liquidity &amp; debt ratios
                </p>
              </div>

              {/* WIDGET 2: REVENUE TREND (Smooth Line Chart) */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Revenue Trend
                  </span>
                  <ArrowTrendingUpIcon
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-2">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 block">
                    $128,450
                  </span>
                  <span className="inline-flex items-center text-xs font-bold text-emerald-600 gap-0.5">
                    ↑ +18.4% vs last Qtr
                  </span>
                </div>

                {/* Smooth SVG Line Chart */}
                <div className="h-16 w-full mt-2">
                  <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 100 40"
                  >
                    <defs>
                      <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#00598A"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#00598A"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 32 Q 25 28, 50 16 T 100 6 L 100 40 L 0 40 Z"
                      fill="url(#revGrad)"
                    />
                    <path
                      d="M0 32 Q 25 28, 50 16 T 100 6"
                      fill="none"
                      stroke="#00598A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="6" r="3.5" className="fill-primary" />
                    <circle cx="100" cy="6" r="3" className="fill-primary" />
                  </svg>
                </div>
              </div>

              {/* WIDGET 3: CASH FLOW (Area Chart) */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Net Runway
                  </span>
                  <BanknotesIcon
                    className="h-5 w-5 text-secondary"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-2">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-slate-950 block">
                    $342,100
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    18.4 Months Runway
                  </span>
                </div>

                {/* Mini Area Chart SVG */}
                <div className="h-16 w-full mt-2">
                  <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 100 40"
                  >
                    <path
                      d="M0 25 Q 30 35, 60 15 T 100 10 L 100 40 L 0 40 Z"
                      className="fill-soft/60"
                    />
                    <path
                      d="M0 25 Q 30 35, 60 15 T 100 10"
                      fill="none"
                      stroke="#508BC0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* WIDGET 4: COMPLIANCE STATUS (Green Indicator) */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Tax &amp; Compliance
                  </span>
                  <CheckCircleIcon
                    className="h-5 w-5 text-emerald-600"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-3 flex items-center gap-3">
                  <div className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-heading text-xl font-bold text-slate-950">
                    Up To Date
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-snug">
                  Federal, state &amp; 1099 filings completed on schedule.
                </p>
              </div>

              {/* WIDGET 5: PAYROLL STATUS */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Payroll Status
                  </span>
                  <UserGroupIcon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-2">
                  <span className="text-sm font-bold text-slate-950 block">
                    All Employees Processed
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">
                    ✓ 48 Direct Deposits Cleared
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  Automated tax withholdings applied
                </p>
              </div>

              {/* WIDGET 6: MONTHLY REPORTS */}
              <div className="group/widget relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Month-End Close
                  </span>
                  <DocumentCheckIcon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="my-2">
                  <span className="text-sm font-bold text-slate-950 block">
                    Delivered On Time
                  </span>
                  <span className="text-xs font-semibold text-primary">
                    ✓ July P&amp;L Signed Off by CPA
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  Ready for board &amp; executive review
                </p>
              </div>
            </div>

            {/* BOTTOM HIGHLIGHT PANEL INSIDE DASHBOARD */}
            <div
              ref={bottomPanelRef}
              className="border-t border-slate-200/90 bg-linear-to-r from-blue-50/90 via-slate-50 to-sky-50/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase mb-1">
                  <CheckCircleIcon
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  Clear Financial Future
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-950">
                  Everything looks on track.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  With the right accounting partner, your business gains the
                  clarity needed to make smarter financial decisions and scale
                  with total confidence.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#004870] hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact?type=team"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-xs transition-all duration-300 hover:border-primary hover:text-primary hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <PhoneIcon
                    className="h-4 w-4 text-slate-500"
                    aria-hidden="true"
                  />
                  <span>Talk to Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
