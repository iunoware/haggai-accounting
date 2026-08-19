"use client";

import { useEffect, useRef, useState, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  // UserPlusIcon,
  // CalculatorIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// const steps = [
//   {
//     number: "01",
//     title: "Discover",
//     icon: MagnifyingGlassIcon,
//     badge: "Initial Alignment",
//     description:
//       "We learn about your business, accounting needs, and long-term goals to build the right financial workflow tailored specifically for you.",
//     details: [
//       "Deep-dive financial review",
//       "Software & stack evaluation",
//       "Custom roadmap design",
//     ],
//   },
//   {
//     number: "02",
//     title: "Onboard",
//     icon: UserPlusIcon,
//     badge: "Seamless Setup",
//     description:
//       "We set up dedicated communication channels, integrate accounting systems, and define standardized operating procedures for a smooth transition.",
//     details: [
//       "Secure credential transfer",
//       "System integration & sync",
//       "Dedicated team assigned",
//     ],
//   },
//   {
//     number: "03",
//     title: "Manage",
//     icon: CalculatorIcon,
//     badge: "Daily Operations",
//     description:
//       "Your dedicated accounting team handles daily bookkeeping, payroll, compliance, and month-end closes with extreme precision.",
//     details: [
//       "Real-time transaction logging",
//       "Payroll & tax compliance",
//       "Timely month-end closes",
//     ],
//   },
//   {
//     number: "04",
//     title: "Grow",
//     icon: ArrowTrendingUpIcon,
//     badge: "Strategic Scaling",
//     description:
//       "Receive accurate financial reporting, strategic insights, and ongoing support so you can focus entirely on expanding your business.",
//     details: [
//       "Executive KPI dashboards",
//       "Proactive advisory reviews",
//       "Scalable resource allocation",
//     ],
//   },
// ];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    icon: MagnifyingGlassIcon,
    badge: "Initial Understanding",
    description:
      'We start by understanding your business, your current pain points, and what "better" looks like for you.',
    details: [
      "Understand your business",
      "Identify current pain points",
      "Define what better looks like",
    ],
  },
  {
    number: "02",
    title: "Business Assessment",
    icon: ClipboardDocumentCheckIcon,
    badge: "Process Evaluation",
    description:
      "We take a closer look at your existing processes, systems, and workflows to identify exactly where we can add value.",
    details: [
      "Review existing processes",
      "Evaluate systems & workflows",
      "Identify opportunities to add value",
    ],
  },
  {
    number: "03",
    title: "Solution Design",
    icon: PencilSquareIcon,
    badge: "Tailored Engagement",
    description:
      "We design a tailored engagement — scoped to your needs, not a generic package.",
    details: [
      "Define the right scope",
      "Build a tailored approach",
      "Align solutions with your needs",
    ],
  },
  {
    number: "04",
    title: "Knowledge Transition",
    icon: ArrowsRightLeftIcon,
    badge: "Smooth Transition",
    description:
      "We work closely with your team to transition responsibilities smoothly, with no disruption to day-to-day operations.",
    details: [
      "Work closely with your team",
      "Transition responsibilities smoothly",
      "Minimize operational disruption",
    ],
  },
  {
    number: "05",
    title: "Service Delivery",
    icon: CheckCircleIcon,
    badge: "Reliable Execution",
    description:
      "We take ownership of the agreed scope, delivering consistent, reliable results.",
    details: [
      "Take ownership of agreed scope",
      "Deliver consistent results",
      "Maintain reliable service",
    ],
  },
  {
    number: "06",
    title: "Continuous Improvement",
    icon: ArrowTrendingUpIcon,
    badge: "Ongoing Improvement",
    description:
      'We don\'t stop at "working" — we continually look for ways to improve accuracy, speed, and efficiency.',
    details: [
      "Improve accuracy",
      "Increase operational speed",
      "Drive greater efficiency",
    ],
  },
];

