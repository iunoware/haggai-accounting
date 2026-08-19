"use client";

import { useRef } from "react";
// import Link from "next/link";
import {
  // ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  NoSymbolIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ComparisonRow = {
  category: string;
  description: string;
  traditional: string;
  haggai: string;
  icon: typeof CurrencyDollarIcon;
};

const comparisonRows: ComparisonRow[] = [
  {
    category: "Hiring Cost",
    description: "The cost required to build and maintain the accounting team.",
    traditional:
      "Salaries, benefits, payroll taxes, recruitment fees, equipment, and office costs.",
    haggai:
      "A predictable service cost without the overhead of maintaining a full in-house department.",
    icon: CurrencyDollarIcon,
  },
  {
    category: "Hiring Time",
    description: "How quickly your business can access qualified accounting support.",
    traditional: "Long recruitment, interviewing, onboarding, and training processes.",
    haggai:
      "A structured onboarding process designed to get your accounting support operational sooner.",
    icon: ClockIcon,
  },
  {
    category: "Scalability",
    description: "The ability to adjust accounting resources as your business changes.",
    traditional:
      "Scaling requires additional recruitment, training, management, and infrastructure.",
    haggai:
      "Accounting support can be adjusted as transaction volumes, entities, and requirements grow.",
    icon: ScaleIcon,
  },
  {
    category: "Team Continuity",
    description: "The consistency and reliability of your accounting operations.",
    traditional:
      "Employee turnover can create knowledge gaps, workflow delays, and repeated training.",
    haggai:
      "A team-based service model supports continuity, documented processes, and dependable delivery.",
    icon: UserGroupIcon,
  },
  {
    category: "Management Effort",
    description: "The internal time required to manage accounting responsibilities.",
    traditional:
      "Your business manages recruitment, performance, leave, training, and daily supervision.",
    haggai:
      "Haggai manages the service team while maintaining clear communication and accountability.",
    icon: ShieldCheckIcon,
  },
];

const highlights = [
  "Lower operating overhead",
  "Faster access to accounting support",
  "Flexible and scalable service capacity",
  "Reduced internal management burden",
];

