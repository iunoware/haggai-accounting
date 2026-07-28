"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How do I choose the right pricing plan?",
    answer:
      "Our plans are structured around your company's stage and complexity. The Starter plan is ideal for early-stage companies needing clean bookkeeping, Growth is designed for expanding teams needing full-charge accounting and dedicated CPA management, while Enterprise provides tailored multi-entity and virtual CFO solutions. Our team can help evaluate your exact needs during a quick consultation.",
  },
  {
    question: "Can I upgrade my plan as my business grows?",
    answer:
      "Absolutely. Haggai's service model is built for flexible scaling. As your transaction volume, employee headcount, or reporting requirements expand, you can seamlessly transition to a higher plan or add custom advisory modules at any time without workflow disruptions.",
  },
  {
    question: "Are there any setup or hidden fees?",
    answer:
      "No. We believe in 100% pricing transparency. Your monthly fee covers all agreed deliverables, software integrations, and support channels detailed in your scope of work. There are zero surprise setup costs, hidden software surcharges, or unannounced billing additions.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "We offer transparent monthly billing with no forced long-term lock-in contracts for our standard plans. We earn your partnership through consistent accuracy, timely closes, and exceptional service month after month.",
  },
  {
    question: "What happens if my accounting needs change?",
    answer:
      "Accounting needs evolve continuously. Whether you experience a seasonal surge, launch a new product line, or undergo an audit, we adjust your service scope dynamically. You can modify your deliverables or support hours with simple written notice.",
  },
  {
    question: "Can I customize a plan for my business?",
    answer:
      "Yes. If your operations require specialized revenue recognition (such as ASC 606 for SaaS), multi-channel e-commerce reconciliations, or white-label firm support, we design a custom service level agreement tailored precisely to your operational requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major payment methods including automated ACH bank transfers, wire transfers, and corporate credit cards. Billing is processed predictably at the beginning of each billing cycle with detailed itemized invoices provided for your records.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is structured as a simple, predictable monthly fee charged at the start of each service period. You receive full visibility into your deliverables, SLA compliance, and account activity with zero complex hourly tracking or unexpected add-on costs.",
  },
  {
    question: "Is support included in every plan?",
    answer:
      "Yes. Every Haggai plan includes dedicated accounting support. Starter plans feature standard email support, while Growth and Enterprise plans include dedicated Senior CPA account management, priority response guarantees, and direct communication channels.",
  },
  {
    question: "Can I speak with someone before choosing a plan?",
    answer:
      "We strongly encourage it. Our financial advisors are available for a brief, no-pressure discovery call to review your current financial stack, clarify scope questions, and recommend the most cost-effective plan for your organization.",
  },
];

export default function PricingFaq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".faq-eyebrow",
            ".faq-title-line",
            ".faq-description",
            ".faq-item",
            ".faq-side-card",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }
        );

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".faq-eyebrow",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".faq-title-line",
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
          "-=0.3"
        )
        .fromTo(
          ".faq-description",
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
          "-=0.4"
        )
        .fromTo(
          ".faq-side-card",
          {
            opacity: 0,
            x: -35,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".faq-item",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55"
        );

      gsap.to(".faq-decoration", {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    }
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="pricing-faq"
      className="relative overflow-hidden bg-[#F8FCFE] py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-16 h-128 w-lg rounded-full bg-soft/85 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[88px_88px]"
      />

      {/* Decoration */}
      <div
        aria-hidden="true"
        className="faq-decoration pointer-events-none absolute -right-36 top-24 h-72 w-72 rounded-full border border-primary/10"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />

        <div className="absolute inset-10 rounded-full border border-secondary/10" />

        <div className="absolute inset-20 rounded-full border border-primary/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="faq-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-accent" />

            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Frequently Asked Questions
            </span>

            <span className="h-px w-9 bg-accent" />
          </div>

          <h2 className="font-cormorant text-[3.3rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-6xl lg:text-[5.5rem]">
            <span className="block overflow-hidden pb-2">
              <span className="faq-title-line block">Questions before</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="faq-title-line block italic text-primary">
                choosing a plan?
              </span>
            </span>
          </h2>

          <p className="faq-description mx-auto mt-7 max-w-2xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Find clear answers about our transparent pricing, billing structure, plan customization, contracts, and dedicated accounting support.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Left support card */}
          <aside className="faq-side-card lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-4xl bg-primary p-7 text-white shadow-[0_30px_80px_-40px_rgba(0,89,138,0.7)] sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-secondary/35 blur-3xl"
              />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-black/15">
                  <QuestionMarkCircleIcon
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </span>

                <p className="mt-7 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-soft/65">
                  Still have a question?
                </p>

                <h3 className="mt-3 font-cormorant text-4xl font-semibold leading-[0.95]">
                  Let&apos;s talk about
                  <span className="block italic text-soft">
                    your requirements.
                  </span>
                </h3>

                <p className="mt-5 font-manrope text-sm leading-7 text-soft/75">
                  Every business has different accounting needs. Speak with our
                  team to understand how Haggai can support your operations.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-manrope text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  Ask Our Team
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <div className="flex items-center gap-3">
                    <ChatBubbleLeftRightIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-accent"
                    />

                    <span className="font-manrope text-xs font-medium text-soft">
                      Clear answers. No unnecessary complexity.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Accordion */}
          <div className="overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-[0_25px_70px_-45px_rgba(0,89,138,0.45)]">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const contentId = `pricing-faq-answer-${index}`;
              const buttonId = `pricing-faq-button-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`faq-item border-b border-primary/10 last:border-b-0 ${
                    isActive ? "bg-soft/35" : "bg-white"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="group flex w-full items-start justify-between gap-6 px-5 py-6 text-left sm:px-7 sm:py-7"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span
                        className={`mt-0.5 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-secondary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`font-cormorant text-xl font-semibold leading-snug transition-colors duration-300 sm:text-2xl ${
                          isActive
                            ? "text-primary"
                            : "text-[#0c2e2d] group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-180 border-primary bg-primary text-white"
                          : "border-primary/15 bg-soft/55 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <ChevronDownIcon aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl px-5 pb-7 pl-15 font-manrope text-sm leading-7 text-slate-600 sm:px-7 sm:pl-19 sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