// const steps = [
//   {
//     number: "01",
//     title: "Discovery Call",
//     icon: MagnifyingGlassIcon,
//     description:
//       'We start by understanding your business, your current pain points, and what "better" looks like for you.',
//   },
//   {
//     number: "02",
//     title: "Business Assessment",
//     icon: ClipboardDocumentCheckIcon,
//     description:
//       "We take a closer look at your existing processes, systems, and workflows to identify exactly where we can add value.",
//   },
//   {
//     number: "03",
//     title: "Solution Design",
//     icon: PencilSquareIcon,
//     description:
//       "We design a tailored engagement — scoped to your needs, not a generic package.",
//   },
//   {
//     number: "04",
//     title: "Knowledge Transition",
//     icon: ArrowsRightLeftIcon,
//     description:
//       "We work closely with your team to transition responsibilities smoothly, with no disruption to day-to-day operations.",
//   },
//   {
//     number: "05",
//     title: "Service Delivery",
//     icon: CheckCircleIcon,
//     description:
//       "We take ownership of the agreed scope, delivering consistent, reliable results.",
//   },
//   {
//     number: "06",
//     title: "Continuous Improvement",
//     icon: ArrowTrendingUpIcon,
//     description:
//       'We don\'t stop at "working" — we continually look for ways to improve accuracy, speed, and efficiency.',
//   },
// ];

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
      className="relative overflow-hidden bg-slate-50/60 py-20 sm:py-24 lg:py-24 font-body text-slate-900"
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
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            A simple process designed around{" "}
            <span className="text-primary">your business.</span>
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
                      <div className="relative w-full h-0.5 rounded-full overflow-hidden bg-slate-200/60">
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
                    <span className="font-heading text-3xl font-bold text-primary">
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

// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import {
//   ArrowRightIcon,
//   ArrowDownIcon,
//   MagnifyingGlassIcon,
//   ClipboardDocumentCheckIcon,
//   PencilSquareIcon,
//   ArrowsRightLeftIcon,
//   CheckCircleIcon,
//   ArrowTrendingUpIcon,
// } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: "01",
//     title: "Discovery Call",
//     icon: MagnifyingGlassIcon,
//     description:
//       'We start by understanding your business, your current pain points, and what "better" looks like for you.',
//   },
//   {
//     number: "02",
//     title: "Business Assessment",
//     icon: ClipboardDocumentCheckIcon,
//     description:
//       "We take a closer look at your existing processes, systems, and workflows to identify exactly where we can add value.",
//   },
//   {
//     number: "03",
//     title: "Solution Design",
//     icon: PencilSquareIcon,
//     description:
//       "We design a tailored engagement — scoped to your needs, not a generic package.",
//   },
//   {
//     number: "04",
//     title: "Knowledge Transition",
//     icon: ArrowsRightLeftIcon,
//     description:
//       "We work closely with your team to transition responsibilities smoothly, with no disruption to day-to-day operations.",
//   },
//   {
//     number: "05",
//     title: "Service Delivery",
//     icon: CheckCircleIcon,
//     description:
//       "We take ownership of the agreed scope, delivering consistent, reliable results.",
//   },
//   {
//     number: "06",
//     title: "Continuous Improvement",
//     icon: ArrowTrendingUpIcon,
//     description:
//       'We don\'t stop at "working" — we continually look for ways to improve accuracy, speed, and efficiency.',
//   },
// ];

// export default function HowWeWork() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useGSAP(
//     () => {
//       const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//       if (reduceMotion) {
//         gsap.set(
//           [
//             ".process-eyebrow",
//             ".process-heading-line",
//             ".process-description",
//             ".process-card",
//             ".process-connector",
//             ".process-cta",
//             ".process-scroll",
//           ],
//           {
//             opacity: 1,
//             visibility: "visible",
//             x: 0,
//             y: 0,
//             scale: 1,
//             clearProps: "transform",
//           },
//         );

//         return;
//       }

//       const ctx = gsap.context(() => {
//         /* Header animation*/
//         const headerTimeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 78%",
//             toggleActions: "play none none none",
//             once: true,
//           },
//         });

//         headerTimeline
//           .fromTo(
//             ".process-eyebrow",
//             {
//               opacity: 0,
//               y: 18,
//             },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.6,
//               ease: "power3.out",
//             },
//           )
//           .fromTo(
//             ".process-heading-line",
//             {
//               opacity: 0,
//               yPercent: 110,
//             },
//             {
//               opacity: 1,
//               yPercent: 0,
//               duration: 0.9,
//               stagger: 0.12,
//               ease: "power4.out",
//             },
//             "-=0.3",
//           )
//           .fromTo(
//             ".process-description",
//             {
//               opacity: 0,
//               y: 20,
//             },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.7,
//               ease: "power3.out",
//             },
//             "-=0.45",
//           );

