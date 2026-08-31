"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SupportItem {
  id: string;
  index: string;
  title: string;
  description: string;
}

const supportItems: SupportItem[] = [
  {
    id: "white-label-accounting-support",
    index: "01",
    title: "White-Label Accounting Support",
    description:
      "Our team works behind the scenes under your firm's processes and service delivery model.",
  },
  {
    id: "dedicated-accounting-professionals",
    index: "02",
    title: "Dedicated Accounting Professionals",
    description:
      "Access full-time or part-time professionals aligned with your workflow and client requirements.",
  },
  {
    id: "flexible-capacity",
    index: "03",
    title: "Flexible Capacity",
    description:
      "Add support during busy periods, client growth, month-end deadlines, or special projects.",
  },
  {
    id: "seamless-team-integration",
    index: "04",
    title: "Seamless Team Integration",
    description:
      "We work with your existing systems, processes, and communication channels to become a reliable extension of your team.",
  },
];

const builtAroundStatements = [
  "You maintain the client relationship.",
  "You maintain control over the work and review process.",
  "We provide the experienced accounting capacity behind the scenes.",
];

export default function WhiteLabelPartnership() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const supportGridRef = useRef<HTMLDivElement>(null);
  const builtAroundRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (introRef.current) {
        tl.fromTo(
          introRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      if (supportGridRef.current) {
        const cards = Array.from(supportGridRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      if (builtAroundRef.current) {
        tl.fromTo(
          builtAroundRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="white-label-partnership"
      aria-labelledby="white-label-partnership-heading"
      className="relative overflow-hidden bg-slate-50/60 py-20 sm:py-24 font-body text-slate-900"
    >
      {/* Background ambient radial glow using theme colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-1/4 h-[500px] w-[500px] rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs backdrop-blur-sm sm:text-xs">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              WHITE-LABEL PARTNERSHIP
            </span>
          </div>

          <div ref={headingRef}>
            <h2
              id="white-label-partnership-heading"
              className="font-cormorant text-3xl font-semibold tracking-tight text-[#0c2e2d] sm:text-4xl md:text-5xl leading-[1.12]"
            >
              Your Trusted Back-Office Partner <br className="hidden sm:inline" />
              for Accounting Firms
            </h2>

            <p className="mt-3 font-manrope text-base sm:text-lg font-semibold text-primary tracking-wide">
              Expand Your Capacity Without Expanding Your Overhead
            </p>
          </div>

          <div ref={introRef} className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
            <p>
              Haggai Business Solutions partners with CPA firms, accounting firms,
              and finance consultancies that need additional capacity to support their clients.
            </p>
            <p>
              Our experienced professionals work as an extension of your team, helping you
              manage workloads, strengthen service delivery, and take on more client
              work—without the time and cost involved in building a larger in-house team.
            </p>
          </div>
        </div>

        {/* Subsection 1: HOW WE SUPPORT YOUR FIRM */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#0c2e2d]">
              How We Support Your Firm
            </h3>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-accent rounded-full" />
          </div>

          <div
            ref={supportGridRef}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
            role="list"
            aria-label="Capabilities"
          >
            {supportItems.map((item) => (
              <article
                key={item.id}
                role="listitem"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 lg:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 cursor-default"
              >
                {/* Top primary accent bar on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-cormorant text-sm font-bold tracking-widest text-primary bg-soft border border-secondary/30 rounded-full px-3 py-1">
                      {item.index}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Capability
                    </span>
                  </div>

                  <h4 className="mt-4 font-cormorant text-2xl font-semibold text-slate-950 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 font-manrope">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Subsection 2: BUILT AROUND YOUR FIRM */}
        <div ref={builtAroundRef} className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-secondary/30 bg-white p-7 sm:p-10 shadow-xs">
            <div className="text-center mb-8">
              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#0c2e2d]">
                Built Around Your Firm
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 font-manrope">
                Maintain complete control while expanding your capacity behind the scenes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              {builtAroundStatements.map((statement, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-center md:items-start gap-3.5 p-4 rounded-xl bg-soft/40 border border-secondary/20"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary font-bold">
                    <CheckIcon className="h-4 w-4 stroke-[3] text-primary" />
                  </div>
                  <p className="font-manrope text-sm font-semibold text-slate-900 leading-snug">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div ref={ctaRef} className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-3.5 font-manrope text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74] active:translate-y-0"
          >
            <span>Explore Partnership Options</span>
            <ArrowRightIcon
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
