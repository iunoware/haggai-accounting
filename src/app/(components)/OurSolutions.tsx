"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  CheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Register GSAP ScrollTrigger plugin on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: DocumentCheckIcon,
    title: "Accurate Bookkeeping",
    description: "Clean, organized financial records.",
  },
  {
    icon: ClockIcon,
    title: "Faster Month-End Close",
    description: "Reports delivered on time.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Compliance Without Stress",
    description: "Payroll and tax deadlines handled.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Offshore Team",
    description: "Works like your in-house accounting department.",
  },
  {
    icon: ChartBarIcon,
    title: "Better Financial Visibility",
    description: "Clear reports that help better decisions.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "More Time to Grow",
    description: "Focus on your business while we manage your accounting.",
  },
];

export default function OurSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const benefitsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    // Respect reduced motion accessibility setting
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance Animation Timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // 1. Badge entrance
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      // 2. Heading entrance
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 3. Paragraph entrance
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 4. Illustration entrance
      if (illustrationRef.current) {
        tl.fromTo(
          illustrationRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 5. Benefit panels stagger entrance (0.15s stagger)
      if (benefitsContainerRef.current) {
        const panels = Array.from(benefitsContainerRef.current.children);
        tl.fromTo(
          panels,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6",
        );
      }

      // 6. Bottom CTA entrance
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
      }

      // Very slow floating animation on the illustration
      if (illustrationRef.current) {
        const floatingEl =
          illustrationRef.current.querySelector(".floating-wrapper");
        if (floatingEl) {
          gsap.to(floatingEl, {
            y: -12,
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
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative overflow-hidden bg-[#f7f7f7] py-20 sm:py-24 lg:py-20 font-body text-slate-900"
    >
      {/* Background radial gradient glow (White-first design with subtle blue glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(37,99,235,0.06),rgba(255,255,255,0))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/4 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* 1. Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-blue-600"
                aria-hidden="true"
              />
              Our Solutions
            </span>
          </div>

          {/* 2. Main Heading */}
          <h2
            ref={headingRef}
            id="solutions-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Accounting made simple, scalable, and{" "}
            <span className="text-blue-600">stress-free.</span>
          </h2>

          {/* 3. Supporting Text */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai becomes a seamless extension of your finance department,
            removing accounting complexity so you can operate with total clarity
            and confidence.
          </p>
        </div>

        {/* 4. Main Content Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side (Desktop: ~45% -> lg:col-span-5) */}
          <div ref={illustrationRef} className="lg:col-span-5">
            <div className="floating-wrapper relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-b from-white via-blue-50/20 to-white p-5 shadow-xl shadow-blue-950/3 sm:p-7">
              {/* Subtle decorative background ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-100/50 blur-2xl"
              />

              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full overflow-hidden rounded-2xl bg-white border border-blue-50 shadow-inner flex items-center justify-center">
                <Image
                  src="/images/solutions-illustration.png"
                  alt="Modern accounting workspace with financial dashboards and analytics"
                  width={720}
                  height={540}
                  priority
                  className="h-full w-full object-cover p-2 transition-transform duration-500 hover:scale-[1.02] rounded-2xl"
                />
              </div>

              {/* Soft caption line */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span className="flex items-center gap-1.5 text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  Real-time Financial Operations
                </span>
                {/* <span className="text-slate-400">Powered by Haggai</span> */}
              </div>
            </div>
          </div>

          {/* Right Side (Desktop: ~55% -> lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div
              ref={benefitsContainerRef}
              className="flex flex-col space-y-3.5 sm:space-y-4"
              role="list"
              aria-label="Haggai Accounting Benefits"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    role="listitem"
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-5.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-blue-600 before:rounded-l-2xl before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center flex items-center justify-between gap-4 cursor-default"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      {/* Hero Icon inside light blue circle */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 group-hover:shadow-md group-hover:shadow-blue-600/20">
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Text details */}
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-700">
                          {benefit.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow icon appearing on hover */}
                    <div aria-hidden="true" className="shrink-0 pl-2">
                      <ArrowRightIcon className="h-5 w-5 text-blue-600 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div ref={ctaRef} className="mt-14 sm:mt-16 text-center">
          <div>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
            >
              <span>See Our Services</span>
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <p className="mt-3 text-sm font-medium text-slate-600 sm:text-base">
            Discover everything Haggai can support for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
