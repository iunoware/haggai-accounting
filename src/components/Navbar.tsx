"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  const hamburgerColor = "bg-slate-900";

  return (
    <>
      <nav
        ref={navRef}
        className={`${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80"
            : "bg-transparent shadow-none"
        } ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20 pointer-events-auto transition-all duration-500 font-manrope`}
      >
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 group flex items-center gap-2">
          <Image
            src={"/images/logo.png"}
            width={130}
            height={40}
            className="object-contain h-9 w-auto"
            alt="Haggai Accounting Logo"
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Manrope Medium Weight) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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
                  } absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Button (Manrope SemiBold) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold font-manrope text-white shadow-xs transition-all duration-300 hover:bg-[#004870] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Book a Consultation
          </Link>
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
        className={`fixed inset-0 h-screen bg-white/95 backdrop-blur-xl z-40 transform transition-all duration-500 md:hidden flex flex-col justify-center items-center font-manrope ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-7">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
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
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold font-manrope text-white shadow-md transition-all duration-300 hover:bg-[#004870]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
