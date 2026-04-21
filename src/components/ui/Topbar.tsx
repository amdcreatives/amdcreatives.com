export default function Topbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5
                 border-b border-[rgba(201,168,76,0.12)] bg-[rgba(10,10,10,0.8)]
                 backdrop-blur-xl animate-fade-down"
      role="banner"
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 font-[family-name:var(--font-bebas)]
                   text-[1.4rem] tracking-[0.12em] text-[var(--text)]"
        aria-label="AMDCreatives"
      >
        <span
          className="w-[7px] h-[7px] rounded-full bg-[var(--gold)] animate-glow"
          aria-hidden="true"
        />
        AMD<span className="text-[var(--gold)]">Creatives</span>
      </div>

      {/* Badge */}
      <span
        className="text-[0.65rem] tracking-[0.18em] uppercase text-[var(--gold)]
                   border border-[rgba(201,168,76,0.4)] px-3 py-1 rounded-full
                   bg-[rgba(201,168,76,0.06)]"
        aria-label="Status: Coming Soon"
      >
        Coming Soon
      </span>
    </header>
  );
}
