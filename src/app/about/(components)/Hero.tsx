import Link from "next/link";
import {
  ArrowDownRightIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

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
    <section className="relative overflow-hidden bg-soft/40 pt-10">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.045)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-secondary/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-soft blur-3xl"
      />

      {/* Decorative circle */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[24%] hidden h-24 w-24 rounded-full border border-secondary/20 lg:block"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-360 flex-col px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-10 lg:pt-24">
        {/* Main content */}
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              About Haggai Accounting
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-cormorant text-[3.4rem] font-medium leading-[0.91] tracking-[-0.045em] text-[#0c2e2d] sm:text-7xl lg:text-[6.8rem]">
            The story behind
            <span className="relative block font-normal italic text-primary">
              Haggai Accounting
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-accent sm:w-32"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-2xl font-manrope text-sm leading-7 text-[#426474] sm:text-base sm:leading-8">
            Haggai was founded to give growing businesses the financial clarity,
            dependable processes, and dedicated accounting support they need to move
            forward with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#our-story"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-primary px-6 font-manrope text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004875] hover:shadow-xl hover:shadow-primary/20"
            >
              <span>Discover our story</span>
              <ArrowDownRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-secondary/30 bg-white/50 px-5 font-manrope text-sm font-semibold text-primary transition-all duration-300 hover:border-secondary hover:bg-white"
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
        <div className="mt-16 overflow-hidden rounded-2xl border border-primary/10 bg-white/55 shadow-[0_18px_50px_-35px_rgba(0,89,138,0.35)] backdrop-blur-sm lg:mt-10">
          <div className="grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.value}
                className={`group relative px-5 py-7 text-center transition-colors duration-300 hover:bg-soft/55 sm:px-8 lg:py-8 ${
                  index !== highlights.length - 1
                    ? "border-b border-primary/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <CheckIcon aria-hidden="true" className="h-4 w-4" />
                </div>

                <p className="font-cormorant text-3xl font-semibold tracking-[-0.02em] text-primary sm:text-4xl">
                  {item.value}
                </p>

                <p className="mx-auto mt-2 max-w-xs font-manrope text-xs leading-5 text-[#55717e]">
                  {item.label}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent transition-all duration-500 group-hover:w-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
