'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Play, X } from 'lucide-react';

const avatars = [
  '/avatars/avatar-1.webp',
  '/avatars/avatar-2.webp',
  '/avatars/avatar-3.webp',
];

const services = [
  'UGC-Style Ads',
  'Product Videos',
  'AI-Powered Creatives',
];

export default function BannerPrimary() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle modal scrolling and keyboard behavior.
  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setVideoOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoOpen]);

  // Preload hero video during browser idle time
useEffect(() => {
  let video: HTMLVideoElement | null = null;

  const preloadVideo = () => {
    video = document.createElement('video');
    video.preload = 'auto';
    video.src = '/intro-amd-creatives.webm';
    video.load();
  };

  const cleanupVideo = () => {
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      video = null;
    }
  };

  const idleWindow = window as Window & {
    requestIdleCallback?: (
      callback: () => void,
      options?: { timeout: number }
    ) => number;
    cancelIdleCallback?: (id: number) => void;
  };

  if (
    typeof idleWindow.requestIdleCallback === 'function' &&
    typeof idleWindow.cancelIdleCallback === 'function'
  ) {
    const idleId = idleWindow.requestIdleCallback(preloadVideo, {
      timeout: 2000,
    });

    return () => {
      idleWindow.cancelIdleCallback?.(idleId);
      cleanupVideo();
    };
  }

  const timeoutId: ReturnType<typeof globalThis.setTimeout> =
    globalThis.setTimeout(preloadVideo, 1000);

  return () => {
    globalThis.clearTimeout(timeoutId);
    cleanupVideo();
  };
}, []);

  // Start playback when the modal opens.
  useEffect(() => {
    if (!videoOpen || !videoRef.current) return;

    videoRef.current.play().catch(() => {
      // Playback can be started manually using the video controls.
    });
  }, [videoOpen]);

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setVideoOpen(false);
  };

  return (
    <>
      <section
        id="creativesHome"
        className="relative isolate min-h-screen overflow-hidden bg-[#02040B] pt-28 sm:pt-32 lg:pt-36"
      >
        {/* =========================================
            BACKGROUND EFFECTS
        ========================================= */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#02040B]">
          {/* Base dark navy gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#050816] via-[#02040B] to-[#03020C]" />

          {/* Purple glow — left center */}
          <div className="absolute left-[-18%] top-[30%] h-125 w-125 rounded-full bg-[#6500FF]/25 blur-[150px] sm:h-162.5 sm:w-162.5" />

          {/* Blue glow — behind the hero composition */}
          <div className="absolute right-[5%] top-[10%] h-100 w-100 rounded-full bg-[#0047FF]/25 blur-[130px] sm:h-162.5 sm:w-162.5" />

          {/* Electric blue lighting — right edge */}
          <div className="absolute right-[-15%] top-[35%] h-125 w-75 rotate-[-25deg] bg-[#003BFF]/25 blur-[100px] sm:h-175 sm:w-100" />

          {/* Purple glow — bottom right */}
          <div className="absolute bottom-[-15%] right-[-10%] h-100 w-125 rounded-full bg-[#7200FF]/30 blur-[140px] sm:h-150 sm:w-175" />

          {/* Blue glow — bottom center */}
          <div className="absolute bottom-[-25%] left-[35%] h-87.5 w-112.5 rounded-full bg-[#004CFF]/20 blur-[130px] sm:h-125 sm:w-162.5" />

          {/* Subtle purple glow behind the headline */}
          <div className="absolute left-[15%] top-[15%] h-62.5 w-87.5 rounded-full bg-[#3B00FF]/10 blur-[120px]" />

          {/* Dark vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(2,4,11,0.35)_75%,#02040B_120%)]" />
        </div>

        {/* =========================================
            HERO CONTENT
        ========================================= */}
        <div className="mx-auto grid max-w-360 items-center gap-12 px-5 pb-16 sm:px-8 sm:pb-20 lg:min-h-[calc(100vh-144px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:px-10 xl:gap-8 xl:px-14">
          {/* LEFT CONTENT */}
          <div className="relative z-20 mx-auto w-full max-w-155 lg:mx-0">
            {/* Trust Badge */}
            <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-white/9 bg-white/5.5 px-3 py-2 shadow-lg backdrop-blur-xl sm:mb-8 sm:px-4">
              <div className="flex shrink-0 -space-x-2">
                {avatars.slice(0, 5).map((src) => (
                  <div
                    key={src}
                    className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-[#10121d] bg-gray-800 sm:h-8 sm:w-8"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-medium text-white/80 sm:text-sm">
                Trusted by growth-focused brands
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[clamp(2.65rem,6.2vw,5.65rem)] font-extrabold leading-[0.99] tracking-[-0.055em] text-white">
              We Turn
              <br />

              <span className="bg-linear-to-r from-[#087BFF] via-[#6865FF] to-[#BD50FF] bg-clip-text text-transparent">
                Attention
              </span>{' '}
              Into
              <br />

              Customers.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-132.5 text-base leading-relaxed text-[#B9C3D8] sm:mt-7 sm:text-lg lg:text-[20px]">
              Performance-driven video creatives built to stop the scroll, tell
              your story, and drive real results for your brand.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 sm:gap-4">
              <Link
                href="https://wa.me/8801511658200"
                className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-2xl bg-[#0866FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(8,102,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#287AFF] hover:shadow-[0_0_45px_rgba(8,102,255,0.4)] sm:px-7 sm:text-base"
              >
                Book a Free Call

                <ArrowRight
                  size={19}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#creativesPortfolio"
                className="group inline-flex min-h-13.5 items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/2.5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/70 hover:bg-white/6 sm:px-6 sm:text-base"
              >
                <Play
                  size={16}
                  fill="currentColor"
                  className="text-blue-400"
                />

                Explore Our Work
              </Link>
            </div>

            {/* Service Highlights */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-7">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-xs font-medium text-[#D3D9E8] sm:text-sm"
                >
                  <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-[#0866FF]">
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </span>

                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE: CLICKABLE COMPOSITION IMAGE
          ========================================= */}
          <div className="relative mx-auto w-full max-w-190 lg:max-w-none">
            {/* Purple glow behind the image */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/30 blur-[100px]" />

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play AMD Creatives showreel"
              className="group relative block w-full cursor-pointer rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#02040B]"
            >
            <Image
              src="/photos/hero-video-composition.webp"
              alt="AMD Creatives video showcase featuring UGC ads, product videos, AI creatives, and explainer videos"
              width={1400}
              height={1100}
              priority
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="relative z-10 h-auto w-full object-contain transition-[filter] duration-500 ease-out group-hover:blur-[3px]"
            />

              {/* Hover Play Button */}
              <span className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/0 transition-colors duration-300">
                <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:h-20 sm:w-20">
                  <Play
                    size={30}
                    fill="currentColor"
                    className="ml-1"
                  />
                </span>
              </span>
            </button>

            {/* Mobile Caption */}
            <p className="mt-5 text-center text-xs font-medium tracking-wide text-white/50 sm:hidden">
              UGC Ads · Product Videos · AI Creatives
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          RESPONSIVE VIDEO MODAL
      ========================================= */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="AMD Creatives video player"
            className="relative flex max-h-[92dvh] max-w-6xl items-center justify-center"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Close video"
              className="absolute -top-12 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:-right-12 sm:top-0"
            >
              <X size={22} />
            </button>

            {/* Video Container — Preserves Any Aspect Ratio */}
            <div className="flex max-h-[85dvh] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
              <video
                ref={videoRef}
                src="/intro-amd-creatives.webm"
                controls
                autoPlay
                playsInline
                preload="auto"
                className="block max-h-[85dvh] w-auto max-w-full object-contain"
              >
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
