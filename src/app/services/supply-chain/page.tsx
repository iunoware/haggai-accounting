"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CheckIcon,
  CubeIcon,
  TruckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FinancialDashboardCTA from "@/src/components/FinancialDashboardCTA";

gsap.registerPlugin(ScrollTrigger);

const supplyChainItems = [
  {
    number: "01",
    title: "Procurement Support",
    description:
      "Efficient, cost-conscious purchasing that keeps your operations supplied without unnecessary spend.",
  },
  {
    number: "02",
    title: "Vendor Management",
    description:
      "Stronger vendor relationships and performance tracking to keep suppliers accountable and reliable.",
  },
  {
    number: "03",
    title: "Purchase Order Processing",
    description:
      "Accurate, timely PO handling that keeps purchasing activity organised and traceable.",
  },
  {
    number: "04",
    title: "Inventory Management",
    description:
      "Better visibility into inventory levels to reduce stockouts, overstock issues, and unnecessary costs.",
  },
  {
    number: "05",
    title: "Order Management",
    description:
      "Smooth coordination from order placement through fulfillment, keeping every step on track.",
  },
  {
    number: "06",
    title: "Logistics Coordination",
    description:
      "Reliable movement of goods, coordinated to help deliveries stay on schedule.",
  },
  {
    number: "07",
    title: "Supply Chain Analytics",
    description:
      "Data-driven insight into where your supply chain can improve, helping you identify inefficiencies and opportunities.",
  },
];

const supplyChainFlow = [
  {
    number: "01",
    title: "Procure",
    description: "Source what your business needs.",
  },
  {
    number: "02",
    title: "Manage",
    description: "Keep vendors and orders organised.",
  },
  {
    number: "03",
    title: "Track",
    description: "Maintain visibility across inventory.",
  },
  {
    number: "04",
    title: "Move",
    description: "Coordinate goods and logistics.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Keep fulfillment moving on schedule.",
  },
];

