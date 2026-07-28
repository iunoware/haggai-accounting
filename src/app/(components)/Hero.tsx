import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 font-body text-slate-900">
      {/* Subtle Ambient Background Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_35%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
              <CheckIcon
                className="h-4 w-4 stroke-[2.5] text-primary"
                aria-hidden="true"
              />
              Outsourced Accounting for Growing Businesses
            </span>
          </div>

          <h1 className="font-heading text-4xl leading-[1.02] font-medium tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Your Trusted White-Label{" "}
            <span className="text-primary block sm:inline">Accounting Partner</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative mx-auto mt-10 min-h-140 max-w-6xl lg:mt-6">
          {/* Decorative Frame */}
          <div className="absolute top-20 right-[13%] bottom-10 left-[13%] hidden border border-secondary/20 rounded-3xl lg:block pointer-events-none" />

          {/* Large Background Text */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 font-heading text-[12rem] leading-none font-semibold tracking-tight whitespace-nowrap text-primary/[0.03] lg:block xl:text-[14rem]"
          >
            HAGGAI
          </p>

          {/* Left Content */}
          <div className="relative z-20 mx-auto mb-8 max-w-md text-center lg:absolute lg:top-36 lg:left-0 lg:mb-0 lg:max-w-62.5 lg:text-left">
            <div className="mb-4 hidden lg:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-primary">
                <ArrowRightIcon className="h-5 w-5 rotate-90 text-primary" />
              </div>
            </div>

            <p className="text-base leading-relaxed font-medium text-slate-800">
              Your dedicated outsourced finance department for bookkeeping, month-end
              close, and reliable financial operations.
            </p>
          </div>

          {/* Centre Image */}
          <div className="relative z-10 mx-auto flex h-96 w-full max-w-130 items-end justify-center sm:h-112 lg:h-130">
            <div className="absolute bottom-6 h-24 w-[75%] rounded-full bg-primary/10 blur-3xl" />

            <Image
              src="/images/home-hero.png"
              alt="Professional accounting and financial reporting"
              width={620}
              height={720}
              priority
              className="relative z-10 max-h-full w-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="relative z-20 mx-auto mt-8 max-w-md text-center lg:absolute lg:top-32 lg:right-0 lg:mt-0 lg:max-w-65 lg:text-left">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Clean books, faster month-end closes, and accurate reporting
              without the cost of building an in-house finance team.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-[#004870]"
            >
              <span>Book a Consultation</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 bg-soft text-primary transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:absolute lg:bottom-4 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              Book a Consultation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-primary text-primary bg-white px-7 text-sm font-semibold transition-all hover:bg-soft/60 sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
