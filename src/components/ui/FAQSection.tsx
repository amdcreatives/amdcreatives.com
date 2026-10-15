"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Video,
  Settings,
  Clock3,
  Upload,
  SquarePen,
  Captions,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const faqs = [
  {
    question: "What kind of videos do you edit?",
    answer:
      "We specialize in high-impact short-form content (Reels, TikToks, Shorts), YouTube long-form videos, corporate promos, and performance-based ad creatives.",
    icon: Video,
  },
  {
    question: "How do I get started with your service?",
    answer:
      "Just reach out through our contact form or booking link. We'll arrange a quick discovery call or message to understand your needs, discuss your goals, and get your first video into production.",
    icon: Settings,
  },
  {
    question: "What's your usual turnaround time?",
    answer:
      "Our standard turnaround is 24–48 hours for short-form content and 3–5 business days for more complex long-form projects. Exact timing depends on the project's scope and requirements.",
    icon: Clock3,
  },
  {
    question: "How do I send you my raw footage?",
    answer:
      "We use convenient cloud storage platforms such as Google Drive, Dropbox, or Frame.io. Simply upload your footage and share the folder with us.",
    icon: Upload,
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely. We work with you to refine the edit and make sure it aligns with your vision and brand. Revision allowances depend on the agreed project scope.",
    icon: SquarePen,
  },
  {
    question: "Do you add subtitles and captions?",
    answer:
      "Yes! We create dynamic captions styled to match your brand, including highlighted keywords, readable typography, and platform-friendly positioning.",
    icon: Captions,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="creativesFaqs"
      className="relative isolate overflow-hidden bg-[#050811] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-100 w-100 rounded-full bg-blue-700/15 blur-[130px]" />

        <div className="absolute -right-40 -top-48 h-107.5 w-107.5 rounded-full bg-purple-700/15 blur-[130px]" />

        <div className="absolute -bottom-48 left-[30%] h-100 w-125 rounded-full bg-blue-600/[0.07] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center justify-center gap-3">
            <span className="h-0.75 w-7 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              FAQ
            </span>

            <span className="h-0.75 w-7 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently{" "}
            <span className="bg-linear-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Quick answers to the most common questions about our video
            editing services.
            <br className="hidden sm:block" />
            Still have a question? Feel free to reach out - we&apos;re
            happy to help.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.65fr_1.7fr] lg:gap-12">
          {/* Left column */}
          <div className="mx-auto w-full max-w-md min-w-0 lg:mx-0 lg:max-w-none">
            {/* Question mark illustration */}
            <div className="relative mx-auto mb-8 w-full max-w-[320px]">
              {/*
                Fixed-height illustration with horizontal padding.
                All decorative elements are positioned inside this
                container to prevent clipping on narrow screens.
              */}
              <div className="relative flex h-67.5 w-full items-center justify-center sm:h-75">
                {/* Central glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[65px]" />

                {/* Question mark */}
                <span
                  aria-hidden="true"
                  className="relative z-10 select-none bg-linear-to-br from-blue-300 via-blue-600 to-purple-600 bg-clip-text text-[210px] font-bold leading-[0.9] tracking-[-0.01em] text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.2)] sm:text-[250px]"
                >
                  ?
                </span>

                {/* Video icon — kept inside the container */}
                <div className="absolute left-[3%] top-[47%] z-20 flex h-12 w-14 rotate-[-10deg] items-center justify-center rounded-xl border border-purple-400/50 bg-linear-to-br from-purple-500/20 to-blue-500/10 shadow-[0_0_25px_rgba(124,58,237,0.2)] backdrop-blur-md sm:left-[1%] sm:h-12 sm:w-16">
                  <Video
                    size={22}
                    className="text-purple-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Message icon — kept inside the container */}
                <div className="absolute right-[3%] top-[68%] z-20 flex h-12 w-14 rotate-[8deg] items-center justify-center rounded-xl border border-blue-400/40 bg-linear-to-br from-blue-500/20 to-purple-500/10 shadow-[0_0_25px_rgba(59,130,246,0.18)] backdrop-blur-md sm:right-[1%] sm:h-12 sm:w-16">
                  <MessageCircle
                    size={22}
                    className="text-blue-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom accent circle */}
                <div className="absolute bottom-[1%] left-1/2 z-20 h-10 w-10 -translate-x-1/2 rounded-full border border-blue-400/30 bg-linear-to-br from-blue-500/30 to-purple-600/20 shadow-[0_0_25px_rgba(59,130,246,0.2)]" />
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mx-auto max-w-sm text-center lg:mx-0 lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 sm:text-xs">
                Still have a question?
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                We&apos;re here
                <br />
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  to help.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Can&apos;t find the answer you&apos;re looking for?
                <br className="hidden sm:block" />
                Just drop us a message.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-purple-300"
              >
                Contact our team

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right column: FAQ accordion */}
          <div className="min-w-0 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;

              return (
                <div
                  key={faq.question}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-purple-500/70 bg-linear-to-r from-[#121024] via-[#0c1425] to-[#081322] shadow-[0_0_25px_rgba(59,130,246,0.08)]"
                      : "border-white/9 bg-[#0a0e17]/80 hover:border-blue-400/30 hover:bg-[#0d1220]",
                  )}
                >
                  {/* Active border accent */}
                  {isOpen && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-400/20" />
                  )}

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="relative flex w-full items-center gap-3 p-4 text-left sm:gap-5 sm:p-5 lg:p-6"
                  >
                    {/* Question icon */}
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 sm:h-[54px] sm:w-[54px]",
                        isOpen
                          ? "border-purple-400/30 bg-linear-to-br from-blue-600/70 to-purple-600/70 text-white shadow-[0_0_20px_rgba(124,58,237,0.18)]"
                          : "border-blue-400/10 bg-linear-to-br from-blue-500/13 to-purple-500/6 text-slate-200 group-hover:border-blue-400/25",
                      )}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>

                    {/* Question text */}
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block text-sm font-semibold leading-6 transition-colors sm:text-base lg:text-lg",
                          isOpen
                            ? "text-white"
                            : "text-slate-100 group-hover:text-white",
                        )}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* Expand/collapse button */}
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10",
                        isOpen
                          ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_18px_rgba(59,130,246,0.2)]"
                          : "border-slate-500 bg-transparent text-slate-200 group-hover:border-blue-400 group-hover:text-blue-300",
                      )}
                    >
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {/* Answer animation */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pl-17 pr-4 sm:pb-6 sm:pl-23.5 sm:pr-7 lg:pl-25.75">
                        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom helper */}
            <div className="flex items-center gap-3 px-1 pt-3 text-xs leading-5 text-slate-500 sm:text-sm">
              <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />

              <span className="shrink-0">
                Have another question?{" "}
                <a
                  href="#contact"
                  className="font-medium text-blue-400 transition hover:text-purple-300"
                >
                  Let&apos;s talk
                </a>
              </span>

              <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
