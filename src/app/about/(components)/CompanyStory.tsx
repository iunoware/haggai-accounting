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
    title: "A Clear Purpose",
    description:
      "Haggai began with a simple belief: growing businesses deserve dependable financial support without the complexity of building an entire in-house department.",
    icon: LightBulbIcon,
  },
  {
    number: "02",
    title: "Built Around Partnership",
    description:
      "The company was shaped around long-term relationships, clear communication, and accounting processes that business owners can genuinely rely on.",
    icon: BuildingOffice2Icon,
  },
  {
    number: "03",
    title: "Designed for Growth",
    description:
      "Today, Haggai helps businesses strengthen their financial operations with accurate, consistent, and scalable accounting support.",
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
          }
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
          "-=0.4"
        )
        .from(
          ".story-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ".story-link",
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".story-visual",
          {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.85"
        )
        .from(
          ".story-progress-line",
          {
            scaleY: 0,
            duration: 1.2,
            transformOrigin: "top",
            ease: "power3.inOut",
          },
          "-=0.65"
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
          "-=1"
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
    }
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 font-body text-slate-900"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
        {/* Left content */}
        <div className="lg:sticky lg:top-32">
          <div className="story-eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Beginning
            </span>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <span className="story-heading-line block">How it all</span>
            </span>

            <span className="block overflow-hidden pb-2">
              <span className="story-heading-line block italic text-primary">
                started.
              </span>
            </span>
          </h2>

          <p className="story-description mt-7 max-w-lg text-base leading-relaxed text-slate-600">
            Haggai was created to bring structure, clarity, and confidence to the
            financial side of growing businesses. What began as a commitment to better
            accounting has developed into a dependable finance partnership built around
            each client&apos;s needs.
          </p>

          <p className="story-description mt-5 max-w-lg text-base leading-relaxed text-slate-600">
            Every process, report, and relationship is guided by the same purpose: helping
            business owners understand their numbers and make informed decisions with
            greater confidence.
          </p>
        </div>

        {/* Right story visual */}
        <div className="story-visual relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/60 px-5 py-8 shadow-xl shadow-primary/5 sm:px-9 sm:py-11">
            {/* Decorative visual */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3"
            >
              <div className="story-orbit absolute inset-0 rounded-full border border-secondary/20">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              </div>

              <div className="absolute inset-8 rounded-full border border-secondary/15" />
              <div className="absolute inset-16 rounded-full bg-white/70 backdrop-blur-sm" />
            </div>

            <div className="relative mb-12 flex items-end justify-between border-b border-slate-200/90 pb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  The Haggai Journey
                </span>

                <p className="mt-3 max-w-sm font-heading text-3xl font-medium leading-tight text-slate-950 sm:text-4xl">
                  From a clear idea to a trusted financial partnership.
                </p>
              </div>

              <div className="story-floating-shape hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 sm:flex">
                <ChartBarSquareIcon aria-hidden="true" className="h-7 w-7" />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-5.75 top-5 w-px bg-slate-200 sm:left-6.75"
              />

              <div
                aria-hidden="true"
                className="story-progress-line absolute bottom-5 left-5.75 top-5 w-px bg-primary sm:left-6.75"
              />

              <div className="space-y-5">
                {storyPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.number}
                      className="story-card group relative grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[56px_1fr] sm:gap-6"
                    >
                      <div className="relative z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>

                      <div className="rounded-2xl border border-white/80 bg-white p-5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5 sm:p-6">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <h3 className="font-heading text-xl font-semibold text-slate-950 sm:text-2xl">
                            {point.title}
                          </h3>

                          <span className="font-heading text-sm font-bold tracking-[0.15em] text-primary">
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
        </div>
      </div>
    </section>
  );
}
