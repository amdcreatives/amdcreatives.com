'use client';

import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Strategy & Direction',
    description:
      'We align on your audience, message, and creative angle.',
  },
  {
    number: '02',
    title: 'Script & Storyboard',
    description:
      'We shape the hook, script, and visual plan.',
  },
  {
    number: '03',
    title: 'Editing & Motion',
    description:
      'We bring footage, sound, captions, and motion together.',
  },
  {
    number: '04',
    title: 'Review & Refinement',
    description:
      'We polish the details using your feedback.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description:
      'Platform-ready exports, organized and ready to publish.',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="creativesProcess"
      className="relative isolate overflow-hidden bg-[#02050C] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Base background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#040916] via-[#02050A] to-[#05030E]" />

        {/* Blue glow — bottom left */}
        <div className="absolute bottom-[-12%] left-[-12%] h-87.5 w-87.5 rounded-full bg-blue-700/20 blur-[120px] sm:h-125 sm:w-125" />

        {/* Purple glow — top right */}
        <div className="absolute right-[-10%] top-[-20%] h-87.5 w-87.5 rounded-full bg-purple-800/20 blur-[130px] sm:h-137.5 sm:w-137.5" />

        {/* Subtle blue ambient light */}
        <div className="absolute right-[15%] top-[35%] h-62.5 w-62.5 rounded-full bg-blue-600/[0.07] blur-[100px]" />

        {/* Bottom purple glow */}
        <div className="absolute bottom-[-20%] right-[15%] h-75 w-125 rounded-full bg-purple-700/15 blur-[120px]" />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(2,5,12,0.35)_75%,#02050C_120%)]" />
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-335 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
        {/* LEFT COLUMN */}
        <div className="relative">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-0.5 w-10 rounded-full bg-linear-to-r from-[#087BFF] to-[#8B5CF6]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9B8D0] sm:text-sm">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-150 text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            From first idea
            <br />
            to{' '}
            <span className="bg-linear-to-r from-[#087BFF] via-[#655BFF] to-[#C044FF] bg-clip-text text-transparent">
              final cut.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-122.5 text-base leading-7 text-[#9EACC3] sm:mt-7 sm:text-lg sm:leading-8">
            A clear, collaborative process that turns your brief into video
            built for your audience and goals.
          </p>

          {/* CTA */}
          <Link
            href="#creativesContact"
            className="group mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-[14px] bg-[#0866FF] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(8,102,255,0.16)] transition-colors duration-200 hover:bg-[#287AFF] sm:mt-9 sm:min-h-15 sm:px-9 sm:text-base"
          >
            Start a Project

            <ArrowUpRight
              size={20}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Supporting Detail */}
          <div className="mt-7 flex items-center gap-3 text-xs text-[#8492A9] sm:text-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
              <Check size={12} className="text-blue-400" />
            </span>

            <span>A collaborative process from start to finish</span>
          </div>
        </div>

        {/* RIGHT COLUMN — MINIMAL INTERACTIVE TIMELINE */}
        <div className="relative">
          {/* Static Timeline Track */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-5.5 top-8 w-px bg-white/8 sm:left-6.75"
          />

          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 ${
                  index !== steps.length - 1
                    ? 'pb-7 sm:pb-8'
                    : ''
                }`}
              >
                {/* Animated Timeline Segment */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-5.5 top-0 w-px origin-top scale-y-0 bg-linear-to-b from-[#087BFF] to-[#8B5CF6] transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-within:scale-y-100 sm:left-6.75"
                />

                {/* Number Circle */}
                <div className="relative z-10 flex justify-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#26314A] bg-[#070C18] text-sm font-medium text-[#D5DDED] transition-colors duration-200 group-hover:border-blue-500/60 group-hover:text-white sm:h-13.5 sm:w-13.5 sm:text-base">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div
                  className={`min-w-0 border-b pb-5 pt-1 transition-colors duration-200 sm:pb-6 ${
                    index === steps.length - 1
                      ? 'border-transparent'
                      : 'border-white/8 group-hover:border-blue-500/20'
                  }`}
                >
                  <h3 className="text-base font-semibold text-white transition-colors duration-200 group-hover:text-blue-300 sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#8F9DB4] sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Respect reduced-motion preferences */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          #creativesProcess .group,
          #creativesProcess .group * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
