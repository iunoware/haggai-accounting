"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const benefits = [
  {
    title: "Lower Operating Costs",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Dedicated Accounting Team",
    icon: UserGroupIcon,
  },
  {
    title: "Global Talent Access",
    icon: GlobeAltIcon,
  },
  {
    title: "Scalable Growth",
    icon: ArrowTrendingUpIcon,
  },
];

export default function OffshoreHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".offshore-hero-eyebrow",
            ".offshore-hero-line",
            ".offshore-hero-description",
            ".offshore-hero-actions",
            ".offshore-hero-scroll",
            ".offshore-hero-card",
          ],
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
            scale: 1,
            clearProps: "transform",
          },
        );

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".offshore-hero-eyebrow", {
          opacity: 0,
          y: 18,
          duration: 0.65,
        })
        .from(
          ".offshore-hero-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".offshore-hero-description",
          {
            opacity: 0,
            y: 22,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".offshore-hero-actions",
          {
            opacity: 0,
            y: 18,
            duration: 0.65,
          },
          "-=0.35",
        )
        .fromTo(
          ".offshore-hero-card",
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.25",
        )
        .from(
          ".offshore-hero-scroll",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          "-=0.3",
        );

      gsap.to(".offshore-ring-one", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".offshore-ring-two", {
        rotate: -360,
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".offshore-scroll-icon", {
        y: 7,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".offshore-glow", {
        scale: 1.18,
        opacity: 0.8,
        duration: 4,
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
      className="relative min-h-screen overflow-hidden bg-soft pb-16 pt-32 text-[#0c2e2d] sm:pt-36 lg:flex lg:items-center lg:pb-20 lg:pt-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="offshore-glow absolute left-1/2 top-1/3 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/45 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-soft/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[44%] h-192 w-3xl -translate-x-1/2 -translate-y-1/2"
      >
        <div className="offshore-ring-one absolute inset-0 rounded-full border border-white/10">
          {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(226,158,33,0.18)]" /> */}
        </div>

        <div className="offshore-ring-two absolute inset-24 rounded-full border border-white/8">
          {/* <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" /> */}
        </div>

        <div className="absolute inset-48 rounded-full border border-white/6" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main centered content */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="offshore-hero-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Why Offshore Accounting
            </span>

            <span className="h-px w-9 bg-accent" />
          </div>

          <h1 className="font-cormorant text-[3rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[6rem]">
            <span className="block pb-6">
              <span className="offshore-hero-line block">Offshore accounting</span>
            </span>

            <span className="block pb-3">
              <span className="offshore-hero-line block italic text-primary">
                built for growth.
              </span>
            </span>
          </h1>

          <p className="offshore-hero-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-primary/80 sm:text-base sm:leading-8">
            Reduce overhead, access experienced accounting professionals, and build a
            reliable finance function that grows alongside your business.
          </p>

          <div className="offshore-hero-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#offshore-benefits"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
            >
              Discover the Benefits
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        {/* Benefit strip */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="offshore-hero-card group relative overflow-hidden border border-white/15 bg-white/[0.07] px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/11"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-[#0c2e2d]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-black group-hover:text-soft"
                      />
                    </span>

                    <div>
                      <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                        0{index + 1}
                      </p>

                      <h2 className="mt-1 font-cormorant text-md font-semibold text-[#0c2e2d]">
                        {benefit.title}
                      </h2>
                    </div>
                  </div>

                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <a
          href="#offshore-benefits"
          className="offshore-hero-scroll mx-auto mt-10 flex w-fit flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 transition-colors duration-300 hover:text-[#0c2e2d]"
        >
          Discover More
          <span className="offshore-scroll-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/6">
            <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
          </span>
        </a>
      </div>

      {/* Curved transition */}
      <div
        aria-hidden="true"
        className="absolute -bottom-px left-0 h-10 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-14 lg:h-16"
      />
    </section>
  );
}
