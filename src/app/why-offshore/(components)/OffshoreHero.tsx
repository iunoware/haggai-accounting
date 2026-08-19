/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useRef } from "react";
// import Link from "next/link";
// import {
//   ArrowDownIcon,
//   ArrowRightIcon,
//   ArrowTrendingUpIcon,
//   CurrencyDollarIcon,
//   GlobeAltIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const benefits = [
//   {
//     title: "Lower Operating Costs",
//     icon: CurrencyDollarIcon,
//   },
//   {
//     title: "Dedicated Accounting Team",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Global Talent Access",
//     icon: GlobeAltIcon,
//   },
//   {
//     title: "Scalable Growth",
//     icon: ArrowTrendingUpIcon,
//   },
// ];

// export default function OffshoreHero() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useGSAP(
//     () => {
//       const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//       if (reduceMotion) {
//         gsap.set(
//           [
//             ".offshore-hero-eyebrow",
//             ".offshore-hero-line",
//             ".offshore-hero-description",
//             ".offshore-hero-actions",
//             ".offshore-hero-scroll",
//             ".offshore-hero-card",
//           ],
//           {
//             opacity: 1,
//             visibility: "visible",
//             y: 0,
//             scale: 1,
//             clearProps: "transform",
//           },
//         );

//         return;
//       }

//       const timeline = gsap.timeline({
//         defaults: {
//           ease: "power3.out",
//         },
//       });

//       timeline
//         .from(".offshore-hero-eyebrow", {
//           opacity: 0,
//           y: 18,
//           duration: 0.65,
//         })
//         .from(
//           ".offshore-hero-line",
//           {
//             opacity: 0,
//             yPercent: 110,
//             duration: 1,
//             stagger: 0.14,
//             ease: "power4.out",
//           },
//           "-=0.3",
//         )
//         .from(
//           ".offshore-hero-description",
//           {
//             opacity: 0,
//             y: 22,
//             duration: 0.7,
//           },
//           "-=0.45",
//         )
//         .from(
//           ".offshore-hero-actions",
//           {
//             opacity: 0,
//             y: 18,
//             duration: 0.65,
//           },
//           "-=0.35",
//         )
//         .fromTo(
//           ".offshore-hero-card",
//           {
//             opacity: 0,
//             y: 35,
//             scale: 0.96,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.3,
//             stagger: 0.1,
//             ease: "power3.out",
//             clearProps: "transform",
//           },
//           "-=0.25",
//         )
//         .from(
//           ".offshore-hero-scroll",
//           {
//             opacity: 0,
//             y: 12,
//             duration: 0.6,
//           },
//           "-=0.3",
//         );

//       gsap.to(".offshore-ring-one", {
//         rotate: 360,
//         duration: 38,
//         repeat: -1,
//         ease: "none",
//       });

//       gsap.to(".offshore-ring-two", {
//         rotate: -360,
//         duration: 48,
//         repeat: -1,
//         ease: "none",
//       });

//       gsap.to(".offshore-scroll-icon", {
//         y: 7,
//         duration: 1.4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.to(".offshore-glow", {
//         scale: 1.18,
//         opacity: 0.8,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     },
//     {
//       scope: sectionRef,
//     },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-soft pb-16 pt-32 text-[#0c2e2d] sm:pt-36 lg:flex lg:items-center lg:pb-20 lg:pt-32"
//     >
//       {/* Background glow */}
//       <div
//         aria-hidden="true"
//         className="offshore-glow absolute left-1/2 top-1/3 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/45 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-soft/10 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
//       />

//       {/* Decorative rings */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-[44%] h-192 w-3xl -translate-x-1/2 -translate-y-1/2"
//       >
//         <div className="offshore-ring-one absolute inset-0 rounded-full border border-white/10">
//           {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(226,158,33,0.18)]" /> */}
//         </div>

//         <div className="offshore-ring-two absolute inset-24 rounded-full border border-white/8">
//           {/* <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" /> */}
//         </div>

//         <div className="absolute inset-48 rounded-full border border-white/6" />
//       </div>

//       {/* Subtle grid */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[90px_90px]"
//       />

//       <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* Main centered content */}
//         <div className="mx-auto max-w-5xl text-center">
//           <div className="offshore-hero-eyebrow mb-6 flex items-center justify-center gap-3">
//             <span className="h-px w-9 bg-accent" />

//             <span className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-primary">
//               Why Offshore Accounting
//             </span>

//             <span className="h-px w-9 bg-accent" />
//           </div>

