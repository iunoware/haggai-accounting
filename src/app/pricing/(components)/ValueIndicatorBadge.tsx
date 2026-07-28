"use client";

import {
  CheckCircleIcon,
  MinusCircleIcon,
  SparklesIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { ValueIndicator } from "../(config)/comparisonConfig";

interface ValueIndicatorProps {
  indicator: ValueIndicator;
}

export default function ValueIndicatorBadge({ indicator }: ValueIndicatorProps) {
  switch (indicator.type) {
    case "included":
      return (
        <div className="inline-flex items-center gap-1.5 font-medium text-xs text-slate-800">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-soft text-primary shadow-2xs">
            <CheckCircleIcon className="h-4 w-4 stroke-[2.2]" />
          </span>
          {indicator.label && <span>{indicator.label}</span>}
        </div>
      );

    case "limited":
      return (
        <div className="inline-flex items-center gap-1.5 font-medium text-xs text-amber-800">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60 shadow-2xs">
            <MinusCircleIcon className="h-4 w-4 stroke-[2]" />
          </span>
          <span>{indicator.label || "Limited"}</span>
        </div>
      );

    case "premium":
      return (
        <div className="inline-flex items-center gap-1.5 font-semibold text-xs text-slate-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-accent border border-amber-200/70 shadow-2xs">
            <SparklesIcon className="h-4 w-4 stroke-[2]" />
          </span>
          <span>{indicator.label || "Premium"}</span>
        </div>
      );

    case "custom":
      return (
        <span className="inline-flex items-center rounded-full bg-soft/80 border border-secondary/40 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-2xs">
          {indicator.label || "Custom Scope"}
        </span>
      );

    case "unavailable":
    default:
      return (
        <div className="inline-flex items-center justify-center text-slate-300">
          <MinusIcon className="h-4 w-4 stroke-[2]" />
        </div>
      );
  }
}
