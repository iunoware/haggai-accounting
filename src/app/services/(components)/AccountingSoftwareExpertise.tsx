"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BoltIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const softwarePlatforms = [
  {
    name: "QuickBooks",
    shortName: "QB",
    position: "left-0 top-3 sm:left-4 sm:top-0",
  },
  {
    name: "Xero",
    shortName: "X",
    position: "right-0 top-3 sm:right-4 sm:top-0",
  },
  {
    name: "NetSuite",
    shortName: "NS",
    position: "left-0 top-1/2 -translate-y-1/2",
  },
  {
    name: "Sage",
    shortName: "SG",
    position: "right-0 top-1/2 -translate-y-1/2",
  },
  {
    name: "Zoho Books",
    shortName: "ZB",
    position: "bottom-3 left-2 sm:bottom-0 sm:left-6",
  },
  {
    name: "FreshBooks",
    shortName: "FB",
    position: "bottom-3 right-2 sm:bottom-0 sm:right-6",
  },
];

const expertisePoints = [
  {
    title: "Platform Flexibility",
    description:
      "Our team adapts to the accounting platform your business or firm already uses.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Seamless Integration",
    description:
      "We work within your existing systems without disrupting established processes.",
    icon: ArrowPathIcon,
  },
  {
    title: "Efficient Workflows",
    description:
      "Modern tools and structured processes help keep accounting operations consistent.",
    icon: BoltIcon,
  },
];

const workflowBenefits = [
  "Work within your current software",
  "Maintain consistent accounting workflows",
  "Reduce unnecessary platform migration",
  "Support cloud-based collaboration",
];

