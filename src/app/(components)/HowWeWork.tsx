"use client";

import { useEffect, useRef, useState, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    icon: MagnifyingGlassIcon,
    badge: "Initial Conversation",
    description:
      "We start with a focused conversation to understand your business, current challenges, accounting needs, and goals.",
    details: [
      "Understand your business",
      "Identify key challenges",
      "Discuss goals & priorities",
    ],
  },
  {
    number: "02",
    title: "Business Assessment",
    icon: ClipboardDocumentCheckIcon,
    badge: "Business Review",
    description:
      "We assess your existing financial processes, systems, and workflows to identify gaps, inefficiencies, and opportunities for improvement.",
    details: [
      "Review current processes",
      "Identify operational gaps",
      "Evaluate systems & workflows",
    ],
  },
  {
    number: "03",
    title: "Solution Design",
    icon: WrenchScrewdriverIcon,
    badge: "Tailored Strategy",
    description:
      "We design a tailored accounting and financial operations solution aligned with your business requirements and long-term objectives.",
    details: [
      "Design the right workflow",
      "Define processes & systems",
      "Build a tailored solution",
    ],
  },
  {
    number: "04",
    title: "Seamless Delivery",
    icon: ArrowTrendingUpIcon,
    badge: "Ongoing Support",
    description:
      "We implement the solution seamlessly and provide ongoing support to ensure your financial operations run accurately, efficiently, and reliably.",
    details: [
      "Seamless implementation",
      "Reliable ongoing operations",
      "Continuous support & improvement",
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden bg-slate-50/60 py-15 font-body text-slate-900"
    >
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            id="how-we-work-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl leading-[1.1]"
          >
            A simple, proven path from first conversation to fully operational
            support{" "}
            <span className="text-primary">
              no long onboarding, no guesswork.
            </span>
          </h2>

          {/* Supporting Text */}
          {/* <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai follows a transparent step-by-step workflow that keeps you
            informed and confident from initial onboarding through ongoing daily
            accounting support.
          </p> */}
        </div>
      </div>

      {/* MAIN EXPERIENCE: Pinned Horizontal Scroll on Desktop / Mobile Vertical Stack */}
      <div
        ref={pinWrapperRef}
        className="relative w-full overflow-hidden min-h-115"
      >
        {/* DESKTOP / TABLET HORIZONTAL TRACK */}
        <div className="hidden md:block relative w-full pt-6 pb-12">
          <div
            ref={trackRef}
            className="relative flex items-center gap-3 lg:gap-5 px-12 lg:px-24 w-max"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index <= activeStep;

              return (
                <Fragment key={step.number}>
                  <article
                    className={`group relative z-10 w-95 lg:w-110 shrink-0 overflow-hidden rounded-3xl border bg-white p-7 lg:p-8 transition-all duration-500 cursor-default ${
                      isActive
                        ? "border-primary shadow-2xl shadow-primary/10 scale-[1.02] ring-2 ring-primary/15"
                        : "border-slate-200/90 shadow-xs opacity-85 hover:opacity-100 hover:border-slate-300"
                    }`}
                  >
                    {/* Top indicator bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300 ${
                        isActive
                          ? "bg-primary"
                          : isPassed
                            ? "bg-secondary"
                            : "bg-transparent"
                      }`}
                    />

                    {/* Card Header: Step number & Icon badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-heading text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-slate-300"
                        }`}
                      >
                        {step.number}
                      </span>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/25 rotate-3 scale-110"
                            : "bg-soft text-primary"
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
                      <h3 className="font-heading text-xl lg:text-2xl font-semibold text-slate-950">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-primary border border-secondary/30">
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
                            <CheckCircleIcon className="h-4 w-4 text-primary shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  {/* Refined Inter-Card Connector Segment */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="shrink-0 flex items-center justify-center w-8 lg:w-12 pointer-events-none select-none"
                    >
                      <div className="relative w-full h-[2px] rounded-full overflow-hidden bg-slate-200/60">
                        <div
                          className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                            index < activeStep
                              ? "w-full bg-primary opacity-100 shadow-xs shadow-primary/30"
                              : index === activeStep
                                ? "w-full bg-primary/70 opacity-80"
                                : "w-0 bg-primary/20 opacity-20"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE FALLBACK */}
        <div className="block md:hidden mx-auto max-w-lg px-5">
          <div className="relative border-l-2 border-secondary/30 ml-4 space-y-8 pl-6 py-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs"
                >
                  <div className="absolute -left-8.75 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white ring-4 ring-white text-xs font-bold">
                    ✓
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-bold text-[#00598A]">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-primary">
                      <Icon
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-slate-950 mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-3.5 w-3.5 text-primary shrink-0" />
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
