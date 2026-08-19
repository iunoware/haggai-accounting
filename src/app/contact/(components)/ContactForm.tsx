// "use client";

// import { ChangeEvent, FormEvent, useRef, useState } from "react";
// import {
//   ArrowRightIcon,
//   BuildingOffice2Icon,
//   CheckCircleIcon,
//   EnvelopeIcon,
//   UserIcon,
// } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   service: string;
//   message: string;
// };

// type FormErrors = Partial<Record<keyof FormData, string>>;

// const initialFormData: FormData = {
//   name: "",
//   email: "",
//   phone: "",
//   company: "",
//   service: "",
//   message: "",
// };

// const services = [
//   "Bookkeeping",
//   "Month-End Close",
//   "Accounts Payable",
//   "Accounts Receivable",
//   "Financial Reporting",
//   "White-Label Accounting",
//   "Outsourced Finance Department",
//   "Not Sure Yet",
// ];

// export default function ContactForm() {
//   const sectionRef = useRef<HTMLElement>(null);

//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [submissionError, setSubmissionError] = useState("");

//   useGSAP(
//     () => {
//       const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//       if (reduceMotion) {
//         gsap.set(
//           [
//             ".contact-form-eyebrow",
//             ".contact-form-title-line",
//             ".contact-form-description",
//             ".contact-form-panel",
//             ".contact-form-note",
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

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           toggleActions: "play none none none",
//           once: true,
//         },
//       });

//       timeline
//         .fromTo(
//           ".contact-form-eyebrow",
//           {
//             opacity: 0,
//             y: 16,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             ease: "power3.out",
//           },
//         )
//         .fromTo(
//           ".contact-form-title-line",
//           {
//             opacity: 0,
//             yPercent: 110,
//           },
//           {
//             opacity: 1,
//             yPercent: 0,
//             duration: 0.9,
//             stagger: 0.12,
//             ease: "power4.out",
//           },
//           "-=0.3",
//         )
//         .fromTo(
//           ".contact-form-description",
//           {
//             opacity: 0,
//             y: 20,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.65,
//             ease: "power3.out",
//           },
//           "-=0.4",
//         )
//         .fromTo(
//           ".contact-form-note",
//           {
//             opacity: 0,
//             x: -25,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.65,
//             stagger: 0.1,
//             ease: "power3.out",
//           },
//           "-=0.35",
//         )
//         .fromTo(
//           ".contact-form-panel",
//           {
//             opacity: 0,
//             x: 40,
//             scale: 0.98,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             duration: 0.85,
//             ease: "power4.out",
//           },
//           "-=0.65",
//         );

//       ScrollTrigger.refresh();
//     },
//     {
//       scope: sectionRef,
//     },
//   );

//   const handleChange = (
//     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = event.target;

//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));

//     setErrors((currentErrors) => ({
//       ...currentErrors,
//       [name]: undefined,
//     }));

//     setSubmissionError("");
//   };

//   const validateForm = () => {
//     const newErrors: FormErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (!formData.company.trim()) {
//       newErrors.company = "Please enter your company name.";
//     }

//     if (!formData.service) {
//       newErrors.service = "Please select a service.";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please tell us how we can help.";
//     } else if (formData.message.trim().length < 20) {
//       newErrors.message = "Please provide at least 20 characters.";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmissionError("");

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || "Unable to submit your message.");
//       }

//       setIsSubmitted(true);
//       setFormData(initialFormData);
//       setErrors({});
//     } catch (error) {
//       setSubmissionError(
//         error instanceof Error
//           ? error.message
//           : "Something went wrong. Please try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="contact-form"
//       className="relative overflow-hidden bg-[#F8FCFE] py-20 sm:py-24 lg:py-32"
//     >
//       <div
//         aria-hidden="true"
//         className="absolute -left-52 bottom-0 h-128 w-lg rounded-full bg-soft/80 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute -right-48 top-16 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[88px_88px]"
//       />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
//           {/* Left content */}
//           <div className="lg:sticky lg:top-28">
//             <div className="contact-form-eyebrow mb-6 flex items-center gap-3">
//               <span className="h-px w-10 bg-accent" />

//               <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//                 Send Us a Message
//               </span>
//             </div>

//             <h2 className="font-cormorant font-medium leading-[0.94] tracking-tighter text-[#0c2e2d] text-4xl sm:text-6xl lg:text-[3rem]">
//               <span className="block overflow-hidden pb-2">
//                 <span className="contact-form-title-line block">Tell us how</span>
//               </span>

//               <span className="block overflow-hidden pb-3">
//                 <span className="contact-form-title-line block italic text-primary">
//                   we can help.
//                 </span>
//               </span>
//             </h2>