export default function SupplyChainServices() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const animatedSelectors = [
        ".haggai-supply-eyebrow",
        ".haggai-supply-line",
        ".haggai-supply-description",
        ".haggai-supply-action",
        ".haggai-supply-hero-visual",
        ".haggai-supply-services-header",
        ".haggai-supply-service-card",
        ".haggai-supply-flow-header",
        ".haggai-supply-flow-item",
        ".haggai-supply-flow-line",
        ".haggai-supply-why",
        ".haggai-supply-why-rule",
        ".haggai-supply-cta",
      ];

      if (reduceMotion) {
        gsap.set(animatedSelectors, {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          scaleX: 1,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      /* --------------------------------
         HERO
      -------------------------------- */

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-supply-hero",
            start: "top 75%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-supply-eyebrow",
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
          ".haggai-supply-line",
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
          ".haggai-supply-description",
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
          ".haggai-supply-action",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".haggai-supply-hero-visual",
          {
            opacity: 0,
            scale: 0.96,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        );

      /* --------------------------------
         WHAT YOU GET
      -------------------------------- */

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-supply-services",
            start: "top 78%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-supply-services-header",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".haggai-supply-service-card",
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2",
        );

      /* --------------------------------
         SUPPLY CHAIN FLOW
      -------------------------------- */

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".haggai-supply-flow",
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".haggai-supply-flow-header",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".haggai-supply-flow-line",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            transformOrigin: "left",
          },
          "-=0.15",
        )
        .fromTo(
          ".haggai-supply-flow-item",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.45",
        );

      /* --------------------------------
         WHY IT MATTERS
      -------------------------------- */

      gsap.fromTo(
        ".haggai-supply-why",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-supply-why-section",
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".haggai-supply-why-rule",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left",
          scrollTrigger: {
            trigger: ".haggai-supply-why-section",
            start: "top 78%",
            once: true,
          },
        },
      );

      /* --------------------------------
         CTA
      -------------------------------- */

      gsap.fromTo(
        ".haggai-supply-cta",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".haggai-supply-cta",
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="relative bg-bg">
      {/* HERO*/}
      <section className="haggai-supply-hero relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute -left-56 top-0 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-52 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
        />

        {/* Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            {/* Hero Content */}
            <div>
              <div className="haggai-supply-eyebrow mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Supply Chain Services
                </span>
              </div>

              <h1 className="font-cormorant text-[2.8rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[4.4rem]">
                <span className="block overflow-hidden pb-2">
                  <span className="haggai-supply-line block">Supply Chains That</span>
                </span>

                <span className="block overflow-hidden pb-3">
                  <span className="haggai-supply-line block italic text-primary">
                    Keep Businesses Moving.
                  </span>
                </span>
              </h1>

              <p className="haggai-supply-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                As your business grows, procurement and logistics can&apos;t run on
                outdated processes. We bring structure and coordination that scales with
                you.
              </p>

              <div className="haggai-supply-action mt-9">
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

            {/* Hero Visual */}
            <div className="haggai-supply-hero-visual relative">
              <div className="relative mx-auto max-w-md">
                {/* Main panel */}
                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_25px_70px_rgba(12,46,45,0.08)] sm:p-7">
                  {/* Top */}
                  <div className="flex items-center justify-between border-b border-primary/10 pb-5">
                    <div>
                      <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">
                        Supply Chain
                      </span>

                      <p className="mt-1 font-cormorant text-xl font-semibold text-[#0c2e2d]">
                        Connected Operations
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-soft text-primary">
                      <ArrowsRightLeftIcon aria-hidden="true" className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Flow */}
                  <div className="relative py-7">
                    <div className="absolute bottom-9 left-4.75 top-9 w-px bg-primary/10" />

                    {[
                      {
                        title: "Procurement",
                        description: "Source efficiently",
                      },
                      {
                        title: "Inventory",
                        description: "Maintain visibility",
                      },
                      {
                        title: "Logistics",
                        description: "Move reliably",
                      },
                      {
                        title: "Delivery",
                        description: "Stay on schedule",
                      },
                    ].map((item, index) => (
                      <div
                        key={item.title}
                        className="relative flex items-center gap-4 py-2.5"
                      >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white shadow-sm">
                          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                        </div>

                        <div>
                          <p className="font-manrope text-sm font-semibold text-[#0c2e2d]">
                            {item.title}
                          </p>

                          <p className="font-manrope text-[11px] text-slate-400">
                            {item.description}
                          </p>
                        </div>

                        {index < 3 && (
                          <ArrowRightIcon
                            aria-hidden="true"
                            className="ml-auto h-3.5 w-3.5 text-primary/20"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="rounded-2xl bg-soft/50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                        <CheckIcon aria-hidden="true" className="h-3.5 w-3.5" />
                      </span>

                      <p className="font-manrope text-[11px] font-medium text-primary/70">
                        Structured coordination across every step
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative nodes */}
                <div
                  aria-hidden="true"
                  className="absolute -right-5 top-10 h-10 w-10 rounded-full border border-primary/10 bg-white shadow-sm"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -left-5 h-16 w-16 rounded-full border border-accent/20 bg-soft/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET*/}
      <section className="haggai-supply-services relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="haggai-supply-services-header mb-12 grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                  What You Get
                </span>
              </div>

              <h2 className="max-w-2xl font-cormorant text-4xl font-semibold leading-[0.95] tracking-tight text-[#0c2e2d] sm:text-5xl lg:text-6xl">
                The moving parts,
                <br />
                <span className="text-primary/90">working together.</span>
              </h2>
            </div>

            <div className="border-l border-primary/15 pl-5 lg:pb-1">
              <p className="font-manrope text-sm leading-7 text-slate-500">
                From procurement to analytics, we bring structure and visibility to the
                processes that keep your business moving.
              </p>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supplyChainItems.map((item, index) => (
              <div
                key={item.number}
                className={`haggai-supply-service-card group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_12px_35px_rgba(12,46,45,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_45px_rgba(12,46,45,0.08)] sm:p-7 ${
                  index === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Accent */}
                <span className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                {/* Header */}
                <div className="flex items-start justify-between">
                  <span className="font-manrope text-[11px] font-bold tracking-[0.18em] text-primary/35">
                    {item.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/10 text-primary/30 transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary">
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-9 flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {index === 0 && <CubeIcon aria-hidden="true" className="h-5 w-5" />}

                  {index === 1 && (
                    <ArrowsRightLeftIcon aria-hidden="true" className="h-5 w-5" />
                  )}

                  {index === 2 && (
                    <ClipboardDocumentListIcon aria-hidden="true" className="h-5 w-5" />
                  )}

                  {index === 3 && <CubeIcon aria-hidden="true" className="h-5 w-5" />}

                  {index === 4 && <ChartBarIcon aria-hidden="true" className="h-5 w-5" />}

                  {index === 5 && <TruckIcon aria-hidden="true" className="h-5 w-5" />}

                  {index === 6 && <ChartBarIcon aria-hidden="true" className="h-5 w-5" />}
                </div>

                {/* Content */}
                <h3 className="mt-6 font-cormorant text-[1.65rem] font-semibold leading-tight text-[#0c2e2d]">
                  {item.title}
                </h3>

                <p className="mt-3 font-manrope text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-px w-5 bg-accent transition-all duration-300 group-hover:w-8" />

                  <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-primary/40">
                    Included
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage strip */}
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-primary/10 bg-soft/40 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <CheckIcon aria-hidden="true" className="h-4 w-4" />
              </span>

              <p className="font-manrope text-xs font-medium text-[#0c2e2d]/70">
                Structured support across your supply chain operations.
              </p>
            </div>

            <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-primary/40">
              End-to-End Coordination
            </span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS*/}
      <section className="haggai-supply-flow relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="haggai-supply-flow-header mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                Connected Operations
              </span>

              <span className="h-px w-8 bg-accent" />
            </div>

            <h2 className="font-cormorant text-4xl font-semibold leading-tight text-[#0c2e2d] sm:text-5xl">
              From procurement to delivery,
              <br />
              <span className="italic text-primary">every step stays connected.</span>
            </h2>
          </div>

          {/* Flow */}
          <div className="relative">
            {/* Connecting line */}
            <div className="haggai-supply-flow-line absolute left-[10%] right-[10%] top-8 hidden h-px bg-primary/15 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {supplyChainFlow.map((item) => (
                <div
                  key={item.number}
                  className="haggai-supply-flow-item relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/15 bg-white shadow-[0_8px_25px_rgba(12,46,45,0.06)]">
                    <span className="font-manrope text-xs font-bold text-primary">
                      {item.number}
                    </span>

                    <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-accent" />
                  </div>

                  <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-45 font-manrope text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-primary/10" />

            <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/45">
              Structure • Visibility • Coordination
            </span>

            <span className="h-px w-12 bg-primary/10" />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS*/}
      <section className="haggai-supply-why-section relative overflow-hidden py-20 sm:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-primary" />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[70px_70px]"
        />

        <div className="haggai-supply-why relative mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-12">
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft/70">
            Why It Matters to You
          </span>

          <div className="mt-7">
            <span
              aria-hidden="true"
              className="block font-cormorant text-[5rem] italic leading-none text-accent/70 sm:text-[6rem]"
            >
              &ldquo;
            </span>

            <blockquote className="-mt-8 font-cormorant text-[1.8rem] font-medium leading-tight text-white sm:-mt-10 sm:text-[2.5rem] lg:text-[2.7rem]">
              A supply chain that scales with your business means{" "}
              <span className="italic text-accent">
                fewer disruptions, lower costs, and more reliable delivery
              </span>{" "}
              - without building a full internal team.
            </blockquote>

            <span
              aria-hidden="true"
              className="haggai-supply-why-rule mx-auto mt-9 block h-px w-24 bg-accent"
            />

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-accent/50" />

              <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-soft/55">
                The Haggai Standard
              </span>

              <span className="h-px w-10 bg-accent/50" />
            </div>
          </div>
        </div>
      </section>

      <FinancialDashboardCTA />
    </div>
  );
}
