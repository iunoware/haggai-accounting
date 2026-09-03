// "use client";

// import { useRef } from "react";
// import {
//   ArrowRightIcon,
//   ArrowUpRightIcon,
//   BriefcaseIcon,
//   // CheckCircleIcon,
//   // ChevronRightIcon,
//   ClockIcon,
//   GlobeAltIcon,
//   HeartIcon,
//   LightBulbIcon,
//   MapPinIcon,
//   SparklesIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const benefits = [
//   {
//     title: "Meaningful Work",
//     description:
//       "Work on real business operations and contribute to solutions that help growing companies perform better.",
//     icon: BriefcaseIcon,
//   },
//   {
//     title: "Learn & Grow",
//     description:
//       "Build your expertise through hands-on experience across finance, accounting, operations, technology, and business.",
//     icon: LightBulbIcon,
//   },
//   {
//     title: "Collaborative Culture",
//     description:
//       "Work alongside people who value communication, accountability, and helping each other succeed.",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Work With Purpose",
//     description:
//       "Be part of a team focused on creating dependable solutions and long-term value for every client.",
//     icon: HeartIcon,
//   },
//   {
//     title: "Modern Approach",
//     description:
//       "Use technology, structured processes, and better ways of working to continuously improve how we deliver.",
//     icon: SparklesIcon,
//   },
//   {
//     title: "Growing Opportunities",
//     description:
//       "As Haggai grows, new opportunities emerge to take ownership, develop your skills, and make an impact.",
//     icon: GlobeAltIcon,
//   },
// ];

// const positions = [
//   {
//     title: "Senior Accountant",
//     type: "Full-time",
//     location: "Madurai, Tamil Nadu",
//     description:
//       "Join our finance team and help deliver accurate accounting, reporting, reconciliations, and financial support for growing businesses.",
//   },
//   {
//     title: "Accounts Executive",
//     type: "Full-time",
//     location: "Madurai, Tamil Nadu",
//     description:
//       "Support day-to-day accounting operations while building strong practical experience across financial processes and client accounts.",
//   },
//   {
//     title: "Operations Executive",
//     type: "Full-time",
//     location: "Madurai, Tamil Nadu",
//     description:
//       "Help coordinate business operations, maintain processes, and ensure client requirements are handled efficiently and consistently.",
//   },
// ];

// const hiringSteps = [
//   {
//     number: "01",
//     title: "Apply",
//     description:
//       "Send us your resume and tell us a little about your experience and what you're looking for.",
//   },
//   {
//     number: "02",
//     title: "Connect",
//     description:
//       "We'll have a conversation to understand your background, strengths, and career goals.",
//   },
//   {
//     number: "03",
//     title: "Meet the Team",
//     description:
//       "Get to know the people you'll work with and learn more about the role and our approach.",
//   },
//   {
//     number: "04",
//     title: "Join Haggai",
//     description:
//       "If we're a good match, we'll welcome you to the team and help you get started.",
//   },
// ];

// export default function CareersPage() {
//   const pageRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//       if (reduceMotion) {
//         gsap.set(
//           [
//             ".career-hero-label",
//             ".career-hero-title",
//             ".career-hero-description",
//             ".career-hero-actions",
//             ".career-hero-stat",
//             ".career-section-label",
//             ".career-heading",
//             ".career-description",
//             ".career-card",
//             ".career-position",
//             ".career-step",
//             ".career-cta",
//           ],
//           {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//           },
//         );

//         return;
//       }

//       const heroTimeline = gsap.timeline();

//       heroTimeline
//         .from(".career-hero-label", {
//           opacity: 0,
//           y: 20,
//           duration: 0.7,
//           ease: "power3.out",
//         })
//         .from(
//           ".career-hero-title",
//           {
//             opacity: 0,
//             yPercent: 100,
//             duration: 1,
//             ease: "power4.out",
//           },
//           "-=0.35",
//         )
//         .from(
//           ".career-hero-description",
//           {
//             opacity: 0,
//             y: 25,
//             duration: 0.75,
//             ease: "power3.out",
//           },
//           "-=0.45",
//         )
//         .from(
//           ".career-hero-actions",
//           {
//             opacity: 0,
//             y: 20,
//             duration: 0.65,
//             ease: "power3.out",
//           },
//           "-=0.4",
//         )
//         .from(
//           ".career-hero-stat",
//           {
//             opacity: 0,
//             x: 30,
//             duration: 0.7,
//             stagger: 0.12,
//             ease: "power3.out",
//           },
//           "-=0.5",
//         );

