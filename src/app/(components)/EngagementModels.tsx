"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EngagementModel {
  id: string;
  index: string;
  title: string;
  paragraphs: string[];
  bestFor: string[];
}

const engagementModels: EngagementModel[] = [
  {
    id: "dedicated-resource",
    index: "01",
    title: "Dedicated Resource",
    paragraphs: [
      "Get a dedicated accounting, payroll, or business operations professional who works as an extension of your team.",
      "Ideal for businesses that need ongoing support but do not want to hire and manage additional full-time employees.",
    ],
    bestFor: [
      "Month-end support",
      "Bookkeeping",
      "AP/AR",
      "Payroll",
      "Reconciliations",
      "Reporting",
    ],
  },
  {
    id: "managed-services",
    index: "02",
    title: "Managed Services",
    paragraphs: [
      "Outsource a defined function or process to Haggai Business Solutions.",
      "Our team manages the agreed scope, processes, and deliverables while you maintain visibility into the work.",
    ],
    bestFor: [
      "Bookkeeping",
      "Month-end close",
      "Financial reporting",
      "Payroll support",
      "Back-office operations",
    ],
  },
  {
    id: "white-label-partnership",
    index: "03",
    title: "White-Label Partnership",
    paragraphs: [
      "Expand your firm's capacity with experienced professionals working behind the scenes as an extension of your team.",
      "You maintain the client relationship while we provide the additional accounting and operational support you need.",
    ],
    bestFor: [
      "CPA Firms",
      "Accounting Firms",
      "Fractional CFO Firms",
      "Business Advisory Firms",
    ],
  },
  {
    id: "project-based-support",
    index: "04",
    title: "Project-Based Support",
    paragraphs: [
      "Get experienced support for a specific project, transition, or temporary requirement.",
      "We can help you manage additional workloads without committing to a long-term engagement.",
    ],
    bestFor: [
      "Accounting clean-ups",
      "NetSuite migration support",
      "Historical reconciliations",
      "Month-end backlog",
      "Process improvement",
      "System transitions",
    ],
  },
];

export default function EngagementModels() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
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
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);
        tl.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="engagement-models"
      aria-labelledby="engagement-models-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 font-body text-slate-900"
    >
      {/* Background ambient radial glow using Haggai theme colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/3 h-[500px] w-[500px] rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/3 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl"
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
              ENGAGEMENT MODELS
            </span>
          </div>

          <h2
            ref={headingRef}
            id="engagement-models-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl leading-[1.12]"
          >
            Flexible Engagement Models Built Around{" "}
            <span className="text-primary">Your Needs</span>
          </h2>

          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-md"
          >
            Every business has different requirements. Whether you need one
            experienced professional, support for a specific function, or a
            complete managed solution, we offer flexible engagement models
            designed around your business.
          </p>
        </div>

        {/* 2x2 Editorial Card Grid */}
        <div
          ref={cardsContainerRef}
          className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          role="list"
          aria-label="Engagement Models"
        >
          {engagementModels.map((model) => (
            <article
              key={model.id}
              role="listitem"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 lg:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 cursor-default"
            >
              {/* Top primary accent bar on hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                {/* Header info: Numbered index */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <span className="font-heading text-sm font-bold tracking-widest text-primary bg-soft border border-secondary/30 rounded-full px-3 py-1">
                    {model.index}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Model {model.index}
                  </span>
                </div>

                {/* Model Title */}
                <h3 className="mt-5 font-heading text-2xl font-semibold text-slate-950 leading-snug group-hover:text-primary transition-colors">
                  {model.title}
                </h3>

                {/* Description */}
                <div className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {model.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Scannable "BEST FOR" Tags Section */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  BEST FOR
                </div>

                <div className="flex flex-wrap gap-2">
                  {model.bestFor.map((item, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center rounded-md bg-soft/60 border border-secondary/30 px-2.5 py-1 text-xs font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Horizontal CTA */}
        <div
          ref={ctaRef}
          className="mt-12 sm:mt-14 rounded-2xl border border-secondary/30 bg-slate-50/70 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="max-w-2xl">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-slate-950">
              Not sure which model is right for you?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Let&apos;s discuss your requirements and build an engagement that
              works for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Talk to Our Team</span>
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
