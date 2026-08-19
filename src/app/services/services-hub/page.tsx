"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    key: "finance",
    title: "Finance & Accounting",
    description:
      "An outsourced accounting department that closes your books accurately and on time - bookkeeping, reconciliations, reporting, and controller-level support.",
    cta: "Explore Accounting Services",
    href: "/services/finance-accounting",
    icon: BanknotesIcon,
  },
  {
    key: "payroll",
    title: "Payroll & Workforce",
    description:
      "Accurate, compliant payroll processing and administration that keeps your team paid correctly and your business audit-ready.",
    cta: "Explore Payroll Services",
    href: "/services/payroll-workforce",
    icon: UsersIcon,
  },
  {
    key: "supply-chain",
    title: "Supply Chain",
    description:
      "Procurement, vendor management, and logistics coordination that keeps operations moving as you scale.",
    cta: "Explore Supply Chain Services",
    href: "/services/supply-chain",
    icon: TruckIcon,
  },
];

export default function ServicesHub() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".haggai-hub-eyebrow",
            ".haggai-hub-line",
            ".haggai-hub-description",
            ".haggai-hub-node",
            ".haggai-hub-spoke",
            ".haggai-hub-card",
            ".haggai-hub-cta",
          ],
          {
            opacity: 1,
            visibility: "visible",
            x: 0,
            y: 0,
            scale: 1,
            scaleY: 1,
            clearProps: "transform",
          },
        );

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
          ".haggai-hub-eyebrow",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".haggai-hub-line",
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
          ".haggai-hub-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".haggai-hub-node",
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2.4)" },
          "-=0.2",
        )
        .fromTo(
          ".haggai-hub-spoke",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            transformOrigin: "top",
          },
          "-=0.15",
        )
        .fromTo(
          ".haggai-hub-card",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.35",
        )
        .fromTo(
          ".haggai-hub-cta",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2",
        );

      gsap.to(".haggai-hub-pulse", {
        scale: 1.35,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: "power1.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="services-hub"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-56 bottom-10 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-52 top-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="haggai-hub-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Services Hub
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-cormorant text-[2.6rem] font-medium leading-[0.95] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[3.6rem]">
            <span className="block overflow-hidden pb-2">
              <span className="haggai-hub-line block">Enterprise-Grade Operations,</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="haggai-hub-line block italic text-primary">
                Built for Growing Businesses.
              </span>
            </span>
          </h2>

          <p className="haggai-hub-description mt-6 font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Whether it&apos;s your books, your people, or your supply chain, we help you
            run it with the accuracy and structure of a much larger company - without the
            overhead.
          </p>
        </div>

        {/* Hub graphic: central node branching into three spokes */}
        <div className="relative mt-16 hidden lg:block">
          <div className="haggai-hub-node absolute left-1/2 top-0 -translate-x-1/2">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="haggai-hub-pulse absolute inline-flex h-full w-full rounded-full bg-accent/70" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-accent ring-4 ring-white" />
            </span>
          </div>

          <div className="absolute left-1/2 top-2 h-10 w-px -translate-x-1/2 bg-linear-to-b from-accent/60 to-primary/20" />

          <div className="absolute left-[16.5%] right-[16.5%] top-12 h-px bg-primary/15" />

          <div className="pointer-events-none absolute inset-x-0 top-12 flex justify-between px-[16.5%]">
            <span className="haggai-hub-spoke block h-8 w-px bg-primary/20" />
            <span className="haggai-hub-spoke block h-8 w-px bg-primary/20" />
            <span className="haggai-hub-spoke block h-8 w-px bg-primary/20" />
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-8 grid gap-6 lg:mt-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.key}
                className="haggai-hub-card group relative flex flex-col overflow-hidden rounded-4xl border border-primary/10 bg-white p-7 shadow-[0_25px_60px_-35px_rgba(0,89,138,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_30px_70px_-30px_rgba(0,89,138,0.45)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-soft/60 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                </div>

                <h3 className="relative mt-6 font-cormorant text-2xl font-semibold leading-tight text-[#0c2e2d] sm:text-[1.7rem]">
                  {service.title}
                </h3>

                <p className="relative mt-3 flex-1 font-manrope text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="relative mt-7 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-primary"
                >
                  {service.cta}
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>

        {/* CTA bar */}
        <div className="haggai-hub-cta relative mt-14 overflow-hidden rounded-4xl bg-primary px-7 py-8 shadow-[0_35px_80px_-40px_rgba(0,89,138,0.75)] sm:px-10 sm:py-9">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/8 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur-md">
                <ShieldCheckIcon aria-hidden="true" className="h-6 w-6" />
              </span>

              <div>
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Not sure which service fits?
                </p>

                <p className="mt-1 font-cormorant text-xl font-semibold text-white sm:text-2xl">
                  Talk it through with our team.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft"
            >
              <CalendarDaysIcon aria-hidden="true" className="h-4 w-4" />
              Schedule a Discovery Call
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