//             <p className="contact-form-description mt-7 max-w-lg font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
//               Share a few details about your business and accounting requirements. Our
//               team will review your inquiry and get back to you with the next steps.
//             </p>

//             <div className="mt-9 space-y-4">
//               <div className="contact-form-note flex items-start gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
//                   <UserIcon aria-hidden="true" className="h-5 w-5" />
//                 </span>

//                 <div>
//                   <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
//                     Personal conversation
//                   </h3>

//                   <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
//                     Speak with a team that takes time to understand your requirements.
//                   </p>
//                 </div>
//               </div>

//               <div className="contact-form-note flex items-start gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
//                   <BuildingOffice2Icon aria-hidden="true" className="h-5 w-5" />
//                 </span>

//                 <div>
//                   <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
//                     Business-focused support
//                   </h3>

//                   <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
//                     We recommend services based on your operations, workflows, and growth
//                     plans.
//                   </p>
//                 </div>
//               </div>

//               <div className="contact-form-note flex items-start gap-4">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
//                   <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
//                 </span>

//                 <div>
//                   <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
//                     Clear next steps
//                   </h3>

//                   <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
//                     After reviewing your inquiry, we’ll explain how the onboarding process
//                     works.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="contact-form-panel overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,89,138,0.5)]">
//             {isSubmitted ? (
//               <div className="flex min-h-168 flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
//                 <span className="flex h-20 w-20 items-center justify-center rounded-full bg-soft text-primary">
//                   <CheckCircleIcon aria-hidden="true" className="h-10 w-10" />
//                 </span>

//                 <p className="mt-7 font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
//                   Message received
//                 </p>

//                 <h3 className="mt-3 font-cormorant text-4xl font-semibold text-[#0c2e2d] sm:text-5xl">
//                   Thank you for reaching out.
//                 </h3>

//                 <p className="mt-5 max-w-lg font-manrope text-sm leading-7 text-slate-600 sm:text-base">
//                   Our team has received your inquiry and will get back to you as soon as
//                   possible.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setIsSubmitted(false)}
//                   className="mt-8 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74]"
//                 >
//                   Send Another Message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-10">
//                 <div className="mb-8 border-b border-primary/10 pb-7">
//                   <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
//                     Consultation inquiry
//                   </p>

//                   <h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#0c2e2d] sm:text-3xl">
//                     Start the conversation
//                   </h3>

//                   <p className="mt-3 font-manrope text-sm leading-6 text-slate-600">
//                     Fields marked with an asterisk are required.
//                   </p>
//                 </div>

//                 <div className="grid gap-6 sm:grid-cols-2">
//                   <FormField
//                     label="Full Name"
//                     name="name"
//                     type="text"
//                     placeholder="Your full name"
//                     value={formData.name}
//                     error={errors.name}
//                     onChange={handleChange}
//                     required
//                     autoComplete="name"
//                   />

//                   <FormField
//                     label="Business Email"
//                     name="email"
//                     type="email"
//                     placeholder="you@company.com"
//                     value={formData.email}
//                     error={errors.email}
//                     onChange={handleChange}
//                     required
//                     autoComplete="email"
//                   />

//                   <FormField
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     placeholder="+91 000 000 0000"
//                     value={formData.phone}
//                     error={errors.phone}
//                     onChange={handleChange}
//                     autoComplete="tel"
//                   />

//                   <FormField
//                     label="Company Name"
//                     name="company"
//                     type="text"
//                     placeholder="Your company"
//                     value={formData.company}
//                     error={errors.company}
//                     onChange={handleChange}
//                     required
//                     autoComplete="organization"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label
//                     htmlFor="service"
//                     className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
//                   >
//                     Service You&apos;re Interested In
//                     <span className="ml-1 text-accent">*</span>
//                   </label>

//                   <select
//                     id="service"
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.service)}
//                     aria-describedby={errors.service ? "service-error" : undefined}
//                     className={`min-h-12 w-full rounded-xl border bg-[#F8FCFE] px-4 py-3 font-manrope text-sm text-[#0c2e2d] outline-none transition-all duration-300 ${
//                       errors.service
//                         ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
//                         : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
//                     }`}
//                   >
//                     <option value="">Select a service</option>

//                     {services.map((service) => (
//                       <option key={service} value={service}>
//                         {service}
//                       </option>
//                     ))}
//                   </select>

//                   {errors.service && (
//                     <p
//                       id="service-error"
//                       className="mt-2 font-manrope text-xs text-red-600"
//                     >
//                       {errors.service}
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-6">
//                   <label
//                     htmlFor="message"
//                     className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
//                   >
//                     How Can We Help?
//                     <span className="ml-1 text-accent">*</span>
//                   </label>

