"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MessageCircle,
  Sparkles,
  Video,
  Wallet,
  Info,
  CalendarCheck,
} from "lucide-react";

/* =========================================================
   CONFIGURATION
========================================================= */

const WEB3FORMS_ACCESS_KEY = "37a83d36-3d33-4d4d-aa56-29a1ca773f2f";

const GOOGLE_BOOKING_URL = "https://calendar.app.google/U9EcXuYTJcfk7eRR9";

/* =========================================================
   TEAM MEMBERS
========================================================= */

const teamMembers = [
  {
    name: "Tanvir Ahmed",
    role: "Founder & Video Editor",
    image: "/photos/tanvir-ahmed.webp",
    description:
      "With a passion for storytelling and design, we create high-performing video content that helps brands grow, connect, and convert one edit at a time.",
  },
  {
    name: "Tahasin Ahmed",
    role: "CEO & Video Editor",
    image: "/photos/tahasin-ahmed.webp",
    description:
      "We ensure smooth operations, build strong client relationships, and turn creative ideas into successful projects that help brands grow.",
  },
];

const budgetOptions = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Let's discuss",
];

/* =========================================================
   REUSABLE CARD LABEL
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-linear-to-br from-blue-500/15 to-purple-500/15 text-xs font-semibold text-purple-300 shadow-[0_0_20px_rgba(124,58,237,0.12)]">
        {number}
      </span>

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-[11px]">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   SHARED CARD STYLE
========================================================= */

