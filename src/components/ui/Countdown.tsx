"use client";

import { useEffect, useState } from "react";

const LAUNCH = new Date("2026-05-01T00:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH.getTime() - Date.now());
  return {
    d: pad(Math.floor(diff / 864e5)),
    h: pad(Math.floor((diff % 864e5) / 36e5)),
    m: pad(Math.floor((diff % 36e5) / 6e4)),
    s: pad(Math.floor((diff % 6e4) / 1e3)),
  };
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative overflow-hidden rounded-[6px] px-2 py-1
                   bg-[var(--surface2)] border border-[rgba(255,255,255,0.06)]
                   after:content-[''] after:absolute after:inset-x-0 after:top-1/2
                   after:h-px after:bg-[rgba(255,255,255,0.06)]"
      >
        <div
          className="text-num-gradient font-[family-name:var(--font-bebas)]
                     text-[clamp(2.2rem,6vw,4rem)] leading-none text-center
                     min-w-[clamp(56px,8vw,90px)]"
        >
          {value}
        </div>
      </div>
      <div className="text-[0.55rem] tracking-[0.18em] uppercase text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="flex items-start gap-2 my-4 animate-fade-up delay-500"
      role="timer"
      aria-label="Time until launch"
    >
      <Unit value={time.d} label="Days" />
      <span
        className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.2rem)]
                   text-[var(--gold)] opacity-40 mt-1 animate-blink"
        aria-hidden="true"
      >
        :
      </span>
      <Unit value={time.h} label="Hours" />
      <span
        className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.2rem)]
                   text-[var(--gold)] opacity-40 mt-1 animate-blink"
        aria-hidden="true"
      >
        :
      </span>
      <Unit value={time.m} label="Mins" />
      <span
        className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.2rem)]
                   text-[var(--gold)] opacity-40 mt-1 animate-blink"
        aria-hidden="true"
      >
        :
      </span>
      <Unit value={time.s} label="Secs" />
    </div>
  );
}
