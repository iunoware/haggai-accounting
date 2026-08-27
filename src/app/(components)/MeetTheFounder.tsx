"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MeetTheFounder() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
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

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        );
      }

      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="meet-the-founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-20 font-body text-slate-900"
    >
      {/* Ambient soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-5 inline-block">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-soft/50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-xs">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            MEET THE FOUNDER
          </span>
        </div>

        {/* Main Heading */}
        <h2
          ref={headingRef}
          id="founder-heading"
          className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]"
        >
          17+ Years of Experience.{" "}
          <span className="text-primary block sm:inline">
            Built for What&apos;s Next.
          </span>
        </h2>

        {/* Supporting Paragraph */}
        <p
          ref={paragraphRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Built on 17+ years of enterprise finance and operations experience -
          from managing month-end close across entire regions to running
          high-volume revenue operations at scale. A Certified Management
          Accountant (CMA), Jensi brings that same level of rigor to Haggai
          Business Solutions for growing businesses.
        </p>

        {/* Divider & Footer Block (Founder Meta + CTA) */}
        <div
          ref={footerRef}
          className="mt-12 sm:mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-3xl mx-auto text-left"
        >
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
              Jensi Clement, CMA
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-primary tracking-wide mt-0.5">
              Founder &amp; CEO
            </p>
          </div>

          <div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xs transition-all duration-300 hover:border-primary hover:text-primary hover:bg-soft/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span>Meet Our Founder</span>
              <ArrowRightIcon
                className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
