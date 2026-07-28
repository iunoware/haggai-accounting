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

      if (illustrationRef.current) {
        tl.fromTo(
          illustrationRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
      }

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
          "-=0.6"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      }

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
      id="our-solutions"
      aria-labelledby="solutions-heading"
      className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-24 font-body text-slate-900"
    >
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* 1. Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
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
            <span className="text-primary">stress-free.</span>
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
          {/* Left Side */}
          <div ref={illustrationRef} className="lg:col-span-5">
            <div className="floating-wrapper relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl shadow-primary/5 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-soft/60 blur-2xl"
              />

              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center">
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
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Real-time Financial Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
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
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-5.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-primary before:rounded-l-2xl before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:origin-center flex items-center justify-between gap-4 cursor-default"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      {/* Hero Icon inside soft blue container */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:shadow-md group-hover:shadow-primary/20">
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Text details */}
                      <div className="min-w-0">
                        <h3 className="font-heading text-lg font-semibold text-slate-950 transition-colors group-hover:text-primary">
                          {benefit.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow icon appearing on hover */}
                    <div aria-hidden="true" className="shrink-0 pl-2">
                      <ArrowRightIcon className="h-5 w-5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
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
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
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
