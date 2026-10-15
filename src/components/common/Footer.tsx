"use client";

import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
  Music2,
} from "lucide-react";

import { YouTube, Instagram, LinkedIn } from "@deemlol/next-icons";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/amd_creatives/",
    icon: Instagram,
    color: "from-purple-500 via-pink-500 to-orange-400",
    hoverColor: "group-hover:text-pink-400",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@amd_creatives",
    icon: Music2,
    color: "from-slate-800 to-slate-950",
    hoverColor: "group-hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/amd-creatives",
    icon: LinkedIn,
    color: "from-blue-600/30 to-blue-900/30",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@amd-creatives",
    icon: YouTube,
    color: "from-red-500/20 to-red-900/20",
    hoverColor: "group-hover:text-red-400",
  },
];

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#creativesAbout" },
  { name: "Portfolio", href: "#creativesPortfolio" },
  { name: "Service", href: "#creativesService" },
  { name: "Process", href: "#creativesProcess" },
  { name: "FAQs", href: "#creativesFaqs" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/6 bg-[#050811] text-white">
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-100 w-100 rounded-full bg-blue-700/12 blur-[130px]" />

        <div className="absolute -right-32 top-20 h-87.5 w-87.5 rounded-full bg-purple-700/12 blur-[130px]" />

        <div className="absolute bottom-0 left-1/3 h-75 w-112.5 rounded-full bg-blue-600/[0.07] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-400 px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* ==================================================
            MAIN FOOTER CONTENT
        ================================================== */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_0.9fr] lg:gap-10 xl:gap-16">
          {/* BRAND AND EMAIL */}
          <div className="min-w-0">
            {/* Brand logo */}
            <Link
              href="/"
              aria-label="AMD Creatives home"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="text-white">Amd </span>
                <span className="bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Creatives
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Creative video editing and content production that helps
              brands grow and get noticed.
            </p>

            {/* Email card */}
            <a
              href="mailto:amdcreatives.info@gmail.com"
              className="group mt-6 flex max-w-md items-center gap-4 rounded-2xl border border-blue-500/20 bg-linear-to-br from-[#0b1223]/95 to-[#0b0d19]/95 p-4 transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.09)] sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-linear-to-br from-blue-500/15 to-purple-500/15 text-blue-400 transition-colors duration-300 group-hover:text-purple-300">
                <Mail size={25} strokeWidth={1.8} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm text-slate-400">
                  Email
                </span>

                <span className="mt-1 block break-all text-sm font-medium text-white sm:text-base">
                  amdcreatives.info@gmail.com
                </span>
              </span>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
              />
            </a>
          </div>

          {/* NAVIGATION */}
          <div className="min-w-0 border-t border-white/6 pt-8 md:border-t-0 md:pt-0 lg:border-l lg:border-white/6 lg:pl-10">
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Navigation
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex min-w-0 items-center gap-3 text-base text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-br from-blue-500 to-purple-600 shadow-[0_0_10px_rgba(99,102,241,0.25)] transition-transform duration-300 group-hover:scale-125" />

                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="min-w-0 border-t border-white/6 pt-8 md:border-t-0 md:pt-0 lg:border-l lg:border-white/6 lg:pl-10">
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Social Media
            </h3>

            <div className="mt-6 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AMD Creatives on ${social.name}`}
                    className={`group flex w-fit min-w-47.5 items-center gap-4 text-base text-slate-300 transition-colors duration-300 hover:text-white ${social.hoverColor}`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-linear-to-br ${social.color} transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.12)]`}
                    >
                      <Icon size={25} strokeWidth={2} />
                    </span>

                    <span>{social.name}</span>

                    <ArrowUpRight
                      size={15}
                      className="ml-auto text-slate-500 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            OVERSIZED BRAND NAME
        ================================================== */}

        <div className="relative mt-16 overflow-hidden pt-4 sm:mt-20 lg:mt-10">
          {/* Brand glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-blue-600/6 blur-[80px]" />

          <div className="relative select-none text-center">
            <span
              aria-hidden="true"
              className="block whitespace-nowrap bg-linear-to-b from-slate-300/16 via-slate-400/[0.07] to-transparent bg-clip-text text-[11.5vw] font-bold leading-[0.95] tracking-[-0.065em] text-transparent sm:text-[10vw] lg:text-[8.5vw] xl:text-[132px]"
            >
              Amd Creatives
            </span>
          </div>
        </div>
      </div>


      {/* ====================================================
          BOTTOM BAR
      ==================================================== */}

      <div className="mx-auto max-w-400 px-5 py-7 sm:px-8 sm:py-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm leading-6 text-slate-400 md:text-left">
            Copyright © Amd Creatives | All rights reserved.{" "}
            {currentYear}
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-slate-400 sm:gap-x-8"
          >
            {legalLinks.map((link, index) => (
              <span
                key={link.name}
                className="flex items-center gap-5 sm:gap-8"
              >
                {index === 0 && (
                  <span className="hidden h-8 w-px bg-white/20 md:block" />
                )}

                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
