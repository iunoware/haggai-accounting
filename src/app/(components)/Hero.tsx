import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] pt-2 font-body">
      <div className="mx-auto min-h-[calc(100vh-80px)] max-w-360 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        {/* Heading */}
        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-blue-700 uppercase sm:text-sm">
            Outsourced Accounting for Growing Businesses
          </p>

          <h1 className="font-heading text-[3.1rem] leading-[0.95] font-medium tracking-[-0.035em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Your Trusted White-Label
            <span className="block">Accounting Partner</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative mx-auto mt-10 min-h-140 max-w-6xl lg:mt-4">
          {/* Decorative Frame */}
          <div className="absolute top-20 right-[13%] bottom-10 left-[13%] hidden border border-blue-100 lg:block" />

          {/* Large Background Text */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 font-heading text-[12rem] leading-none font-semibold tracking-[-0.08em] whitespace-nowrap text-blue-950/[0.035] lg:block xl:text-[15rem]"
          >
            HAGGAI
          </p>

          {/* Left Content */}
          <div className="relative z-20 mx-auto mb-8 max-w-md text-center lg:absolute lg:top-40 lg:left-0 lg:mb-0 lg:max-w-62.5 lg:text-left">
            <div className="mb-5 hidden lg:block">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-6 text-blue-800"
                aria-hidden="true"
              >
                <path
                  d="M12 4v15m0 0-5-5m5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-base leading-7 font-medium text-slate-800">
              Your outsourced finance department for bookkeeping, month-end close and
              reliable financial operations.
            </p>
          </div>

          {/* Centre Image */}
          <div className="relative z-10 mx-auto flex h-97.5 w-full max-w-130 items-end justify-center sm:h-112.5 lg:h-135">
            <div className="absolute bottom-8 h-24 w-[70%] rounded-full bg-blue-950/10 blur-3xl" />

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
            <p className="text-sm leading-6 text-slate-600 sm:text-base">
              Clean books, faster month-end closes and accurate reporting without the cost
              of building an in-house finance team.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
            >
              Book a consultation
              <span className="flex size-10 items-center justify-center rounded-full border border-blue-200 bg-white transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-20 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:absolute lg:bottom-2 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-blue-800 px-7 text-sm font-semibold text-white transition-colors hover:bg-blue-900 sm:w-auto"
            >
              Book a Consultation
            </Link>

            <Link
              href="/services"
              className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-800 sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
