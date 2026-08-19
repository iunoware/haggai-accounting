"use client";

import { useRef } from "react";
import {
  BuildingOffice2Icon,
  ChartBarSquareIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const storyPoints = [
  {
    number: "01",
    title: "Real Experience",
    description:
      "Haggai Business Solutions was shaped by more than 17 years of experience inside enterprise finance operations, leading month-end close across an entire region for a global manufacturer with thousands of employees.",
    icon: LightBulbIcon,
  },
  {
    number: "02",
    title: "Built on the Right Processes",
    description:
      "Experience managing high-volume revenue operations for a fast-growing e-commerce platform revealed a clear pattern: businesses that scale well rely on the right processes, the right partners, and the right people holding the details together.",
    icon: BuildingOffice2Icon,
  },
  {
    number: "03",
    title: "Designed for Your Growth",
    description:
      "Haggai exists to bring that same enterprise-level rigor to growing businesses whose back offices can't keep up, giving them the structure, reliability, and financial discipline they need to scale.",
    icon: ChartBarSquareIcon,
  },
];

export default function CompanyStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".story-eyebrow",
            ".story-heading-line",
            ".story-description",
            ".story-link",
            ".story-card",
            ".story-visual",
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
          },
        );

        gsap.set(".story-progress-line", {
          scaleY: 1,
        });

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "bottom 75%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(".story-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".story-heading-line",
          {
            opacity: 0,
            yPercent: 105,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".story-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".story-link",
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".story-visual",
          {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.85",
        )
        .from(
          ".story-progress-line",
          {
            scaleY: 0,
            duration: 1.2,
            transformOrigin: "top",
            ease: "power3.inOut",
          },
          "-=0.65",
        )
        .from(
          ".story-card",
          {
            opacity: 0,
            x: 35,
            duration: 0.75,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=1",
        );

      gsap.to(".story-orbit", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".story-floating-shape", {
        y: -14,
        duration: 3,
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
      id="our-story"
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-soft/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
        {/* Left content */}
        <div className="lg:sticky lg:top-32">
          <div className="story-eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
              Our Beginning
            </span>
          </div>

          <h2 className="font-heading font-medium leading-[0.98] tracking-tight text-slate-950 text-4xl sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden pb-1">
              <span className="story-heading-line block">Built on Real</span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span className="story-heading-line block italic text-primary">
                Experience.
              </span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span className="story-heading-line block">Built for Your</span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span className="story-heading-line block italic text-primary">
                Growth.
              </span>
            </span>
          </h2>

          <p className="story-description text-base mt-7 max-w-lg leading-relaxed text-slate-600">
            Haggai Business Solutions was founded on a simple belief: growing businesses
            deserve the same financial discipline, structure, and reliability that large
            enterprises take for granted - without the cost of building it all in-house.
          </p>

          <p className="story-description mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            That belief comes from 17+ years spent inside enterprise finance operations -
            leading month-end close across an entire region for a global manufacturer with
            thousands of employees, and managing high-volume revenue operations processing
            thousands of transactions a month for a fast-growing e-commerce platform.
          </p>

          <p className="story-description mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            Along the way, one pattern became clear: the businesses that scale well
            aren&apos;t the ones with the biggest teams - they&apos;re the ones with the
            right processes, the right partners, and the right people holding the details
            together.
          </p>

          <p className="story-description mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            Haggai Business Solutions exists to bring that same rigor to businesses that
            need it most: companies growing fast enough that the back office can&apos;t
            keep up.
          </p>
        </div>

        {/* Right story visual */}
        <div className="story-visual relative">
          <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-soft/35 px-5 py-8 shadow-[0_25px_80px_-40px_rgba(0,89,138,0.3)] sm:px-9 sm:py-11">
            {/* Decorative visual */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3"
            >
              <div className="story-orbit absolute inset-0 rounded-full border border-secondary/25">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(226,158,33,0.15)]" />
              </div>

              <div className="absolute inset-8 rounded-full border border-secondary/15" />

              <div className="absolute inset-16 rounded-full bg-white/70 backdrop-blur-sm" />
            </div>

            <div className="relative mb-12 flex items-end justify-between border-b border-slate-200/90 pb-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    The Haggai Journey
                  </span>
                </div>

                <p className="mt-3 max-w-sm font-heading  font-medium leading-tight text-slate-950 text-2xl sm:text-3xl">
                  From enterprise experience to a trusted financial partner for growing
                  businesses.
                </p>
              </div>

              <div className="story-floating-shape hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/25 sm:flex">
                <ChartBarSquareIcon aria-hidden="true" className="h-7 w-7" />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-5.75 top-5 w-px bg-secondary/25 sm:left-6.75"
              />

              <div
                aria-hidden="true"
                className="story-progress-line absolute bottom-5 left-5.75 top-5 w-px bg-accent sm:left-6.75"
              />

              <div className="space-y-5">
                {storyPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.number}
                      className="story-card group relative grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6"
                    >
                      <div className="relative z-40 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/20 bg-white text-primary shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:h-14 sm:w-14">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>

                      <div className="rounded-2xl border border-white/80 bg-white p-5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 sm:p-6">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <h3 className="font-heading text-xl font-semibold text-slate-950 sm:text-2xl">
                            {point.title}
                          </h3>

                          <span className="font-manrope text-xs font-bold tracking-[0.15em] text-accent">
                            {point.number}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-600">
                          {point.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl border border-secondary/20"
          />
        </div>
      </div>
    </section>
  );
}
