"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const reviews = [
  {
    name: "Jordan McCrae",
    role: "Marketing Coordinator",
    image: "/avatars/avatar-male.webp",
    text: "Tanvir has been a pleasure to work with. His work is very high quality, and he continues to meet deadlines and always is improving his work based on feedback. Highly recommend!",
  },
  {
    name: "Nathaniel Abera",
    role: "Agency Owner",
    image: "/avatars/avatar-male.webp",
    text: "Tanvir did an amazing job editing my videos. I didn't need to request many revisions because he followed the instructions precisely and delivered high-quality work from the start. The content he sourced was excellent, and it was clear that he is very experienced with video editing. From the animations to the transitions, everything was spot on. He also communicated quickly and followed directions exactly, which made the entire process smooth and easy. I really enjoyed working with him and highly recommend him for video editing. He will not disappoint.",
  },
  {
    name: "Maya Rodriguez",
    role: "Content Creator",
    image: "/avatars/avatar-1.webp",
    text: "They just get it. I send raw clips, and within days, I get polished videos that are ready to post. Super reliable and top quality every time.",
  },
  {
    name: "Alfie Harrison",
    role: "Agency Owner",
    image: "/avatars/avatar-2.webp",
    text: "Our engagement rates doubled after working with them. Their edits are not just clean; they're strategic.",
  },
  {
    name: "Sophie Bennett",
    role: "eCommerce Brand Owner",
    image: "/avatars/avatar-3.webp",
    text: "What stood out most? The fast communication and quality. They treat your content like their own.",
  },
];