const cardClass =
  "relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090d17]/80 shadow-[0_15px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/20";

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
    botcheck: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const bookingConfigured =
    GOOGLE_BOOKING_URL.startsWith("https://calendar.google.com/") &&
    !GOOGLE_BOOKING_URL.includes("PASTE_YOUR_");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "AMD Creatives Website",
          subject: `New project inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          message: formData.message,
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to send your message. Please try again."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        budget: "",
        message: "",
        botcheck: "",
      });
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050811] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-52 top-20 h-112.5 w-112.5 rounded-full bg-blue-600/9 blur-[140px]" />

        <div className="absolute -right-40 -top-52 h-125 w-125 rounded-full bg-indigo-600/15 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-blue-700/12 blur-[140px]" />

        <div className="absolute left-1/3 top-1/2 h-87.5 w-87.5 rounded-full bg-purple-600/5 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 grid gap-8 sm:mb-12 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-[#080d19]/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              <Sparkles size={14} className="text-blue-400" />
              <span>Let&apos;s create something great</span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[68px]">
              Have a project
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                in mind?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Tell us what you&apos;re working on. Whether you need
              scroll-stopping video ads, creative editing, or a fresh idea,
              let&apos;s make it happen.
            </p>
          </div>

          <div className="hidden items-center gap-4 pb-2 text-sm text-slate-400 lg:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2.5">
              <ArrowDownRight size={19} className="text-blue-400" />
            </span>

            <span>Tell us about your project</span>
          </div>
        </div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/* ===================================================
              LEFT COLUMN
          =================================================== */}

          <div className="min-w-0 space-y-5 lg:space-y-6">
            {/* PROJECT INQUIRY FORM */}

            <div className={`${cardClass} p-5 sm:p-7 lg:p-8`}>
              {/* Top gradient */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

              {/* Decorative paper plane */}
              <div className="pointer-events-none absolute right-7 top-7 hidden h-32 w-40 items-center justify-center opacity-80 sm:flex">
                <div className="absolute right-0 top-9 h-16 w-32 rounded-full bg-purple-600/10 blur-2xl" />

                <svg
                  viewBox="0 0 140 110"
                  fill="none"
                  className="relative w-28 text-blue-400 sm:w-32"
                  aria-hidden="true"
                >
                  <path
                    d="M5 90C34 78 46 44 82 47C104 48 119 35 132 16"
                    stroke="url(#planeTrail)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                  />

                  <path
                    d="M43 43L127 9L101 84L82 57L43 43Z"
                    fill="url(#planeFill)"
                    fillOpacity="0.18"
                    stroke="#818CF8"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M43 43L82 57L127 9"
                    stroke="#A78BFA"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M82 57L101 84L127 9"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                  />

                  <defs>
                    <linearGradient
                      id="planeTrail"
                      x1="5"
                      y1="90"
                      x2="132"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2563EB" stopOpacity="0" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>

                    <linearGradient
                      id="planeFill"
                      x1="43"
                      y1="43"
                      x2="127"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative">
                <SectionLabel number="01">Project inquiry</SectionLabel>

                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Let&apos;s talk details.
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                  Share a few details and we&apos;ll get back to you.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex min-h-87.5 flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/8">
                    <CheckCircle2
                      size={30}
                      className="text-emerald-400"
                    />
                  </div>

                  <h4 className="mt-6 text-2xl font-semibold">
                    Message received!
                  </h4>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                    Thanks for reaching out to AMD Creatives. We&apos;ll
                    review your project details and get back to you.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium transition hover:border-blue-400/40 hover:bg-blue-400/5"
                  >
                    Send another message
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative mt-7 space-y-5"
                >
                  {/* Honeypot field */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={Boolean(formData.botcheck)}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        botcheck: event.target.checked ? "true" : "",
                      })
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Name and email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2.5 block text-xs font-medium text-slate-200"
                      >
                        Your name <span className="text-blue-400">*</span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={120}
                        value={formData.name}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            name: event.target.value,
                          })
                        }
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-white/12 bg-[#080b13]/90 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/6"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2.5 block text-xs font-medium text-slate-200"
                      >
                        Email address{" "}
                        <span className="text-blue-400">*</span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            email: event.target.value,
                          })
                        }
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-white/12 bg-[#080b13]/90 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/6"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="mb-2.5 block text-xs font-medium text-slate-200"
                    >
                      Estimated budget
                    </label>

                    <div className="relative">
                      <Wallet
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            budget: event.target.value,
                          })
                        }
                        className="w-full appearance-none rounded-xl border border-white/12 bg-[#080b13]/90 py-3.5 pl-11 pr-10 text-sm text-slate-200 outline-none transition focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/6"
                      >
                        <option value="" className="bg-[#0b0f19]">
                          Select your budget
                        </option>

                        {budgetOptions.map((budget) => (
                          <option
                            key={budget}
                            value={budget}
                            className="bg-[#0b0f19]"
                          >
                            {budget}
                          </option>
                        ))}
                      </select>

                      <ArrowDownRight
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2.5 block text-xs font-medium text-slate-200"
                    >
                      Tell us about your project{" "}
                      <span className="text-blue-400">*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      value={formData.message}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          message: event.target.value,
                        })
                      }
                      placeholder="What are you looking to create? Tell us about your goals, deliverables, or ideas..."
                      className="w-full resize-y rounded-xl border border-white/12 bg-[#080b13]/90 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/60 focus:ring-4 focus:ring-blue-400/6"
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-400/20 bg-red-400/6 px-4 py-3 text-sm leading-6 text-red-300"
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-5 text-slate-500">
                      Your project details are used to respond to your
                      inquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 via-blue-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:brightness-110 hover:shadow-purple-900/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send your inquiry
                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* =================================================
                GOOGLE CALENDAR BOOKING
            ================================================= */}

            <div className={`${cardClass} p-5 sm:p-7 lg:p-8`}>
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/12 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-purple-600/9 blur-[80px]" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <SectionLabel number="04">Quick &amp; easy</SectionLabel>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400">
                    <CalendarDays size={21} />
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Book a free call
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                  Prefer talking things through? Choose a time that works
                  for you and let&apos;s discuss your project.
                </p>

                {/* Appointment details */}
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#080b13]/75 p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                    <CalendarCheck size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      Introductory Call
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      15 minutes · Online meeting
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                    Free
                  </span>
                </div>

                {/* Booking button */}
                {bookingConfigured ? (
                  <a
                    href={GOOGLE_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3.5 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:brightness-110 hover:shadow-purple-900/20"
                  >
                    <CalendarDays size={17} />

                    Book your 15-minute call

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <div className="mt-3.5">
                    <button
                      type="button"
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600/60 to-purple-600/60 px-5 py-3.5 text-sm font-semibold text-white/80"
                    >
                      <CalendarDays size={17} />
                      Add your Google booking URL
                    </button>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Add your 15-minute Google Calendar booking link in
                      the component configuration.
                    </p>
                  </div>
                )}

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Choose an available time on Google Calendar. No emails
                  back and forth.
                </p>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT COLUMN
          =================================================== */}

          <div className="min-w-0 space-y-5 lg:space-y-6">
            {/* DIRECT CONTACT */}

            <div className={`${cardClass} p-5 sm:p-7`}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/12 blur-[75px]" />

              <div className="relative">
                <SectionLabel number="02">
                  Prefer a direct conversation?
                </SectionLabel>

                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  We&apos;re just a message away.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Choose whichever way is easiest for you to get in touch.
                </p>

                <div className="mt-5 space-y-3">
                  {/* Email */}
                  <a
                    href="mailto:amdcreatives.info@gmail.com"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080b13]/70 p-3 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.035] sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/12 text-blue-400">
                      <Mail size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-400">
                        Email us
                      </span>

                      <span className="mt-1 block break-all text-sm font-medium text-slate-100">
                        amdcreatives.info@gmail.com
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801511658200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080b13]/70 p-3 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.035] sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                      <MessageCircle size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-400">
                        WhatsApp
                      </span>

                      <span className="mt-1 block text-sm font-medium text-slate-100">
                        +88 015 116 58200
                      </span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4 text-xs leading-5 text-slate-400">
                  <Info size={17} className="shrink-0 text-blue-400" />

                  <span>
                    Tell us about your project whenever you&apos;re ready.
                  </span>
                </div>
              </div>
            </div>

            {/* TEAM */}

            <div className={`${cardClass} p-5 sm:p-7`}>
              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <SectionLabel number="03">
                      The people behind this work
                    </SectionLabel>

                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      Meet our team
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Video size={20} />
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#080b13]/65 p-3 transition duration-300 hover:border-purple-400/20 hover:bg-purple-400/2.5 sm:gap-4 sm:p-3.5"
                    >
                      <div className="relative h-14.5 w-14.5 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/4 sm:h-16 sm:w-16">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="64px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0 flex-1 pt-0.5">
                        <h4 className="text-sm font-semibold text-white">
                          {member.name}
                        </h4>

                        <p className="mt-1 text-xs font-medium text-blue-400">
                          {member.role}
                        </p>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#090d18]/80 px-5 py-5 backdrop-blur-xl sm:mt-10 sm:px-7">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-blue-600/8 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">
                <MessageCircle size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-white">
                  Have an idea but not sure where to start?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Send us a message and we&apos;ll figure out the next steps
                  together.
                </p>
              </div>
            </div>

            <a
              href="mailto:amdcreatives.info@gmail.com"
              className="group/link inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-blue-400 transition hover:text-blue-300 sm:self-center"
            >
              Let&apos;s talk

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
