"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  DocumentCheckIcon,
  EyeSlashIcon,
  LockClosedIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  {
    title: "Completely Confidential",
    description:
      "Your client relationships, business information, and internal processes remain protected.",
    icon: LockClosedIcon,
  },
  {
    title: "Seamless Team Extension",
    description:
      "Our professionals work behind the scenes as an extension of your existing accounting team.",
    icon: UserGroupIcon,
  },
  {
    title: "Consistent Brand Experience",
    description:
      "Your clients continue to receive services under your firm's name, standards, and identity.",
    icon: ShieldCheckIcon,
  },
];

const serviceCapabilities = [
  "Bookkeeping support",
  "Month-end close",
  "Accounts payable",
  "Accounts receivable",
  "Financial reporting",
  "Reconciliation support",
];

const floatingHighlights = [
  {
    title: "CPA Firms",
    subtitle: "Expand delivery capacity",
    icon: BuildingOffice2Icon,
    position: "left-1 top-12 sm:-left-8 sm:top-16 lg:-left-14 lg:top-20",
    animationClass: "white-label-float-one",
  },
  {
    title: "Lower Overhead",
    subtitle: "Scale without new hires",
    icon: ScaleIcon,
    position: "right-0 top-28 sm:-right-7 sm:top-32 lg:-right-12 lg:top-36",
    animationClass: "white-label-float-two",
  },
  {
    title: "Your Brand",
    subtitle: "We stay behind the scenes",
    icon: EyeSlashIcon,
    position: "bottom-24 left-0 sm:-left-8 sm:bottom-28 lg:-left-12",
    animationClass: "white-label-float-three",
  },
  {
    title: "Scalable Team",
    subtitle: "Support that grows with you",
    icon: DocumentCheckIcon,
    position: "bottom-4 right-1 sm:-right-7 sm:bottom-8 lg:-right-12",
    animationClass: "white-label-float-four",
  },
];

