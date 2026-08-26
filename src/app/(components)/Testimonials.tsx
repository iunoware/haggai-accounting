"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Haggai transformed our entire month-end financial closing process. What used to take our internal team two full weeks of stressful reconciliations is now completed cleanly within three days. Their dedicated CPA team feels like a natural extension of our leadership.",
    name: "Sarah Jenkins",
    title: "Chief Executive Officer",
    company: "Haggai Business Solutions",
    industry: "SaaS & Technology",
    rating: 5,
    avatar: "/images/avatar-1.png",
  },
  {
    id: 2,
    quote:
      "The accuracy and proactive transparency of Haggai’s financial reporting gave us total clarity during our Series B fundraising round. Having seasoned CPAs overseeing daily operations eliminated all accounting compliance anxiety.",
    name: "Marcus Vance",
    title: "VP of Operations & Finance",
    company: "Vanguard Healthcare",
    industry: "Healthcare & Life Sciences",
    rating: 5,
    avatar: "/images/avatar-2.png",
  },
  {
    id: 3,
    quote:
      "Switching to Haggai was one of the best operational decisions we made this year. Their offshore team handles complex inventory tags, multi-state tax compliance, and payroll flawlessly, allowing us to focus 100% on product growth.",
    name: "Elena Rostova",
    title: "Co-Founder & COO",
    company: "Lumina Global Commerce",
    industry: "E-Commerce & Retail",
    rating: 5,
    avatar: "/images/avatar-3.png",
  },
  {
    id: 4,
    quote:
      "As a rapidly growing real estate firm, managing multi-entity books was a constant bottleneck. Haggai implemented a unified cloud accounting framework that brought institutional structure to all our property holdings.",
    name: "David Sterling",
    title: "Managing Director",
    company: "Sterling Capital Holdings",
    industry: "Real Estate & Assets",
    rating: 5,
    avatar: "/images/avatar-4.png",
  },
  {
    id: 5,
    quote:
      "Haggai’s team is remarkably responsive and diligent. Whenever we have complex tax structure questions or strategic cash-flow forecasts, our dedicated lead accountant provides clear, actionable guidance within hours.",
    name: "Rachel Thorne",
    title: "Chief Financial Officer",
    company: "Beacon Media Group",
    industry: "Marketing & Media",
    rating: 5,
    avatar: "/images/founder.png",
  },
];

// Duplicate list for infinite smooth looping
const row1Testimonials = [...testimonials, ...testimonials];
const row2Testimonials = [
  ...testimonials.slice(2),
  ...testimonials.slice(0, 2),
  ...testimonials.slice(2),
  ...testimonials.slice(0, 2),
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance ScrollTrigger Timeline
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

      if (marqueeContainerRef.current) {
        tl.fromTo(
          marqueeContainerRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3",
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
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-28 font-manrope text-slate-900"
    >
      {/* Background radial gradient glow (Soft brand color) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_35%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/4 h-96 w-96 rounded-full bg-soft/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Badge */}
          <div ref={badgeRef} className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold font-manrope text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Client Stories &amp; Testimonials
            </span>
          </div>

          {/* Large Heading (Cormorant Garamond) */}
          <h2
            ref={headingRef}
            id="testimonials-heading"
            className="font-cormorant text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Trusted by growth-focused companies and{" "}
            <span className="text-primary">finance leaders.</span>
          </h2>

          {/* Supporting Paragraph (Manrope) */}
          <p
            ref={paragraphRef}
            className="mx-auto mt-5 max-w-2xl font-manrope text-base leading-7 text-slate-600 sm:text-lg"
          >
            Discover how Haggai provides clarity, reliability, and scalable
            accounting operations for founders, CFOs, and accounting firm
            partners.
          </p>
        </div>
      </div>

      {/* DUAL INFINITE MARQUEE STAGE */}
      <div ref={marqueeContainerRef} className="relative mt-12 sm:mt-16 w-full">
        {/* Left Edge Gradient Blur Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"
        />

        {/* Right Edge Gradient Blur Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent"
        />

        {/* MARQUEE ROW 1 (Scrolls Left) */}
        <div className="flex w-full overflow-hidden py-3">
          <div className="flex min-w-full shrink-0 gap-6 animate-marquee-left pause-on-hover px-3">
            {row1Testimonials.map((item, index) => (
              <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* MARQUEE ROW 2 (Scrolls Right) */}
        {/* <div className="flex w-full overflow-hidden py-3 mt-2 sm:mt-4">
          <div className="flex min-w-full shrink-0 gap-6 animate-marquee-right pause-on-hover px-3">
            {row2Testimonials.map((item, index) => (
              <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div> */}
      </div>

      {/* BOTTOM CTA */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div ref={ctaRef} className="mt-14 sm:mt-16 text-center">
          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm sm:text-base font-semibold font-manrope text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            >
              <span>Join Our Satisfied Clients</span>
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <p className="mt-3 font-manrope text-sm font-medium text-slate-600 sm:text-base">
            Experience reliable, stress-free accounting operations for your
            business.
          </p>
        </div>
      </div>
    </section>
  );
}

// INDIVIDUAL TESTIMONIAL CARD COMPONENT
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="group/card relative flex flex-col justify-between w-85 sm:w-102.5 shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-[#00598A]/10 cursor-pointer font-manrope">
      {/* Top Blue Accent Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1.5 bg-primary opacity-80 transition-opacity duration-300 group-hover/card:opacity-100"
      />

      <div>
        {/* Top Header: 5 Gold Stars & Industry Badge */}
        <div className="flex items-center justify-between gap-2 mb-4 font-manrope">
          {/* 5-Star Rating */}
          <div
            className="flex items-center gap-1"
            aria-label="5 out of 5 stars"
          >
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 text-accent"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Industry Badge in Soft Blue */}
          <span className="inline-block rounded-full bg-soft px-3 py-1 text-xs font-semibold font-manrope text-primary transition-colors duration-300 group-hover/card:bg-blue-100">
            {item.industry}
          </span>
        </div>

        {/* Decorative Quote Icon */}
        <div className="relative mb-3">
          <svg
            className="h-8 w-8 text-secondary/25 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-6 group-hover/card:text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Client Quote Body (Manrope) */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-manrope">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Client Profile Footer */}
      {/* <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-4 font-manrope">
        
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="44px"
            className="object-cover transition-transform duration-300 group-hover/card:scale-105"
          />
        </div>

        
        <div className="flex-1 min-w-0">
          <h4 className="font-cormorant text-lg font-bold text-slate-950 truncate leading-snug">
            {item.name}
          </h4>
          <p className="text-xs font-manrope text-slate-500 truncate">
            {item.title}
          </p>
          <p className="text-xs font-manrope font-semibold text-slate-700 transition-colors duration-300 group-hover/card:text-primary truncate">
            {item.company}
          </p>
        </div>
      </div> */}
    </article>
  );
}
