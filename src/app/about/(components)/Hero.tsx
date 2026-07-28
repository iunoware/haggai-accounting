import Link from "next/link";
import { ArrowDownRightIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

const highlights = [
  {
    value: "Reliable",
    label: "Financial processes built around accuracy and consistency.",
  },
  {
    value: "Dedicated",
    label: "A finance team that understands your business.",
  },
  {
    value: "Scalable",
    label: "Accounting support designed to grow with you.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 bg-white font-body text-slate-900">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_35%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-10 lg:pt-20">
        {/* Main content */}
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 backdrop-blur-sm">
            <CheckIcon className="h-4 w-4 stroke-[2.5] text-primary" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About Haggai Accounting
            </span>
          </div>

          <h1 className="max-w-4xl font-heading text-4xl font-medium leading-[0.95] tracking-tight text-slate-950 sm:text-7xl lg:text-[6.2rem]">
            The story behind{" "}
            <span className="block font-normal italic text-primary sm:inline">
              Haggai Accounting
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Haggai was founded to give growing businesses the financial clarity,
            dependable processes, and dedicated accounting support they need to move
            forward with confidence.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row">
            <Link
              href="#our-story"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Discover our story</span>
              <ArrowDownRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-soft/40"
            >
              <span>Work with Haggai</span>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="mt-16 border-t border-slate-200/90 lg:mt-12">
          <div className="grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.value}
                className={`px-4 py-6 text-center sm:px-8 lg:py-8 ${
                  index !== highlights.length - 1
                    ? "border-b border-slate-200/90 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {item.value}
                </p>

                <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
