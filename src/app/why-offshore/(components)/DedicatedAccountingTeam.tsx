"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  LinkIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const teamBenefits = [
  {
    number: "01",
    title: "Assigned Professionals",
    description:
      "Work with accounting professionals who become familiar with your business, systems, and reporting expectations.",
    icon: UserGroupIcon,
  },
  {
    number: "02",
    title: "Direct Communication",
    description:
      "Communicate directly with the professionals responsible for your accounting work, without unnecessary layers.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: "03",
    title: "Consistent Support",
    description:
      "Maintain continuity through a stable team that understands your processes and supports your business over time.",
    icon: ClockIcon,
  },
  {
    number: "04",
    title: "Clear Accountability",
    description:
      "Defined responsibilities, documented workflows, and regular communication keep every task visible and accountable.",
    icon: ShieldCheckIcon,
  },
];

const collaborationPoints = [
  "A team that learns your business",
  "Clear ownership of responsibilities",
  "Regular communication and updates",
  "Long-term operational continuity",
];

export default function DedicatedAccountingTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".dedicated-team-eyebrow",
            ".dedicated-team-line",
            ".dedicated-team-description",
            ".dedicated-team-point",
            ".dedicated-team-action",
            ".dedicated-team-visual",
            ".dedicated-team-card",
            ".dedicated-team-member",
          ],
          {
            opacity: 1,
            visibility: "visible",
            x: 0,
            y: 0,
            scale: 1,
            clearProps: "transform",
          },
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
          ".dedicated-team-visual",
          {
            opacity: 0,
            x: -45,
            scale: 0.97,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power4.out",
          },
        )
        .fromTo(
          ".dedicated-team-member",
          {
            opacity: 0,
            y: 25,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
          "-=0.55",
        )
        .fromTo(
          ".dedicated-team-eyebrow",
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
          "-=0.7",
        )
        .fromTo(
          ".dedicated-team-line",
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
          "-=0.35",
        )
        .fromTo(
          ".dedicated-team-description",
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
          ".dedicated-team-point",
          {
            opacity: 0,
            x: 20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".dedicated-team-action",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .fromTo(
          ".dedicated-team-card",
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
            clearProps: "transform",
          },
          "-=0.35",
        );

      gsap.to(".dedicated-team-orbit-one", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".dedicated-team-orbit-two", {
        rotate: -360,
        duration: 46,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".dedicated-team-float", {
        y: -8,
        duration: 2.4,
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
      id="dedicated-accounting-team"
      className="relative overflow-hidden bg-[#F8FCFE] py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-56 bottom-0 h-136 w-136 rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-52 top-12 h-128 w-lg rounded-full bg-soft/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[90px_90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Left visual */}
          <div className="dedicated-team-visual relative">
            <div className="relative overflow-hidden rounded-4xl bg-primary p-5 shadow-[0_35px_85px_-42px_rgba(0,89,138,0.8)] sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[68px_68px]"
              />

              {/* Decorative orbit */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-20 h-72 w-72"
              >
                <div className="dedicated-team-orbit-one absolute inset-0 rounded-full border border-white/15">
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </div>

                <div className="dedicated-team-orbit-two absolute inset-12 rounded-full border border-white/10">
                  <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-soft" />
                </div>
              </div>

              <div className="relative">
                {/* Visual header */}
                <div className="flex flex-col gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      Your Assigned Team
                    </p>

                    <h3 className="mt-2 max-w-md font-cormorant text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      People who understand your business.
                    </h3>
                  </div>

                  <div className="dedicated-team-float flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur-md">
                    <UserGroupIcon aria-hidden="true" className="h-8 w-8" />
                  </div>
                </div>

                {/* Team member cards */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="dedicated-team-member rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                        <UserIcon aria-hidden="true" className="h-6 w-6" />
                      </span>

                      <div>
                        <p className="font-cormorant text-xl font-semibold text-white">
                          Account Lead
                        </p>

                        <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                          Primary Contact
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 font-manrope text-xs leading-6 text-white/65 sm:text-sm">
                      Coordinates communication, priorities, timelines, and ongoing
                      service delivery.
                    </p>
                  </div>

                  <div className="dedicated-team-member rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                        <UserIcon aria-hidden="true" className="h-6 w-6" />
                      </span>

                      <div>
                        <p className="font-cormorant text-xl font-semibold text-white">
                          Bookkeeper
                        </p>

                        <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                          Daily Accounting
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 font-manrope text-xs leading-6 text-white/65 sm:text-sm">
                      Manages regular bookkeeping tasks and maintains accurate, organized
                      financial records.
                    </p>
                  </div>

                  <div className="dedicated-team-member rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                        <UserIcon aria-hidden="true" className="h-6 w-6" />
                      </span>

                      <div>
                        <p className="font-cormorant text-xl font-semibold text-white">
                          Reviewer
                        </p>

                        <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                          Quality Control
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 font-manrope text-xs leading-6 text-white/65 sm:text-sm">
                      Reviews completed work and supports consistency across reports,
                      reconciliations, and closing activities.
                    </p>
                  </div>

                  <div className="dedicated-team-member rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                        <UserIcon aria-hidden="true" className="h-6 w-6" />
                      </span>

                      <div>
                        <p className="font-cormorant text-xl font-semibold text-white">
                          Support Specialist
                        </p>

                        <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                          Workflow Support
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 font-manrope text-xs leading-6 text-white/65 sm:text-sm">
                      Helps keep documents, communication, and workflow requirements
                      moving without unnecessary delays.
                    </p>
                  </div>
                </div>

                {/* Collaboration connector */}
                <div className="mt-5 rounded-2xl border border-white/15 bg-[#0c2e2d]/20 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-[#0c2e2d]">
                        <LinkIcon aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <div>
                        <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                          One Connected Team
                        </p>

                        <p className="mt-1 font-cormorant text-xl font-semibold text-white sm:text-2xl">
                          Aligned around your workflows and priorities.
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.15em] text-soft">
                      Seamless Collaboration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="dedicated-team-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Dedicated Accounting Team
              </span>
            </div>

            <h2 className="font-cormorant text-[2.8rem] font-medium leading-[0.92] tracking-tighter text-[#0c2e2d] sm:text-5xl lg:text-[4rem]">
              <span className="block overflow-hidden pb-2">
                <span className="dedicated-team-line block">Your team.</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="dedicated-team-line block italic text-primary">
                  Built around you.
                </span>
              </span>
            </h2>

            <p className="dedicated-team-description mt-7 max-w-xl font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Haggai provides a dedicated team that becomes familiar with your operations,
              accounting systems, and expectations. You receive consistent support, direct
              communication, and clear accountability from professionals who work as an
              extension of your business.
            </p>

            <div className="mt-8 space-y-4">
              {collaborationPoints.map((point) => (
                <div key={point} className="dedicated-team-point flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                    <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                  </span>

                  <span className="font-manrope text-sm font-medium text-[#0c2e2d]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="dedicated-team-action mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(0,89,138,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
              >
                Meet Your Accounting Team
                <ArrowRightIcon
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom benefit cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {teamBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="dedicated-team-card group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_20px_55px_-38px_rgba(0,89,138,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <span className="font-manrope text-[10px] font-semibold tracking-[0.16em] text-primary/45">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="mt-5 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                  {benefit.title}
                </h3>

                <p className="mt-3 font-manrope text-xs leading-6 text-slate-600 sm:text-sm">
                  {benefit.description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
