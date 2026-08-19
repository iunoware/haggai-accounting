"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRightIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".founder-eyebrow",
            ".founder-heading-line",
            ".founder-description",
            ".founder-image",
            ".founder-name-card",
            ".founder-highlight",
            ".founder-quote",
            ".founder-link",
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

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      mainTimeline
        .from(".founder-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".founder-heading-line",
          {
            opacity: 0,
            yPercent: 110,
            duration: 0.95,
            stagger: 0.13,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".founder-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".founder-image",
          {
            opacity: 0,
            x: -55,
            scale: 0.96,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.85",
        )
        .from(
          ".founder-name-card",
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".founder-highlight",
          {
            x: 30,
            duration: 0.7,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.75",
        )
        .from(
          ".founder-quote",
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".founder-link",
          {
            opacity: 0,
            y: 16,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.to(".founder-orbit", {
        rotate: 360,
        duration: 38,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".founder-floating-badge", {
        y: -12,
        rotate: 3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".founder-glow", {
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
      id="founder"
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="founder-glow absolute -left-48 top-16 h-120 w-120 rounded-full bg-soft/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[78px_78px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="founder-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Meet the Founder
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.93] tracking-[-0.045em] text-[#0c2e2d] text-4xl sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden pb-1">
                <span className="founder-heading-line block">The Founder Behind</span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="founder-heading-line block italic text-primary">
                  Haggai Business Solutions
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="founder-description max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              With 17+ years of experience in enterprise finance and accounting
              operations, Jensi has led month-end close processes across entire global
              regions and managed high-volume revenue operations for fast-growing
              companies.
            </p>

            <p className="founder-description mt-5 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              That experience - spanning complex reconciliations, financial reporting, and
              cross-functional collaboration - shapes how Haggai Business Solutions
              approaches every client engagement: with the discipline of an enterprise
              team and the responsiveness of a dedicated partner.
            </p>
          </div>
        </div>

        {/* Main founder layout */}
        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* Founder image */}
          <div className="founder-image relative">
            <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-soft/35 p-3 shadow-[0_30px_80px_-40px_rgba(0,89,138,0.4)]">
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.55rem] bg-soft">
                <Image
                  src="/images/founder.jpg"
                  alt="Jensi, Founder of Haggai Business Solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-primary/45 via-transparent to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-44 w-44 translate-x-1/3 -translate-y-1/3"
                >
                  <div className="founder-orbit absolute inset-0 rounded-full border border-white/30">
                    <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(226,158,33,0.18)]" />
                  </div>

                  <div className="absolute inset-8 rounded-full border border-white/20" />
                </div>

                <div className="founder-floating-badge absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-xl shadow-black/15 sm:h-16 sm:w-16">
                  <CheckBadgeIcon aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
              </div>
            </div>

            {/* Founder identity card */}
            <div className="founder-name-card relative z-10 mx-4 -mt-14 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-primary/10 backdrop-blur-xl sm:mx-8 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-cormorant text-3xl font-semibold text-[#0c2e2d]">
                    Jensi
                  </p>

                  <p className="mt-1 font-manrope text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Founder
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full bg-soft px-3 py-1.5 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  Haggai Business Solutions
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl border border-secondary/20"
            />
          </div>

          {/* Founder story */}
          <div className="lg:pt-4">
            <div className="mb-9">
              <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Jensi - Founder
              </span>

              <p className="mt-4 font-cormorant text-3xl font-medium leading-[1.18] text-[#0c2e2d] sm:text-4xl">
                Enterprise experience, delivered with the responsiveness of a dedicated
                partner.
              </p>
            </div>

            <div className="space-y-4">
              <article className="founder-highlight group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-sm backdrop-blur-sm hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-6">
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckBadgeIcon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                      17+ Years of Enterprise Finance Experience
                    </h3>

                    <p className="mt-2 font-manrope text-sm leading-7 text-slate-600">
                      Jensi has led month-end close processes across entire global regions
                      and managed high-volume revenue operations for fast-growing
                      companies.
                    </p>
                  </div>
                </div>
              </article>

              <article className="founder-highlight group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/80 p-5 shadow-sm backdrop-blur-sm hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-6">
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <CheckBadgeIcon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                      Built for Growing Businesses
                    </h3>

                    <p className="mt-2 font-manrope text-sm leading-7 text-slate-600">
                      Jensi founded Haggai Business Solutions to help growing businesses
                      access the same level of financial rigor without the cost of
                      building it in-house.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Founder quote */}
            <blockquote className="founder-quote relative mt-8 overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-lg shadow-primary/15 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-10 font-cormorant text-[10rem] leading-none text-white/10"
              >
                “
              </span>

              <div className="relative">
                <span className="mb-5 block h-1 w-12 rounded-full bg-accent" />

                <p className="font-cormorant text-2xl font-medium leading-[1.35] sm:text-3xl">
                  With the discipline of an enterprise team and the responsiveness of a
                  dedicated partner.
                </p>

                <p className="mt-5 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-soft">
                  Jensi, Founder - Haggai Business Solutions
                </p>
              </div>
            </blockquote>

            <a
              href="/contact"
              className="founder-link group mt-8 inline-flex items-center gap-3 font-manrope text-sm font-semibold text-primary"
            >
              Connect with Haggai
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
