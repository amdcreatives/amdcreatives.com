"use client";

import { useRef, useState } from "react";

type Toast = { msg: string; error: boolean } | null;

export default function NotifyForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  function showToast(msg: string, error = false) {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3500);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = inputRef.current?.value.trim() ?? "";

    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.", true);
      inputRef.current?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("✓ " + data.message);
        if (inputRef.current) inputRef.current.value = "";
      } else {
        showToast(data.message || "Something went wrong. Try again.", true);
      }
    } catch {
      showToast("Network error — please try again.", true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Early access sign-up"
        className="flex gap-2 w-full max-w-[420px] animate-fade-up delay-850
                   max-sm:flex-col"
      >
        <label htmlFor="email-notify" className="sr-only">
          Email address
        </label>
        <input
          ref={inputRef}
          id="email-notify"
          type="email"
          name="email"
          placeholder="Enter your email for early access"
          autoComplete="email"
          required
          className="flex-1 bg-[var(--surface2)] border border-[rgba(255,255,255,0.1)]
                     rounded-[6px] px-4 py-3 text-[0.85rem] text-[var(--text)]
                     placeholder:text-[var(--muted)] outline-none
                     focus:border-[rgba(201,168,76,0.5)]
                     transition-colors duration-200 font-[family-name:var(--font-dm)]"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--gold)] hover:bg-[var(--gold-light)]
                     active:scale-[0.98] disabled:opacity-60
                     text-[#0A0A0A] font-medium text-[0.8rem] tracking-[0.06em]
                     px-5 py-3 rounded-[6px] whitespace-nowrap cursor-pointer
                     transition-all duration-200 hover:-translate-y-px
                     font-[family-name:var(--font-dm)] max-sm:w-full"
        >
          {loading ? "Sending…" : "Notify Me"}
        </button>
      </form>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-50
                      bg-[var(--surface2)] text-[var(--text)] text-[0.8rem]
                      px-5 py-2.5 rounded-[6px] whitespace-nowrap pointer-events-none
                      border transition-opacity duration-300
                      ${toast.error
                        ? "border-[rgba(226,75,74,0.4)]"
                        : "border-[rgba(201,168,76,0.3)]"
                      }`}
        >
          {toast.msg}
        </div>
      )}
    </>
  );
}
