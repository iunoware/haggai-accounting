"use client";

import { useRef } from "react";
import {
  ArrowDownRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const missionCommitments = [
  "Deliver accurate and dependable financial support",
  "Create clear processes businesses can confidently rely on",
  "Help clients make better decisions through meaningful reporting",
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".mission-eyebrow",
            ".mission-heading-line",
            ".mission-description",
            ".mission-commitment",
            ".mission-quote",
            ".mission-icon",
            ".mission-footer",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        );

        gsap.set(".mission-divider", {
          scaleX: 1,
        });

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(".mission-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".mission-heading-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".mission-description",
          {
            opacity: 0,
            y: 28,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".mission-divider",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.45",
        )
        .from(
          ".mission-commitment",
          {
            opacity: 0,
            x: -28,
            duration: 0.65,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".mission-quote",
          {
            opacity: 0,
            x: 60,
            duration: 1,
            ease: "power4.out",
          },
          "-=1",
        )
        .from(
          ".mission-icon",
          {
            opacity: 0,
            scale: 0.6,
            rotate: -20,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.55",
        )
        .from(
          ".mission-footer",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        );

      gsap.to(".mission-orbit", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".mission-floating-icon", {
        y: -14,
        rotate: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".mission-glow", {
        scale: 1.15,
        opacity: 0.7,
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
      id="mission"
      // className="relative overflow-hidden bg-sky-700 py-20 text-white sm:py-24 lg:py-32"
      className="relative overflow-hidden bg-[#00598A] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        // className="mission-glow absolute -left-40 top-0 h-112 w-md rounded-full bg-sky-400/20 blur-3xl"
        className="mission-glow absolute -left-40 top-0 h-112 w-md rounded-full bg-[#508BC0]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-128 w-lg rounded-full bg-sky-950/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
          {/* Left content */}
          <div>
            <div className="mission-eyebrow mb-7 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-white/80" /> */}
              <span className="h-px w-10 bg-[#E29E21]" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
                Our Mission
              </span>
            </div>

            <h2 className="font-cormorant text-[3.4rem] font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]">
              <span className="block overflow-hidden pb-1">
                <span className="mission-heading-line block">Clarity in every</span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="mission-heading-line block italic text-sky-100">
                  financial decision.
                </span>
              </span>
            </h2>

            <p className="mission-description mt-8 max-w-xl font-manrope text-sm leading-7 text-sky-100/85 sm:text-base sm:leading-8">
              Our mission is to provide growing businesses with accurate, consistent, and
              reliable accounting support that brings order to their financial operations.
            </p>

            <p className="mission-description mt-5 max-w-xl font-manrope text-sm leading-7 text-sky-100/85 sm:text-base sm:leading-8">
              We aim to become a dependable extension of every client&apos;s team—creating
              stronger processes, clearer reporting, and greater confidence in the numbers
              behind their business.
            </p>

            <div className="mission-divider my-9 h-px w-full max-w-xl bg-white/20" />

            <div className="space-y-5">
              {missionCommitments.map((commitment) => (
                <div
                  key={commitment}
                  className="mission-commitment flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E29E21]/15 ring-1 ring-[#E29E21]/45">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#E29E21]"
                    />
                  </span>

                  <p className="max-w-lg font-manrope text-sm leading-7 text-sky-50 sm:text-[15px]">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission statement card */}
          <div className="mission-quote relative lg:pt-10">
            <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-9 lg:p-11">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64"
              >
                <div className="mission-orbit absolute inset-0 rounded-full border border-white/15">
                  {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /> */}
                  <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E29E21] shadow-[0_0_0_5px_rgba(226,158,33,0.18)]" />
                </div>

                <div className="absolute inset-9 rounded-full border border-white/10" />

                <div className="absolute inset-18 rounded-full bg-white/10" />
              </div>

              {/* <div className="mission-icon mission-floating-icon relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-xl shadow-sky-950/15"> */}
              <div className="mission-icon mission-floating-icon relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E29E21] text-white shadow-xl shadow-[#E29E21]/20">
                <SparklesIcon aria-hidden="true" className="h-7 w-7" />
              </div>

              <div className="relative z-10 mt-14">
                <span className="font-cormorant text-6xl leading-none text-white/25">
                  “
                </span>

                <blockquote className="-mt-5 font-cormorant text-3xl font-medium leading-[1.18] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
                  To give every growing business the financial clarity and dependable
                  support it needs to move forward with confidence.
                </blockquote>
              </div>

              <div className="mission-footer relative z-10 mt-10 flex items-center justify-between gap-5 border-t border-white/15 pt-6">
                <div>
                  <p className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
                    The Haggai Commitment
                  </p>

                  <p className="mt-2 font-manrope text-sm leading-6 text-sky-100/70">
                    Accurate numbers. Clear processes. Trusted partnership.
                  </p>
                </div>

                <a
                  href="#vision"
                  aria-label="Continue to our vision"
                  // className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-all duration-300 hover:bg-white hover:text-sky-700"
                  className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-all duration-300 hover:border-[#E29E21] hover:bg-[#E29E21] hover:text-white"
                >
                  <ArrowDownRightIcon
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-4xl border border-white/15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