//       gsap.to(".career-orbit", {
//         rotate: 360,
//         duration: 40,
//         repeat: -1,
//         ease: "none",
//       });

//       gsap.to(".career-floating-icon", {
//         y: -12,
//         rotate: 4,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.to(".career-glow", {
//         scale: 1.15,
//         opacity: 0.7,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.utils.toArray<HTMLElement>(".career-section-reveal").forEach((element) => {
//         gsap.from(element, {
//           opacity: 0,
//           y: 45,
//           duration: 0.85,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 82%",
//             toggleActions: "play none none none",
//             once: true,
//           },
//         });
//       });

//       gsap.utils.toArray<HTMLElement>(".career-card").forEach((element) => {
//         gsap.from(element, {
//           opacity: 0,
//           y: 35,
//           duration: 0.7,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 88%",
//             toggleActions: "play none none none",
//             once: true,
//           },
//         });
//       });

//       gsap.utils.toArray<HTMLElement>(".career-position").forEach((element, index) => {
//         gsap.from(element, {
//           opacity: 0,
//           x: index % 2 === 0 ? -30 : 30,
//           duration: 0.75,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 88%",
//             toggleActions: "play none none none",
//             once: true,
//           },
//         });
//       });

//       gsap.utils.toArray<HTMLElement>(".career-step").forEach((element) => {
//         gsap.from(element, {
//           opacity: 0,
//           y: 30,
//           duration: 0.7,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 88%",
//             toggleActions: "play none none none",
//             once: true,
//           },
//         });
//       });

//       ScrollTrigger.refresh();
//     },
//     {
//       scope: pageRef,
//     },
//   );

//   return (
//     <main ref={pageRef} className="overflow-hidden bg-[#f7f7f7] text-[#0c2e2d]">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-28 lg:py-36">
//         {/* Background */}
//         <div
//           aria-hidden="true"
//           className="career-glow absolute -left-48 top-0 h-128 w-lg rounded-full bg-secondary/30 blur-3xl"
//         />

//         <div
//           aria-hidden="true"
//           className="absolute -right-48 bottom-0 h-128 w-lg rounded-full bg-black/20 blur-3xl"
//         />

//         <div aria-hidden="true" className="absolute inset-0 opacity-20">
//           <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px]" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
//             <div>
//               <div className="career-hero-label mb-7 flex items-center gap-3">
//                 <span className="h-px w-10 bg-accent" />

//                 <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft">
//                   Careers at Haggai
//                 </span>
//               </div>

//               <div className="overflow-hidden">
//                 <h1 className="career-hero-title max-w-4xl font-cormorant font-medium leading-[0.92] tracking-[-0.045em] text-4xl sm:text-5xl lg:text-6xl">
//                   Build your career.
//                   <span className="block italic text-soft">Make an impact.</span>
//                 </h1>
//               </div>

//               <p className="career-hero-description mt-8 max-w-2xl font-manrope text-base leading-8 text-slate-100/90 sm:text-md">
//                 Join Haggai Business Solutions and be part of a growing team helping
//                 businesses operate with greater clarity, efficiency, and confidence.
//               </p>

//               <div className="career-hero-actions mt-9 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href="#open-positions"
//                   className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 font-manrope text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d18e16] hover:shadow-xl"
//                 >
//                   View Open Positions
//                   <ArrowRightIcon
//                     aria-hidden="true"
//                     className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </a>

//                 {/* <a
//                   href="#culture"
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-manrope text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary"
//                 >
//                   Life at Haggai
//                 </a> */}
//               </div>
//             </div>

//             {/* Hero visual */}
//             <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//               <div className="relative aspect-square">
//                 <div
//                   aria-hidden="true"
//                   className="absolute inset-8 rounded-full border border-white/15"
//                 />