//           <h1 className="font-cormorant text-[3rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[6rem]">
//             <span className="block pb-6">
//               <span className="offshore-hero-line block">Offshore accounting</span>
//             </span>

//             <span className="block pb-3">
//               <span className="offshore-hero-line block italic text-primary">
//                 built for growth.
//               </span>
//             </span>
//           </h1>

//           <p className="offshore-hero-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-primary/80 sm:text-base sm:leading-8">
//             Reduce overhead, access experienced accounting professionals, and build a
//             reliable finance function that grows alongside your business.
//           </p>

//           <div className="offshore-hero-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               href="#offshore-benefits"
//               className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
//             >
//               Discover the Benefits
//               <ArrowRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15"
//             >
//               Talk to Our Team
//             </Link>
//           </div>
//         </div>

//         {/* Benefit strip */}
//         <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
//           {benefits.map((benefit, index) => {
//             const Icon = benefit.icon;

//             return (
//               <div
//                 key={benefit.title}
//                 className="offshore-hero-card group relative overflow-hidden border border-white/15 bg-white/[0.07] px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/11"
//               >
//                 <div className="flex items-center justify-between gap-5">
//                   <div className="flex items-center gap-4">
//                     <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-[#0c2e2d]">
//                       <Icon
//                         aria-hidden="true"
//                         className="h-5 w-5 text-black group-hover:text-soft"
//                       />
//                     </span>

//                     <div>
//                       <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/55">
//                         0{index + 1}
//                       </p>

//                       <h2 className="mt-1 font-cormorant text-md font-semibold text-[#0c2e2d]">
//                         {benefit.title}
//                       </h2>
//                     </div>
//                   </div>

//                   <ArrowRightIcon
//                     aria-hidden="true"
//                     className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </div>

//                 <span
//                   aria-hidden="true"
//                   className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Scroll indicator */}
//         <a
//           href="#offshore-benefits"
//           className="offshore-hero-scroll mx-auto mt-10 flex w-fit flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 transition-colors duration-300 hover:text-[#0c2e2d]"
//         >
//           Discover More
//           <span className="offshore-scroll-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/6">
//             <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
//           </span>
//         </a>
//       </div>

//       {/* Curved transition */}
//       <div
//         aria-hidden="true"
//         className="absolute -bottom-px left-0 h-10 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-14 lg:h-16"
//       />
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* DATA */
const reasons = [
  {
    number: "01",
    title: "Experienced Professionals",
    shortTitle: "Experience",
    description:
      "Backed by 17+ years of enterprise finance and operations experience, applied to your business from day one.",
    icon: UserGroupIcon,
  },
  {
    number: "02",
    title: "Scalable Delivery",
    shortTitle: "Scalability",
    description:
      "Flexible teams that grow with your business - no rehiring or restructuring as your needs change.",
    icon: ArrowTrendingUpIcon,
  },
  {
    number: "03",
    title: "Technology-Driven",
    shortTitle: "Technology",
    description:
      "Hands-on experience across leading accounting, ERP, and reporting platforms, so we fit into your existing systems.",
    icon: ComputerDesktopIcon,
  },
  {
    number: "04",
    title: "Secure & Confidential",
    shortTitle: "Security",
    description:
      "Strong controls and secure handling of your financial and business data, every step of the way.",
    icon: ShieldCheckIcon,
  },
  {
    number: "05",
    title: "Client-Centric",
    shortTitle: "Partnership",
    description:
      "Dedicated support with responsive communication - you're never left waiting for answers.",
    icon: CheckCircleIcon,
  },
  {
    number: "06",
    title: "Continuous Improvement",
    shortTitle: "Improvement",
    description:
      "We look for ways to improve efficiency, not just complete tasks - your operations get better over time, not just maintained.",
    icon: SparklesIcon,
  },
];

