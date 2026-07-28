"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  CalculatorIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: MagnifyingGlassIcon,
    badge: "Initial Alignment",
    description:
      "We learn about your business, accounting needs, and long-term goals to build the right financial workflow tailored specifically for you.",
    details: [
      "Deep-dive financial review",
      "Software & stack evaluation",
      "Custom roadmap design",
    ],
  },
  {
    number: "02",
    title: "Onboard",
    icon: UserPlusIcon,
    badge: "Seamless Setup",
    description:
      "We set up dedicated communication channels, integrate accounting systems, and define standardized operating procedures for a smooth transition.",
    details: [
      "Secure credential transfer",
      "System integration & sync",
      "Dedicated team assigned",
    ],
  },
  {
    number: "03",
    title: "Manage",
    icon: CalculatorIcon,
    badge: "Daily Operations",
    description:
      "Your dedicated accounting team handles daily bookkeeping, payroll, compliance, and month-end closes with extreme precision.",
    details: [
      "Real-time transaction logging",
      "Payroll & tax compliance",
      "Timely month-end closes",
    ],
  },
  {
    number: "04",
    title: "Grow",
    icon: ArrowTrendingUpIcon,
    badge: "Strategic Scaling",
    description:
      "Receive accurate financial reporting, strategic insights, and ongoing support so you can focus entirely on expanding your business.",
    details: [
      "Executive KPI dashboards",
      "Proactive advisory reviews",
      "Scalable resource allocation",
    ],
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !sectionRef.current ||
      !trackRef.current
    )
      return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isDesktop = window.innerWidth >= 768;

    if (prefersReducedMotion || !isDesktop) return;

    const track = trackRef.current;
    const totalScroll = track.scrollWidth - window.innerWidth + 160;

    const ctx = gsap.context(() => {
      // 1. Header entrance animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      if (badgeRef.current) {
        headerTl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }
      if (headingRef.current) {
        headerTl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }
      if (paragraphRef.current) {
        headerTl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 2. Horizontal Scroll Pinning
      if (pinWrapperRef.current) {
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            pin: true,
            scrub: 1,
            start: "top top+=100",
            end: () => `+=${totalScroll}`,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const idx = Math.min(
                Math.floor(progress * steps.length),
                steps.length - 1,
              );
              setActiveStep(idx);
            },
          },
        });

        pinTl.to(track, {
          x: () => -totalScroll,
          ease: "none",
        });

        // 3. Progress Line drawing animation synchronized with scrub
        if (progressLineRef.current) {
          gsap.to(progressLineRef.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: pinWrapperRef.current,
              start: "top top+=100",
              end: () => `+=${totalScroll}`,
              scrub: 1,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-20 font-body text-slate-900"
    >
      {/* Soft radial blue background glow (opacity under 6%, white-first) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(37,99,235,0.04),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-blue-600"
                aria-hidden="true"
              />
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            id="how-we-work-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            A simple process designed around{" "}
            <span className="text-blue-600">your business.</span>
          </h2>

          {/* Supporting Text */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai follows a transparent step-by-step workflow that keeps you
            informed and confident from initial onboarding through ongoing daily
            accounting support.
          </p>
        </div>
      </div>

      {/* MAIN EXPERIENCE: Pinned Horizontal Scroll on Desktop / Tablet, Vertical Stack on Mobile */}
      <div
        ref={pinWrapperRef}
        className="relative w-full overflow-hidden min-h-115"
      >
        {/* DESKTOP / TABLET HORIZONTAL TRACK (hidden on small screens) */}
        <div className="hidden md:block relative w-full pt-6 pb-12">
          {/* Track container containing progress bar and horizontal cards */}
          <div
            ref={trackRef}
            className="relative flex items-center gap-8 lg:gap-12 px-12 lg:px-24 w-max"
          >
            {/* Connecting progress bar behind cards */}
            <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-1 bg-slate-100 rounded-full z-0 pointer-events-none">
              <div
                ref={progressLineRef}
                className="h-full w-full bg-blue-600 rounded-full origin-left scale-x-0 transition-transform duration-100"
              />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index <= activeStep;

              return (
                <article
                  key={step.number}
                  className={`group relative z-10 w-95 lg:w-110 shrink-0 overflow-hidden rounded-3xl border bg-white p-7 lg:p-8 transition-all duration-500 cursor-default ${
                    isActive
                      ? "border-blue-500 shadow-2xl shadow-blue-900/10 scale-[1.02] ring-2 ring-blue-600/15"
                      : "border-slate-200/90 shadow-xs opacity-85 hover:opacity-100 hover:border-slate-300"
                  }`}
                >
                  {/* Top indicator bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-600"
                        : isPassed
                          ? "bg-blue-400"
                          : "bg-transparent"
                    }`}
                  />

                  {/* Card Header: Step number & Icon badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-heading text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-slate-300"
                      }`}
                    >
                      {step.number}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 rotate-3 scale-110"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon
                        className="h-6 w-6 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-950">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {step.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">
                    {step.description}
                  </p>

                  {/* Deliverable Checklist */}
                  <div className="border-t border-slate-100 pt-4 mt-4">
                    <ul className="space-y-2 text-xs font-medium text-slate-700">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE FALLBACK (md:hidden) */}
        <div className="block md:hidden mx-auto max-w-lg px-5">
          <div className="relative border-l-2 border-blue-200 ml-4 space-y-8 pl-6 py-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8.75 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white text-xs font-bold">
                    ✓
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-bold text-blue-600">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-950 mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
