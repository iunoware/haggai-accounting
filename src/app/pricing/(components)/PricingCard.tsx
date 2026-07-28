"use client";

import Link from "next/link";
import {
  SparklesIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { PricingPlan } from "../(config)/pricingConfig";

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-500 font-body ${
        plan.isRecommended
          ? "border-2 border-primary bg-gradient-to-b from-soft/30 via-white to-white p-7 sm:p-8 lg:p-9 shadow-xl shadow-primary/10 lg:scale-[1.03] z-10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1.5"
          : "border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      }`}
    >
      {/* Top Accent Line for Recommended Plan */}
      {plan.isRecommended && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"
        />
      )}

      <div>
        {/* Header Badges: Most Popular Accent Gold & Best For Pill */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-soft/70 px-3 py-1 text-xs font-semibold text-primary shadow-2xs">
            {plan.bestFor}
          </span>

          {plan.isRecommended && plan.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow-md shadow-accent/25 animate-pulse">
              <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {plan.badge}
            </span>
          )}
        </div>

        {/* Plan Name */}
        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 group-hover:text-primary transition-colors">
          {plan.name}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-11">
          {plan.description}
        </p>

        {/* PRICING AREA */}
        <div className="mt-6 rounded-2xl bg-slate-50/70 p-4 border border-slate-100 transition-colors group-hover:bg-soft/20 group-hover:border-secondary/20">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
              {plan.price}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {plan.period}
            </span>
          </div>

          <span className="mt-1 text-[11px] font-medium text-slate-500 block">
            {plan.billingType}
          </span>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-slate-100" />

        {/* FEATURE LIST */}
        <div className="space-y-3">
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-3">
            What&apos;s Included:
          </span>

          {plan.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className={`feature-item flex items-center gap-3 text-xs sm:text-sm font-medium ${
                  feature.available ? "text-slate-800" : "text-slate-400 opacity-50"
                }`}
              >
                {feature.available ? (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-soft text-primary shadow-2xs transition-transform group-hover:scale-105">
                    <CheckCircleIcon className="h-4 w-4 stroke-[2.2]" />
                  </div>
                ) : (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                    <XCircleIcon className="h-4 w-4 stroke-[1.8]" />
                  </div>
                )}
                <span className={feature.available ? "" : "line-through"}>
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER AREA: CTA BUTTON & TRUST NOTE */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link
          href={plan.ctaLink}
          aria-label={`${plan.ctaLabel} for ${plan.name} plan`}
          className={`group/btn inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
            plan.isRecommended
              ? "bg-primary text-white shadow-md shadow-primary/20 hover:bg-[#004870] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
              : "border border-primary text-primary bg-white hover:bg-soft/60 hover:-translate-y-0.5 hover:shadow-xs active:scale-[0.98]"
          }`}
        >
          <span>{plan.ctaLabel}</span>
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            aria-hidden="true"
          />
        </Link>

        {/* Small Reassurance / Trust Note */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
          <ShieldCheckIcon className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{plan.trustNote}</span>
        </div>
      </div>
    </article>
  );
}
