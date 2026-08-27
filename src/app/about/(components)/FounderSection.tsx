"use client";

import { useRef } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalculatorIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const founderCredentials = [
  {
    title: "17+ Years of Enterprise Finance Experience",
    description:
      "Jensi has led month-end close processes across entire global regions and managed high-volume revenue operations for fast-growing companies.",
    icon: BriefcaseIcon,
  },
  {
    title: "CMA (Certified Management Accountant)",
    description:
      "Professional management accounting expertise supporting disciplined financial operations and decision-making.",
    icon: AcademicCapIcon,
  },
  {
    title: "Built for Growing Businesses",
    description:
      "Enterprise-grade financial rigor and processes without the cost and complexity of building a large in-house finance team.",
    icon: ChartBarIcon,
  },
];

const teamRoles = [
  {
    id: "senior-accountants",
    title: "Senior Accountants",
    countText: "4 MEMBERS",
    description:
      "CA/CPA-qualified. Own month-end close, reconciliations, and financial reporting.",
    icon: CalculatorIcon,
  },
  {
    id: "accounts-executives",
    title: "Accounts Executives",
    countText: "5 MEMBERS",
    description:
      "Handle day-to-day bookkeeping, AP/AR, and bank reconciliations across QuickBooks, Xero & NetSuite.",
    icon: DocumentTextIcon,
  },
  {
    id: "payroll-compliance",
    title: "Payroll & Compliance Specialists",
    countText: "3 MEMBERS",
    description:
      "Process payroll and tax withholdings on ADP, Gusto & Rippling.",
    icon: ShieldCheckIcon,
  },
  {
    id: "supply-chain-ops",
    title: "Supply Chain & Operations Analysts",
    countText: "2 MEMBERS",
    description:
      "Support procurement, logistics coordination, and vendor management.",
    icon: TruckIcon,
  },
  {
    id: "client-operations",
    title: "Client Operations",
    countText: "1 MEMBER",
    description:
      "Manages onboarding and day-to-day communication with your team.",
    icon: UserGroupIcon,
  },
];

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".team-eyebrow",
            ".team-heading-line",
            ".team-header-description",
            ".founder-card",
            ".credential-card",
            ".section-divider",
            ".team-intro-eyebrow",
            ".team-intro-heading",
            ".team-intro-text",
            ".team-role-card",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            clearProps: "all",
          },
        );

        return;
      }

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      mainTimeline
        .fromTo(
          ".team-eyebrow",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
        )
        .fromTo(
          ".team-heading-line",
          { opacity: 0, yPercent: 110 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
            clearProps: "transform,opacity",
          },
          "-=0.4",
        )
        .fromTo(
          ".team-header-description",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.5",
        )
        .fromTo(
          ".founder-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power4.out",
            clearProps: "transform,opacity",
          },
          "-=0.4",
        )
        .fromTo(
          ".credential-card",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.5",
        )
        .fromTo(
          ".section-divider",
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
            clearProps: "transform,opacity",
          },
          "-=0.3",
        )
        .fromTo(
          ".team-intro-eyebrow",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.3",
        )
        .fromTo(
          ".team-intro-heading",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.4",
        )
        .fromTo(
          ".team-intro-text",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.4",
        )
        .fromTo(
          ".team-role-card",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
          "-=0.3",
        );

      gsap.to(".team-bg-glow", {
        scale: 1.12,
        opacity: 0.7,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="meet-the-team"
      className="relative overflow-hidden bg-bg py-16 sm:py-20 lg:py-24 font-manrope text-slate-900"
    >
      {/* Ambient background decorations */}
      <div
        aria-hidden="true"
        className="team-bg-glow absolute -left-48 top-16 h-120 w-120 rounded-full bg-soft/80 blur-3xl pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl pointer-events-none"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[78px_78px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* 1. Main Section Header (Centered) */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="team-eyebrow mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-primary">
              MEET THE TEAM
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2 className="font-cormorant font-medium leading-[0.96] tracking-[-0.035em] text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden pb-1">
              <span className="team-heading-line block">
                Enterprise Experience.
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="team-heading-line block italic text-primary">
                A Team Built to Deliver.
              </span>
            </span>
          </h2>

          <p className="team-header-description mx-auto mt-4 max-w-2xl font-manrope text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Haggai Business Solutions combines enterprise-level financial
            expertise with a dedicated team built to support growing businesses
            with discipline, accuracy, and strategic partnership.
          </p>
        </div>

        {/* 2. Founder Introduction (Full Width Premium Card, No Image, No CTA button) */}
        <div className="founder-card relative mt-10 sm:mt-12 overflow-hidden rounded-3xl border border-primary/15 bg-white/90 p-6 shadow-xl shadow-primary/5 backdrop-blur-xl sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary via-secondary to-accent"
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-soft/70 px-4 py-1 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-primary border border-secondary/20">
                <CheckBadgeIcon className="h-4 w-4 text-accent stroke-[2.2]" />
                JENSI — FOUNDER &amp; CMA
              </span>

              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-manrope text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                LEADERSHIP
              </span>
            </div>

            <h3 className="font-cormorant text-2xl font-medium leading-snug text-[#0c2e2d] sm:text-3xl lg:text-4xl">
              Enterprise experience, delivered with the responsiveness of a
              dedicated partner.
            </h3>

            <p className="font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              “With 17+ years of experience in enterprise finance and accounting
              operations, Jensi, a Certified Management Accountant (CMA), has
              led month-end close processes across entire global regions and
              managed high-volume revenue operations for fast-growing companies.
              That experience — spanning complex reconciliations, financial
              reporting, and cross-functional collaboration — shapes how Haggai
              Business Solutions approaches every client engagement: with the
              discipline of an enterprise team and the responsiveness of a
              dedicated partner.”
            </p>
          </div>
        </div>

        {/* 3. Three Founder Credentials (Compact White Cards) */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {founderCredentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <article
                key={credential.title}
                className="credential-card group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />

                <div className="flex items-center justify-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                    <Icon
                      aria-hidden="true"
                      className="h-5.5 w-5.5 stroke-[1.8]"
                    />
                  </div>

                  <div>
                    <h4 className="font-cormorant text-xl font-semibold text-[#0c2e2d] group-hover:text-primary transition-colors leading-snug">
                      {credential.title}
                    </h4>

                    {/* <p className="mt-1.5 font-manrope text-xs leading-5 text-slate-600">
                      {credential.description}
                    </p> */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 4. Visual Transition Divider */}
        <div className="section-divider my-12 sm:my-14 flex items-center justify-center gap-4">
          <span className="h-px w-24 bg-linear-to-r from-transparent via-primary/25 to-primary/40" />
          <span className="h-2 w-2 rounded-full bg-accent shadow-xs" />
          <span className="h-px w-24 bg-linear-to-l from-transparent via-primary/25 to-primary/40" />
        </div>

        {/* 5. Team Introduction Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="team-intro-eyebrow mb-3 inline-flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-accent" />
            <span className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-primary">
              THE TEAM BEHIND THE WORK
            </span>
            <span className="h-px w-6 bg-accent" />
          </div>

          <h3 className="team-intro-heading font-cormorant font-medium leading-tight text-[#0c2e2d] text-3xl sm:text-4xl md:text-5xl">
            A Team Built Around Your Business.
          </h3>

          <p className="team-intro-text mt-3 font-manrope text-base leading-7 text-slate-600 sm:text-lg">
            A multidisciplinary team handling the financial operations,
            compliance, and day-to-day support that keep your business moving.
          </p>
        </div>

        {/* 6. Five Team Role Cards (2 Centered Rows on Desktop: 3 top + 2 bottom) */}
        <div className="mt-8 sm:mt-10 space-y-4 lg:space-y-5">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {teamRoles.slice(0, 3).map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.id}
                  className="team-role-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  />

                  <div>
                    {/* Icon + Member Count Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-3">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 stroke-[1.8]"
                        />
                      </div>

                      <span className="inline-flex items-center rounded-full bg-soft/70 px-2.5 py-0.5 font-manrope text-[11px] font-extrabold tracking-wider text-primary border border-secondary/20">
                        {role.countText}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h4 className="font-cormorant text-xl font-semibold leading-snug text-[#0c2e2d] group-hover:text-primary transition-colors">
                      {role.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2 font-manrope text-xs leading-5 text-slate-600">
                      “{role.description}”
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-2.5 flex items-center justify-between text-[11px] text-primary font-semibold">
                    <span>Functional Team</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-5 max-w-3xl mx-auto">
            {teamRoles.slice(3, 5).map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.id}
                  className="team-role-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  />

                  <div>
                    {/* Icon + Member Count Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-3">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5 stroke-[1.8]"
                        />
                      </div>

                      <span className="inline-flex items-center rounded-full bg-soft/70 px-2.5 py-0.5 font-manrope text-[11px] font-extrabold tracking-wider text-primary border border-secondary/20">
                        {role.countText}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h4 className="font-cormorant text-xl font-semibold leading-snug text-[#0c2e2d] group-hover:text-primary transition-colors">
                      {role.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-2 font-manrope text-xs leading-5 text-slate-600">
                      “{role.description}”
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-2.5 flex items-center justify-between text-[11px] text-primary font-semibold">
                    <span>Functional Team</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