//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={6}
//                     maxLength={1500}
//                     placeholder="Tell us about your accounting needs, current challenges, or the support you are looking for."
//                     value={formData.message}
//                     onChange={handleChange}
//                     aria-invalid={Boolean(errors.message)}
//                     aria-describedby={errors.message ? "message-error" : undefined}
//                     className={`w-full resize-none rounded-xl border bg-[#F8FCFE] px-4 py-3.5 font-manrope text-sm leading-7 text-[#0c2e2d] outline-none transition-all duration-300 placeholder:text-slate-400 ${
//                       errors.message
//                         ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
//                         : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
//                     }`}
//                   />

//                   <div className="mt-2 flex items-start justify-between gap-4">
//                     {errors.message ? (
//                       <p id="message-error" className="font-manrope text-xs text-red-600">
//                         {errors.message}
//                       </p>
//                     ) : (
//                       <span />
//                     )}

//                     <span className="font-manrope text-[10px] text-slate-400">
//                       {formData.message.length}/1500
//                     </span>
//                   </div>
//                 </div>

//                 {submissionError && (
//                   <div
//                     role="alert"
//                     className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-manrope text-sm leading-6 text-red-700"
//                   >
//                     {submissionError}
//                   </div>
//                 )}

//                 <div className="mt-7 flex flex-col gap-5 border-t border-primary/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
//                   <p className="max-w-sm font-manrope text-[11px] leading-5 text-slate-500">
//                     By submitting this form, you agree to be contacted regarding your
//                     inquiry.
//                   </p>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="group inline-flex min-w-50 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_15px_35px_-18px_rgba(0,89,138,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}

//                     {!isSubmitting && (
//                       <ArrowRightIcon
//                         aria-hidden="true"
//                         className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//                       />
//                     )}
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// type FormFieldProps = {
//   label: string;
//   name: keyof FormData;
//   type: string;
//   placeholder: string;
//   value: string;
//   error?: string;
//   required?: boolean;
//   autoComplete?: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// };

// function FormField({
//   label,
//   name,
//   type,
//   placeholder,
//   value,
//   error,
//   required = false,
//   autoComplete,
//   onChange,
// }: FormFieldProps) {
//   const errorId = `${name}-error`;

//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
//       >
//         {label}

//         {required && <span className="ml-1 text-accent">*</span>}
//       </label>

//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         autoComplete={autoComplete}
//         onChange={onChange}
//         aria-invalid={Boolean(error)}
//         aria-describedby={error ? errorId : undefined}
//         className={`min-h-12 w-full rounded-xl border bg-[#F8FCFE] px-4 py-3 font-manrope text-sm text-[#0c2e2d] outline-none transition-all duration-300 placeholder:text-slate-400 ${
//           error
//             ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
//             : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
//         }`}
//       />

//       {error && (
//         <p id={errorId} className="mt-2 font-manrope text-xs text-red-600">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "Bookkeeping",
  "Month-End Close",
  "Accounts Payable",
  "Accounts Receivable",
  "Financial Reporting",
  "White-Label Accounting",
  "Outsourced Finance Department",
  "Not Sure Yet",
];

