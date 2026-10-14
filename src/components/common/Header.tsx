'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#creativesPortfolio' },
  { label: 'Services', href: '#creativesService' },
  { label: 'Process', href: '#creativesProcess' },
  { label: 'About', href: '#creativesAbout' },
  { label: 'FAQ', href: '#creativesFaqs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Work');

  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Scroll-responsive glass effect.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active navigation link based on the visible section.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          const activeSection = visibleSections[0].target.id;

          const matchingLink = navLinks.find(
            (link) => link.href === `#${activeSection}`
          );

          if (matchingLink) {
            setActiveLink(matchingLink.label);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Magnetic CTA effect on desktop.
  const handleCtaMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const button = ctaRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  };

  const resetCtaPosition = () => {
    if (ctaRef.current) {
      ctaRef.current.style.transform = 'translate(0, 0)';
    }
  };

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = (label?: string) => {
    setMenuOpen(false);

    if (label) {
      setActiveLink(label);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/9 bg-[#030713]/85 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl'
            : 'border-b border-white/[0.07] bg-[#030713]/35 backdrop-blur-md'
        }`}
      >
        {/* Subtle animated light sweep */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="navbar-light-sweep absolute -left-1/2 top-0 h-px w-1/3 bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />

          <div
            className={`absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-blue-500/20 to-purple-500/20 transition-opacity duration-500 ${
              scrolled ? 'opacity-100' : 'opacity-50'
            }`}
          />
        </div>

        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex h-19 max-w-400 items-center justify-between px-5 sm:h-21 sm:px-8 lg:h-23 lg:px-12 xl:px-[5.5%]"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="AMD Creatives home"
            className="navbar-enter navbar-enter-1 group relative z-10 shrink-0"
            onClick={() => closeMenu()}
          >
            <Image
              src="/logos/amd-creatives-7.webp"
              alt="AMD Creatives"
              width={330}
              height={50}
              priority
              className="h-auto w-43.75 transition-opacity duration-300 group-hover:opacity-85 sm:w-55 lg:w-65"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-enter navbar-enter-2 absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <div className="flex items-center gap-7 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`group relative flex h-23 items-center whitespace-nowrap px-1 text-[15px] font-medium transition-colors duration-300 xl:text-base ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.75 rounded-full bg-linear-to-r from-[#087BFF] via-[#7654FF] to-[#C43DFF] transition-all duration-300 ${
                        isActive
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />

                    {/* Subtle hover glow */}
                    <span
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-blue-500/8 to-transparent transition-opacity duration-300 ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-enter navbar-enter-3 hidden lg:block">
            <Link
              ref={ctaRef}
              href="#creativesContact"
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={resetCtaPosition}
              className="group relative inline-flex min-h-13.5 items-center justify-center gap-3 overflow-hidden rounded-[15px] bg-[#0866FF] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_0_25px_rgba(8,102,255,0.15)] transition-[background-color,box-shadow,transform] duration-300 hover:bg-[#287AFF] hover:shadow-[0_0_35px_rgba(8,102,255,0.35)] xl:px-8"
            >
              {/* Button shine */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">Let&apos;s Talk</span>

              <ArrowRight
                size={19}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition-colors hover:bg-white/9 lg:hidden"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Menu
                size={23}
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? 'rotate-90 scale-0 opacity-0'
                    : 'rotate-0 scale-100 opacity-100'
                }`}
              />

              <X
                size={23}
                className={`absolute transition-all duration-300 ${
                  menuOpen
                    ? 'rotate-0 scale-100 opacity-100'
                    : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`grid overflow-hidden border-t border-white/6 transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'pointer-events-none grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-[#050916]/95 px-5 pb-6 pt-3 backdrop-blur-2xl sm:px-8">
              <div className="mx-auto flex max-w-2xl flex-col">
                {navLinks.map((link, index) => {
                  const isActive = activeLink === link.label;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      tabIndex={menuOpen ? 0 : -1}
                      onClick={() => closeMenu(link.label)}
                      className={`flex items-center justify-between border-b border-white/6 py-4 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-white/65 hover:text-white'
                      }`}
                      style={{
                        transitionDelay: menuOpen
                          ? `${index * 35}ms`
                          : '0ms',
                      }}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span className="h-5 w-0.75 rounded-full bg-linear-to-b from-blue-500 to-purple-500" />
                        )}

                        {link.label}
                      </span>

                      <ArrowRight
                        size={17}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? 'text-blue-400'
                            : 'text-white/30'
                        }`}
                      />
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  href="#creativesContact"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => closeMenu()}
                  className="group mt-5 flex min-h-13 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#0866FF] to-[#3157FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(8,102,255,0.18)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(8,102,255,0.35)]"
                >
                  Let&apos;s Talk

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar Animations */}
      <style jsx global>{`
        @keyframes navbar-enter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-enter {
          animation: navbar-enter 650ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .navbar-enter-1 {
          animation-delay: 80ms;
        }

        .navbar-enter-2 {
          animation-delay: 180ms;
        }

        .navbar-enter-3 {
          animation-delay: 280ms;
        }

        @keyframes navbar-light-sweep {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(450%);
            opacity: 0;
          }
        }

        .navbar-light-sweep {
          animation: navbar-light-sweep 8s ease-in-out 2s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-enter,
          .navbar-light-sweep {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
