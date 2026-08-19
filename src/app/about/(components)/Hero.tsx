"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 15, duration: 0.6 })
        .from(".hero-heading", { opacity: 0, y: 25, duration: 0.8 }, "-=0.4")
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
        .from(
          ".hero-visual-box",
          { opacity: 0, scale: 0.96, duration: 0.9, ease: "power2.out" },
          "-=0.4",
        )
        .from(".hero-card-1", { opacity: 0, x: -30, y: -10, duration: 0.7 }, "-=0.6")
        .from(".hero-card-2", { opacity: 0, x: -30, y: 10, duration: 0.7 }, "-=0.5")
        .from(".hero-card-3", { opacity: 0, x: 30, y: -10, duration: 0.7 }, "-=0.6")
        .from(".hero-card-4", { opacity: 0, x: 30, y: 10, duration: 0.7 }, "-=0.5")
        .from(".hero-cta-btn", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4");
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-linear-to-b from-[#EFF9FF]/60 via-white to-white pt-20 pb-16 font-body text-slate-900 sm:pt-24 lg:pt-16"
    >
      {/* Background ambient subtle grid & glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-linear-to-b from-[#00598A]/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top Eyebrow */}
        <div className="text-center">
          {/* <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#EFF9FF] px-4 py-1.5 shadow-xs">
            <SparklesIcon className="h-4 w-4 text-primary" />
            <span className="font-manrope text-xs font-semibold uppercase tracking-wider text-primary">
              About Haggai Accounting
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="hero-heading mx-auto mt-5 max-w-4xl font-heading text-4xl font-medium leading-[0.98] tracking-tight text-[#0F172A] sm:text-6xl lg:text-5xl">
            The Story Behind{" "}
            <span className="text-primary italic">Haggai Business Solutions</span>
          </h1>

          {/* Description */}
          <p className="hero-desc mx-auto mt-6 max-w-2xl font-manrope text-base leading-relaxed text-slate-600 sm:text-md">
            Haggai was founded to give growing businesses the financial clarity,
            dependable processes, and dedicated support they need to move forward with
            confidence.
          </p>
        </div>

        {/* Central Visual & Floating Cards Layout */}
        <div className="relative mx-auto mt-12 max-w-5xl lg:mt-16">
          {/* Desktop & Tablet Floating Cards Positioning Container */}
          <div className="relative flex items-center justify-center">
            {/* Floating Card 1: Top Left (Dark Navy / Haggai Blue Card) */}
            <div className="hero-card-1 absolute -top-6 left-10 z-20 hidden max-w-55 rounded-3xl border border-white/10 bg-primary p-4 text-white shadow-xl shadow-[#00598A]/25 lg:block">
              <p className="font-heading text-4xl font-bold tracking-tight text-white">
                99.8%
              </p>
              <p className="mt-2 font-manrope text-xs font-medium leading-relaxed text-sky-100/90">
                Precision &amp; consistency across financial reporting &amp; month-end
                closes.
              </p>
            </div>

            {/* Floating Card 2: Bottom Left (Light Card) */}
            <div className="hero-card-2 absolute -bottom-6 left-4 z-20 hidden max-w-52 rounded-3xl border border-slate-100 bg-white p-5 text-slate-900 shadow-xl shadow-slate-950/5 lg:block">
              <p className="font-heading text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 font-manrope text-xs font-medium leading-relaxed text-slate-600">
                Dedicated offshore team assigned directly to your business.
              </p>
            </div>

            {/* Central Main Image */}
            <div className="hero-visual-box relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:rounded-4xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 sm:rounded-3xl">
                <Image
                  src="/images/about-hero.png"
                  alt="Haggai Accounting Professional Team"
                  fill
                  sizes="(max-width: 1200px) 100vw, 800px"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Card 3: Top Right (Rating / Trust Card) */}
            <div className="hero-card-3 absolute -top-6 right-10 z-20 hidden max-w-52 rounded-3xl border border-slate-100 bg-white p-5 text-slate-900 shadow-xl shadow-slate-950/5 lg:block">
              <div className="flex items-center gap-1.5 text-amber-500">
                <p className="font-heading text-3xl font-bold text-slate-900">4.9</p>
                <div className="flex text-amber-400">
                  <StarIcon className="h-5 w-5 fill-amber-400" />
                </div>
              </div>
              <p className="mt-2 font-manrope text-xs font-medium leading-relaxed text-slate-600">
                Our average client satisfaction &amp; operational reliability rating.
              </p>
            </div>

            {/* Floating Card 4: Bottom Right (Services Pills Cluster) */}
            <div className="hero-card-4 absolute -bottom-6 right-24 z-20 hidden max-w-65 rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-950/5 lg:block">
              <p className="mb-2.5 font-manrope text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Services
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#EFF9FF] px-3 py-1 font-manrope text-xs font-semibold text-primary">
                  Bookkeeping
                </span>
                <span className="rounded-full bg-[#EFF9FF] px-3 py-1 font-manrope text-xs font-semibold text-primary">
                  Payroll
                </span>
                <span className="rounded-full bg-[#EFF9FF] px-3 py-1 font-manrope text-xs font-semibold text-primary">
                  Virtual CFO
                </span>
                <span className="rounded-full bg-[#EFF9FF] px-3 py-1 font-manrope text-xs font-semibold text-primary">
                  Financial Ops
                </span>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Card Layout (Stacked below image for clean responsive flow) */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            <div className="rounded-2xl bg-primary p-5 text-white shadow-md">
              <p className="font-heading text-3xl font-bold text-white">99.8%</p>
              <p className="mt-1 font-manrope text-xs text-sky-100">
                Precision &amp; consistency across financial reporting &amp; closes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-slate-900 shadow-xs">
              <div className="flex items-center gap-1.5">
                <p className="font-heading text-2xl font-bold text-slate-900">4.9</p>
                <StarIcon className="h-4 w-4 text-amber-400" />
              </div>
              <p className="mt-1 font-manrope text-xs text-slate-600">
                Client trust rating across managed accounts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-slate-900 shadow-xs">
              <p className="font-heading text-2xl font-bold text-primary">100%</p>
              <p className="mt-1 font-manrope text-xs text-slate-600">
                Dedicated offshore accounting team integration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <p className="mb-2 font-manrope text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Services
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[#EFF9FF] px-2.5 py-0.5 font-manrope text-xs font-semibold text-primary">
                  Bookkeeping
                </span>
                <span className="rounded-full bg-[#EFF9FF] px-2.5 py-0.5 font-manrope text-xs font-semibold text-primary">
                  Payroll
                </span>
                <span className="rounded-full bg-[#EFF9FF] px-2.5 py-0.5 font-manrope text-xs font-semibold text-primary">
                  Virtual CFO
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="hero-cta-btn mt-10 text-center sm:mt-12">
            <Link
              href="#our-story"
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-primary px-8 font-manrope text-sm font-semibold text-white shadow-lg shadow-[#00598A]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004870] hover:shadow-xl hover:shadow-[#00598A]/35 active:translate-y-0"
            >
              <span>Discover Our Story</span>
              <ArrowDownRightIcon className="h-4 w-4" />
            </Link>
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
// import Link from "next/link";
// import {
//   ArrowDownRightIcon,
//   ArrowRightIcon,
//   CheckIcon,
// } from "@heroicons/react/24/outline";
//
// const highlights = [
//   {
//     value: "Reliable",
//     label: "Financial processes built around accuracy and consistency.",
//   },
//   {
//     value: "Dedicated",
//     label: "A finance team that understands your business.",
//   },
//   {
//     value: "Scalable",
//     label: "Accounting support designed to grow with you.",
//   },
// ];
//
// export function OldAboutHero() {
//   return (
//     <section className="relative overflow-hidden bg-soft/40 pt-10">
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.045)_1px,transparent_1px)] bg-size-[72px_72px]"
//       />
//
//       <div
//         aria-hidden="true"
//         className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-secondary/15 blur-3xl"
//       />
//
//       <div
//         aria-hidden="true"
//         className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-soft blur-3xl"
//       />
//
//       <div
//         aria-hidden="true"
//         className="absolute right-[8%] top-[24%] hidden h-24 w-24 rounded-full border border-secondary/20 lg:block"
//       >
//         <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
//       </div>
//
//       <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-360 flex-col px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-10 lg:pt-24">
//         <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
//           <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-sm">
//             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
//               <span className="h-1.5 w-1.5 rounded-full bg-accent" />
//             </span>
//
//             <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
//               About Haggai Accounting
//             </span>
//           </div>
//
//           <h1 className="max-w-4xl font-cormorant text-[3.4rem] font-medium leading-[0.91] tracking-[-0.045em] text-[#0c2e2d] sm:text-7xl lg:text-[6.8rem]">
//             The story behind
//             <span className="relative block font-normal italic text-primary">
//               Haggai Accounting
//               <span
//                 aria-hidden="true"
//                 className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-accent sm:w-32"
//               />
//             </span>
//           </h1>
//
//           <p className="mt-10 max-w-2xl font-manrope text-sm leading-7 text-[#426474] sm:text-base sm:leading-8">
//             Haggai was founded to give growing businesses the financial clarity,
//             dependable processes, and dedicated accounting support they need to move
//             forward with confidence.
//           </p>
//
//           <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
//             <Link
//               href="#our-story"
//               className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-primary px-6 font-manrope text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004875] hover:shadow-xl hover:shadow-primary/20"
//             >
//               <span>Discover our story</span>
//               <ArrowDownRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
//               />
//             </Link>
//
//             <Link
//               href="/contact"
//               className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-secondary/30 bg-white/50 px-5 font-manrope text-sm font-semibold text-primary transition-all duration-300 hover:border-secondary hover:bg-white"
//             >
//               <span>Work with Haggai</span>
//               <ArrowRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>
//
//         <div className="mt-16 overflow-hidden rounded-2xl border border-primary/10 bg-white/55 shadow-[0_18px_50px_-35px_rgba(0,89,138,0.35)] backdrop-blur-sm lg:mt-10">
//           <div className="grid md:grid-cols-3">
//             {highlights.map((item, index) => (
//               <div
//                 key={item.value}
//                 className={`group relative px-5 py-7 text-center transition-colors duration-300 hover:bg-soft/55 sm:px-8 lg:py-8 ${
//                   index !== highlights.length - 1
//                     ? "border-b border-primary/10 md:border-b-0 md:border-r"
//                     : ""
//                 }`}
//               >
//                 <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
//                   <CheckIcon aria-hidden="true" className="h-4 w-4" />
//                 </div>
//
//                 <p className="font-cormorant text-3xl font-semibold tracking-[-0.02em] text-primary sm:text-4xl">
//                   {item.value}
//                 </p>
//
//                 <p className="mx-auto mt-2 max-w-xs font-manrope text-xs leading-5 text-[#55717e]">
//                   {item.label}
//                 </p>
//
//                 <span
//                   aria-hidden="true"
//                   className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent transition-all duration-500 group-hover:w-16"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
