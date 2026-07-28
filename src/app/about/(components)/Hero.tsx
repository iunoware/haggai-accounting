import Link from "next/link";
import { ArrowDownRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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
    <section className="relative overflow-hidden pt-10 bg-[#e9eff2]">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,36,45,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,36,45,0.045)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-white/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#cbdadd]/70 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-360 flex-col px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-10 lg:pt-24">
        {/* Main content */}
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1f343d]/15 bg-white/45 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1f343d]" />

            <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-[#42555d]">
              About Haggai Accounting
            </span>
          </div>

          <h1 className="max-w-4xl font-cormorant text-[3.4rem] font-medium leading-[0.91] tracking-[-0.045em] text-[#172a32] sm:text-7xl lg:text-[6.8rem]">
            The story behind
            <span className="block font-normal italic text-sky-700">
              Haggai Accounting
            </span>
          </h1>

          <p className="mt-8 max-w-2xl font-manrope text-sm leading-7 text-[#52636a] sm:text-base sm:leading-8">
            Haggai was founded to give growing businesses the financial clarity,
            dependable processes, and dedicated accounting support they need to move
            forward with confidence.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#our-story"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-sky-700 px-6 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Discover our story
              <ArrowDownRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 px-5 font-manrope text-sm font-semibold text-[#172a32]"
            >
              Work with Haggai
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom highlights */}
        <div className="mt-16 border-t border-[#1f343d]/15 lg:mt-10">
          <div className="grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.value}
                className={`px-2 py-7 text-center sm:px-8 lg:py-8 ${
                  index !== highlights.length - 1
                    ? "border-b border-[#1f343d]/15 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="font-cormorant text-3xl font-semibold tracking-[-0.02em] text-[#172a32] sm:text-4xl">
                  {item.value}
                </p>

                <p className="mx-auto mt-2 max-w-xs font-manrope text-xs leading-5 text-[#65757b]">
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