//                 <div
//                   aria-hidden="true"
//                   className="career-orbit absolute inset-0 rounded-full border border-white/10"
//                 >
//                   {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(226,158,33,0.16)]" /> */}
//                 </div>

//                 <div className="absolute inset-16 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm">
//                   <div className="career-floating-icon flex h-24 w-24 items-center justify-center rounded-3xl bg-accent shadow-2xl shadow-black/20">
//                     <UserGroupIcon aria-hidden="true" className="h-11 w-11 text-white" />
//                   </div>
//                 </div>

//                 <div className="career-hero-stat absolute left-0 top-16 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                   <p className="font-cormorant text-3xl font-semibold">17+</p>

//                   <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-soft">
//                     Years of Experience
//                   </p>
//                 </div>

//                 <div className="career-hero-stat absolute bottom-12 right-0 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
//                   <p className="font-cormorant text-3xl font-semibold">Growing</p>

//                   <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-soft">
//                     With Opportunity
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       {/* <section id="culture" className="relative py-20 sm:py-24 lg:py-32">
//         <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="career-section-reveal grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-10 bg-accent" />

//                 <span className="career-section-label font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//                   Our Culture
//                 </span>
//               </div>

//               <h2 className="career-heading mt-6 max-w-xl font-cormorant text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
//                 People who care about
//                 <span className="block italic text-primary">doing things well.</span>
//               </h2>
//             </div>

//             <div>
//               <p className="career-description max-w-2xl font-manrope text-base leading-8 text-slate-600 sm:text-lg">
//                 At Haggai, we believe great work comes from people who take ownership,
//                 communicate openly, and care about the outcome. We are building a
//                 workplace where people can contribute, learn, and grow alongside the
//                 business.
//               </p>

//               <p className="career-description mt-6 max-w-2xl font-manrope text-base leading-8 text-slate-600 sm:text-lg">
//                 Our work spans finance, accounting, payroll, supply chain, technology, and
//                 business operations. That means there are opportunities to work on
//                 meaningful challenges while developing skills that matter.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* BENEFITS */}
//       <section className="relative border-y border-primary/10 bg-white py-20 sm:py-24 lg:py-32">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="career-section-reveal max-w-3xl">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-accent" />

//               <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//                 Why Join Haggai
//               </span>
//             </div>

//             <h2 className="mt-6 font-cormorant font-medium leading-[0.98] tracking-[-0.04em] text-3xl sm:text-4xl lg:text-5xl">
//               A place to
//               <span className="italic text-primary"> grow with purpose.</span>
//             </h2>

//             <p className="mt-6 max-w-2xl font-manrope text-base leading-8 text-slate-600">
//               We want our people to build careers, not just complete tasks. Here are some
//               of the things that make working at Haggai meaningful.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
//             {benefits.map((benefit) => {
//               const Icon = benefit.icon;

//               return (
//                 <article
//                   key={benefit.title}
//                   className="career-card group relative overflow-hidden rounded-3xl border border-primary/10 bg-[#f7f7f7] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
//                 >
//                   <span
//                     aria-hidden="true"
//                     className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
//                   />

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
//                     <Icon aria-hidden="true" className="h-6 w-6" />
//                   </div>

//                   <h3 className="mt-6 font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-[1.7rem]">
//                     {benefit.title}
//                   </h3>

//                   <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
//                     {benefit.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* OPEN POSITIONS */}
// <section
//   id="open-positions"
//   className="relative overflow-hidden bg-[#f7f7f7] py-20 sm:py-24 lg:py-32"
// >
//   <div
//     aria-hidden="true"
//     className="absolute -left-48 top-24 h-120 w-120 rounded-full bg-soft/70 blur-3xl"
//   />

//   <div
//     aria-hidden="true"
//     className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
//   />

//   <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//     <div className="career-section-reveal grid items-end gap-8 lg:grid-cols-[1fr_auto]">
//       <div>
//         <div className="flex items-center gap-3">
//           <span className="h-px w-10 bg-accent" />

//           <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//             Open Positions
//           </span>
//         </div>

