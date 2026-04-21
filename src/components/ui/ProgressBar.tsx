interface ProgressBarProps {
  value?: number; // 0–100
}

export default function ProgressBar({ value = 72 }: ProgressBarProps) {
  return (
    <div
      className="w-full max-w-[400px] animate-fade-up delay-700"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Launch progress: ${value}%`}
    >
      <div className="flex justify-between text-[0.7rem] tracking-[0.08em] text-[var(--muted)] mb-2">
        <span>Launch progress</span>
        <span className="text-[var(--gold-light)]">{value}%</span>
      </div>
      <div className="h-[2px] rounded-sm overflow-hidden bg-[rgba(255,255,255,0.06)]">
        <div
          className="relative h-full rounded-sm
                     after:content-[''] after:absolute after:right-0 after:top-1/2
                     after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full
                     after:bg-[var(--gold-light)] after:shadow-[0_0_8px_var(--gold-light)]"
          style={{
            width: `${value}%`,
            background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          }}
        />
      </div>
    </div>
  );
}
