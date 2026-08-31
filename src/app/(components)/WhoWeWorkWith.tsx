"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckIcon } from "@heroicons/react/24/outline";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ClientProfile {
  id: string;
  index: string;
  title: string;
  description: string;
  descriptionParagraphs?: string[];
  commonNeeds: string[];
}

const clientProfiles: ClientProfile[] = [
  {
    id: "cfos-finance-leaders",
    index: "01",
    title: "CFOs & Finance Leaders",
    description:
      "When your finance workload grows faster than your internal team, we provide experienced professionals who can support your accounting operations and work within your existing systems and processes.",
    commonNeeds: [
      "Month-end close",
      "Reconciliations",
      "Financial reporting",
      "AP/AR",
      "System support",
    ],
  },
  {
    id: "controllers-accounting-managers",
    index: "02",
    title: "Controllers & Accounting Managers",
    description:
      "Strengthen your accounting team without adding the burden of recruiting, onboarding, and managing additional permanent staff.",
    descriptionParagraphs: [
      "Strengthen your accounting team without adding the burden of recruiting, onboarding, and managing additional permanent staff.",
      "We provide flexible support for ongoing accounting operations, backlog management, and critical month-end activities.",
    ],
    commonNeeds: [
      "Account reconciliations",
      "Journal entries",
      "Close support",
      "Reporting",
      "Historical clean-ups",
    ],
  },
  {
    id: "cpa-accounting-firms",
    index: "03",
    title: "CPA & Accounting Firms",
    description:
      "Expand your capacity with experienced accounting professionals working behind the scenes as an extension of your team.",
    descriptionParagraphs: [
      "Expand your capacity with experienced accounting professionals working behind the scenes as an extension of your team.",
      "You maintain client relationships and review processes while we provide reliable accounting capacity.",
    ],
    commonNeeds: [
      "Client bookkeeping",
      "Reconciliations",
      "Month-end accounting",
      "Financial statement preparation",
      "Clean-up projects",
    ],
  },
];

export default function WhoWeWorkWith() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      aria-labelledby="who-we-work-with-heading"
      className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 font-body text-slate-900"
    >
      {/* Background ambient radial glow using theme colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-1/4 h-125 w-125 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-1/4 h-125 w-125 rounded-full bg-secondary/10 blur-3xl"
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
              WHO WE WORK WITH
            </span>
          </div>

          <h2
            ref={headingRef}
            id="who-we-work-with-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl leading-[1.12]"
          >
            Built for Finance Teams That Need{" "}
            <span className="text-primary">More Capacity</span>
          </h2>
        </div>

        {/* Profiles Grid */}
        <div
          ref={cardsContainerRef}
          className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          role="list"
          aria-label="Client Profiles"
        >
          {clientProfiles.map((profile) => (
            <article
              key={profile.id}
              role="listitem"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 lg:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 cursor-default"
            >
              {/* Top primary accent bar on hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                {/* Header info: Small numbered index & Audience title */}
                {/* <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <span className="font-heading text-sm font-bold tracking-widest text-primary bg-soft border border-secondary/30 rounded-full px-3 py-1">
                    {profile.index}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Client Profile
                  </span>
                </div> */}

                {/* Audience Title */}
                <h3 className="font-heading text-2xl font-semibold text-slate-950 leading-snug group-hover:text-primary transition-colors">
                  {profile.title}
                </h3>

                {/* Description */}
                <div className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {profile.descriptionParagraphs ? (
                    profile.descriptionParagraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{profile.description}</p>
                  )}
                </div>
              </div>

              {/* Common Needs Section */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  COMMON NEEDS
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  {profile.commonNeeds.map((need, nIdx) => (
                    <li
                      key={nIdx}
                      className="flex items-center gap-2.5 text-slate-700 group-hover:text-slate-900 transition-colors"
                    >
                      <CheckIcon
                        className="h-4 w-4 shrink-0 text-primary stroke-[2.5]"
                        aria-hidden="true"
                      />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
