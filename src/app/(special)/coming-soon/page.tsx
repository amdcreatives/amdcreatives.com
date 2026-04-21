import Topbar from "@/src/components/ui/Topbar";
import DecorativeCorners from "@/src/components/ui/DecorativeCorners";
import Countdown from "@/src/components/ui/Countdown";
import ProgressBar from "@/src/components/ui/ProgressBar";
import NotifyForm from "@/src/components/ui/NotifyForm";
import Socials from "@/src/components/ui//Socials";
import Link from "next/link";

export default function ComingSoonPage() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[900px] h-[900px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
      />

      <DecorativeCorners />
      <Topbar />

      {/* Main content */}
      <main
        className="relative z-10 min-h-screen flex flex-col items-center
                   justify-center px-6 py-8 pt-24"
        role="main"
      >
        <section
          className="flex flex-col items-center text-center gap-6 max-w-[720px]
                     animate-fade-up delay-200"
          aria-label="Launch announcement"
        >
          {/* Eyebrow */}
          <p
            className="flex items-center gap-3 text-[0.7rem] tracking-[0.3em]
                       uppercase text-[var(--gold)]
                       before:block before:w-8 before:h-px before:bg-[var(--gold)] before:opacity-50
                       after:block  after:w-8  after:h-px  after:bg-[var(--gold)] after:opacity-50"
            aria-hidden="true"
          >
            Something extraordinary is being crafted
          </p>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-bebas)]
                       text-[clamp(3.5rem,10vw,7rem)] leading-[0.95]
                       tracking-[0.04em] text-[var(--text)]"
          >
            We&apos;re{" "}
            <span className="text-gold-gradient">Almost</span>
            <br />
            Ready
          </h1>

          {/* Subheading */}
          <p
            className="text-base font-light leading-[1.7] italic
                       text-[var(--text-soft)] max-w-[480px]
                       font-[family-name:var(--font-dm)]"
          >
            A creative studio built for bold brands. Visuals, strategy, and
            stories designed to make your audience stop scrolling.
          </p>

          {/* Countdown (client component) */}
          <Countdown />

          {/* Progress bar */}
          <ProgressBar value={72} />

          {/* Socials */}
          {/* <Socials /> */}
        </section>
      </main>

      {/* Footer */}
      <footer
        className="fixed bottom-5 left-0 right-0 text-center
                   text-[0.65rem] tracking-[0.12em] uppercase text-[var(--muted)]
                   animate-fade-up delay-1100 z-10"
        role="contentinfo"
      >
        &copy; {year} AMDCreatives &nbsp;&middot;&nbsp;
        <Link
          href="mailto:hello@amdcreatives.com"
          className="text-[var(--gold)] no-underline opacity-70 hover:opacity-100 transition-opacity"
        >
          hello@amdcreatives.com
        </Link>
      </footer>
    </>
  );
}
