"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BanknotesIcon,
  // CalendarDaysIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

gsap.registerPlugin(ScrollTrigger);

const cycleItems = [
  {
    key: "processing",
    title: "Payroll Processing",
    description: "Accurate, on-time payroll runs.",
    icon: BanknotesIcon,
  },
  {
    key: "administration",
    title: "Payroll Administration",
    description: "End-to-end management of the payroll lifecycle.",
    icon: Cog6ToothIcon,
  },
  {
    key: "compliance",
    title: "Compliance Support",
    description: "Stay ahead of changing regulations and requirements.",
    icon: ShieldCheckIcon,
  },
  {
    key: "benefits",
    title: "Benefits Administration",
    description: "Smooth handling of employee benefits within payroll.",
    icon: HeartIcon,
  },
  {
    key: "reporting",
    title: "Payroll Reporting",
    description: "Clear, audit-ready payroll records.",
    icon: ChartBarIcon,
  },
  {
    key: "global",
    title: "Global Payroll Coordination",
    description: "Support across multiple regions as you grow.",
    icon: GlobeAltIcon,
  },
];

const RING_RADIUS = 225;

export default function PayrollServices() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const animatedSelectors = [
        ".haggai-payroll-eyebrow",
        ".haggai-payroll-line",
        ".haggai-payroll-description",
        ".haggai-payroll-action",
        ".haggai-payroll-hub",
        ".haggai-payroll-node",
        ".haggai-payroll-stub",
        ".haggai-payroll-quote",
        ".haggai-payroll-cta",
      ];

      if (reduceMotion) {
        gsap.set(animatedSelectors, {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      // Hero
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-payroll-hero",
            start: "top 75%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-payroll-eyebrow",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".haggai-payroll-line",
          { opacity: 0, yPercent: 110 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".haggai-payroll-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".haggai-payroll-action",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.3",
        );

      // Cycle ring + mobile stubs ("What You Get")
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-payroll-cycle",
            start: "top 75%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-payroll-hub",
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(2.2)" },
        )
        .fromTo(
          ".haggai-payroll-node",
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(2.4)",
          },
          "-=0.25",
        )
        .fromTo(
          ".haggai-payroll-stub",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35",
        );

      // Continuous cycle motion - a marker orbiting the ring
      gsap.to(".haggai-payroll-orbit", {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".haggai-payroll-ring-track", {
        rotate: -360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });

      // Why it matters
      gsap.fromTo(
        ".haggai-payroll-quote",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-payroll-why",
            start: "top 78%",
            once: true,
          },
        },
      );

      // CTA
      gsap.fromTo(
        ".haggai-payroll-cta",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-payroll-cta",
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="relative bg-white">
      {/* Hero*/}
      <section className="haggai-payroll-hero relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-56 top-10 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-52 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-12">
          <div className="haggai-payroll-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Payroll Services
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          <h1 className="font-cormorant text-[2.6rem] font-medium leading-[0.95] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[3.75rem]">
            <span className="block overflow-hidden pb-2">
              <span className="haggai-payroll-line block">Payroll You Can Trust -</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="haggai-payroll-line block italic text-primary">
                Every Cycle, Every Time.
              </span>
            </span>
          </h1>

          <p className="haggai-payroll-description mx-auto mt-6 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Payroll errors are costly - in trust, in compliance risk, and in
            leadership&apos;s time. We make sure your people get paid right, on time,
            every time.
          </p>

          <div className="haggai-payroll-action mt-9 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,89,138,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
            >
              Schedule a Discovery Call
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get - payroll cycle ring*/}
      <section className="haggai-payroll-cycle relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              What You Get
            </span>

            <h2 className="mt-3 font-cormorant text-3xl font-semibold leading-tight text-[#0c2e2d] sm:text-4xl">
              A cycle that never misses a beat.
            </h2>
          </div>

          {/* Desktop: circular cycle diagram */}
          <div className="relative mx-auto mt-16 hidden h-155 w-155 lg:block">
            {/* dashed track */}
            <div className="haggai-payroll-ring-track absolute inset-17.5 rounded-full border border-dashed border-primary/20" />

            {/* orbiting cycle marker */}
            <div
              aria-hidden="true"
              className="haggai-payroll-orbit pointer-events-none absolute inset-0"
            >
              <span
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                style={{ transform: `translate(-50%, -${RING_RADIUS}px)` }}
              />
            </div>

            {/* center hub */}
            <div className="haggai-payroll-hub absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary text-white shadow-[0_25px_60px_-25px_rgba(0,89,138,0.6)]">
              <ArrowPathIcon aria-hidden="true" className="h-7 w-7 text-accent" />

              <span className="mt-1.5 font-manrope text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
                Payroll Cycle
              </span>
            </div>

            {/* orbit nodes */}
            {cycleItems.map((item, index) => {
              const angle = (index / cycleItems.length) * 2 * Math.PI - Math.PI / 2;
              const x = RING_RADIUS * Math.cos(angle);
              const y = RING_RADIUS * Math.sin(angle);
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="haggai-payroll-node group absolute left-1/2 top-1/2 w-44"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-primary/10 bg-white p-4 text-center shadow-[0_20px_45px_-30px_rgba(0,89,138,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon aria-hidden="true" className="h-4.5 w-4.5" />
                    </span>

                    <h3 className="font-cormorant text-base font-semibold leading-tight text-[#0c2e2d]">
                      {item.title}
                    </h3>

                    <p className="font-manrope text-[11px] leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet: payslip-style stub list */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
            {cycleItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.key}
                  className="haggai-payroll-stub relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0 border-t-2 border-dashed border-accent/40"
                  />

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <h3 className="mt-4 font-cormorant text-xl font-semibold text-[#0c2e2d]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 font-manrope text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters*/}
      <section className="haggai-payroll-why relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="absolute inset-0 bg-primary" />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[70px_70px]"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft/70">
            Why It Matters to You
          </span>

          <div className="haggai-payroll-quote mt-6">
            <span
              aria-hidden="true"
              className="font-cormorant block text-[5rem] italic leading-none text-accent/70 sm:text-[6rem]"
            >
              &ldquo;
            </span>

            <blockquote className="-mt-8 font-cormorant text-[1.8rem] font-medium italic leading-tight text-white sm:-mt-10 sm:text-[2.3rem]">
              Payroll mistakes damage <span className="text-accent">employee trust</span>{" "}
              and expose the business to compliance risk. We remove that risk so
              leadership can focus elsewhere.
            </blockquote>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent/60" />

              <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-soft/60">
                The Haggai Standard
              </span>

              <span className="h-px w-10 bg-accent/60" />
            </div>
          </div>
        </div>
      </section>

      <FinancialDashboardCTA />
    </div>
  );
}
