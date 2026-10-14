'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { label: 'Work', href: '#creativesPortfolio' },
  { label: 'Services', href: '#creativesService' },
  { label: 'Process', href: '#creativesProcess' },
  { label: 'About', href: '#creativesAbout' },
  { label: 'FAQ', href: '#creativesFaqs' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#030711]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-360 items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-22 lg:px-10 xl:px-16">

        {/* Logo */}
        <Link
          href="/"
          aria-label="AMD Creatives Home"
          onClick={closeMenu}
          className="relative z-50 flex shrink-0 items-center"
        >
          <Image
            src="/logos/amd-creatives-7.webp"
            alt="AMD Creatives"
            width={280}
            height={50}
            priority
            className="h-auto w-38.75 sm:w-50 lg:w-60 xl:w-68.75"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium text-white/90 lg:flex xl:gap-10 xl:text-[15px]">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative whitespace-nowrap py-2 transition-colors duration-300 hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#creativesContact"
          className="group hidden h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#0866FF] px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#287AFF] hover:shadow-[0_0_25px_rgba(8,102,255,0.3)] lg:inline-flex xl:h-13 xl:gap-3 xl:px-7 xl:text-[15px]"
        >
          Let&apos;s Talk
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Mobile Actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {/* Mobile CTA */}
          <Link
            href="#creativesContact"
            onClick={closeMenu}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#0866FF] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#287AFF] sm:h-11 sm:gap-2 sm:px-4 sm:text-sm"
          >
            Let&apos;s Talk
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Hamburger Button */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition-colors hover:bg-white/10 sm:h-11 sm:w-11"
          >
            <span className="sr-only">
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>

            <span className="flex w-5 flex-col items-center gap-1.25">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? 'translate-y-1.75 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? 'scale-x-0 opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? '-translate-y-1.75 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/8 bg-[#030711]/98 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? 'visible max-h-105 opacity-100'
            : 'invisible max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-360 px-5 pb-5 pt-3 sm:px-8 sm:pb-7">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-white/[0.07] py-4 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
                style={{ transitionDelay: menuOpen ? `${index * 40}ms` : '0ms' }}
              >
                {item.label}

                <svg
                  className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17 17 7M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-white/40">
            Creative videos. Powerful storytelling.
          </p>
        </div>
      </div>
    </header>
  );
}
