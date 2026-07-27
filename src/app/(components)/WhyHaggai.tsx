"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpRightIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const whyChoosePoints = [
  {
    icon: AcademicCapIcon,
    title: "Experienced Accountants",
    description:
      "Qualified financial specialists and CPAs who ensure precision, compliance, and institutional-grade bookkeeping for your business.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Confidential",
    description:
      "Enterprise-grade security protocols, strict confidentiality agreements, and encrypted data transfers protecting your financial records.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Scalable Support",
    description:
      "Flexible accounting infrastructure designed to scale effortlessly as your transaction volume, team size, and complexity expand.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Transparent Communication",
    description:
      "Dedicated account managers, real-time status updates, and direct lines of communication for seamless daily collaboration.",
  },
];

export default function WhyHaggai() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const featuredCardRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    // Respect reduced motion settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline triggered by ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
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

      // 4. Featured Card reveal
      if (featuredCardRef.current) {
        tl.fromTo(
          featuredCardRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 5. Remaining Cards stagger reveal (0.15s stagger)
      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      // Floating animation for the featured card illustration
      if (featuredCardRef.current) {
        const floatingEl = featuredCardRef.current.querySelector(
          ".floating-featured-image",
        );
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
      id="why-haggai"
      aria-labelledby="why-haggai-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-20 font-body text-slate-900"
    >
      {/* Subtle blue radial background gradient glow (opacity < 6%, white-first) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(37,99,235,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-blue-600"
                aria-hidden="true"
              />
              Why Haggai
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="why-haggai-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Why businesses choose Haggai as their{" "}
            <span className="text-blue-600">trusted accounting partner.</span>
          </h2>

          {/* Short Supporting Paragraph */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai combines experienced financial professionals, modern
            accounting processes, dedicated offshore teams, and long-term
            partnerships to help your business scale with total confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6">
          {/* FEATURED CARD (Spans full width top) */}
          <div
            ref={featuredCardRef}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/[0.04]"
          >
            {/* Small accent line on top */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left Column: Text Content & Value Pillars */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                  <UserGroupIcon
                    className="h-4 w-4 text-blue-600"
                    aria-hidden="true"
                  />
                  Dedicated Partnership
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-950 leading-tight">
                  Your Dedicated Offshore Accounting Partner
                </h3>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We become a seamless, proactive extension of your internal
                  finance team rather than just another vendor. From daily
                  transaction tagging to complex month-end reporting, our
                  dedicated offshore accountants work inside your systems to
                  deliver reliability you can count on.
                </p>

                {/* Key Pillars Checklist */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Seamless integration with your tech stack</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Senior CPA supervision on every account</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Proactive reporting & zero surprise fees</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>Dedicated daily point of contact</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Illustration / Visual Container */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="floating-featured-image relative w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-inner">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white border border-slate-200/60 shadow-xs flex items-center justify-center">
                    <Image
                      src="/images/solutions-illustration.png"
                      alt="Dedicated offshore accounting team workspace"
                      width={600}
                      height={450}
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOUR SUPPORTING CARDS (2x2 Grid Below) */}
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            role="list"
            aria-label="Why Choose Haggai Cards"
          >
            {whyChoosePoints.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  role="listitem"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/[0.05] cursor-default"
                >
                  {/* Top subtle blue accent line on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-1 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div>
                    {/* Header with Icon and Top Right Arrow */}
                    <div className="flex items-center justify-between">
                      {/* Hero Icon inside light-blue circular background */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Small hover arrow */}
                      <ArrowUpRightIcon
                        className="h-5 w-5 text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="mt-6 text-lg sm:text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-700">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