//         <h2 className="mt-6 font-cormorant font-medium leading-[0.98] tracking-[-0.04em] text-3xl sm:text-4xl lg:text-5xl">
//           Find your next
//           <span className="italic text-primary"> opportunity.</span>
//         </h2>
//       </div>

//       <p className="max-w-md font-manrope text-sm leading-7 text-slate-600 lg:text-right">
//         Explore our current opportunities and find a role where your skills can make
//         a meaningful difference.
//       </p>
//     </div>

//     <div className="mt-12 space-y-4 lg:mt-16">
//       {positions.map((position) => (
//         <article
//           key={position.title}
//           className="career-position group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
//         >
//           <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
//             <div>
//               <div className="flex flex-wrap items-center gap-3">
//                 <h3 className="font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-3xl">
//                   {position.title}
//                 </h3>

//                 <span className="rounded-full bg-soft px-3 py-1.5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
//                   {position.type}
//                 </span>
//               </div>

//               <div className="mt-3 flex flex-wrap gap-4">
//                 <span className="inline-flex items-center gap-2 font-manrope text-xs text-slate-500">
//                   <MapPinIcon aria-hidden="true" className="h-4 w-4 text-primary" />
//                   {position.location}
//                 </span>

//                 <span className="inline-flex items-center gap-2 font-manrope text-xs text-slate-500">
//                   <ClockIcon aria-hidden="true" className="h-4 w-4 text-primary" />
//                   Full-time
//                 </span>
//               </div>

//               <p className="mt-5 max-w-3xl font-manrope text-sm leading-7 text-slate-600">
//                 {position.description}
//               </p>
//             </div>

//             <a
//               href="/contact"
//               className="group/btn inline-flex w-fit items-center gap-3 rounded-full border border-primary/15 bg-white px-5 py-3 font-manrope text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
//             >
//               Apply Now
//               <ArrowUpRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
//               />
//             </a>
//           </div>
//         </article>
//       ))}
//     </div>

//     <div className="career-section-reveal mt-8 rounded-2xl border border-dashed border-primary/20 bg-white/60 p-6 text-center">
//       <p className="font-manrope text-sm leading-7 text-slate-600">
//         Don&apos;t see the right role? We&apos;d still love to hear from you.
//       </p>

//       <a
//         href="/contact"
//         className="mt-2 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-primary transition-colors hover:text-accent"
//       >
//         Send us your resume
//         <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
//       </a>
//     </div>
//   </div>
// </section>

//       {/* HIRING PROCESS */}
//       <section className="relative bg-white py-20 sm:py-24 lg:py-32">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="career-section-reveal max-w-3xl">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-accent" />

//               <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//                 Our Hiring Process
//               </span>
//             </div>

//             <h2 className="mt-6 font-cormorant text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
//               Simple, transparent,
//               <span className="italic text-primary"> human.</span>
//             </h2>

//             <p className="mt-6 max-w-2xl font-manrope text-base leading-8 text-slate-600">
//               We want the hiring process to feel like a conversation, not a test.
//               Here&apos;s what you can expect when you apply to Haggai.
//             </p>
//           </div>

//           <div className="relative mt-14 lg:mt-20">
//             <div
//               aria-hidden="true"
//               className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-primary/10 lg:block"
//             />

//             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
//               {hiringSteps.map((step) => (
//                 <article key={step.number} className="career-step relative">
//                   <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-cormorant text-2xl font-semibold text-white shadow-lg shadow-primary/15">
//                     {step.number}
//                   </div>

//                   <h3 className="mt-7 font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-3xl">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 font-manrope text-sm leading-7 text-slate-600">
//                     {step.description}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       {/* <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24 lg:py-28">
//         <div
//           aria-hidden="true"
//           className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
//         />

//         <div
//           aria-hidden="true"
//           className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
//         />

//         <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
//           <div className="career-cta">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-xl shadow-black/10">
//               <SparklesIcon aria-hidden="true" className="h-7 w-7" />
//             </div>

//             <p className="mt-7 font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft">
//               Your Next Chapter
//             </p>