export default function WhiteLabelServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".white-label-eyebrow",
            ".white-label-title-line",
            ".white-label-description",
            ".white-label-trust-point",
            ".white-label-action",
            ".white-label-visual",
            ".white-label-capability",
            ".white-label-floating-card",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
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
        .from(".white-label-eyebrow", {
          opacity: 0,
          y: 18,
          duration: 0.65,
          ease: "power3.out",
        })
        .from(
          ".white-label-title-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.95,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .from(
          ".white-label-description",
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".white-label-trust-point",
          {
            opacity: 0,
            x: -22,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".white-label-action",
          {
            opacity: 0,
            y: 18,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".white-label-visual",
          {
            opacity: 0,
            x: 55,
            scale: 0.96,
            duration: 1,
            ease: "power4.out",
          },
          "-=1.05",
        )
        .from(
          ".white-label-capability",
          {
            opacity: 0,
            x: 20,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".white-label-floating-card",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.55,
            stagger: 0.1,
            ease: "back.out(1.6)",
          },
          "-=0.55",
        );

      gsap.to(".white-label-orbit", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".white-label-float-one", {
        y: -10,
        rotate: -1.5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".white-label-float-two", {
        y: 10,
        rotate: 1.5,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".white-label-float-three", {
        y: -8,
        rotate: 1,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".white-label-float-four", {
        y: 9,
        rotate: -1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".white-label-glow", {
        scale: 1.15,
        opacity: 0.75,
        duration: 4,
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
      id="white-label-services"
      className="relative overflow-hidden bg-bg py-15"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="white-label-glow absolute -left-48 top-24 h-128 w-lg rounded-full bg-soft/85 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-h-120 w-h-120 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.03)_1px,transparent_1px)] bg-size-[84px_84px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          {/* Left content */}
          <div>
            <div className="white-label-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E29E21]" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#00598A]">
                White-Label Accounting
              </span>
            </div>

            <h2 className="max-w-3xl font-cormorant text-[3.25rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-6xl lg:text-[5rem]">
              <span className="block overflow-hidden pb-2">
                <span className="white-label-title-line block">
                  Your accounting team.
                </span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="white-label-title-line block italic text-[#00598A]">
                  Your brand.
                </span>
              </span>
            </h2>

            <p className="white-label-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Expand your firm&apos;s accounting capacity without increasing
              internal overhead. Haggai works behind the scenes to support your
              clients while preserving your brand, standards, and relationships.
            </p>

            <p className="white-label-description mt-4 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our white-label services give CPA and accounting firms access to
              dependable back-office support that can scale with changing
              workloads.
            </p>

            {/* Trust points */}
            <div className="mt-9 space-y-5">
              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="white-label-trust-point group flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D7F3FF] text-[#00598A] transition-all duration-300 group-hover:bg-[#00598A] group-hover:text-white">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d] sm:text-2xl">
                        {point.title}
                      </h3>

                      <p className="mt-1 max-w-md font-manrope text-sm leading-6 text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="white-label-action mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#00598A] px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-lg shadow-[#00598A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00598A] focus-visible:ring-offset-2"
              >
                Partner With Us
                <ArrowRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="white-label-visual relative mx-auto w-full max-w-152 lg:mx-0 lg:ml-auto">
            <div className="relative px-4 py-12 sm:px-10 sm:py-16">
              {/* Main back-office panel */}
              <div className="relative overflow-hidden rounded-[2.25rem] bg-[#00598A] p-6 text-white shadow-[0_40px_100px_-45px_rgba(0,89,138,0.75)] sm:p-8 lg:p-10">
                {/* Orbit */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-28 -top-28 h-72 w-72"
                >
                  <div className="white-label-orbit absolute inset-0 rounded-full border border-white/20">
                    <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E29E21] shadow-[0_0_0_6px_rgba(226,158,33,0.18)]" />
                  </div>

                  <div className="absolute inset-10 rounded-full border border-white/10" />

                  <div className="absolute inset-20 rounded-full bg-white/5" />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#508BC0]/35 blur-3xl"
                />

                <div className="relative z-10">
                  {/* Panel header */}
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D7F3FF]">
                        Confidential Back-Office Support
                      </p>

                      <h3 className="mt-4 max-w-md font-cormorant text-4xl font-medium leading-none tracking-[-0.035em] sm:text-5xl">
                        The team behind
                        <span className="block italic text-[#D7F3FF]">
                          your firm.
                        </span>
                      </h3>
                    </div>

                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E29E21] text-white shadow-xl shadow-black/15 sm:flex">
                      <ShieldCheckIcon aria-hidden="true" className="h-7 w-7" />
                    </div>
                  </div>

                  <p className="mt-6 max-w-lg font-manrope text-sm leading-7 text-[#D7F3FF]/80">
                    We manage essential accounting processes while your firm
                    remains the trusted face of every client relationship.
                  </p>

                  {/* Brand status */}
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E29E21]/15 text-[#E29E21] ring-1 ring-[#E29E21]/25">
                          <EyeSlashIcon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </span>

                        <div>
                          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#D7F3FF]/65">
                            Visibility
                          </p>

                          <p className="mt-1 font-manrope text-sm font-semibold text-white">
                            Behind the scenes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E29E21]/15 text-[#E29E21] ring-1 ring-[#E29E21]/25">
                          <LockClosedIcon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </span>

                        <div>
                          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#D7F3FF]/65">
                            Confidentiality
                          </p>

                          <p className="mt-1 font-manrope text-sm font-semibold text-white">
                            Fully protected
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mt-8 border-t border-white/15 pt-7">
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D7F3FF]/70">
                      Accounting operations we support
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {serviceCapabilities.map((capability) => (
                        <div
                          key={capability}
                          className="white-label-capability flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-sm"
                        >
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-[#E29E21]"
                          />

                          <span className="font-manrope text-xs font-medium text-white sm:text-sm">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between gap-5 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                    <div>
                      <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D7F3FF]/65">
                        Delivered under
                      </p>

                      <p className="mt-1 font-cormorant text-2xl font-semibold text-white">
                        Your firm&apos;s identity
                      </p>
                    </div>

                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 text-[#E29E21]"
                    />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`white-label-floating-card ${item.animationClass} absolute ${item.position} z-20 hidden min-w-46 rounded-2xl border border-[#00598A]/10 bg-white p-4 shadow-[0_20px_55px_-25px_rgba(0,89,138,0.5)] sm:block`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D7F3FF] text-[#00598A]">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <div>
                        <p className="font-cormorant text-lg font-semibold leading-tight text-[#0c2e2d]">
                          {item.title}
                        </p>

                        <p className="mt-1 font-manrope text-[10px] leading-4 text-slate-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-8 right-0 -z-10 h-[calc(100%-4rem)] w-[calc(100%-2rem)] rounded-[2.5rem] border border-[#508BC0]/25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