const CARD_HEIGHT = "h-[300px] sm:h-[350px]";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleReviews = Array.from(
    { length: Math.min(3, reviews.length) },
    (_, index) => reviews[(activeIndex + index) % reviews.length]
  );

  const changeSlide = (direction: "next" | "prev") => {
    if (isAnimating || reviews.length <= 1) return;

    setIsAnimating(true);

    setActiveIndex((previousIndex) =>
      direction === "next"
        ? (previousIndex + 1) % reviews.length
        : (previousIndex - 1 + reviews.length) % reviews.length
    );

    setExpandedReviews([]);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex(index);
    setExpandedReviews([]);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const toggleReview = (name: string) => {
    setExpandedReviews((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  };

  return (
    <section
      id="creativesTestimonials"
      className="relative isolate scroll-mt-28 overflow-hidden bg-[#030713] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-52 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-175 -translate-x-1/2 rounded-full bg-blue-700/10 blur-[120px]" />

        <div className="absolute -left-40 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-blue-500/20 bg-linear-to-br from-blue-600/20 via-blue-900/10 to-transparent sm:h-96 sm:w-96" />

        <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full border border-purple-500/20 bg-linear-to-br from-purple-600/20 via-blue-900/10 to-transparent sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto max-w-375">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 sm:text-sm">
              Testimonials
            </span>

            <span className="h-0.5 w-12 rounded-full bg-linear-to-r from-fuchsia-500 via-purple-500 to-transparent" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Kind Words from{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            We&apos;re proud to work with amazing creators, businesses, and
            agencies who trust us to bring their ideas to life.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Decorative Quotes */}
          <Quote
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-16 hidden h-24 w-24 rotate-180 fill-blue-600/15 text-blue-600/15 lg:block"
            strokeWidth={0}
          />

          <Quote
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-2 hidden h-24 w-24 fill-purple-600/15 text-purple-600/15 lg:block"
            strokeWidth={0}
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={() => changeSlide("prev")}
            disabled={isAnimating}
            aria-label="Previous testimonials"
            className="absolute -left-1 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#070d1c]/95 text-white transition-all duration-300 hover:border-purple-400 hover:bg-blue-600/15 hover:cursor-pointer disabled:cursor-wait lg:flex xl:-left-5"
          >
            <ArrowLeft size={21} />
          </button>

          {/* Cards Grid */}
          <div
            aria-live="polite"
            className={`grid grid-cols-1 items-stretch gap-5 transition-opacity duration-300 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 ${
              isAnimating ? "opacity-60" : "opacity-100"
            }`}
          >
            {visibleReviews.map((review, index) => {
              const isFeatured = index === 1;
              const isExpanded = expandedReviews.includes(review.name);
              const canExpand = review.text.length > 180;

              return (
                <article
                  key={`${review.name}-${activeIndex}`}
                  className={`group relative flex ${CARD_HEIGHT} min-w-0 flex-col overflow-hidden rounded-3xl border p-5 transition-colors duration-300 sm:p-7 ${
                    isFeatured
                      ? "border-blue-500/70 bg-linear-to-br from-[#100a2b] via-[#080d21] to-[#18072b] shadow-[0_0_35px_rgba(59,130,246,0.10)]"
                      : "border-blue-400/15 bg-linear-to-br from-[#0a1020]/95 via-[#070b16]/95 to-[#080c18]/95 hover:border-blue-400/40"
                  }`}
                >
                  {/* Featured Card Glow */}
                  {isFeatured && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/15 blur-[70px]"
                    />
                  )}

                  {/* Quote and Rating */}
                  <div className="relative mb-4 flex shrink-0 items-center justify-between">
                    <Quote
                      aria-hidden="true"
                      className={`h-8 w-8 fill-current ${
                        isFeatured ? "text-fuchsia-500" : "text-blue-500"
                      }`}
                      strokeWidth={1.5}
                    />

                    <div
                      className="flex shrink-0 items-center gap-1"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                          strokeWidth={1}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Content: Fixed Available Height */}
                  <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
                    <blockquote
                      className={`wrap-break-word text-sm leading-6 text-slate-200 sm:leading-7 ${
                        isExpanded
                          ? "min-h-0 flex-1 overflow-y-auto pr-1"
                          : "line-clamp-4"
                      }`}
                    >
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    {/* Keep Read More in a Consistent Position */}
                    <div className="mt-2 min-h-7 shrink-0">
                      {canExpand && (
                        <button
                          type="button"
                          onClick={() => toggleReview(review.name)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors duration-200 hover:cursor-pointer hover:text-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          {isExpanded ? (
                            <>
                              Read less
                              <ChevronUp size={15} />
                            </>
                          ) : (
                            <>
                              Read more
                              <ChevronDown size={15} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Client Information: Always Anchored at Bottom */}
                  <div className="relative mt-auto flex min-h-19 shrink-0 items-center gap-3 border-t border-white/[0.07] pt-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-slate-800 sm:h-12 sm:w-12">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-white">
                        {review.name}
                      </h3>

                      <p className="mt-1 line-clamp-1 text-xs leading-5 text-slate-400 sm:text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="mt-7 flex items-center justify-center gap-5 lg:hidden">
            <button
              type="button"
              onClick={() => changeSlide("prev")}
              disabled={isAnimating}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-white/3 text-white transition-colors hover:border-blue-400 hover:bg-blue-500/10 disabled:cursor-wait"
            >
              <ArrowLeft size={19} />
            </button>

            <span className="min-w-16.25 text-center text-xs font-medium tracking-wider text-slate-400">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => changeSlide("next")}
              disabled={isAnimating}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/40 bg-white/3 text-white transition-colors hover:border-purple-400 hover:bg-purple-500/10 disabled:cursor-wait"
            >
              <ArrowRight size={19} />
            </button>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => changeSlide("next")}
            disabled={isAnimating}
            aria-label="Next testimonials"
            className="absolute -right-1 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-400/50 bg-[#070d1c]/95 text-white transition-all duration-300 hover:border-blue-400 hover:bg-purple-600/15 hover:cursor-pointer disabled:cursor-wait lg:flex xl:-right-5"
          >
            <ArrowRight size={21} />
          </button>
        </div>

        {/* Pagination */}
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          aria-label="Choose testimonial slide"
        >
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Show testimonial ${index + 1}: ${review.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030713] disabled:cursor-wait ${
                activeIndex === index
                  ? "w-9 bg-linear-to-r from-blue-500 to-fuchsia-500"
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