//         /* Desktop card animation*/
//         gsap.fromTo(
//           ".process-card",
//           {
//             opacity: 0,
//             y: 45,
//             scale: 0.96,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.7,
//             stagger: 0.12,
//             ease: "power3.out",
//             clearProps: "transform",
//             scrollTrigger: {
//               trigger: ".process-desktop-track",
//               start: "top 82%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//           },
//         );

//         gsap.fromTo(
//           ".process-connector",
//           {
//             scaleX: 0,
//             transformOrigin: "left center",
//           },
//           {
//             scaleX: 1,
//             duration: 0.6,
//             stagger: 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: ".process-desktop-track",
//               start: "top 80%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//           },
//         );

//         /* Mobile cards*/
//         gsap.fromTo(
//           ".process-mobile-card",
//           {
//             opacity: 0,
//             y: 25,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.65,
//             stagger: 0.12,
//             ease: "power3.out",
//             clearProps: "transform",
//             scrollTrigger: {
//               trigger: ".process-mobile-list",
//               start: "top 82%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//           },
//         );

//         /* CTA*/
//         gsap.fromTo(
//           ".process-cta",
//           {
//             opacity: 0,
//             y: 30,
//             scale: 0.98,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             clearProps: "transform",
//             scrollTrigger: {
//               trigger: ".process-cta",
//               start: "top 88%",
//               toggleActions: "play none none none",
//               once: true,
//             },
//           },
//         );

//         /* Floating decorative motion*/
//         gsap.to(".process-orbit-one", {
//           rotate: 360,
//           duration: 35,
//           repeat: -1,
//           ease: "none",
//         });

//         gsap.to(".process-orbit-two", {
//           rotate: -360,
//           duration: 46,
//           repeat: -1,
//           ease: "none",
//         });

//         gsap.to(".process-float", {
//           y: -8,
//           duration: 2.6,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }, sectionRef);

//       return () => ctx.revert();
//     },
//     {
//       scope: sectionRef,
//     },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="our-process"
//       aria-labelledby="our-process-heading"
//       className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
//     >
//       {/* Background decorations*/}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-52 top-20 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-56 bottom-20 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
//       />

//       {/* Decorative orbit */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-30 top-[15%] hidden h-96 w-96 lg:block"
//       >
//         <div className="process-orbit-one absolute inset-0 rounded-full border border-primary/10">
//           <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
//         </div>

//         <div className="process-orbit-two absolute inset-14 rounded-full border border-primary/8">
//           <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/40" />
//         </div>
//       </div>

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* Header*/}
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="process-eyebrow mb-6 flex items-center justify-center gap-3">
//             <span className="h-px w-10 bg-accent" />

//             <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//               Our Process
//             </span>

//             <span className="h-px w-10 bg-accent" />
//           </div>

//           <h2
//             id="our-process-heading"
//             className="font-cormorant text-[3rem] font-medium leading-[0.9] tracking-[-0.045em] text-[#0c2e2d] sm:text-6xl lg:text-[5.2rem]"
//           >
//             <span className="block overflow-hidden pb-2">
//               <span className="process-heading-line block">A clear path from first</span>
//             </span>

//             <span className="block overflow-hidden pb-3">
//               <span className="process-heading-line block italic text-primary">
//                 conversation to full support.
//               </span>
//             </span>
//           </h2>

//           <p className="process-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//             We follow a clear, structured process that moves from understanding your needs
//             to delivering reliable support — with continuous improvement at every stage.
//           </p>
//         </div>

//         {/* Desktop process*/}
//         <div className="process-desktop-track relative mt-16 hidden lg:block">
//           {/* Connecting line */}
//           <div
//             aria-hidden="true"
//             className="absolute left-[8%] right-[8%] top-11.75 h-px bg-primary/10"
//           />

//           <div className="relative grid grid-cols-6 gap-4">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <div key={step.number} className="relative">
//                   {/* Number / icon */}
//                   <div className="relative z-10 flex justify-center">
//                     <div className="process-float flex h-24 w-24 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_20px_45px_-25px_rgba(0,89,138,0.45)]">
//                       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft text-primary">
//                         <Icon aria-hidden="true" className="h-7 w-7 stroke-[1.7]" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card */}
//                   <article className="process-card group mt-7 h-full overflow-hidden rounded-3xl border border-primary/10 bg-white p-5 shadow-[0_25px_60px_-45px_rgba(0,89,138,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_30px_70px_-42px_rgba(0,89,138,0.6)]">
//                     <div className="flex items-center justify-between">
//                       <span className="font-manrope text-[10px] font-bold tracking-[0.2em] text-primary/40">
//                         STEP {step.number}
//                       </span>

