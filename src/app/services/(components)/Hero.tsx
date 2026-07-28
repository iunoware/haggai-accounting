"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BanknotesIcon,
  CalculatorIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const services = [
  {
    title: "Bookkeeping",
    icon: CalculatorIcon,
  },
  {
    title: "Month-End Close",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "AP & AR Support",
    icon: BanknotesIcon,
  },
  {
    title: "Financial Reporting",
    icon: ChartBarSquareIcon,
  },
];

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".services-new-eyebrow",
            ".services-new-line",
            ".services-new-description",
            ".services-new-actions",
            ".services-new-scroll",
            ".services-new-card",
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
        .from(".services-new-eyebrow", {
          opacity: 0,
          y: 18,
          duration: 0.65,
        })
        .from(
          ".services-new-line",
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
          ".services-new-description",
          {
            opacity: 0,
            y: 22,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          ".services-new-actions",
          {
            opacity: 0,
            y: 18,
            duration: 0.65,
          },
          "-=0.35",
        )
        .fromTo(
          ".services-new-card",
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
          ".services-new-scroll",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          "-=0.3",
        );

      gsap.to(".services-new-ring-one", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".services-new-ring-two", {
        rotate: -360,
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".services-new-scroll-icon", {
        y: 7,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".services-new-glow", {
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
      className="relative min-h-screen overflow-hidden bg-[#D7F3FF] pb-16 pt-32 text-[#0c2e2d] sm:pt-36 lg:flex lg:items-center lg:pb-20 lg:pt-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-new-glow absolute left-1/2 top-1/3 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#508BC0]/45 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D7F3FF]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#E29E21]/10 blur-3xl"
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[44%] h-192 w-3xl -translate-x-1/2 -translate-y-1/2"
      >
        <div className="services-new-ring-one absolute inset-0 rounded-full border border-white/10">
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E29E21] shadow-[0_0_0_6px_rgba(226,158,33,0.18)]" />
        </div>

        <div className="services-new-ring-two absolute inset-24 rounded-full border border-white/8">
          <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#D7F3FF]" />
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
          <div className="services-new-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E29E21]" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-[#00598A]">
              Haggai Accounting Services
            </span>

            <span className="h-px w-9 bg-[#E29E21]" />
          </div>

          <h1 className="font-cormorant text-[3.7rem] font-medium leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-[7.2rem]">
            <span className="block overflow-hidden pb-6">
              <span className="services-new-line block">Accounting services</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="services-new-line block italic text-[#00598A]">
                that scale with you.
              </span>
            </span>
          </h1>

          <p className="services-new-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-[#00598A]/80 sm:text-base sm:leading-8">
            Reliable outsourced accounting support designed to strengthen your operations,
            improve visibility, and grow with your business.
          </p>

          <div className="services-new-actions mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#white-label-services"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E29E21] px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
            >
              Explore Our Services
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-7 py-3.5 font-manrope text-sm font-semibold text-[#0c2e2d] backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Service strip */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="services-new-card group relative overflow-hidden border border-white/15 bg-white/[0.07] px-5 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E29E21]/50 hover:bg-white/11"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#00598A] transition-all duration-300 group-hover:bg-[#00598A] group-hover:text-[#0c2e2d]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-black group-hover:text-[#D7F3FF]"
                      />
                    </span>

                    <div>
                      <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00598A]/55">
                        0{index + 1}
                      </p>

                      <h2 className="mt-1 font-cormorant text-xl font-semibold text-[#0c2e2d]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#E29E21] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E29E21] transition-all duration-500 group-hover:w-full"
                />
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <a
          href="#white-label-services"
          className="services-new-scroll mx-auto mt-10 flex w-fit flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00598A]/60 transition-colors duration-300 hover:text-[#0c2e2d]"
        >
          Discover More
          <span className="services-new-scroll-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/6">
            <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
          </span>
        </a>
      </div>

      {/* Curved transition into next section */}
      <div
        aria-hidden="true"
        className="absolute -bottom-px left-0 h-10 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-14 lg:h-16"
      />
    </section>
  );
}
