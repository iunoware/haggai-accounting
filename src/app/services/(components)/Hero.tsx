"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  BanknotesIcon,
  CalculatorIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const serviceHighlights = [
  {
    title: "Finance Operations",
    desc: "Streamlined bookkeeping & month-end closes",
    icon: CalculatorIcon,
  },
  {
    title: "Payroll Management",
    desc: "Accurate, compliant & on-time processing",
    icon: BanknotesIcon,
  },
  {
    title: "Supply Chain Solutions",
    desc: "Connected financial & operational logistics",
    icon: ChartBarSquareIcon,
  },
];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".svc-eyebrow", { opacity: 0, y: 15, duration: 0.6 })
        .from(".svc-heading", { opacity: 0, y: 25, duration: 0.8 }, "-=0.4")
        .from(".svc-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
        .from(".svc-highlights", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".svc-actions", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(
          ".svc-visual",
          { opacity: 0, scale: 0.95, duration: 0.9 },
          "-=0.7",
        )
        .from(".svc-float-1", { opacity: 0, x: -20, duration: 0.6 }, "-=0.5")
        .from(".svc-float-2", { opacity: 0, x: 20, duration: 0.6 }, "-=0.5")
        .from(".svc-float-3", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-16 lg:flex lg:items-center lg:pt-32 lg:pb-20 font-body text-slate-900"
      style={{ backgroundImage: "url('/images/service-bg.png')" }}
    >
      {/* Subtle overlay to ensure high text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40 lg:via-white/70"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column — Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Eyebrow */}
            {/* <div className="svc-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#EFF9FF] px-4 py-1.5 shadow-xs">
              <SparklesIcon className="h-4 w-4 text-primary" />
              <span className="font-manrope text-xs font-semibold uppercase tracking-wider text-primary">
                OUR SERVICES
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 className="svc-heading mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl">
              Finance, Payroll &amp; Supply Chain Solutions{" "}
              <span className="text-primary block sm:inline">
                Built Around Your Business
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="svc-desc mt-6 max-w-xl font-manrope text-base leading-relaxed text-slate-600 sm:text-md">
              We help medium and large enterprises streamline finance, payroll,
              and supply chain operations through scalable outsourcing solutions
              that reduce costs, improve efficiency, and support sustainable
              growth.
            </p>

            {/* Service Highlights Row */}
            {/* <div className="svc-highlights mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {serviceHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-3.5 backdrop-blur-xs shadow-xs transition-all hover:border-primary/30"
                  >
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon className="h-4 w-4 stroke-[2.5]" />
                      <span className="font-manrope text-xs font-bold text-slate-900">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-manrope text-[11px] text-slate-500 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div> */}

            {/* CTA Actions */}
            <div className="svc-actions mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-3 rounded-xl bg-primary px-8 font-manrope text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#004870] hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRightIcon className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#white-label-services"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-7 font-manrope text-sm font-semibold text-primary backdrop-blur-xs transition-all duration-300 hover:border-primary hover:bg-white hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Visual */}
          <div className="svc-visual relative flex items-center justify-center lg:col-span-5 xl:col-span-6 h-full">
            {/* Visual Container */}
            <div className="relative w-full h-full max-w-xs sm:max-w-sm overflow-hidden rounded-3xl p-2 mx-auto">
              <div className="relative aspect-4/3 w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/service-hero-1.png"
                  alt="Haggai Finance, Payroll & Supply Chain Solutions"
                  fill
                  sizes="(max-width: 1200px) 100vw, 400px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Info Accents around image */}
            {/* <div className="svc-float-1 absolute -top-4 -left-4 hidden lg:flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-950/5 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF9FF] text-primary">
                <CheckCircleIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-manrope text-xs font-bold text-slate-900">
                  Finance
                </p>
                <p className="font-manrope text-[11px] text-slate-500">
                  Streamlined Operations
                </p>
              </div>
            </div> */}

            {/* <div className="svc-float-2 absolute -bottom-4 -right-4 hidden lg:flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-950/5 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <CheckCircleIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-manrope text-xs font-bold text-slate-900">
                  Payroll
                </p>
                <p className="font-manrope text-[11px] text-slate-500">
                  Accurate &amp; Reliable
                </p>
              </div>
            </div> */}

            {/* <div className="svc-float-3 absolute top-1/2 -right-6 hidden lg:flex -translate-y-1/2 items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 shadow-lg shadow-slate-900/5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-manrope text-xs font-semibold text-primary">
                Supply Chain Connected
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
// OLD HERO IMPLEMENTATION (PRESERVED FOR RESTORATION IF NEEDED)
// ====================================================================
//
// import { useRef } from "react";
// import Link from "next/link";
// import {
//   ArrowDownIcon,
//   ArrowRightIcon,
//   BanknotesIcon,
//   CalculatorIcon,
//   ChartBarSquareIcon,
//   ClipboardDocumentCheckIcon,
// } from "@heroicons/react/24/outline";
//
// const services = [
//   {
//     title: "Bookkeeping",
//     icon: CalculatorIcon,
//   },
//   {
//     title: "Month-End Close",
//     icon: ClipboardDocumentCheckIcon,
//   },
//   {
//     title: "AP & AR Support",
//     icon: BanknotesIcon,
//   },
//   {
//     title: "Financial Reporting",
//     icon: ChartBarSquareIcon,
//   },
// ];
//
// export function OldServicesHero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-soft pb-16 pt-32 text-[#0c2e2d] sm:pt-36 lg:flex lg:items-center lg:pb-20 lg:pt-32">
//       <div aria-hidden="true" className="services-new-glow absolute left-1/2 top-1/3 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/45 blur-3xl" />
//       <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
//         ...
//       </div>
//     </section>
//   );
// }