//                       <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
//                     </div>

//                     <h3 className="mt-5 font-cormorant text-2xl font-semibold leading-tight text-[#0c2e2d]">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 font-manrope text-xs leading-6 text-slate-600">
//                       {step.description}
//                     </p>

//                     <div className="mt-5 h-px w-full bg-primary/8" />

//                     <div className="mt-4 flex items-center gap-2">
//                       <CheckCircleIcon
//                         aria-hidden="true"
//                         className="h-4 w-4 shrink-0 text-primary"
//                       />

//                       <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/70">
//                         Haggai Process
//                       </span>
//                     </div>

//                     <span
//                       aria-hidden="true"
//                       className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
//                     />
//                   </article>

//                   {/* Connector between steps */}
//                   {index < steps.length - 1 && (
//                     <div
//                       aria-hidden="true"
//                       className="process-connector absolute left-[calc(50%+48px)] right-[calc(-50%+48px)] top-11.75 h-px bg-primary/15"
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Tablet process*/}
//         <div className="mt-14 hidden sm:grid lg:hidden sm:grid-cols-2 gap-5">
//           {steps.map((step) => {
//             const Icon = step.icon;

//             return (
//               <article
//                 key={step.number}
//                 className="process-card group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_25px_60px_-45px_rgba(0,89,138,0.55)]"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary">
//                     <Icon aria-hidden="true" className="h-6 w-6 stroke-[1.7]" />
//                   </div>

//                   <span className="font-manrope text-[10px] font-bold tracking-[0.18em] text-primary/40">
//                     {step.number}
//                   </span>
//                 </div>

//                 <h3 className="mt-6 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
//                   {step.description}
//                 </p>

//                 <span
//                   aria-hidden="true"
//                   className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
//                 />
//               </article>
//             );
//           })}
//         </div>

//         {/* Mobile process*/}
//         <div className="process-mobile-list relative mt-14 sm:hidden">
//           <div
//             aria-hidden="true"
//             className="absolute bottom-5 left-5.25 top-5 w-px bg-primary/15"
//           />

//           <div className="space-y-6">
//             {steps.map((step) => {
//               const Icon = step.icon;

//               return (
//                 <article key={step.number} className="process-mobile-card relative pl-12">
//                   {/* Timeline point */}

//                   <div className="absolute left-0 top-5 z-10 flex h-10.75 w-10.75 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-md shadow-primary/15">
//                     <Icon aria-hidden="true" className="h-4 w-4 stroke-[1.8]" />
//                   </div>

//                   {/* Card */}

//                   <div className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(0,89,138,0.6)]">
//                     <div className="flex items-center justify-between">
//                       <span className="font-manrope text-[10px] font-bold tracking-[0.18em] text-primary/45">
//                         STEP {step.number}
//                       </span>

//                       <span className="h-1.5 w-1.5 rounded-full bg-accent" />
//                     </div>

//                     <h3 className="mt-4 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
//                       {step.description}
//                     </p>

//                     <span
//                       aria-hidden="true"
//                       className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
//                     />
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* CTA*/}
//         <div className="process-cta relative mt-16 overflow-hidden rounded-4xl bg-primary px-6 py-9 shadow-[0_35px_80px_-45px_rgba(0,89,138,0.7)] sm:px-9 sm:py-10 lg:mt-20 lg:px-12">
//           {/* CTA decorations */}

//           <div
//             aria-hidden="true"
//             className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-white/8 blur-3xl"
//           />

//           <div
//             aria-hidden="true"
//             className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
//           />

//           <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
//             <div className="max-w-3xl">
//               <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
//                 Ready to Begin?
//               </p>

//               <h3 className="mt-3 font-cormorant text-3xl font-semibold leading-tight text-white sm:text-4xl">
//                 Ready to start the process?
//               </h3>

//               <p className="mt-3 max-w-2xl font-manrope text-sm leading-7 text-white/65">
//                 Schedule a Discovery Call and let&apos;s start understanding your
//                 business, your challenges, and what better could look like for you.
//               </p>
//             </div>

//             <Link
//               href="/contact"
//               className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
//             >
//               Schedule a Discovery Call
//               <ArrowRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom scroll hint*/}
//         <div className="process-scroll mt-10 flex justify-center lg:hidden">
//           <div className="flex flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/45">
//             <span>Six steps. One clear path.</span>

//             <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-primary/40" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