export default function TraditionalHiringComparison() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const animatedElements = [
        ".hiring-comparison-eyebrow",
        ".hiring-comparison-line",
        ".hiring-comparison-description",
        ".hiring-comparison-highlight",
        ".hiring-comparison-table",
        ".hiring-comparison-row",
        ".hiring-comparison-mobile-card",
        ".hiring-comparison-cta",
      ];

      if (reduceMotion) {
        gsap.set(animatedElements, {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".hiring-comparison-eyebrow",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".hiring-comparison-line",
          {
            opacity: 0,
            yPercent: 110,
          },
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
          ".hiring-comparison-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".hiring-comparison-highlight",
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".hiring-comparison-table",
          {
            opacity: 0,
            y: 35,
            scale: 0.985,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power4.out",
            clearProps: "transform",
          },
          "-=0.55",
        )
        .fromTo(
          ".hiring-comparison-row",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .fromTo(
          ".hiring-comparison-mobile-card",
          {
            opacity: 0,
            y: 25,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.45",
        )
        .fromTo(
          ".hiring-comparison-cta",
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="traditional-hiring-comparison"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-60 top-20 h-136 w-136 rounded-full bg-soft/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-60 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <div className="hiring-comparison-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Traditional Hiring vs Haggai
              </span>
            </div>

            <h2 className="font-cormorant text-[3.15rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-6xl lg:text-[4.8rem]">
              <span className="block overflow-hidden pb-2">
                <span className="hiring-comparison-line block">
                  A smarter way to build
                </span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="hiring-comparison-line block italic text-primary">
                  your accounting team.
                </span>
              </span>
            </h2>
          </div>

          <div>
            <p className="hiring-comparison-description max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Traditional hiring can bring significant recruitment costs, management
              responsibilities, and scaling challenges. Haggai provides a flexible
              offshore accounting model designed to deliver reliable support without the
              burden of building an entire in-house department.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="hiring-comparison-highlight flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                  </span>

                  <span className="font-manrope text-xs font-semibold text-[#0c2e2d] sm:text-sm">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop comparison table */}
        <div className="hiring-comparison-table mt-14 hidden overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-[0_35px_90px_-50px_rgba(0,89,138,0.65)] lg:block">
          {/* Table heading */}
          <div className="grid grid-cols-[0.72fr_1fr_1fr]">
            <div className="flex items-end bg-[#F8FCFE] p-7">
              <div>
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  Service Comparison
                </p>

                <h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#0c2e2d]">
                  Compare your options
                </h3>
              </div>
            </div>

            <div className="border-l border-primary/10 bg-slate-100 p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-500">
                  <NoSymbolIcon aria-hidden="true" className="h-6 w-6" />
                </span>

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Traditional Model
                  </p>

                  <h3 className="mt-1 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                    In-House Hiring
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border-l border-white/15 bg-primary p-7">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/8 blur-2xl"
              />

              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[#0c2e2d]">
                  <ShieldCheckIcon aria-hidden="true" className="h-6 w-6" />
                </span>

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Offshore Model
                  </p>

                  <h3 className="mt-1 font-cormorant text-2xl font-semibold text-white">
                    Haggai Business Solutions
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div>
            {comparisonRows.map((row, index) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.category}
                  className={`hiring-comparison-row grid grid-cols-[0.72fr_1fr_1fr] ${
                    index !== comparisonRows.length - 1
                      ? "border-b border-primary/10"
                      : ""
                  }`}
                >
                  {/* Category */}
                  <div className="bg-[#F8FCFE] p-7">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <div>
                        <h4 className="font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                          {row.category}
                        </h4>

                        <p className="mt-2 font-manrope text-xs leading-6 text-slate-500">
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Traditional */}
                  <div className="border-l border-primary/10 bg-white p-7">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <NoSymbolIcon aria-hidden="true" className="h-3.5 w-3.5" />
                      </span>

                      <p className="font-manrope text-sm leading-7 text-slate-600">
                        {row.traditional}
                      </p>
                    </div>
                  </div>

                  {/* Haggai */}
                  <div className="border-l border-primary/10 bg-primary/[0.035] p-7">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                        <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
                      </span>

                      <p className="font-manrope text-sm font-medium leading-7 text-[#0c2e2d]">
                        {row.haggai}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile comparison cards */}
        <div className="mt-12 space-y-5 lg:hidden">
          {comparisonRows.map((row) => {
            const Icon = row.icon;

            return (
              <article
                key={row.category}
                className="hiring-comparison-mobile-card overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_25px_60px_-45px_rgba(0,89,138,0.65)]"
              >
                {/* Card heading */}
                <div className="flex items-start gap-4 bg-[#F8FCFE] p-5 sm:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                      {row.category}
                    </h3>

                    <p className="mt-2 font-manrope text-xs leading-6 text-slate-500">
                      {row.description}
                    </p>
                  </div>
                </div>

                {/* Traditional result */}
                <div className="border-t border-primary/10 p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                      <NoSymbolIcon aria-hidden="true" className="h-4 w-4" />
                    </span>

                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Traditional Hiring
                    </p>
                  </div>

                  <p className="font-manrope text-sm leading-7 text-slate-600">
                    {row.traditional}
                  </p>
                </div>

                {/* Haggai result */}
                <div className="border-t border-primary/10 bg-primary p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-[#0c2e2d]">
                      <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                    </span>

                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Haggai Business Solutions
                    </p>
                  </div>

                  <p className="font-manrope text-sm font-medium leading-7 text-white">
                    {row.haggai}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="hiring-comparison-cta relative mt-12 overflow-hidden rounded-4xl bg-[#0c2e2d] px-6 py-8 sm:px-9 sm:py-9 lg:mt-16 lg:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/4 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Build Smarter
              </p>

              <h3 className="mt-3 font-cormorant text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Get the accounting support you need without the burden of traditional
                hiring.
              </h3>

              <p className="mt-4 max-w-2xl font-manrope text-sm leading-7 text-white/60">
                Haggai gives your business access to dedicated accounting professionals,
                structured workflows, and scalable support through one flexible
                partnership.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
            >
              Compare Your Options
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