/* HERO */
function WhyHaggaiHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-hero-eyebrow",
        ".why-hero-line",
        ".why-hero-description",
        ".why-hero-actions",
        ".why-hero-card",
        ".why-hero-scroll",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".why-hero-eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.6,
      })
        .from(
          ".why-hero-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".why-hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.35",
        )
        .from(
          ".why-hero-actions",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          "-=0.25",
        )
        .from(
          ".why-hero-card",
          {
            opacity: 0,
            y: 28,
            scale: 0.97,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3",
        )
        .from(
          ".why-hero-scroll",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
          },
          "-=0.2",
        );

      gsap.to(".why-hero-orbit-one", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".why-hero-orbit-two", {
        rotate: -360,
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".why-hero-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".why-hero-scroll-icon", {
        y: 6,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-bg pb-20 pt-32 text-[#0c2e2d] sm:pt-36 lg:flex lg:items-center lg:pt-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="why-hero-glow absolute left-1/2 top-1/3 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-white/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      {/* Orbit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[43%] hidden h-192 w-3xl -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <div className="why-hero-orbit-one absolute inset-0 rounded-full border border-primary/10">
          {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" /> */}
        </div>

        <div className="why-hero-orbit-two absolute inset-24 rounded-full border border-primary/8">
          {/* <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary" /> */}
        </div>

        <div className="absolute inset-48 rounded-full border border-primary/5" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <div className="why-hero-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Why Choose Haggai
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          {/* Heading */}
          <h1 className="font-cormorant text-[3.2rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]">
            <span className="block pb-4">
              <span className="why-hero-line block">Measurable reasons</span>
            </span>

            <span className="block pb-4">
              <span className="why-hero-line block italic text-primary">
                to trust Haggai.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="why-hero-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-primary/75 sm:text-base sm:leading-8">
            We combine experienced professionals, scalable delivery, technology, security,
            and responsive support to help your business operate with confidence.
          </p>

          {/* Actions */}
          <div className="why-hero-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#why-haggai-reasons"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
            >
              See Why Haggai
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/40 px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/70"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>

        {/* Six reason preview cards */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="why-hero-card group relative overflow-hidden rounded-2xl border border-white/70 bg-white/45 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/70"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/45">
                      {reason.number}
                    </p>

                    <h2 className="mt-1 font-cormorant text-xl font-semibold text-[#0c2e2d]">
                      {reason.shortTitle}
                    </h2>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </div>
            );
          })}
        </div>

        {/* Scroll */}
        <a
          href="#why-haggai-reasons"
          className="why-hero-scroll mx-auto mt-10 flex w-fit flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55 transition-colors duration-300 hover:text-primary"
        >
          Explore the difference
          <span className="why-hero-scroll-icon flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white/40">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
        </a>
      </div>

      {/* Bottom curve */}
      <div
        aria-hidden="true"
        className="absolute -bottom-px left-0 h-10 w-full bg-bg [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-14 lg:h-16"
      />
    </section>
  );
}

