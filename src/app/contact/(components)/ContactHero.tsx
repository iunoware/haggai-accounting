"use client";

import { useRef } from "react";
// import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".contact-hero-eyebrow",
            ".contact-hero-title-line",
            ".contact-hero-description",
            ".contact-hero-link",
          ],
          {
            opacity: 1,
            y: 0,
          },
        );

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          ".contact-hero-eyebrow",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
        )
        .fromTo(
          ".contact-hero-title-line",
          {
            opacity: 0,
            yPercent: 110,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".contact-hero-description",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.4",
        )
        .fromTo(
          ".contact-hero-link",
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.3",
        );

      gsap.to(".contact-hero-arrow", {
        y: 6,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[72vh] items-center overflow-hidden bg-[#D7F3FF] pb-20 pt-32 sm:min-h-[78vh] sm:pb-24 sm:pt-36"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-white/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#508BC0]/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.035)_1px,transparent_1px)] bg-size-[88px_88px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="contact-hero-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E29E21]" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#00598A]">
              Contact Haggai
            </span>

            <span className="h-px w-9 bg-[#E29E21]" />
          </div>

          {/* Heading */}
          <h1 className="font-cormorant text-[3.6rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-7xl lg:text-[6.5rem]">
            <span className="block overflow-hidden pb-2">
              <span className="contact-hero-title-line block">Let&apos;s talk about</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="contact-hero-title-line block italic text-[#00598A]">
                your business.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="contact-hero-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Tell us about your accounting needs, current challenges, or growth plans. Our
            team is here to listen, understand, and help you find the right support.
          </p>

          {/* Small contact indicator */}
          {/* <div className="contact-hero-link mt-9">
            <Link
              href="#contact-form"
              className="group inline-flex items-center gap-3 font-manrope text-sm font-semibold text-[#00598A] transition-colors duration-300 hover:text-[#E29E21]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#00598A] shadow-[0_12px_35px_-18px_rgba(0,89,138,0.45)] transition-all duration-300 group-hover:bg-[#00598A] group-hover:text-white">
                <ChatBubbleLeftRightIcon aria-hidden="true" className="h-5 w-5" />
              </span>
              Start a conversation
            </Link>
          </div> */}
        </div>

        {/* Scroll indicator */}
        <a
          href="#contact-form"
          className="contact-hero-link mx-auto mt-12 flex w-fit flex-col items-center gap-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00598A]/60 transition-colors duration-300 hover:text-[#00598A]"
        >
          Contact Details
          <span className="contact-hero-arrow flex h-9 w-9 items-center justify-center rounded-full border border-[#00598A]/15 bg-white/60 text-[#00598A]">
            <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
          </span>
        </a>
      </div>

      {/* Bottom transition */}
      <div
        aria-hidden="true"
        className="absolute -bottom-px left-0 h-10 w-full bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-14"
      />
    </section>
  );
}
