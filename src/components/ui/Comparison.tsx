import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  X,
  ArrowUpRight,
  Gift,
  GraduationCap,
} from 'lucide-react';

const advantages = [
  'In-house team of 5+ experts',
  'Results-oriented creative',
  'Experience with 50+ clients',
  'Personalized communication',
  'Proven content workflow',
  'Responsive client support',
];

const disadvantages = [
  'Creative that misses the goal',
  'Weak hooks and thumbnails',
  'No clear distribution strategy',
  'Limited funnel expertise',
  'Guesswork instead of insights',
  'Inconsistent communication',
];

export default function Comparison() {
  return (
    <section
      id="creativesComparison"
      className="relative isolate overflow-hidden bg-[#02050E] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#030714] via-[#02050B] to-[#030411]" />

        <div className="absolute -left-45 top-[8%] h-87.5 w-87.5 rounded-full bg-blue-700/20 blur-[100px] sm:h-120 sm:w-120" />

        <div className="absolute left-[-12%] top-[28%] h-87.5 w-87.5 rounded-full bg-purple-700/20 blur-[130px]" />

        <div className="absolute -right-45 top-[22%] h-87.5 w-87.5 rounded-full bg-blue-600/20 blur-[100px] sm:h-112.5 sm:w-112.5" />

        <div className="absolute right-[-10%] top-[35%] h-100 w-100 rounded-full bg-purple-800/20 blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[5%] h-50 w-[90%] rounded-[50%] bg-blue-600/20 blur-[90px]" />

        <div className="absolute bottom-[-18%] right-[5%] h-50 w-[75%] rounded-[50%] bg-purple-700/20 blur-[100px]" />

        <div className="absolute bottom-[8%] left-[-5%] h-px w-[110%] rotate-3 bg-linear-to-r from-transparent via-blue-600/60 to-purple-600/50" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(2,5,14,0.35)_75%,#02050E_120%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-275">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[46px]">
            Why Our Clients{' '}
            <span className="bg-linear-to-r from-[#1684FF] via-[#8B5CF6] to-[#E044F5] bg-clip-text text-transparent">
              Stick With Us
            </span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-1">
            <span className="h-0.75 w-10 rounded-full bg-linear-to-r from-[#087BFF] to-[#8B5CF6]" />
            <span className="h-0.75 w-5 rounded-full bg-[#C23BFF]" />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
          {/* AMD Creatives */}
          <div className="group relative rounded-[26px] bg-linear-to-br from-[#087BFF] via-[#693BFF] to-[#D946EF] p-[1.5px] shadow-[0_0_30px_rgba(57,61,255,0.10)] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(89,56,255,0.20)]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[25px] bg-[#070B1C] p-5 sm:p-7 lg:p-8">
              {/* Card Glows */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-700/20 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-700/15 blur-[90px]" />

              {/* Logo */}
              <div className="relative z-10 mb-5 flex items-center sm:mb-6">
                <Image
                  src="/logos/amd-creatives-7.webp"
                  alt="AMD Creatives"
                  width={220}
                  height={40}
                  className="h-auto w-40 sm:w-45"
                />
              </div>

              {/* Advantages */}
              <ul className="relative z-10">
                {advantages.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-white/5.5 py-2.25 last:border-b-0"
                  >
                    <span className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#087BFF] to-[#164CFF] text-white shadow-[0_0_14px_rgba(8,102,255,0.25)]">
                      <Check size={17} strokeWidth={2.8} />
                    </span>

                    <span className="text-[13px] leading-relaxed text-[#E0E7F5] sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Extra Value */}
              <div className="relative z-10 mt-5 rounded-2xl border border-blue-500/25 bg-linear-to-r from-[#061B3B]/90 via-[#0B1237]/90 to-[#211052]/80 p-4 sm:mt-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#238BFF]">
                  Extra Value
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Gift
                      size={23}
                      strokeWidth={2}
                      className="shrink-0 text-[#087BFF]"
                    />

                    <span className="text-[13px] text-white sm:text-sm">
                      Free Go High Level subscription
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <GraduationCap
                      size={25}
                      strokeWidth={2}
                      className="shrink-0 text-[#087BFF]"
                    />

                    <span className="text-[13px] text-white sm:text-sm">
                      Free 1-to-1 consultancy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Typical Agency Experience */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/12 bg-linear-to-br from-[#0D1018] to-[#090C14] p-5 sm:p-7 lg:p-8">
            {/* Subtle Card Glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-white/2.5 blur-[80px]" />

            <h3 className="relative z-10 mb-5 text-lg font-bold tracking-tight text-white sm:mb-6 sm:text-xl">
              Typical Agency Experience
            </h3>

            {/* Disadvantages */}
            <ul className="relative z-10">
              {disadvantages.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-white/5.5 py-2.25 last:border-b-0"
                >
                  <span className="flex h-8.25 w-8.25 shrink-0 items-center justify-center rounded-full bg-[#252A35] text-[#C1CAD8]">
                    <X size={17} strokeWidth={2.2} />
                  </span>

                  <span className="text-[13px] leading-relaxed text-[#899CB9] sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* The Difference Panel */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-blue-500/20 bg-linear-to-br from-[#071126] via-[#080C21] to-[#120C30] p-4 sm:mt-6 sm:p-5">
              {/* Decorative Purple Wave */}
              <div className="pointer-events-none absolute -bottom-12 -right-8 h-28 w-36 rotate-[-25deg] rounded-[50%] border-t-2 border-purple-500/50 bg-linear-to-tl from-purple-700/30 via-purple-600/10 to-transparent blur-[1px]" />

              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-24 bg-blue-600/10 blur-2xl" />

              {/* Label */}
              <div className="relative z-10 mb-3 flex items-center gap-4">
                <span className="h-0.75 w-9 rounded-full bg-linear-to-r from-[#087BFF] to-[#D946EF]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8B70FF] sm:text-[11px]">
                  The Difference
                </span>
              </div>

              {/* Statement */}
              <p className="relative z-10 text-sm font-medium leading-relaxed text-[#E6EAF4] sm:text-base">
                Strategy first. Creative with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="https://wa.me/8801511658200"
            className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-[14px] bg-linear-to-r from-[#0866FF] to-[#164CFF] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(8,102,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(8,102,255,0.40)] sm:min-h-15.5 sm:px-10 sm:text-base"
          >
            Book a Call

            <ArrowUpRight
              size={19}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
