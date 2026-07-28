"use client";

import { useRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PricingCard from "./PricingCard";
import { pricingPlansData } from "../(config)/pricingConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingPlans() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            badgeRef.current,
            headingRef.current,
            paragraphRef.current,
            gridRef.current,
          ],
          {
            opacity: 1,
            y: 0,
          },
        );
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Badge fades upward
      if (badgeRef.current) {
        timeline.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
      }

      // 2. Heading reveals
      if (headingRef.current) {
        timeline.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }

      // 3. Supporting text fades
      if (paragraphRef.current) {
        timeline.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      // 4. Pricing cards stagger upward & center card scales into focus
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        timeline.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="pricing-plans"
      aria-labelledby="pricing-plans-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-20 font-body text-slate-900"
    >
      {/* Background radial gradient glow (Soft brand color) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Choose the Right Plan
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="pricing-plans-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Accounting plans designed to grow with{" "}
            <span className="text-primary">your business.</span>
          </h2>

          {/* Supporting Paragraph (Max 3 lines) */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed"
          >
            Choose the level of accounting support that best fits your business
            today, with the flexibility to scale your services as your business
            grows.
          </p>
        </div>

        {/* SPOTLIGHT PRICING STAGE (3 CARDS DYNAMICALLY RENDERED FROM CONFIG) */}
        <div
          ref={gridRef}
          className="mt-14 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-6xl mx-auto"
        >
          {pricingPlansData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* BOTTOM ASSURANCE LINE */}
        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-sm font-medium text-slate-600">
            Need custom reporting, specialized software integrations, or
            multi-entity support?{" "}
            <a
              href="/contact"
              className="text-primary font-bold underline underline-offset-4 hover:text-[#004870]"
            >
              Talk with our financial advisors
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
