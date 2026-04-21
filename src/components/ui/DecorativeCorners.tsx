export default function DecorativeCorners() {
  return (
    <>
      <div className="fixed top-5 left-5 w-10 h-10 opacity-30 border-t border-l border-[var(--gold)] z-10" aria-hidden="true" />
      <div className="fixed top-5 right-5 w-10 h-10 opacity-30 border-t border-r border-[var(--gold)] z-10" aria-hidden="true" />
      <div className="fixed bottom-5 left-5 w-10 h-10 opacity-30 border-b border-l border-[var(--gold)] z-10" aria-hidden="true" />
      <div className="fixed bottom-5 right-5 w-10 h-10 opacity-30 border-b border-r border-[var(--gold)] z-10" aria-hidden="true" />
    </>
  );
}