/* INTRO */
function WhyHaggaiIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-intro-eyebrow",
        ".why-intro-line",
        ".why-intro-description",
        ".why-intro-point",
        ".why-intro-stat",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".why-intro-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          ".why-intro-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".why-intro-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.35",
        )
        .from(
          ".why-intro-point",
          {
            opacity: 0,
            x: -18,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.25",
        )
        .from(
          ".why-intro-stat",
          {
            opacity: 0,
            y: 25,
            scale: 0.96,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-56 top-10 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-56 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <div>
            <div className="why-intro-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Built on Experience
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden pb-2">
                <span className="why-intro-line block">More than a service.</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="why-intro-line block italic text-primary">
                  A trusted operating partner.
                </span>
              </span>
            </h2>

            <p className="why-intro-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Haggai brings together experienced people, dependable processes, modern
              technology, and a commitment to continuous improvement. The result is
              operational support that becomes stronger as your business grows.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Enterprise experience applied from day one",
                "Flexible support that grows with your business",
                "Technology that works with your existing systems",
                "Security and accountability built into delivery",
              ].map((point) => (
                <div key={point} className="why-intro-point flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>

                  <span className="font-manrope text-sm font-medium text-[#0c2e2d]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience visual */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="why-intro-stat relative overflow-hidden rounded-3xl bg-primary p-7 shadow-[0_35px_80px_-45px_rgba(0,89,138,0.7)]">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <ChartBarIcon className="h-7 w-7" />
                </div>

                <p className="mt-8 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Enterprise Experience
                </p>

                <p className="mt-2 font-cormorant text-6xl font-semibold text-white">
                  17+
                </p>

                <p className="mt-2 font-manrope text-sm leading-6 text-white/65">
                  Years of finance and operations experience brought to your business from
                  day one.
                </p>
              </div>
            </div>

            <div className="why-intro-stat rounded-3xl border border-primary/10 bg-[#F8FCFE] p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft text-primary">
                <Cog6ToothIcon className="h-7 w-7" />
              </div>

              <p className="mt-8 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                Our Approach
              </p>

              <h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#0c2e2d]">
                Built to improve.
              </h3>

              <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
                We do not simply maintain your operations. We continuously look for ways
                to make them more efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SIX REASONS */
function WhyHaggaiReasons() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-reasons-eyebrow",
        ".why-reasons-line",
        ".why-reasons-description",
        ".why-reason-card",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".why-reasons-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          ".why-reasons-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".why-reasons-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".why-reason-card",
          {
            opacity: 0,
            y: 35,
            scale: 0.97,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="why-haggai-reasons"
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="why-reasons-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              The Haggai Difference
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden pb-2">
              <span className="why-reasons-line block">Six reasons to</span>
            </span>

            <span className="block pb-3">
              <span className="why-reasons-line block italic text-primary">
                choose Haggai.
              </span>
            </span>
          </h2>

          <p className="why-reasons-description mx-auto mt-6 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Every part of our delivery is designed around one goal: helping your business
            operate more effectively, securely, and confidently.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_25px_65px_-45px_rgba(0,89,138,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_35px_75px_-45px_rgba(0,89,138,0.7)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>

                  <span className="font-manrope text-xs font-semibold tracking-[0.18em] text-primary/35">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-7 font-cormorant text-3xl font-semibold leading-tight text-[#0c2e2d]">
                  {reason.title}
                </h3>

                <p className="mt-4 font-manrope text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>

                {/* <div className="mt-7 flex items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/50 transition-colors duration-300 group-hover:text-primary">
                  <span>Why it matters</span>

                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div> */}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* OPERATING MODEL */
function WhyHaggaiApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-approach-visual",
        ".why-approach-eyebrow",
        ".why-approach-line",
        ".why-approach-description",
        ".why-approach-point",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".why-approach-visual", {
        opacity: 0,
        x: -35,
        scale: 0.97,
        duration: 0.8,
        ease: "power4.out",
      })
        .from(
          ".why-approach-eyebrow",
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
          },
          "-=0.5",
        )
        .from(
          ".why-approach-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".why-approach-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".why-approach-point",
          {
            opacity: 0,
            x: 18,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.25",
        );

      gsap.to(".why-approach-float", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-60 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-56 top-20 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual */}
          <div className="why-approach-visual relative">
            <div className="relative overflow-hidden rounded-4xl bg-primary p-6 shadow-[0_35px_85px_-42px_rgba(0,89,138,0.8)] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[70px_70px]"
              />

              <div className="relative">
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  How Haggai Works
                </p>

                <h3 className="mt-3 max-w-lg font-cormorant font-semibold leading-tight text-white text-2xl sm:text-3xl">
                  Experience that adapts to your business.
                </h3>

                <div className="mt-10 space-y-4">
                  {[
                    "Understand your existing operations",
                    "Fit into your systems and workflows",
                    "Scale support as requirements change",
                    "Continuously identify improvements",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-[#0c2e2d] font-manrope text-xs font-bold">
                        0{index + 1}
                      </span>

                      <p className="font-manrope text-sm leading-6 text-white/75">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="why-approach-float mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c2e2d]/30 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent">
                    <SparklesIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Haggai Mindset
                    </p>

                    <p className="mt-1 font-cormorant text-xl font-semibold text-white">
                      Better operations over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="why-approach-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Continuous Improvement
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden pb-2">
                <span className="why-approach-line block">We don&apos;t just</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="why-approach-line block italic text-primary">
                  complete tasks.
                </span>
              </span>
            </h2>

            <p className="why-approach-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Haggai looks beyond day-to-day delivery. We identify ways to improve
              efficiency, strengthen processes, and help your operations become better
              over time.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Review how work is currently being performed",
                "Identify unnecessary steps and inefficiencies",
                "Use technology to improve visibility and consistency",
                "Build better processes as your business evolves",
              ].map((point) => (
                <div key={point} className="why-approach-point flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <CheckCircleIcon className="h-4 w-4" />
                  </span>

                  <span className="font-manrope text-sm font-medium text-[#0c2e2d]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TECHNOLOGY + SECURITY */
function WhyHaggaiTechnology() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-tech-eyebrow",
        ".why-tech-line",
        ".why-tech-description",
        ".why-tech-card",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".why-tech-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          ".why-tech-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".why-tech-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".why-tech-card",
          {
            opacity: 0,
            y: 28,
            scale: 0.97,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="why-tech-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Technology & Trust
            </span>

            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block pb-2">
              <span className="why-tech-line block">Modern systems.</span>
            </span>

            <span className="block pb-3">
              <span className="why-tech-line block italic text-primary">
                Trusted handling.
              </span>
            </span>
          </h2>

          <p className="why-tech-description mx-auto mt-6 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Our technology experience helps us integrate with your existing environment,
            while strong controls help keep your financial and business information
            secure.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Technology */}
          <article className="why-tech-card group relative overflow-hidden rounded-3xl bg-primary p-7 shadow-[0_30px_75px_-45px_rgba(0,89,138,0.75)] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <ComputerDesktopIcon className="h-7 w-7" />
                </span>

                {/* <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  03
                </span> */}
              </div>

              <h3 className="mt-8 font-cormorant text-4xl font-semibold text-white">
                Technology-Driven
              </h3>

              <p className="mt-4 font-manrope text-sm leading-7 text-white/65">
                Hands-on experience across leading accounting, ERP, and reporting
                platforms, so we fit into your existing systems.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Accounting", "ERP", "Reporting"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-center font-manrope text-xs font-medium text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Security */}
          <article className="why-tech-card group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_25px_65px_-45px_rgba(0,89,138,0.55)] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-soft blur-3xl"
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft text-primary">
                  <ShieldCheckIcon className="h-7 w-7" />
                </span>

                {/* <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/35">
                  04
                </span> */}
              </div>

              <h3 className="mt-8 font-cormorant text-4xl font-semibold text-[#0c2e2d]">
                Secure & Confidential
              </h3>

              <p className="mt-4 font-manrope text-sm leading-7 text-slate-600">
                Strong controls and secure handling of your financial and business data,
                every step of the way.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Controlled access",
                  "Secure data handling",
                  "Clear accountability",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-primary" />

                    <span className="font-manrope text-sm font-medium text-[#0c2e2d]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* CLIENT CENTRIC */
function WhyHaggaiClientCentric() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const elements = [
        ".why-client-eyebrow",
        ".why-client-line",
        ".why-client-description",
        ".why-client-card",
        ".why-client-action",
      ];

      if (reduceMotion) {
        gsap.set(elements, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(".why-client-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          ".why-client-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.85,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .from(
          ".why-client-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
          },
          "-=0.3",
        )
        .from(
          ".why-client-card",
          {
            opacity: 0,
            y: 25,
            scale: 0.97,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.25",
        )
        .from(
          ".why-client-action",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Content */}
          <div>
            <div className="why-client-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Client-Centric
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden pb-2">
                <span className="why-client-line block">You should never</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="why-client-line block italic text-primary">
                  have to chase us.
                </span>
              </span>
            </h2>

            <p className="why-client-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Dedicated support and responsive communication mean you always know where
              things stand. When you need an answer, our team is there to help.
            </p>

            <div className="why-client-action mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,89,138,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
              >
                Talk to Our Team
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Communication cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Responsive Communication",
                description:
                  "Clear communication channels and timely responses keep you informed.",
                icon: UserGroupIcon,
              },
              {
                title: "Dedicated Support",
                description:
                  "A team that understands your business and stays connected to your priorities.",
                icon: CheckCircleIcon,
              },
              {
                title: "Clear Answers",
                description:
                  "Questions and issues are addressed directly instead of getting lost in layers.",
                icon: ChartBarIcon,
              },
              {
                title: "Long-Term Partnership",
                description:
                  "Our relationship grows alongside your business, not just around individual tasks.",
                icon: SparklesIcon,
              },
            ].map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group rounded-3xl border border-primary/10 bg-[#F8FCFE] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 sm:p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-6 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                    {card.title}
                  </h3>

                  <p className="mt-3 font-manrope text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CTA */
function WhyHaggaiCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".why-cta-content", {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "transform",
        });

        return;
      }

      gsap.from(".why-cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.to(".why-cta-glow", {
        scale: 1.15,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bg px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32"
    >
      <div className="why-cta-content relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-primary px-6 py-12 shadow-[0_40px_100px_-45px_rgba(12,46,45,0.8)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="why-cta-glow absolute -right-32 -top-32 h-96 w-96 rounded-full bg-soft/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-soft/10 blur-3xl"
        />

        {/* Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[80px_80px]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
            Ready to Experience the Difference?
          </p>

          <h2 className="mt-4 font-cormorant text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            See the difference for yourself.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-manrope text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Discover how Haggai can bring experienced professionals, scalable delivery,
            technology, security, and continuous improvement to your operations.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#d5901b]"
            >
              Schedule a Discovery Call
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* PAGE */
export default function WhyHaggaiPage() {
  return (
    <main>
      <WhyHaggaiHero />

      <WhyHaggaiIntro />

      <WhyHaggaiReasons />

      <WhyHaggaiApproach />

      <WhyHaggaiTechnology />

      <WhyHaggaiClientCentric />

      {/* <WhyHaggaiCTA /> */}
    </main>
  );
}