export default function AccountingSoftwareExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".software-eyebrow",
            ".software-title-line",
            ".software-description",
            ".software-point",
            ".software-benefit",
            ".software-action",
            ".software-visual",
            ".software-platform",
            ".software-hub",
            ".software-connection",
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
        .fromTo(
          ".software-visual",
          {
            opacity: 0,
            x: -50,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.95,
            ease: "power4.out",
          },
        )
        .fromTo(
          ".software-hub",
          {
            opacity: 0,
            scale: 0.75,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.55",
        )
        .fromTo(
          ".software-connection",
          {
            opacity: 0,
            scaleX: 0,
          },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .fromTo(
          ".software-platform",
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(1.5)",
          },
          "-=0.45",
        )
        .fromTo(
          ".software-eyebrow",
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
          "-=0.85",
        )
        .fromTo(
          ".software-title-line",
          {
            opacity: 0,
            yPercent: 110,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.4,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .fromTo(
          ".software-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".software-point",
          {
            opacity: 0,
            x: 22,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".software-benefit",
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .fromTo(
          ".software-action",
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
          "-=0.2",
        );

      gsap.to(".software-orbit-one", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".software-orbit-two", {
        rotate: -360,
        duration: 46,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".software-hub-icon", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".software-pulse", {
        scale: 1.18,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      });

      // gsap.to(".software-platform", {
      //   y: -5,
      //   duration: 2.8,
      //   repeat: -1,
      //   yoyo: true,
      //   stagger: {
      //     each: 0.18,
      //     from: "random",
      //   },
      //   ease: "sine.inOut",
      // });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="software-expertise"
      className="relative overflow-hidden bg-primary py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-0 h-136 w-136 rounded-full bg-secondary/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-120 w-120 rounded-full bg-soft/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[88px_88px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Integration visual */}
          <div className="software-visual relative mx-auto w-full max-w-152">
            <div className="relative aspect-square">
              {/* Outer panel */}
              <div className="absolute inset-8 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm sm:inset-10" />

              {/* Orbit rings */}
              <div
                aria-hidden="true"
                className="software-orbit-one absolute inset-[18%] rounded-full border border-white/15"
              >
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(226,158,33,0.18)]" />
              </div>

              <div
                aria-hidden="true"
                className="software-orbit-two absolute inset-[29%] rounded-full border border-soft/15"
              >
                <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" />
              </div>

              {/* Connection lines */}
              <span className="software-connection absolute left-[24%] top-[25%] h-px w-[25%] origin-right rotate-34 bg-linear-to-r from-transparent to-soft/40" />

              <span className="software-connection absolute right-[24%] top-[25%] h-px w-[25%] origin-left -rotate-34 bg-linear-to-l from-transparent to-soft/40" />

              <span className="software-connection absolute left-[18%] top-1/2 h-px w-[32%] origin-right bg-linear-to-r from-transparent to-soft/40" />

              <span className="software-connection absolute right-[18%] top-1/2 h-px w-[32%] origin-left bg-linear-to-l from-transparent to-soft/40" />

              <span className="software-connection absolute bottom-[25%] left-[24%] h-px w-[25%] origin-right -rotate-34 bg-linear-to-r from-transparent to-soft/40" />

              <span className="software-connection absolute bottom-[25%] right-[24%] h-px w-[25%] origin-left rotate-34 bg-linear-to-l from-transparent to-soft/40" />

              {/* Central hub */}
              <div className="software-hub absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="software-pulse absolute inset-0 rounded-full border border-accent/60" />

                  <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/20 bg-[#004b74] shadow-[0_25px_70px_-25px_rgba(0,0,0,0.5)] sm:h-40 sm:w-40">
                    <span className="software-hub-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white sm:h-14 sm:w-14">
                      <CircleStackIcon
                        aria-hidden="true"
                        className="h-6 w-6 sm:h-7 sm:w-7"
                      />
                    </span>

                    <span className="mt-3 font-manrope text-[9px] font-semibold uppercase tracking-[0.18em] text-soft/65">
                      Integrated with
                    </span>

                    <span className="mt-1 font-cormorant text-center text-xl font-semibold text-white sm:text-2xl">
                      Your Workflow
                    </span>
                  </div>
                </div>
              </div>

              {/* Software tiles */}
              {softwarePlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`software-platform absolute ${platform.position} z-30`}
                >
                  <div className="flex min-w-34 items-center gap-3 rounded-2xl border border-white/15 bg-white px-3.5 py-3 text-[#0c2e2d] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.55)] sm:min-w-40 sm:px-4 sm:py-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft font-manrope text-xs font-bold text-primary">
                      {platform.shortName}
                    </span>

                    <div>
                      <p className="font-manrope text-[9px] font-semibold uppercase tracking-[0.13em] text-secondary">
                        Platform
                      </p>

                      <p className="mt-0.5 font-cormorant text-lg font-semibold leading-none text-[#0c2e2d]">
                        {platform.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 backdrop-blur-sm">
              <CloudArrowUpIcon aria-hidden="true" className="h-5 w-5 text-accent" />

              <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.17em] text-soft">
                Cloud-based collaboration
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="software-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft">
                Accounting Software Expertise
              </span>
            </div>

            <h2 className="max-w-2xl font-cormorant text-[3.2rem] font-medium leading-[0.92] tracking-tighter text-white sm:text-6xl lg:text-[5rem]">
              <span className="block overflow-hidden pb-2">
                <span className="software-title-line block">Your software.</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="software-title-line block italic text-soft">
                  Our expertise.
                </span>
              </span>
            </h2>

            <p className="software-description mt-7 max-w-xl font-manrope text-sm leading-7 text-soft/80 sm:text-base sm:leading-8">
              Haggai works across leading accounting platforms, allowing our team to
              integrate smoothly with the systems and processes your business already
              relies on.
            </p>

            <p className="software-description mt-4 max-w-xl font-manrope text-sm leading-7 text-soft/80 sm:text-base sm:leading-8">
              Whether your operations are built around a cloud accounting platform or a
              more advanced financial system, we adapt our workflows to support efficient
              and consistent delivery.
            </p>

            {/* Expertise points */}
            <div className="mt-9 space-y-4">
              {expertisePoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="software-point group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>

                    <div>
                      <h3 className="font-cormorant text-xl font-semibold text-white sm:text-2xl">
                        {point.title}
                      </h3>

                      <p className="mt-1 font-manrope text-sm leading-6 text-soft/70">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {workflowBenefits.map((benefit) => (
                <div key={benefit} className="software-benefit flex items-center gap-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-accent"
                  />

                  <span className="font-manrope text-xs font-medium leading-5 text-soft">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="software-action mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
              >
                Discuss Your Software Setup
                <ArrowRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-white/10 pt-7 lg:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <ShieldCheckIcon aria-hidden="true" className="h-7 w-7 text-accent" />

              <div>
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-soft/55">
                  Built around your operations
                </p>

                <p className="mt-1 font-cormorant text-xl font-semibold text-white sm:text-2xl">
                  No unnecessary software changes.
                </p>
              </div>
            </div>

            <p className="max-w-md font-manrope text-xs leading-6 text-soft/65 sm:text-right">
              We fit into your existing accounting environment and help make the systems
              you already use work more effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
