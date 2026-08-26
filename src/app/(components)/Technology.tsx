"use client";

import { useRef } from "react";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CommandLineIcon,
  CpuChipIcon,
  RectangleGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const technologyGroups = [
  {
    number: "01",
    title: "Accounting",
    description: "Core accounting platforms we work with every day.",
    icon: CommandLineIcon,
    platforms: ["QuickBooks", "NetSuite", "Xero", "Zoho Books", "Tally Prime"],
  },
  {
    number: "02",
    title: "ERP",
    description: "Enterprise systems that keep your operations connected.",
    icon: CpuChipIcon,
    platforms: ["NetSuite", "SAP", "Oracle"],
  },
  {
    number: "03",
    title: "Payroll",
    description: "Payroll platforms that help keep your people paid accurately.",
    icon: RectangleGroupIcon,
    platforms: ["ADP", "Gusto", "Rippling"],
  },
  {
    number: "04",
    title: "Collaboration",
    description: "Tools that keep teams connected and work moving.",
    icon: UsersIcon,
    platforms: ["Microsoft 365", "Google Workspace", "Slack", "Teams"],
  },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".technology-card");
      const platformItems = gsap.utils.toArray<HTMLElement>(".technology-platform");

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      headerTimeline
        .from(".technology-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          ".technology-heading",
          {
            opacity: 0,
            y: 35,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .from(
          ".technology-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.97,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(platformItems, {
        opacity: 0,
        x: -15,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="technology"
      aria-labelledby="technology-heading"
      className="relative overflow-hidden bg-white py-24 font-body text-slate-900 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-secondary/6 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER*/}
        <div ref={headerRef} className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="technology-eyebrow mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Technology
            </span>
          </div>

          {/* Heading */}
          <h2
            id="technology-heading"
            className="technology-heading font-heading text-3xl font-medium leading-[1.08] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            We Work Within the{" "}
            <span className="text-primary">Systems You Already Use</span>
          </h2>

          {/* Description */}
          <p className="technology-description mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            No forced migrations, no lengthy tool changeovers — we bring expertise to your
            existing tech stack.
          </p>
        </div>

        {/* TECHNOLOGY CARDS*/}
        <div
          ref={cardsRef}
          className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {technologyGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className=" group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.07] sm:p-7"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/4 blur-2xl transition-all duration-500 group-hover:bg-primary/8"
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="h-6 w-6 stroke-[1.7]" aria-hidden="true" />
                  </div>

                  <span className="font-heading text-sm font-bold tracking-wider text-slate-300">
                    {group.number}
                  </span>
                </div>

                {/* Title */}
                <div className="relative mt-7">
                  <h3 className="font-heading text-xl font-semibold text-slate-950">
                    {group.title}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                    {group.description}
                  </p>
                </div>

                {/* Platform list */}
                <div className="relative mt-6 border-t border-slate-100 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {group.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-300 group-hover:border-primary/15 group-hover:bg-soft/50"
                      >
                        <CheckIcon
                          className="h-3.5 w-3.5 text-primary"
                          aria-hidden="true"
                        />

                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>

        {/* BRIDGE MESSAGE*/}
        {/* <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:mt-16 sm:flex-row">
          <div className="hidden h-px w-16 bg-slate-200 sm:block" />

          <p className="text-sm font-medium text-slate-500">
            Already using one of these platforms?
            <span className="ml-1 text-primary">We can step right in.</span>
          </p>

          <div className="hidden h-px w-16 bg-slate-200 sm:block" />
        </div> */}

        {/* CTA*/}
        <div
          ref={ctaRef}
          className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-4xl border border-primary/10 bg-primary px-6 py-10 text-center shadow-2xl shadow-slate-950/10 sm:px-10 sm:py-12 lg:px-16"
        >
          {/* CTA background decoration */}
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
          />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
              <ArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Already using one of these platforms?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              We can step right in and work within the systems your business already
              relies on.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
            >
              Schedule a Discovery Call
              <ArrowUpRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
