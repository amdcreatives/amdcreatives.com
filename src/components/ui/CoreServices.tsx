import Image from "next/image";
import {
  BarChart3,
  Smartphone,
  SquarePlay,
  Zap,
  Video,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Performance Video Ads",
    description:
      "Creative-led edits designed around strong hooks, clear messaging, and action.",
    icon: BarChart3,
    iconColor: "text-blue-400",
    image: "/photos/video-editing-interface-2.webp",
  },
  {
    title: "Social Reels & Shorts",
    description:
      "High-impact edits for Instagram, TikTok, and YouTube Shorts designed to grab attention fast.",
    icon: Smartphone,
    iconColor: "text-blue-400",
  },
  {
    title: "YouTube Editing",
    description:
      "From raw footage to fully polished videos with engaging intros, captions, and smooth storytelling.",
    icon: SquarePlay,
    iconColor: "text-rose-500",
  },
  {
    title: "AI-Powered Creatives",
    description:
      "AI avatars, AI-generated visuals, and creative concepts to bring your ideas to life.",
    icon: Zap,
    iconColor: "text-blue-400",
  },
  {
    title: "Brand & Explainer Videos",
    description:
      "Clean, professional edits for product launches, corporate content, and marketing campaigns.",
    icon: Video,
    iconColor: "text-purple-400",
  },
];

export default function CoreServices() {
  const [featuredService, ...otherServices] = services;
  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id="creativesService"
      className="relative isolate overflow-hidden bg-[#030610] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#061027] via-[#030610] to-[#080316]" />

        <div className="absolute -left-40 top-0 h-112.5 w-[450px] rounded-full bg-blue-700/20 blur-[140px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -right-40 -top-32 h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-[130px] sm:h-[550px] sm:w-[550px]" />

        <div className="absolute -bottom-60 left-1/3 h-[450px] w-[650px] rounded-full bg-blue-700/10 blur-[150px]" />

        <div className="absolute -bottom-60 right-0 h-[400px] w-[500px] rounded-full bg-purple-700/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1380px]">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-gradient-to-r from-cyan-400 to-purple-500" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#AAB8D0] sm:text-sm">
              What We Do
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
            Creative built for the way
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              people watch.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#A2B1CA] sm:text-lg sm:leading-8">
            From scroll-stopping ads to polished brand films, we turn ideas
            into video people want to watch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-6">
          {/* Featured Service */}
          <article className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-blue-500/40 bg-[#060C1D]/90 transition-colors duration-300 hover:border-purple-500/60 sm:min-h-[420px] lg:col-span-2 lg:row-span-2 lg:min-h-[490px]">
            {/* Featured Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/15 blur-[100px]" />

              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />

              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/30" />
            </div>

            {/* Featured Content */}
            <div className="relative z-10 grid h-full grid-cols-1 items-center gap-6 p-6 sm:p-8 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-1 lg:gap-2 lg:p-9 xl:grid-cols-[0.85fr_1.15fr] xl:gap-4">
              {/* Featured Text */}
              <div className="relative z-10 max-w-sm">
                <div className="mb-5 flex h-[74px] w-[74px] items-center justify-center rounded-2xl border border-blue-500/40 bg-[#080F2C]/90 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
                  <FeaturedIcon
                    size={38}
                    strokeWidth={2}
                    className="text-blue-400"
                  />
                </div>

                <h3 className="max-w-xs text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                  {featuredService.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#A5B4CF] sm:text-base sm:leading-7">
                  {featuredService.description}
                </p>

                <a
                  href="#creativesContact"
                  aria-label="Discuss a performance video ads project"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-purple-300"
                >
                  Let&apos;s create something
                  <ArrowUpRight size={17} />
                </a>
              </div>

              {/* Featured Image */}
              <div className="relative mx-auto flex min-h-[190px] w-full max-w-[500px] items-center justify-center md:min-h-[260px] lg:min-h-[250px] xl:min-h-[320px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full bg-blue-500/20 blur-[70px]"
                />

                <div className="relative w-full overflow-hidden rounded-xl">
                  <Image
                    src={featuredService.image}
                    alt="Video editing interface showcasing a professional creative timeline"
                    width={1000}
                    height={700}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 35vw"
                    className="h-auto max-h-[360px] w-full object-contain transition-[filter] duration-300 group-hover:brightness-110"
                  />
                </div>
              </div>
            </div>

            {/* Gradient Border Accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-purple-500/60" />
          </article>

          {/* Supporting Service Cards */}
          {otherServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[20px] border border-[#202A43] bg-[#080B17]/80 p-6 transition-colors duration-300 hover:border-blue-500/40 sm:min-h-[240px] sm:p-7"
              >
                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/0 blur-[70px] transition-colors duration-300 group-hover:bg-blue-600/15"
                />

                {/* Icon */}
                <div className="relative mb-4 flex h-[66px] w-[66px] items-center justify-center rounded-2xl border border-blue-500/40 bg-[#0A1030]/90">
                  <Icon
                    size={31}
                    strokeWidth={2}
                    className={service.iconColor}
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-[#9EADC7] sm:text-base sm:leading-6">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70 transition-transform duration-300 group-hover:scale-x-100 sm:left-7 sm:right-7" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
