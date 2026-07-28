"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowTrendingDownIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    number: "01",
    title: "Dedicated Professionals",
    description:
      "Work with accounting professionals who understand your workflows, reporting needs, and business priorities.",
    icon: UserGroupIcon,
  },
  {
    number: "02",
    title: "Streamlined Processes",
    description:
      "Build consistent accounting workflows with clear responsibilities, defined timelines, and dependable delivery.",
    icon: Cog6ToothIcon,
  },
  {
    number: "03",
    title: "Meaningful Cost Savings",
    description:
      "Reduce the cost of building an internal accounting department without sacrificing accuracy, control, or service quality.",
    icon: ArrowTrendingDownIcon,
  },
  {
    number: "04",
    title: "Flexible Scalability",
    description:
      "Expand or adjust your accounting support as transaction volumes, entities, and operational requirements change.",
    icon: ArrowsPointingOutIcon,
  },
];

const trustPoints = [
  "Dedicated accounting support",
  "Structured onboarding process",
  "Clear communication channels",
  "Flexible engagement models",
];

export default function WhyOffshoreHaggai() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".haggai-offshore-eyebrow",
            ".haggai-offshore-line",
            ".haggai-offshore-description",
            ".haggai-offshore-point",
            ".haggai-offshore-action",
            ".haggai-offshore-card",
            ".haggai-offshore-panel",
          ],
          {
            opacity: 1,
            visibility: "visible",
            x: 0,
            y: 0,
            scale: 1,
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
          ".haggai-offshore-eyebrow",
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
          ".haggai-offshore-line",
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
          ".haggai-offshore-description",
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
          ".haggai-offshore-point",
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
          ".haggai-offshore-action",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .fromTo(
          ".haggai-offshore-panel",
          {
            opacity: 0,
            x: 40,
            scale: 0.97,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .fromTo(
          ".haggai-offshore-card",
          {
            opacity: 0,
            y: 28,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.55",
        );

      gsap.to(".haggai-offshore-orbit-one", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".haggai-offshore-orbit-two", {
        rotate: -360,
        duration: 44,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".haggai-offshore-float", {
        y: -9,
        duration: 2.6,
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
      id="offshore-benefits"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-20 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-56 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Left content */}
          <div className="lg:sticky lg:top-28">
            <div className="haggai-offshore-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Why Offshore with Haggai
              </span>
            </div>

            <h2 className="font-cormorant text-[2.8rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[4rem]">
              <span className="block overflow-hidden pb-2">
                <span className="haggai-offshore-line block">More than lower costs.</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="haggai-offshore-line block italic text-primary">
                  A stronger operation.
                </span>
              </span>
            </h2>

            <p className="haggai-offshore-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Haggai helps businesses build reliable offshore accounting operations with
              dedicated professionals, structured processes, and flexible support that
              adapts as the business grows.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="haggai-offshore-point flex items-center gap-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                  </span>

                  <span className="font-manrope text-sm font-medium text-[#0c2e2d]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="haggai-offshore-action mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,89,138,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
              >
                Explore Offshore Support
                <ArrowRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right visual area */}
          <div className="relative">
            <div className="haggai-offshore-panel relative overflow-hidden rounded-4xl bg-primary p-5 shadow-[0_35px_80px_-40px_rgba(0,89,138,0.75)] sm:p-7 lg:p-8">
              {/* Panel decorations */}
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/8 blur-2xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[70px_70px]"
              />

              {/* Orbit graphic */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-20 h-72 w-72 sm:-right-20 sm:-top-16"
              >
                <div className="haggai-offshore-orbit-one absolute inset-0 rounded-full border border-white/15">
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </div>

                <div className="haggai-offshore-orbit-two absolute inset-12 rounded-full border border-white/10">
                  <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" />
                </div>
              </div>

              <div className="relative">
                {/* Panel header */}
                <div className="flex flex-col gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      Offshore Accounting Partnership
                    </p>

                    <h3 className="mt-2 max-w-md font-cormorant text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      Built around your business.
                    </h3>
                  </div>

                  <div className="haggai-offshore-float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur-md">
                    <ShieldCheckIcon aria-hidden="true" className="h-8 w-8" />
                  </div>
                </div>

                {/* Benefit cards */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <article
                        key={benefit.title}
                        className="haggai-offshore-card group relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-white/12"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-soft transition-all duration-300 group-hover:bg-accent group-hover:text-[#0c2e2d]">
                            <Icon aria-hidden="true" className="h-5 w-5" />
                          </span>

                          <span className="font-manrope text-[10px] font-semibold tracking-[0.16em] text-white/45">
                            {benefit.number}
                          </span>
                        </div>

                        <h4 className="mt-5 font-cormorant text-2xl font-semibold text-white">
                          {benefit.title}
                        </h4>

                        <p className="mt-3 font-manrope text-xs leading-6 text-white/65 sm:text-sm">
                          {benefit.description}
                        </p>

                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                        />
                      </article>
                    );
                  })}
                </div>

                {/* Bottom statement */}
                <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/15 bg-[#0c2e2d]/20 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-soft/60">
                      Haggai Advantage
                    </p>

                    <p className="mt-2 font-cormorant text-xl font-semibold text-white sm:text-2xl">
                      Reliable support without the cost of building a full in-house
                      department.
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-[#0c2e2d]">
                    <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
