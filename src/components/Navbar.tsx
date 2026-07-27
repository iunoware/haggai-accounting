"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  // const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background transformation threshold
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic with threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show at top
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

  // const hamburgerColor = isMenuOpen || isScrolled ? "bg-[#0c2e2d]" : "bg-white";
  const hamburgerColor = "bg-[#0c2e2d]";

  return (
    <>
      <nav
        ref={navRef}
        className={`${isScrolled ? "bg-white/30 backdrop-blur-lg shadow-lg" : "bg-transparent shadow-none"} ${isVisible ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-14 lg:px-20 h-20 pointer-events-auto transition-all duration-700`}
      >
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 group">
          <Image
            src={"/images/logo.png"}
            width={100}
            height={0}
            className="object-cover object-center"
            alt="Leon Interiors Madurai"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-sky-700 font-extrabold" : "text-black font-medium"} nav-link-text relative group text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 pb-1`}
              >
                {link.name}
                <span
                  className={`${isActive ? "w-full" : "w-0"} absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gold transition-all duration-500 ease-out w-0 group-hover:w-full`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex w-full justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 flex flex-col justify-center items-center h-20 w-10 relative overflow-hidden group"
            aria-label="Toggle Navigation"
          >
            <div
              className={`flex flex-col gap-1.25 transition-transform duration-500 group-hover:scale-110`}
            >
              <span
                className={`h-px w-6 transition-all duration-500 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""} ${hamburgerColor}`}
              />
              <span
                className={`h-px w-6 transition-all duration-500 ${isMenuOpen ? "opacity-0 -translate-x-4" : ""} ${hamburgerColor}`}
              />
              <span
                className={`h-px w-6 transition-all duration-500 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""} ${hamburgerColor}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <nav>
        <div
          className={`fixed inset-0 h-screen bg-white/60 backdrop-blur-xl z-40 transform transition-all duration-700 md:hidden flex flex-col justify-center items-center ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={` ${isActive ? "text-sky-700 font-black" : "text-black font-semibold"} text-green text-4xl uppercase tracking-[0.25em] transition-all duration-700 ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* <div
            className={`absolute bottom-16 left-0 w-full text-center transition-all duration-1000 delay-500 ${isMenuOpen ? "opacity-70" : "opacity-0"}`}
          ></div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