//             <h2 className="mt-5 font-cormorant text-4xl font-medium leading-none tracking-[-0.04em] sm:text-5xl lg:text-7xl">
//               Ready to build something
//               <span className="block italic text-soft">meaningful?</span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl font-manrope text-sm leading-7 text-slate-100/85 sm:text-base sm:leading-8">
//               Explore opportunities at Haggai Business Solutions and take the next step in
//               your career with a team that&apos;s building for the future.
//             </p>

//             <a
//               href="/contact"
//               className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-manrope text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d18e16] hover:shadow-xl"
//             >
//               Explore Opportunities
//               <ArrowRightIcon
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//           </div>
//         </div>
//       </section> */}
//     </main>
//   );
// }

"use client";

import { useRef } from "react";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  // CheckCircleIcon,
  ArrowUpRightIcon,
  LightBulbIcon,
  MapPinIcon,
  ClockIcon,
  // SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Diverse Client Engagements",
    description:
      "Work across diverse client engagements, not just one company's books. Gain exposure to different businesses, challenges, and ways of working.",
    icon: BriefcaseIcon,
  },
  {
    title: "Grow Your Expertise",
    description:
      "Build your expertise across multiple platforms and industries while developing practical skills that grow with your career.",
    icon: LightBulbIcon,
  },
  {
    title: "A Culture of Accountability",
    description:
      "Be part of a company built on accountability, collaboration, and continuous improvement - where people take ownership and care about doing things right.",
    icon: UserGroupIcon,
  },
];

const positions = [
  {
    title: "Senior Accountant",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description:
      "Join our finance team and help deliver accurate accounting, reporting, reconciliations, and financial support for growing businesses.",
  },
  {
    title: "Accounts Executive",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description:
      "Support day-to-day accounting operations while building strong practical experience across financial processes and client accounts.",
  },
  {
    title: "Operations Executive",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description:
      "Help coordinate business operations, maintain processes, and ensure client requirements are handled efficiently and consistently.",
  },
];

