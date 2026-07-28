"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    title: "Email Us",
    value: "info@haggaiaccounting.com",
    description: "Send us your questions or service requirements.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@haggaiaccounting.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Call Us",
    value: "+91 987 654 3210",
    description: "Speak directly with our accounting support team.",
    href: "tel:+919876543210",
    icon: PhoneIcon,
  },
  {
    title: "Office Location",
    value: "Madurai, Tamil Nadu",
    description: "City, State, ZIP Code",
    href: "#",
    icon: MapPinIcon,
  },
  {
    title: "Working Hours",
    value: "Monday – Friday",
    description: "9:00 AM – 5:00 PM",
    href: null,
    icon: ClockIcon,
  },
];

export default function ContactInformation() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".contact-info-eyebrow",
            ".contact-info-title-line",
            ".contact-info-description",
            ".contact-info-card",
            ".contact-info-note",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        );

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".contact-info-eyebrow",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
        )
        .fromTo(
          ".contact-info-title-line",
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
          ".contact-info-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .fromTo(
          ".contact-info-card",
          {
            opacity: 0,
            y: 28,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".contact-info-note",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        );

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="contact-information"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute -left-48 top-16 h-120 w-120 rounded-full bg-[#D7F3FF]/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-[#508BC0]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left content */}
          <div className="lg:sticky lg:top-28">
            <div className="contact-info-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E29E21]" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#00598A]">
                Get in Touch
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.94] tracking-tighter text-[#0c2e2d] text-4xl sm:text-6xl lg:text-[3rem]">
              <span className="block overflow-hidden pb-2">
                <span className="contact-info-title-line block">We&apos;re here</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="contact-info-title-line block italic text-[#00598A]">
                  when you&apos;re ready.
                </span>
              </span>
            </h2>

            <p className="contact-info-description mt-7 max-w-lg font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Reach out by email, phone, or through our contact form. Our team will help
              you understand the right accounting support for your business.
            </p>

            <div className="contact-info-note mt-8 rounded-2xl border border-[#00598A]/10 bg-[#D7F3FF]/55 p-5">
              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#508BC0]">
                Response time
              </p>

              <p className="mt-2 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                We aim to respond within one business day.
              </p>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              const content = (
                <>
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D7F3FF] text-[#00598A] transition-all duration-300 group-hover:bg-[#00598A] group-hover:text-white">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>

                    {detail.href && (
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="h-4 w-4 text-[#E29E21] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </div>

                  <p className="mt-7 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#508BC0]">
                    {detail.title}
                  </p>

                  <h3 className="mt-3 wrap-break-word font-cormorant text-lg font-semibold leading-tight text-[#0c2e2d]">
                    {detail.value}
                  </h3>

                  <p className="mt-3 font-manrope text-sm leading-6 text-slate-600">
                    {detail.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E29E21] transition-all duration-500 group-hover:w-full"
                  />
                </>
              );

              if (detail.href) {
                const isExternalMap = detail.title === "Office Location";

                return (
                  <Link
                    key={detail.title}
                    href={detail.href}
                    // target={isExternalMap ? "_blank" : undefined}
                    target="_blank"
                    rel={isExternalMap ? "noreferrer" : undefined}
                    className="contact-info-card group relative overflow-hidden rounded-[1.75rem] border border-[#00598A]/10 bg-white p-6 shadow-[0_20px_55px_-38px_rgba(0,89,138,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#508BC0]/35 hover:shadow-[0_28px_65px_-35px_rgba(0,89,138,0.55)] sm:p-7"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <article
                  key={detail.title}
                  className="contact-info-card group relative overflow-hidden rounded-[1.75rem] border border-[#00598A]/10 bg-white p-6 shadow-[0_20px_55px_-38px_rgba(0,89,138,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#508BC0]/35 hover:shadow-[0_28px_65px_-35px_rgba(0,89,138,0.55)] sm:p-7"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
