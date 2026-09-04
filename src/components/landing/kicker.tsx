export function Kicker({ text, className }: { text: string; className?: string }) {
  return (
    <p className={`mb-4 text-[16px] font-bold uppercase tracking-[0.16em] text-accent ${className ?? ""}`}>{text}</p>
  );
}

