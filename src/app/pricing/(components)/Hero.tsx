"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustStripPoints = [
  {
    icon: ShieldCheckIcon,
    title: "No Hidden Fees",
    description: "Clear, upfront monthly pricing with zero surprise charges.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Flexible Service Plans",
    description: "Scale accounting resources up or down as your needs evolve.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Accounting Support",
    description: "Qualified CPAs and specialists committed to your account.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Transparent Engagement",
    description: "Clear deliverables, scope, and SLA performance guarantees.",
  },
];

export default function PricingHero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

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
            trustStripRef.current,
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

      // 5. Illustration scales into view
      if (illustrationRef.current) {
        timeline.fromTo(
          illustrationRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );
      }

      // 6. Floating UI cards appear with stagger
      if (illustrationRef.current) {
        const floatCards =
          illustrationRef.current.querySelectorAll(".floating-ui-card");
        if (floatCards.length > 0) {
          timeline.fromTo(
            floatCards,
            { opacity: 0, y: 15, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.12,
              ease: "back.out(1.7)",
            },
            "-=0.4",
          );
        }
      }

      // 7. Trust strip items stagger
      if (trustStripRef.current) {
        const items = Array.from(trustStripRef.current.children);
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

      // Subtle continuous floating motion for main illustration container
      if (illustrationRef.current) {
        const floatWrapper = illustrationRef.current.querySelector(
          ".pricing-floating-wrapper",
        );
        if (floatWrapper) {
          gsap.to(floatWrapper, {
            y: -8,
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
      id="pricing-hero"
      aria-labelledby="pricing-hero-heading"
      className="relative overflow-hidden bg-white pt-24 pb-16 font-body text-slate-900"
    >
      {/* Background radial gradient glow (Soft brand color) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
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
        {/* BALANCED TWO-COLUMN HERO */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* RIGHT COLUMN */}
          <div
            ref={illustrationRef}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="pricing-floating-wrapper relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-primary/5 sm:p-6">
              {/* Soft interior background glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-soft/70 blur-2xl"
              />

              {/* Main AI Illustration */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-center">
                <Image
                  src="/images/pricing-hero.png"
                  alt="Modern accounting advisor presenting scalable service plans on a digital dashboard"
                  width={680}
                  height={510}
                  priority
                  className="h-full w-full object-cover rounded-2xl"
                />

                {/* Overlay Floating Concept UI Cards */}
                <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
                  {/* Top Row Floating Cards */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="floating-ui-card inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-md">
                      <ShieldCheckIcon className="h-4 w-4 text-primary shrink-0" />
                      <span>Transparent Engagement</span>
                    </div>

                    <div className="floating-ui-card inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-md">
                      <ArrowTrendingUpIcon className="h-4 w-4 text-primary shrink-0" />
                      <span>Scalable Plans</span>
                    </div>
                  </div>

                  {/* Bottom Row Floating Cards */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="floating-ui-card inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-md">
                      <UserGroupIcon className="h-4 w-4 text-primary shrink-0" />
                      <span>Dedicated Support</span>
                    </div>

                    <div className="floating-ui-card inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-md">
                      <DocumentCheckIcon className="h-4 w-4 text-primary shrink-0" />
                      <span>No Hidden Fees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span className="flex items-center gap-1.5 text-primary font-semibold">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Clear &amp; Predictable Financial Operations
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  Zero Surprise Fees
                </span>
              </div>
            </div>
          </div>
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Small Badge */}
            <div ref={badgeRef} className="mb-5 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
                <CheckIcon
                  className="h-4 w-4 stroke-[2.5] text-primary"
                  aria-hidden="true"
                />
                Simple, Transparent Pricing
              </span>
            </div>

            {/* Large Heading */}
            <h1
              ref={headingRef}
              id="pricing-hero-heading"
              className="font-heading text-4xl font-medium leading-[1.04] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[3.8rem]"
            >
              Flexible accounting plans that grow with{" "}
              <span className="text-primary">your business.</span>
            </h1>

            {/* Supporting Paragraph (Max 3 lines) */}
            <p
              ref={paragraphRef}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed"
            >
              Whether you&apos;re a startup, an established business or a
              finance partner, Haggai offers transparent pricing designed to
              match your current needs while providing the flexibility to scale
              as your business evolves.
            </p>

            {/* Action Buttons */}
            <div
              ref={buttonsRef}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="#pricing-plans"
                className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
              >
                <span>View Pricing Plans</span>
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-2xl border border-primary text-primary bg-white px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft/60"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* TRUST STRIP BELOW HERO CONTENT */}
        <div
          ref={trustStripRef}
          className="mt-16 sm:mt-20 border-t border-slate-200/90 pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustStripPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/40 p-4 transition-all duration-300 hover:bg-white hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                  <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-heading text-base font-semibold text-slate-950 transition-colors group-hover:text-primary">
                    ✓ {point.title}
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
