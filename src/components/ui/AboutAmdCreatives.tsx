import {
  ChartNoAxesCombined,
  SatelliteDish,
  UserPlus,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    icon: ChartNoAxesCombined,
    percentage: '200%',
    label: 'More Engagement',
    description: 'Every video is crafted with a clear marketing goal.',
  },
  {
    icon: SatelliteDish,
    percentage: '10%',
    label: 'More Reach',
    description: 'Tailored for YouTube, Reels, TikTok, and more.',
  },
  {
    icon: UserPlus,
    percentage: '55%',
    label: 'More Leads',
    description: 'From raw clips to ready-to-post edits.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="creativesAbout"
      className="relative isolate overflow-hidden bg-[#02040B] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#030713] via-[#02040B] to-[#03030C]" />

        {/* Purple glow — upper right */}
        <div className="absolute right-[-12%] top-[-20%] h-112.5 w-112.5 rounded-full bg-[#5100FF]/20 blur-[140px] sm:h-162.5 sm:w-162.5" />

        {/* Blue glow — right center */}
        <div className="absolute right-[-18%] top-[20%] h-100 w-100 rounded-full bg-[#0057FF]/25 blur-[130px] sm:h-150 sm:w-150" />

        {/* Purple glow — left center */}
        <div className="absolute left-[-20%] top-[20%] h-87.5 w-87.5 rounded-full bg-[#8000FF]/25 blur-[120px] sm:h-125 sm:w-125" />

        {/* Blue glow — bottom center */}
        <div className="absolute bottom-[-20%] left-[25%] h-87.5 w-125 rounded-full bg-[#004CFF]/20 blur-[130px] sm:h-112.5 sm:w-175" />

        {/* Purple glow — bottom right */}
        <div className="absolute bottom-[-15%] right-[-10%] h-75 w-100 rounded-full bg-[#8200FF]/25 blur-[120px] sm:h-112.5 sm:w-150" />

        {/* Atmospheric vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(2,4,11,0.35)_75%,#02040B_120%)]" />
      </div>

      <div className="mx-auto max-w-360 px-5 sm:px-12 lg:px-12 xl:px-16 pb-16">
        {/* Section Heading */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <div className="mx-auto mb-7 h-0.5 w-14 rounded-full bg-linear-to-r from-[#087BFF] to-[#9D35FF]" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px]">
            We are{' '}
            <span className="bg-linear-to-r from-[#D946EF] via-[#8B5CF6] to-[#087BFF] bg-clip-text text-transparent">
              Amd
            </span>{' '}
            Creatives
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column — Statistics */}
          <div className="relative">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group relative ${
                    index !== stats.length - 1
                      ? 'mb-8 border-b border-white/12 pb-8 sm:mb-10 sm:pb-10'
                      : 'border-b border-white/12 pb-8 sm:pb-10'
                  }`}
                >
                  {/* Animated bottom line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-14 bg-linear-to-r from-[#087BFF] to-transparent transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-center gap-5 sm:gap-8">
                    {/* Icon Card */}
                    <div className="relative flex h-19 w-19 shrink-0 items-center justify-center rounded-[18px] border border-blue-500/30 bg-linear-to-br from-[#081333] to-[#050919] text-[#087BFF] shadow-[0_0_25px_rgba(0,76,255,0.10),inset_0_0_20px_rgba(0,76,255,0.06)] transition-all duration-300 group-hover:border-blue-400/70 group-hover:shadow-[0_0_35px_rgba(0,76,255,0.25)] sm:h-24 sm:w-24">
                      <div className="absolute inset-0 rounded-[18px] bg-linear-to-br from-blue-500/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <Icon
                        size={40}
                        strokeWidth={2.3}
                        className="relative z-10 h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>

                    {/* Statistic Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 flex-col sm:flex-row">
                        <span className="text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl lg:text-[54px]">
                          {stat.percentage}
                        </span>

                        <span className="text-base font-medium text-white sm:text-lg">
                          {stat.label}
                        </span>
                      </div>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#A6B8D4] sm:text-base">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vertical Divider — Desktop */}
          <div className="relative lg:border-l lg:border-white/10 lg:pl-12 xl:pl-16">
            <div className="pointer-events-none absolute -left-px top-0 hidden h-24 w-0.5 bg-linear-to-b from-[#087BFF] to-transparent lg:block" />

            {/* Right Content */}
            <div className="max-w-155">
              <h3 className="text-3xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[42px]">
                High-Impact Video Content.
                <br className="hidden sm:block" /> Built to{' '}
                <span className="bg-linear-to-r from-[#087BFF] via-[#7860FF] to-[#D946EF] bg-clip-text text-transparent">
                  Grow Your Brand.
                </span>
              </h3>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#A9BAD4] sm:mt-8 sm:text-lg">
                <p>
                  At Amd Creatives, we specialize in strategic editing for
                  YouTube, Reels, and TikTok, transforming raw footage into
                  high-converting assets through expert storytelling and
                  data-driven marketing.
                </p>

                <p>
                  We blend storytelling, strategy, and speed to deliver
                  done-for-you content systems that perform.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="#creativesContact"
                className="group mt-8 inline-flex min-h-15 items-center justify-center gap-4 rounded-2xl bg-linear-to-r from-[#0866FF] to-[#153BFF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(8,102,255,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(8,102,255,0.40)] sm:mt-10 sm:min-h-17 sm:px-10 sm:text-lg"
              >
                Contact us

                <ArrowUpRight
                  size={22}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Neon Horizon */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden">
        <div className="absolute -bottom-12 left-[-5%] h-20 w-[110%] rounded-[50%] border-t border-blue-500/50 shadow-[0_-5px_30px_rgba(0,76,255,0.20)]" />

        <div className="absolute bottom-0 left-[10%] h-px w-[80%] bg-linear-to-r from-transparent via-[#087BFF]/50 to-transparent blur-[1px]" />

        <div className="absolute bottom-0 left-[20%] h-8 w-40 rounded-full bg-blue-600/20 blur-2xl" />

        <div className="absolute bottom-0 right-[15%] h-8 w-40 rounded-full bg-purple-600/20 blur-2xl" />
      </div>
    </section>
  );
}
