"use client";

import { useRef } from "react";
// import Link from "next/link";
import {
  // ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a focused conversation to understand your business, current challenges, accounting needs, and goals.",
    icon: ChatBubbleLeftRightIcon,
    label: "INITIAL CONVERSATION",
    supportingPoint: "Understand your business",
  },
  {
    number: "02",
    title: "Business Assessment",
    description:
      "We assess your existing financial processes, systems, and workflows to identify gaps, inefficiencies, and opportunities for improvement.",
    icon: ClipboardDocumentCheckIcon,
    label: "BUSINESS REVIEW",
    supportingPoint: "Identify key opportunities",
  },
  {
    number: "03",
    title: "Solution Design",
    description:
      "We design a tailored accounting and financial operations solution aligned with your business requirements and long-term objectives.",
    icon: Cog6ToothIcon,
    label: "TAILORED STRATEGY",
    supportingPoint: "Build the right solution",
  },
  {
    number: "04",
    title: "Seamless Delivery",
    description:
      "We implement the solution seamlessly and provide ongoing support to ensure your financial operations run accurately, efficiently, and reliably.",
    icon: PresentationChartLineIcon,
    label: "ONGOING SUPPORT",
    supportingPoint: "Reliable ongoing support",
  },
];

const processBenefits = [
  "Clear onboarding",
  "Defined responsibilities",
  "Transparent communication",
  "Consistent delivery",
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".process-eyebrow",
            ".process-title-line",
            ".process-description",
            ".process-step",
            ".process-line",
            ".process-benefit",
            ".process-action",
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
          ".process-eyebrow",
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
        )
        .fromTo(
          ".process-title-line",
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
          ".process-description",
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
          ".process-line",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 1.3,
            ease: "power3.inOut",
          },
          "-=0.2",
        )
        .fromTo(
          ".process-step",
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.13,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .fromTo(
          ".process-benefit",
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .fromTo(
          ".process-action",
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
          "-=0.25",
        );

      gsap.to(".process-dot", {
        scale: 1.22,
        opacity: 0.55,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.to(".process-decoration", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
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
      id="how-we-work"
      className="relative overflow-hidden bg-bg py-15"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-8 h-128 w-lg rounded-full bg-soft/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[88px_88px]"
      />

      {/* Rotating decorative circle */}
      <div
        aria-hidden="true"
        className="process-decoration pointer-events-none absolute -right-36 top-20 h-72 w-72 rounded-full border border-primary/10"
      >
        {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" /> */}

        <div className="absolute inset-10 rounded-full border border-secondary/10" />

        <div className="absolute inset-20 rounded-full border border-primary/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="process-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              How We Work
            </span>

            <span className="h-px w-9 bg-accent" />
          </div>

          <h2 className="font-cormorant font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden pb-2">
              <span className="process-title-line block">A clear process.</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="process-title-line block italic text-primary">
                From day one.
              </span>
            </span>
          </h2>

          <p className="process-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Our structured approach makes outsourcing accounting simple,
            transparent, and easy to manage. You always know what happens next
            and what to expect from our team.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-primary/10 lg:block"
          >
            <span className="process-line block h-full w-full origin-left bg-linear-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="process-step group relative"
                >
                  {/* Step marker */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center">
                    <span className="process-dot absolute inset-0 rounded-full bg-soft" />

                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_12px_30px_-18px_rgba(0,89,138,0.5)] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mt-5 h-[calc(100%-6.25rem)] rounded-[1.75rem] border border-primary/10 bg-white/90 p-6 shadow-[0_20px_60px_-38px_rgba(0,89,138,0.45)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-secondary/30 group-hover:shadow-[0_28px_65px_-35px_rgba(0,89,138,0.5)] sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                        Step {step.number}
                      </span>

                      <span className="rounded-full bg-soft px-3 py-1 font-manrope text-[9px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-6 font-cormorant text-3xl font-semibold leading-none text-[#0c2e2d]">
                      {step.title}
                    </h3>

                    <p className="mt-4 font-manrope text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-7 flex items-center gap-3 border-t border-primary/10 pt-5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <CheckCircleIcon
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      </span>

                      <span className="font-manrope text-xs font-semibold text-primary">
                        {step.supportingPoint}
                      </span>
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="mx-auto h-8 w-px bg-linear-to-b from-primary/30 to-transparent md:hidden"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Benefits strip */}
        <div className="mt-14 rounded-4xl border border-primary/10 bg-soft/55 p-5 sm:p-6 lg:mt-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processBenefits.map((benefit) => (
              <div
                key={benefit}
                className="process-benefit flex items-center justify-center gap-3 rounded-xl border border-white/70 bg-white/70 px-4 py-3.5"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-accent"
                />

                <span className="font-manrope text-xs font-semibold uppercase tracking-widest text-[#0c2e2d]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="process-action mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary px-6 py-7 text-white sm:flex-row sm:px-8 lg:px-10">
          <div>
            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-soft/65">
              Ready to get started?
            </p>

            <p className="mt-2 font-cormorant text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s build the right accounting process for you.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5901b]"
          >
            Start a Conversation
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
