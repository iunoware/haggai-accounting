import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full h-full items-end overflow-hidden bg-[#030914] bg-cover bg-center bg-no-repeat pb-20  lg:pb-8">
      {/* Hero Background Image Asset */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-position-[80%_center] md:bg-position-[85%_center] lg:bg-position-[right_center] bg-no-repeat"
        style={{ backgroundImage: "url('/images/haggai-hero.png')" }}
      />

      {/* Subtle Gradient Overlay for Content Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-linear-to-r from-[#030914] via-[#030914]/85 to-transparent lg:via-[#030914]/40"
      />

      <div className="relative md:flex items-center justify-between z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Main Headline */}
          <h1 className="font-heading text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl  animate-in fade-in slide-in-from-bottom-4 duration-700">
            Transforming Business Operations Through Finance, Payroll &amp;
            Supply Chain Solutions
          </h1>

          {/* Supporting Statement */}
          {/* <p className="mt-6 font-heading text-sm leading-relaxed font-semibold text-[#EFF9FF] sm:text-xl md:text-sm tracking-wide animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Accounting that stands up. Payroll you can trust. Supply chains that
            keep businesses moving.
          </p> */}

          {/* Description */}
          <p className="mt-6 max-w-2xl font-body leading-relaxed text-slate-300/90 text-sm md:text-md animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            We help medium and large enterprises streamline finance, payroll,
            and supply chain operations through scalable outsourcing solutions
            that reduce costs, improve efficiency, and support sustainable
            growth.
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
          {/* <Link
            href="/contact"
            className="inline-flex h-auto  items-center justify-center gap-3 rounded-xl bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-[#00598A]/30 transition-all duration-300 hover:bg-[#004870] hover:shadow-xl hover:shadow-[#00598A]/40 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto md:w-60"
          >
            <span>Schedule a Discovery Call</span>
            <ArrowRightIcon className="h-5 w-5 stroke-[2.5]" />
          </Link> */}

          <Link
            href="/services"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white px-5 text-primary font-bold backdrop-blur-xs transition-all duration-300 hover:border-white/60 hover:bg-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
// OLD HERO IMPLEMENTATION (PRESERVED FOR RESTORATION IF NEEDED)
// ====================================================================
//
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
//
// export function OldHeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-24 pb-16 font-body text-slate-900">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_35%,rgba(0,89,138,0.035),rgba(255,255,255,0))]"
//       />
//
//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         <div className="relative z-20 mx-auto max-w-5xl text-center">
//           <div className="mb-5 inline-block">
//             <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-soft/60 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm sm:text-sm">
//               <CheckIcon
//                 className="h-4 w-4 stroke-[2.5] text-primary"
//                 aria-hidden="true"
//               />
//               Outsourced Accounting for Growing Businesses
//             </span>
//           </div>
//
//           <h1 className="font-heading text-4xl leading-[1.02] font-medium tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
//             Your Trusted White-Label{" "}
//             <span className="text-primary block sm:inline">Accounting Partner</span>
//           </h1>
//         </div>
//
//         <div className="relative mx-auto mt-10 min-h-140 max-w-6xl lg:mt-6">
//           <div className="absolute top-20 right-[13%] bottom-10 left-[13%] hidden border border-secondary/20 rounded-3xl lg:block pointer-events-none" />
//
//           <p
//             aria-hidden="true"
//             className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 font-heading text-[12rem] leading-none font-semibold tracking-tight whitespace-nowrap text-primary/[0.03] lg:block xl:text-[14rem]"
//           >
//             HAGGAI
//           </p>
//
//           <div className="relative z-20 mx-auto mb-8 max-w-md text-center lg:absolute lg:top-36 lg:left-0 lg:mb-0 lg:max-w-62.5 lg:text-left">
//             <div className="mb-4 hidden lg:block">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft text-primary">
//                 <ArrowRightIcon className="h-5 w-5 rotate-90 text-primary" />
//               </div>
//             </div>
//
//             <p className="text-base leading-relaxed font-medium text-slate-800">
//               Your dedicated outsourced finance department for bookkeeping, month-end
//               close, and reliable financial operations.
//             </p>
//           </div>
//
//           <div className="relative z-10 mx-auto flex h-96 w-full max-w-130 items-end justify-center sm:h-112 lg:h-130">
//             <div className="absolute bottom-6 h-24 w-[75%] rounded-full bg-primary/10 blur-3xl" />
//
//             <Image
//               src="/images/home-hero.png"
//               alt="Professional accounting and financial reporting"
//               width={620}
//               height={720}
//               priority
//               className="relative z-10 max-h-full w-auto object-contain"
//             />
//           </div>
//
//           <div className="relative z-20 mx-auto mt-8 max-w-md text-center lg:absolute lg:top-32 lg:right-0 lg:mt-0 lg:max-w-65 lg:text-left">
//             <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
//               Clean books, faster month-end closes, and accurate reporting
//               without the cost of building an in-house finance team.
//             </p>
//
//             <Link
//               href="/contact"
//               className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-[#004870]"
//             >
//               <span>Book a Consultation</span>
//               <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 bg-soft text-primary transition-transform duration-300 group-hover:translate-x-1">
//                 <ArrowRightIcon className="h-4 w-4" />
//               </span>
//             </Link>
//           </div>
//
//           <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:absolute lg:bottom-4 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
//             <Link
//               href="/contact"
//               className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#004870] hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
//             >
//               Book a Consultation
//               <ArrowRightIcon className="h-4 w-4" />
//             </Link>
//
//             <Link
//               href="/services"
//               className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-primary text-primary bg-white px-7 text-sm font-semibold transition-all hover:bg-soft/60 sm:w-auto"
//             >
//               Explore Services
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
