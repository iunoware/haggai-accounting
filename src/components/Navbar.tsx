/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Industries", href: "/industries" },
//   { name: "Why Offshore", href: "/why-offshore" },
//   { name: "Pricing", href: "/pricing" },
//   { name: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const navRef = useRef<HTMLElement>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setIsScrolled(currentScrollY > 50);

//       if (currentScrollY > 100) {
//         if (currentScrollY > lastScrollY) {
//           setIsVisible(false);
//         } else {
//           setIsVisible(true);
//         }
//       } else {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMenuOpen]);

//   const hamburgerColor = "bg-slate-900";

//   return (
//     <>
//       <nav
//         ref={navRef}
//         className={`${
//           isScrolled
//             ? "bg-white/70 backdrop-blur-md shadow-xs"
//             : "bg-transparent shadow-none"
//         } ${
//           isVisible ? "translate-y-0" : "-translate-y-full"
//         } fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20 pointer-events-auto transition-all duration-500 font-manrope`}
//       >
//         {/* Brand Logo */}
//         <Link href="/" className="relative z-50 group flex items-center gap-2">
//           <Image
//             src={"/images/haggai-logo.png"}
//             width={130}
//             height={70}
//             className="object-contain h-18 w-auto"
//             alt="Haggai Accounting Logo"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation Links (Manrope Medium Weight) */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`${
//                   isActive
//                     ? "text-primary font-bold"
//                     : "text-slate-700 hover:text-primary font-medium"
//                 } relative group text-xs uppercase tracking-[0.18em] transition-colors duration-300 pb-1 font-manrope`}
//               >
//                 {link.name}
//                 <span
//                   className={`${
//                     isActive ? "w-full" : "w-0"
//                   } absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full`}
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* Desktop Action Button (Manrope SemiBold) */}
//         {/* <div className="hidden md:flex items-center">
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold font-manrope text-white shadow-xs transition-all duration-300 hover:bg-[#004870] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
//           >
//             Book a Consultation
//           </Link>
//         </div> */}

//         {/* Mobile Menu Toggle Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="z-50 flex flex-col justify-center items-center h-10 w-10 relative focus:outline-none"
//             aria-label="Toggle Navigation Menu"
//           >
//             <div className="flex flex-col gap-1.5 transition-transform duration-300">
//               <span
//                 className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
//                   isMenuOpen ? "rotate-45 translate-y-2" : ""
//                 } ${hamburgerColor}`}
//               />
//               <span
//                 className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
//                   isMenuOpen ? "opacity-0 -translate-x-3" : ""
//                 } ${hamburgerColor}`}
//               />
//               <span
//                 className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
//                   isMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                 } ${hamburgerColor}`}
//               />
//             </div>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Overlay Navigation Menu */}
//       <div
//         className={`fixed inset-0 h-screen bg-white/95 backdrop-blur-xl z-40 transform transition-all duration-500 md:hidden flex flex-col justify-center items-center font-manrope ${
//           isMenuOpen
//             ? "translate-y-0 opacity-100 pointer-events-auto"
//             : "-translate-y-full opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-7">
//           {navLinks.map((link, idx) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`${
//                   isActive
//                     ? "text-primary font-bold"
//                     : "text-slate-800 font-semibold hover:text-primary"
//                 } text-2xl uppercase tracking-[0.15em] transition-all duration-300 font-manrope ${
//                   isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${idx * 60}ms` }}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}

//           {/* <div className="mt-4">
//             <Link
//               href="/contact"
//               onClick={() => setIsMenuOpen(false)}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold font-manrope text-white shadow-md transition-all duration-300 hover:bg-[#004870]"
//             >
//               Book a Consultation
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Services Hub", href: "/services/" },
      // { name: "Services Hub", href: "/services/services-hub" },
      { name: "Accounting Services", href: "/services/accounting" },
      { name: "Payroll Services", href: "/services/payroll" },
      { name: "Supply Chain Services", href: "/services/supply-chain" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Why Haggai", href: "/why-offshore" },
  { name: "Careers", href: "/careers" },
  // { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Desktop dropdown state (hover + click)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);

  // Mobile accordion state
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close desktop dropdown + reset mobile accordion whenever the mobile menu closes/route changes
  useEffect(() => {
    setOpenDesktopDropdown(null);
    setOpenMobileAccordion(null);
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDesktopDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 150);
  };

  const handleClickToggle = (name: string) => {
    setOpenDesktopDropdown((prev) => (prev === name ? null : name));
  };

  const hamburgerColor = "bg-slate-900";

  return (
    <>
      <nav
        ref={navRef}
        // className={`${
        //   isScrolled
        //     ? "bg-white/70 backdrop-blur-md shadow-xs"
        //     : "bg-transparent shadow-none"
        // } ${
        //   isVisible ? "translate-y-0" : "-translate-y-full"
        // } fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20 pointer-events-auto transition-all duration-500 font-manrope`}
        className={`${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white/70 backdrop-blur-md shadow-xs fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20 pointer-events-auto transition-all duration-500 font-manrope`}
      >
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 group flex items-center gap-2">
          <Image
            src={"/images/haggai-logo.png"}
            width={130}
            height={70}
            className="object-contain h-18 w-auto"
            alt="Haggai Business Solutions Logo"
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Manrope Medium Weight) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isActive = hasDropdown
              ? pathname === link.href || pathname.startsWith(`${link.href}/`)
              : pathname === link.href;
            const isDropdownOpen = openDesktopDropdown === link.name;

            if (!hasDropdown) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:text-primary font-medium"
                  } relative group text-xs uppercase tracking-[0.18em] transition-colors duration-300 pb-1 font-manrope`}
                >
                  {link.name}
                  <span
                    className={`${
                      isActive ? "w-full" : "w-0"
                    } absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full`}
                  />
                </Link>
              );
            }

            return (
              <div
                key={link.name}
                ref={dropdownWrapperRef}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleClickToggle(link.name)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className={`${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:text-primary font-medium"
                  } relative group flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] transition-colors duration-300 pb-1 font-manrope focus:outline-none`}
                >
                  {link.name}
                  <svg
                    className={`h-3 w-3 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span
                    className={`${
                      isActive ? "w-full" : "w-0"
                    } absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full`}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="min-w-60 rounded-xl bg-white/95 backdrop-blur-md shadow-lg ring-1 ring-slate-900/5 py-2 font-manrope">
                    {link.dropdown!.map((item) => {
                      const isSubActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setOpenDesktopDropdown(null)}
                          className={`${
                            isSubActive
                              ? "text-primary font-bold bg-slate-300"
                              : "text-slate-700 hover:text-primary hover:bg-slate-300 font-medium"
                          } block px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-colors duration-200 font-manrope`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 flex flex-col justify-center items-center h-10 w-10 relative focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <div className="flex flex-col gap-1.5 transition-transform duration-300">
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${hamburgerColor}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 -translate-x-3" : ""
                } ${hamburgerColor}`}
              />
              <span
                className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${hamburgerColor}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Navigation Menu */}
      <div
        className={`fixed inset-0 h-screen bg-white/95 backdrop-blur-xl z-40 transform transition-all duration-500 md:hidden flex flex-col justify-center items-center font-manrope overflow-y-auto py-24 ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 w-full px-8">
          {navLinks.map((link, idx) => {
            const hasDropdown = !!link.dropdown;
            const isActive = hasDropdown
              ? pathname === link.href || pathname.startsWith(`${link.href}/`)
              : pathname === link.href;
            const isAccordionOpen = openMobileAccordion === link.name;

            if (!hasDropdown) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-800 font-semibold hover:text-primary"
                  } text-2xl uppercase tracking-[0.15em] transition-all duration-300 font-manrope ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <div
                key={link.name}
                className={`flex flex-col items-center w-full transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileAccordion((prev) =>
                      prev === link.name ? null : link.name,
                    )
                  }
                  aria-expanded={isAccordionOpen}
                  className={`${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-800 font-semibold hover:text-primary"
                  } flex items-center gap-2 text-2xl uppercase tracking-[0.15em] transition-all duration-300 font-manrope focus:outline-none`}
                >
                  {link.name}
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isAccordionOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid w-full transition-all duration-300 ease-out ${
                    isAccordionOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col items-center gap-4 pb-2">
                      {link.dropdown!.map((item) => {
                        const isSubActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`${
                              isSubActive
                                ? "text-primary font-bold"
                                : "text-slate-600 font-medium hover:text-primary"
                            } text-base uppercase tracking-[0.12em] transition-all duration-300 font-manrope`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="mt-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold font-manrope text-white shadow-md transition-all duration-300 hover:bg-[#004870]"
            >
              Book a Consultation
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
