"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".svc-eyebrow", { opacity: 0, y: 15, duration: 0.6 })
        .from(".svc-heading", { opacity: 0, y: 25, duration: 0.8 }, "-=0.4")
        .from(".svc-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.5")
        .from(".svc-actions", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(
          ".svc-visual",
          { opacity: 0, scale: 0.96, y: 15, duration: 0.8 },
          "-=0.5",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] overflow-hidden bg-cover bg-center bg-no-repeat pt-28 pb-16 lg:flex lg:items-center lg:pt-32 lg:pb-20 font-body text-slate-900"
      style={{ backgroundImage: "url('/images/service-bg.png')" }}
    >
      {/* Subtle overlay to ensure high text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40 lg:via-white/70"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column — Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Eyebrow */}
            <div className="svc-eyebrow mb-5 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-soft/50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-xs">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="svc-heading font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              The Weight of Operations.{" "}
              <span className="text-primary block sm:inline">Handled.</span>
            </h1>

            {/* Supporting Description */}
            <p className="svc-desc mt-6 max-w-xl font-manrope text-base leading-relaxed text-slate-600 sm:text-lg">
              Haggai takes the complexity of finance, payroll, and supply chain
              operations off your team — with the expertise and operational
              support to keep your business moving.
            </p>

            {/* CTA Actions */}
            <div className="svc-actions mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-3 rounded-xl bg-primary px-8 font-manrope text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#004870] hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRightIcon className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                href="#white-label-services"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-7 font-manrope text-sm font-semibold text-primary backdrop-blur-xs transition-all duration-300 hover:border-primary hover:bg-white hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Visual Metaphor (Ant carrying heavy operational stack) */}
          <div className="svc-visual relative flex items-center justify-center lg:col-span-5 xl:col-span-6 h-full">
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl p-1">
                <Image
                  src="/images/service-hero-1.png"
                  alt="Ant carrying operational load — representing Haggai lifting the weight of finance and operations"
                  fill
                  sizes="(max-width: 1200px) 100vw, 520px"
                  priority
                  className="object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

