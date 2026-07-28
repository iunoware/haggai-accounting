"use client";

import { useRef } from "react";
import {
  ArrowRightIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const comparisonPoints = [
  {
    traditional: "Generic accounting support",
    haggai: "Dedicated support tailored to your business",
  },
  {
    traditional: "Delayed and inconsistent reporting",
    haggai: "Accurate and timely financial reporting",
  },
  {
    traditional: "Limited financial visibility",
    haggai: "Clear insights into business performance",
  },
  {
    traditional: "Reactive problem-solving",
    haggai: "Proactive and dependable financial guidance",
  },
  {
    traditional: "Processes that do not scale",
    haggai: "Structured systems built for growth",
  },
];

const strengths = [
  {
    title: "Dedicated Partnership",
    description:
      "We work as an extension of your team, providing consistent support and understanding your business beyond the numbers.",
    icon: UserGroupIcon,
  },
  {
    title: "Reliable Accuracy",
    description:
      "Every financial process is handled carefully to produce dependable records and reporting you can confidently rely on.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Clear Visibility",
    description:
      "We turn financial information into meaningful reports that help you understand performance and make informed decisions.",
    icon: EyeIcon,
  },
  {
    title: "Timely Support",
    description:
      "Our structured approach helps reduce delays, maintain consistency, and keep essential accounting work moving forward.",
    icon: ClockIcon,
  },
  {
    title: "Scalable Processes",
    description:
      "Our accounting systems are designed to adapt as your operations, team, and financial requirements continue to grow.",
    icon: ChartBarSquareIcon,
  },
  {
    title: "Client-Focused Service",
    description:
      "Every solution is shaped around your priorities, challenges, and long-term business objectives.",
    icon: ScaleIcon,
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".why-eyebrow",
            ".why-heading-line",
            ".why-description",
            ".why-comparison",
            ".why-comparison-row",
            // ".why-strength",
            ".why-cta",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        );

        gsap.set(".why-divider", {
          scaleX: 1,
        });

        return;
      }

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      mainTimeline
        .from(".why-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".why-heading-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.95,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".why-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".why-comparison",
          {
            opacity: 0,
            y: 45,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .from(
          ".why-comparison-row",
          {
            opacity: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".why-divider",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.9,
            ease: "power3.inOut",
          },
          "-=0.3",
        )
        // .from(
        //   ".why-strength",
        //   {
        //     // opacity: 0,
        //     y: 35,
        //     duration: 0.7,
        //     stagger: 0.1,
        //     ease: "power3.out",
        //   },
        //   "-=0.5",
        // )
        .from(
          ".why-cta",
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );

      gsap.to(".why-orbit", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".why-floating-icon", {
        y: -12,
        rotate: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".why-glow", {
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
      id="why-choose-us"
      className="relative overflow-hidden bg-[#f7f7f7] py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="why-glow absolute -left-48 top-20 h-120 w-120 rounded-full bg-[#D7F3FF]/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-[#508BC0]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[80px_80px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="why-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E29E21]" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#00598A]">
                Why Choose Haggai
              </span>
            </div>

            <h2 className="font-cormorant text-[3.25rem] font-medium leading-[0.93] tracking-[-0.045em] text-[#0c2e2d] sm:text-6xl lg:text-[5.15rem]">
              <span className="block overflow-hidden pb-1">
                <span className="why-heading-line block">Why businesses</span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="why-heading-line block italic text-[#00598A]">
                  trust Haggai.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="why-description max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Businesses choose Haggai because they need more than routine accounting.
              They need dependable support, clear communication, and financial processes
              designed around the way their business actually operates.
            </p>

            <p className="why-description mt-5 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our approach combines accuracy, consistency, and genuine partnership to help
              clients move forward with greater confidence.
            </p>
          </div>
        </div>

        {/* Comparison panel */}
        <div className="why-comparison relative mt-14 lg:mt-20">
          <div className="relative overflow-hidden rounded-4xl border border-[#00598A]/10 bg-white shadow-[0_30px_90px_-45px_rgba(0,89,138,0.35)]">
            {/* Decorative orbit */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-28 h-64 w-64"
            >
              <div className="why-orbit absolute inset-0 rounded-full border border-[#508BC0]/20">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E29E21] shadow-[0_0_0_5px_rgba(226,158,33,0.16)]" />
              </div>

              <div className="absolute inset-9 rounded-full border border-[#508BC0]/15" />

              <div className="absolute inset-18 rounded-full bg-[#D7F3FF]/50" />
            </div>

            {/* Comparison heading */}
            <div className="relative grid border-b border-[#00598A]/10 md:grid-cols-2">
              <div className="border-b border-[#00598A]/10 bg-slate-50 px-5 py-6 sm:px-8 md:border-b-0 md:border-r">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-500">
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-3xl">
                      Traditional Support
                    </p>

                    <p className="mt-1 font-manrope text-xs uppercase tracking-[0.16em] text-slate-500">
                      A general approach
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#00598A] px-5 py-6 text-white sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="why-floating-icon flex h-10 w-10 items-center justify-center rounded-xl bg-[#E29E21] text-white shadow-lg shadow-black/10">
                    <SparklesIcon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="font-cormorant text-2xl font-semibold sm:text-3xl">
                      Haggai Accounting
                    </p>

                    <p className="mt-1 font-manrope text-xs uppercase tracking-[0.16em] text-[#D7F3FF]">
                      A dedicated partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison rows */}
            <div>
              {comparisonPoints.map((point, index) => (
                <div
                  key={point.traditional}
                  className={`why-comparison-row grid md:grid-cols-2 ${
                    index !== comparisonPoints.length - 1
                      ? "border-b border-[#00598A]/10"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4 border-b border-[#00598A]/10 bg-white px-5 py-5 sm:px-8 md:border-b-0 md:border-r">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <XMarkIcon aria-hidden="true" className="h-4 w-4" />
                    </span>

                    <p className="font-manrope text-sm leading-7 text-slate-500">
                      {point.traditional}
                    </p>
                  </div>

                  <div className="flex items-start gap-4 bg-[#D7F3FF]/30 px-5 py-5 sm:px-8">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E29E21]/15 text-[#E29E21] ring-1 ring-[#E29E21]/30">
                      <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                    </span>

                    <p className="font-manrope text-sm font-medium leading-7 text-[#0c2e2d]">
                      {point.haggai}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl border border-[#508BC0]/20"
          />
        </div>

        {/* Strengths */}
        <div className="mt-20 lg:mt-28">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E29E21]" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#00598A]">
                  What Sets Us Apart
                </span>
              </div>

              <h3 className="mt-5 max-w-xl font-cormorant text-4xl font-medium leading-[1] tracking-[-0.035em] text-[#0c2e2d] sm:text-5xl lg:text-6xl">
                Built around the needs of
                <span className="italic text-[#00598A]"> growing businesses.</span>
              </h3>
            </div>

            <p className="max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:justify-self-end">
              Our service is designed to give clients the consistency, visibility, and
              support they need to manage their finances with greater confidence.
            </p>
          </div>

          <div className="why-divider mt-10 h-px w-full bg-[#00598A]/10 lg:mt-12" />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article
                  key={strength.title}
                  className="why-strength group relative overflow-hidden rounded-2xl border border-[#00598A]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#508BC0]/30 hover:shadow-xl hover:shadow-[#00598A]/5 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E29E21] transition-all duration-500 group-hover:w-full"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D7F3FF] text-[#00598A] transition-all duration-300 group-hover:bg-[#00598A] group-hover:text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h4 className="mt-6 font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-[1.7rem]">
                    {strength.title}
                  </h4>

                  <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
                    {strength.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="why-cta relative mt-16 overflow-hidden rounded-[2rem] bg-[#00598A] px-6 py-10 text-white shadow-[0_30px_80px_-40px_rgba(0,89,138,0.55)] sm:px-9 sm:py-12 lg:mt-24 lg:px-12 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/15"
          />

          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#508BC0]/25 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#D7F3FF]/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E29E21]" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-[#D7F3FF]">
                  Ready to Work Together?
                </span>
              </div>

              <h3 className="max-w-3xl font-cormorant text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Build a stronger financial foundation with a partner you can trust.
              </h3>

              <p className="mt-5 max-w-2xl font-manrope text-sm leading-7 text-[#D7F3FF]/85 sm:text-base sm:leading-8">
                Discover how Haggai can support your accounting operations with clearer
                processes, reliable reporting, and dedicated financial support.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#E29E21] px-6 py-3.5 font-manrope text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d18e16] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00598A]"
            >
              Schedule a Consultation
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
