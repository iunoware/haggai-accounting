"use client";

import { useRef } from "react";
import {
  // ArrowDownRightIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const visionGoals = [
  {
    number: "01",
    title: "A Trusted Finance Partner",
    description:
      "To become the accounting partner businesses trust for consistent support, clear communication, and dependable financial operations.",
    icon: UsersIcon,
  },
  {
    number: "02",
    title: "Built for Growing Businesses",
    description:
      "To create scalable accounting systems that continue to support clients as their teams, operations, and ambitions expand.",
    icon: ArrowTrendingUpIcon,
  },
  {
    number: "03",
    title: "Clarity Without Boundaries",
    description:
      "To make high-quality financial support more accessible to businesses, wherever they operate and wherever growth takes them.",
    icon: GlobeAltIcon,
  },
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".vision-eyebrow",
            ".vision-heading-line",
            ".vision-description",
            ".vision-statement",
            ".vision-goal",
            ".vision-footer",
            ".vision-icon",
          ],
          {
            opacity: 1,
            visibility: "visible",
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          },
        );

        gsap.set(".vision-line", {
          scaleX: 1,
        });

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
        .from(".vision-eyebrow", {
          autoAlpha: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".vision-heading-line",
          {
            autoAlpha: 0,
            yPercent: 110,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".vision-description",
          {
            autoAlpha: 0,
            y: 26,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".vision-statement",
          {
            autoAlpha: 0,
            x: -45,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.55",
        )
        .from(
          ".vision-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.65",
        );

      const visionCards = gsap.utils.toArray<HTMLElement>(".vision-goal");

      visionCards.forEach((card) => {
        const icon = card.querySelector(".vision-icon");

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        cardTimeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              y: 45,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform",
            },
          )
          .fromTo(
            icon,
            {
              scale: 0.65,
              rotate: -15,
            },
            {
              scale: 1,
              rotate: 0,
              duration: 0.65,
              ease: "back.out(1.7)",
              clearProps: "transform",
            },
            "-=0.5",
          );
      });

      gsap.from(".vision-footer", {
        scrollTrigger: {
          trigger: ".vision-footer",
          start: "top 92%",
          once: true,
        },
        autoAlpha: 0,
        y: 22,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(".vision-orbit", {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".vision-orbit-reverse", {
        rotate: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".vision-floating-shape", {
        y: -12,
        rotate: 3,
        duration: 3.2,
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
      id="vision"
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-120 w-120 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-128 w-lg rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top content */}
        <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div>
            <div className="vision-eyebrow mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Our Vision
              </span>
            </div>

            <h2 className="font-heading font-medium leading-[0.98] line-c tracking-tight text-slate-950 text-4xl sm:text-5xl lg:text-6xl">
              <span className="block pb-1">
                <span className="vision-heading-line block">Building a clearer</span>
              </span>

              <span className="block overflow-hidden pb-2">
                <span className="vision-heading-line block italic text-primary">
                  financial future.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="vision-description max-w-xl text-base leading-relaxed text-slate-600">
              Our vision is to become a trusted global business solutions partner for
              growing businesses-known for bringing clarity, consistency, and confidence
              to every financial operation.
            </p>

            <p className="vision-description mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              We are building a company where dependable expertise, thoughtful processes,
              and long-term client relationships create a stronger foundation for
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Main vision panel */}
        <div className="vision-statement relative mt-14 overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-xl shadow-primary/20 sm:p-9 lg:mt-20 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 h-80 w-80 pointer-events-none"
          >
            <div className="vision-orbit absolute inset-0 rounded-full border border-white/15">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>

            <div className="vision-orbit-reverse absolute inset-10 rounded-full border border-white/10">
              <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" />
            </div>

            <div className="absolute inset-20 rounded-full bg-white/10 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-soft">
                Where We Are Heading
              </span>

              <blockquote className="mt-6 max-w-4xl font-heading font-medium leading-snug tracking-tight text-white text-xl sm:text-2xl lg:text-3xl">
                {/* To shape a future where growing businesses have access to the financial
                clarity, systems, and support required to build with confidence. */}
                {/* To become a globally trusted business solutions partner, empowering medium
                and large enterprises through innovative finance, payroll, supply chain,
                and business process outsourcing services. */}
                To become a globally trusted business solutions partner, empowering medium
                and large enterprises through innovative finance, payroll, and business
                process outsourcing services.
              </blockquote>
            </div>

            <div className="vision-floating-shape flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-xl sm:h-24 sm:w-24">
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
            </div>
          </div>
        </div>

        {/* Vision goals */}
        <div className="vision-line mt-16 h-px w-full bg-slate-200 lg:mt-20" />

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-7">
          {visionGoals.map((goal) => {
            const Icon = goal.icon;

            return (
              <article
                key={goal.number}
                className="vision-goal group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-soft/60 transition-transform duration-500 group-hover:scale-125 pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div className="vision-icon flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>

                    <span className="font-heading text-sm font-bold tracking-[0.18em] text-primary">
                      {goal.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold leading-tight text-slate-950 sm:text-2xl">
                    {goal.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {goal.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom link */}
        {/* <div className="vision-footer mt-12 flex flex-col gap-5 border-t border-slate-200/90 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-xl font-semibold text-slate-950">
              Our future is guided by our values.
            </p>

            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              The principles that shape how we work, serve, and grow.
            </p>
          </div>

          <a
            href="#core-values"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-[#004870]"
          >
            <span>Explore our core values</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <ArrowDownRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
