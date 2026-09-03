"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustPoints = [
  {
    icon: AcademicCapIcon,
    title: "Tailored Industry Expertise",
    description: "Deep understanding of sector-specific financial workflows.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Scalable Accounting Support",
    description: "Systems that expand effortlessly as your business grows.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Offshore Teams",
    description: "Qualified CPAs operating like your in-house department.",
  },
  {
    icon: ChartBarIcon,
    title: "Reliable Financial Reporting",
    description: "Clean ledgers, timely closes, and clear executive reporting.",
  },
];

export default function IndustriesHero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const trustRowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            badgeRef.current,
            headingRef.current,
            paragraphRef.current,
            buttonsRef.current,
            illustrationRef.current,
            trustRowRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        );
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // 1. Badge fades upward
      if (badgeRef.current) {
        timeline.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      // 2. Heading reveals
      if (headingRef.current) {
        timeline.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 3. Paragraph fades in
      if (paragraphRef.current) {
        timeline.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 4. Buttons animate upward
      if (buttonsRef.current) {
        timeline.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 5. Illustration scales and fades into view
      if (illustrationRef.current) {
        timeline.fromTo(
          illustrationRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );
      }

      // 6. Trust points stagger entrance
      if (trustRowRef.current) {
        const items = Array.from(trustRowRef.current.children);
        timeline.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      // Subtle continuous floating animation for the illustration
      if (illustrationRef.current) {
        const floatingEl =
          illustrationRef.current.querySelector(".hero-floating-img");
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
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="industries-hero"
      aria-labelledby="industries-hero-heading"
      className="relative overflow-hidden bg-white pt-24 pb-16 font-body text-slate-900"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Small Badge */}
            <div ref={badgeRef} className="mb-5 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
                <CheckIcon
                  className="h-4 w-4 stroke-[2.5] text-primary"
                  aria-hidden="true"
                />
                Industries We Support
              </span>
            </div>

            {/* Large Heading */}
            <h1
              ref={headingRef}
              id="industries-hero-heading"
              className="font-heading text-4xl font-medium leading-[1.04] tracking-tight text-slate-950 sm:text-5xl md:text-5xl lg:text-[3.8rem]"
            >
              Built to Support the Way Your Industry
              <span className="text-primary">Actually Operates.</span>
            </h1>

            {/* Supporting Paragraph (Max 3 lines) */}
            <p
              ref={paragraphRef}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed"
            >
              Every business has unique financial workflows, reporting
              requirements and operational challenges. Haggai provides
              accounting solutions designed around the way your business works,
              helping you stay focused on growth while we handle the numbers.
            </p>

            {/* Action Buttons */}
            <div
              ref={buttonsRef}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="#who-we-serve"
                className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Who We Serve</span>
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-2xl border border-primary text-primary bg-white px-7 text-sm font-semibold transition-all duration-300 hover:bg-soft/60"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            ref={illustrationRef}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="hero-floating-img relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-primary/5 sm:p-6">
              {/* Soft background ambient blur inside card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-soft/70 blur-2xl"
              />

              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center">
                <Image
                  src="/images/industries-hero.png"
                  alt="A modern accounting advisor collaborating with business owners around a shared financial dashboard"
                  width={680}
                  height={510}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02] rounded-2xl"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span className="flex items-center gap-1.5 text-primary font-semibold">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Tailored Financial Partnership &amp; Advisory
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  CPAs • SaaS • Startups • E-Commerce
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST HIGHLIGHTS ROW */}
        <div
          ref={trustRowRef}
          className="mt-16 sm:mt-20 border-t border-slate-200/90 pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/40 p-4 transition-all duration-300 hover:bg-white hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-heading text-base font-semibold text-slate-950 transition-colors group-hover:text-primary">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
