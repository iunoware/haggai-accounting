"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MeetTheFounder() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const organicShapeRef = useRef<HTMLDivElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLDivElement>(null);
  const founderInfoRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (portraitContainerRef.current) {
        tl.fromTo(
          portraitContainerRef.current,
          { opacity: 0, y: 35, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );
      }

      if (quoteRef.current) {
        tl.fromTo(
          quoteRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        );
      }

      if (storyRef.current) {
        const paragraphs = Array.from(storyRef.current.children);
        tl.fromTo(
          paragraphs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.18,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (founderInfoRef.current) {
        tl.fromTo(
          founderInfoRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      }

      if (organicShapeRef.current) {
        gsap.to(organicShapeRef.current, {
          y: -12,
          scale: 1.04,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (portraitImageRef.current) {
        gsap.to(portraitImageRef.current, {
          yPercent: -4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="meet-the-founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-24 font-body text-slate-900"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Meet the Founder
            </span>
          </div>

          {/* Large Heading */}
          <h2
            ref={headingRef}
            id="founder-heading"
            className="font-heading text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            The vision behind Haggai{" "}
            <span className="text-primary">begins with people.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Haggai was founded with a simple mission: helping businesses
            simplify accounting so they can focus on growth, innovation and
            long-term success.
          </p>
        </div>

        {/* MAIN EDITORIAL SPLIT LAYOUT */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="relative lg:col-span-5 flex flex-col items-center sm:items-start">
            {/* Organic Blue Backdrop Shape */}
            <div
              ref={organicShapeRef}
              aria-hidden="true"
              className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-soft/40 blur-2xl -z-10 opacity-90"
            />

            {/* Founder Portrait Container */}
            <div
              ref={portraitContainerRef}
              className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-primary/5 transition-all duration-500 hover:border-primary/40 hover:shadow-primary/10"
            >
              <div
                ref={portraitImageRef}
                className="relative aspect-4/5 w-full overflow-hidden rounded-[18px] bg-slate-100"
              >
                <Image
                  src="/images/founder.png"
                  alt="Founder and CEO of Haggai Accounting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                />
              </div>
            </div>

            {/* Founder Name & Title Below Portrait */}
            <div
              ref={founderInfoRef}
              className="mt-6 w-full flex flex-row items-center justify-between gap-4 border-t border-slate-100 pt-5 px-1"
            >
              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-950">
                  Jensi Clement
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary tracking-wide">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative lg:col-span-7 flex flex-col justify-center">
            {/* Decorative Quotation Mark Backdrop */}
            <div
              aria-hidden="true"
              className="absolute -top-12 -left-6 sm:-top-16 sm:-left-8 pointer-events-none select-none z-0"
            >
              <svg
                className="h-32 w-32 sm:h-44 sm:w-44 text-soft/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Editorial Quote */}
            <blockquote
              ref={quoteRef}
              className="relative z-10 border-l-4 border-primary pl-6 sm:pl-8 py-1 my-2"
            >
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-950 leading-snug tracking-tight italic">
                &ldquo;My vision has always been to build an accounting partner
                that businesses can trust—one that values accuracy, transparency
                and long-term relationships.&rdquo;
              </p>
            </blockquote>

            {/* Story Paragraphs */}
            <div
              ref={storyRef}
              className="mt-8 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600"
            >
              <p>
                When we founded Haggai, we recognized a systemic challenge in
                the accounting industry: growing companies were routinely forced
                to choose between transactional outsourced vendors who lacked
                context, or costly in-house infrastructure that drained focus
                from core innovation.
              </p>
              <p>
                We built Haggai to bridge that gap. By pairing seasoned
                financial leaders with dedicated offshore teams and modern
                financial workflows, we deliver institutional-grade accounting
                built on real human accountability. Our commitment is simple:
                total accuracy, zero friction, and a partner who is as invested
                in your growth as you are.
              </p>
            </div>

            {/* Bottom CTA */}
            <div
              ref={ctaRef}
              className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-start"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xs transition-all duration-300 hover:border-primary hover:text-primary hover:bg-soft/40 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span>Learn More About Our Story</span>
                <ArrowRightIcon
                  className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