const WHATSAPP_NUMBER = "919789997028";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [isRedirecting, setIsRedirecting] = useState(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".contact-form-eyebrow",
            ".contact-form-title-line",
            ".contact-form-description",
            ".contact-form-panel",
            ".contact-form-note",
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

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".contact-form-eyebrow",
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
        )
        .fromTo(
          ".contact-form-title-line",
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
          "-=0.3",
        )
        .fromTo(
          ".contact-form-description",
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
          ".contact-form-note",
          {
            opacity: 0,
            x: -25,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .fromTo(
          ".contact-form-panel",
          {
            opacity: 0,
            x: 40,
            scale: 0.98,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.65",
        );

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    },
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+()\d\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how we can help.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsRedirecting(true);

    const whatsappMessage = [
      "Hello Haggai Business Solutions,",
      "",
      "I would like to discuss accounting support for my business.",
      "",
      `Name: ${formData.name.trim()}`,
      `Business Email: ${formData.email.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
      `Company Name: ${formData.company.trim()}`,
      `Service Interested In: ${formData.service}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` + `?text=${encodeURIComponent(whatsappMessage)}`;

    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    /*
      If the browser blocks the new tab,
      redirect in the same tab.
    */
    if (!whatsappWindow) {
      window.location.href = whatsappUrl;
      return;
    }

    setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
      setIsRedirecting(false);
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="relative overflow-hidden bg-bg py-20 sm:py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-52 bottom-0 h-128 w-lg rounded-full bg-soft/80 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 top-16 h-112 w-md rounded-full bg-secondary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,89,138,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,89,138,0.025)_1px,transparent_1px)] bg-size-[88px_88px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left content */}
          <div className="lg:sticky lg:top-28">
            <div className="contact-form-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Send Us a Message
              </span>
            </div>

            <h2 className="font-cormorant font-medium leading-[0.94] tracking-tighter text-[#0c2e2d] text-4xl sm:text-6xl lg:text-[3rem]">
              <span className="block overflow-hidden pb-2">
                <span className="contact-form-title-line block">Tell us how</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="contact-form-title-line block italic text-primary">
                  we can help.
                </span>
              </span>
            </h2>

            <p className="contact-form-description mt-7 max-w-lg font-manrope text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Share a few details about your business and accounting requirements. Your
              inquiry will be prepared as a WhatsApp message so you can contact our team
              directly.
            </p>

            <div className="mt-9 space-y-4">
              <div className="contact-form-note flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                  <UserIcon aria-hidden="true" className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
                    Personal conversation
                  </h3>

                  <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
                    Speak with a team that takes time to understand your requirements.
                  </p>
                </div>
              </div>

              <div className="contact-form-note flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                  <BuildingOffice2Icon aria-hidden="true" className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
                    Business-focused support
                  </h3>

                  <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
                    We recommend services based on your operations, workflows, and growth
                    plans.
                  </p>
                </div>
              </div>

              <div className="contact-form-note flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-[#0c2e2d]">
                    Direct communication
                  </h3>

                  <p className="mt-1 font-manrope text-sm leading-6 text-slate-600">
                    Your information will be prepared as a structured WhatsApp inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-form-panel overflow-hidden rounded-4xl border border-primary/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,89,138,0.5)]">
            <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-10">
              {/* Form heading */}
              <div className="mb-8 border-b border-primary/10 pb-7">
                <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  Consultation inquiry
                </p>

                <h3 className="mt-2 font-cormorant text-2xl font-semibold text-[#0c2e2d]">
                  Start the conversation
                </h3>

                <p className="mt-3 font-manrope text-sm leading-6 text-slate-600">
                  Fields marked with an asterisk are required.
                </p>
              </div>

              {/* Main fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  error={errors.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />

                <FormField
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 000 000 0000"
                  value={formData.phone}
                  error={errors.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />

                <FormField
                  label="Company Name"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  error={errors.company}
                  onChange={handleChange}
                  required
                  autoComplete="organization"
                />
              </div>

              {/* Service */}
              <div className="mt-6">
                <label
                  htmlFor="service"
                  className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
                >
                  Service You&apos;re Interested In
                  <span className="ml-1 text-accent">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  className={`min-h-12 w-full rounded-xl border bg-[#F8FCFE] px-4 py-3 font-manrope text-sm text-[#0c2e2d] outline-none transition-all duration-300 ${
                    errors.service
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
                  }`}
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {errors.service && (
                  <p
                    id="service-error"
                    className="mt-2 font-manrope text-xs text-red-600"
                  >
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
                >
                  How Can We Help?
                  <span className="ml-1 text-accent">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1500}
                  placeholder="Tell us about your accounting needs, current challenges, or the support you are looking for."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full resize-none rounded-xl border bg-[#F8FCFE] px-4 py-3.5 font-manrope text-sm leading-7 text-[#0c2e2d] outline-none transition-all duration-300 placeholder:text-slate-400 ${
                    errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                      : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
                  }`}
                />

                <div className="mt-2 flex items-start justify-between gap-4">
                  {errors.message ? (
                    <p id="message-error" className="font-manrope text-xs text-red-600">
                      {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}

                  <span className="font-manrope text-[10px] text-slate-400">
                    {formData.message.length}/1500
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-7 flex flex-col gap-5 border-t border-primary/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm font-manrope text-[11px] leading-5 text-slate-500">
                  Submitting this form will open WhatsApp with your inquiry details ready
                  to send.
                </p>

                <button
                  type="submit"
                  disabled={isRedirecting}
                  className="group inline-flex min-w-50 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 font-manrope text-sm font-semibold text-white shadow-[0_15px_35px_-18px_rgba(0,89,138,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004b74] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isRedirecting ? "Opening WhatsApp..." : "Send Message"}

                  {!isRedirecting && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof FormData;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  required = false,
  autoComplete,
  onChange,
}: FormFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block font-manrope text-xs font-semibold text-[#0c2e2d]"
      >
        {label}

        {required && <span className="ml-1 text-accent">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-12 w-full rounded-xl border bg-[#F8FCFE] px-4 py-3 font-manrope text-sm text-[#0c2e2d] outline-none transition-all duration-300 placeholder:text-slate-400 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
            : "border-primary/15 focus:border-primary focus:ring-4 focus:ring-soft"
        }`}
      />

      {error && (
        <p id={errorId} className="mt-2 font-manrope text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