export default function CareersPage() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".career-hero-label",
            ".career-hero-title",
            ".career-hero-description",
            ".career-hero-cta",
            ".career-section-label",
            ".career-heading",
            ".career-description",
            ".career-card",
            ".career-openings",
            ".career-cta",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        );

        return;
      }

      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".career-hero-label", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".career-hero-title",
          {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .from(
          ".career-hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".career-hero-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4",
        );

      gsap.to(".career-orbit", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".career-floating-icon", {
        y: -12,
        rotate: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".career-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>(".career-section-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 45,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".career-card").forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 35,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      gsap.from(".career-openings", {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".career-openings",
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.from(".career-cta", {
        opacity: 0,
        y: 35,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".career-cta",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    },
    {
      scope: pageRef,
    },
  );

  return (
    <main ref={pageRef} className="overflow-hidden bg-bg text-[#0c2e2d]">
      {/* HERO*/}
      <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-28 lg:py-36">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="career-glow absolute -left-48 top-0 h-128 w-lg rounded-full bg-secondary/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-48 bottom-0 h-128 w-lg rounded-full bg-black/20 blur-3xl"
        />

        {/* Grid */}
        <div aria-hidden="true" className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Hero content */}
            <div>
              <div className="career-hero-label mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-soft">
                  Careers at Haggai
                </span>
              </div>

              <div className="overflow-hidden">
                <h1 className="career-hero-title max-w-4xl font-cormorant text-5xl font-medium leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  Build Your Career
                  <span className="block italic text-soft">
                    With Haggai Business Solutions
                  </span>
                </h1>
              </div>

              <p className="career-hero-description mt-8 max-w-2xl font-manrope text-base leading-8 text-slate-100/90 sm:text-lg">
                {/* We&apos;re building a team of experienced, detail-driven professionals
                across finance, payroll, and supply chain - people who take ownership of
                their work and care about doing it right. */}
                We&apos;re building a team of experienced, detail-driven professionals
                across finance & payroll - people who take ownership of their work and
                care about doing it right.
              </p>

              <div className="career-hero-cta mt-9">
                <a
                  href="#why-work-with-us"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 font-manrope text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d18e16] hover:shadow-xl"
                >
                  Why Work With Us
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square">
                {/* Outer orbit */}
                <div
                  aria-hidden="true"
                  className="career-orbit absolute inset-0 rounded-full border border-white/10"
                >
                  {/* <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(226,158,33,0.16)]" /> */}
                </div>

                {/* Inner ring */}
                <div
                  aria-hidden="true"
                  className="absolute inset-10 rounded-full border border-white/15"
                />

                {/* Center */}
                <div className="absolute inset-20 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm sm:inset-24">
                  <div className="career-floating-icon flex h-24 w-24 items-center justify-center rounded-3xl bg-accent shadow-2xl shadow-black/20">
                    <UserGroupIcon aria-hidden="true" className="h-11 w-11 text-white" />
                  </div>
                </div>

                {/* Floating label */}
                <div className="absolute left-0 top-16 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="font-cormorant text-3xl font-semibold">People</p>

                  <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-soft">
                    Who care about the work
                  </p>
                </div>

                <div className="absolute bottom-10 right-0 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="font-cormorant text-3xl font-semibold">Growth</p>

                  <p className="mt-1 font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-soft">
                    Built together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US*/}
      <section id="why-work-with-us" className="relative bg-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="career-section-reveal grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="career-section-label flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Why Work With Us
                </span>
              </div>

              <h2 className="career-heading mt-6 max-w-xl font-cormorant text-4xl font-medium leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Grow your expertise.
                <span className="block italic text-primary">Make an impact.</span>
              </h2>
            </div>

            <div>
              <p className="career-description max-w-2xl font-manrope text-base leading-8 text-slate-600 sm:text-lg">
                At Haggai, we believe people grow when they are trusted with meaningful
                work, exposed to new challenges, and encouraged to continuously improve.
              </p>
            </div>
          </div>

          {/* Reasons */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="career-card group relative overflow-hidden rounded-3xl border border-primary/10 bg-[#f7f7f7] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 lg:p-8"
                >
                  {/* Bottom accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  />

                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-manrope text-xs font-bold tracking-[0.18em] text-primary/40">
                      0{index + 1}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-8 font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-3xl">
                    {reason.title}
                  </h3>

                  <p className="mt-4 font-manrope text-sm leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS*/}
      <section
        id="open-positions"
        className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="absolute -left-48 top-24 h-120 w-120 rounded-full bg-soft/70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-48 bottom-0 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="career-section-reveal grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Open Positions
                </span>
              </div>

              <h2 className="mt-6 font-cormorant font-medium leading-[0.98] tracking-[-0.04em] text-3xl sm:text-4xl lg:text-5xl">
                Find your next
                <span className="italic text-primary"> opportunity.</span>
              </h2>
            </div>

            <p className="max-w-md font-manrope text-sm leading-7 text-slate-600 lg:text-right">
              Explore our current opportunities and find a role where your skills can make
              a meaningful difference.
            </p>
          </div>

          <div className="mt-12 space-y-4 lg:mt-16">
            {positions.map((position) => (
              <article
                key={position.title}
                className="career-position group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
              >
                <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-cormorant text-2xl font-semibold text-[#0c2e2d] sm:text-3xl">
                        {position.title}
                      </h3>

                      <span className="rounded-full bg-soft px-3 py-1.5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        {position.type}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2 font-manrope text-xs text-slate-500">
                        <MapPinIcon aria-hidden="true" className="h-4 w-4 text-primary" />
                        {position.location}
                      </span>

                      <span className="inline-flex items-center gap-2 font-manrope text-xs text-slate-500">
                        <ClockIcon aria-hidden="true" className="h-4 w-4 text-primary" />
                        Full-time
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl font-manrope text-sm leading-7 text-slate-600">
                      {position.description}
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="group/btn inline-flex w-fit items-center gap-3 rounded-full border border-primary/15 bg-white px-5 py-3 font-manrope text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    Apply Now
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="career-section-reveal mt-8 rounded-2xl border border-dashed border-primary/20 bg-white/60 p-6 text-center">
            <p className="font-manrope text-sm leading-7 text-slate-600">
              Don&apos;t see the right role? We&apos;d still love to hear from you.
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              Send us your resume
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
