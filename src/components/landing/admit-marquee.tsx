import { admits, type Admit } from "@/content/admits";

function Card({ a }: { a: Admit }) {
  return (
    <article className="flex w-[220px] shrink-0 flex-col justify-between rounded-lg border border-hairline bg-charcoal px-4 py-3.5 md:w-[240px]">
      <p className="text-[11px] font-bold tracking-wide text-accent">{a.year}</p>
      <p className="mt-2 text-[15px] font-extrabold leading-snug tracking-tight">{a.university}</p>
      <p className="mt-1 text-[12px] leading-snug text-muted">{a.major}</p>
      <p className="mt-3 text-[13px] font-bold">
        {a.name}
        <span className="ml-1.5 font-medium text-muted">· {a.school}</span>
      </p>
    </article>
  );
}

function Track({ items, reverse }: { items: Admit[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} motion-reduce:animate-none`}
      >
        {loop.map((a, i) => (
          <Card key={`${a.year}-${a.university}-${a.name}-${a.school}-${i}`} a={a} />
        ))}
      </div>
    </div>
  );
}

export function AdmitMarquee() {
  const y2025 = admits.filter((a) => a.year === 2025);
  const y2026 = admits.filter((a) => a.year === 2026);

  return (
    <div className="mt-12">
      <div className="marquee-fade flex flex-col gap-3 overflow-hidden py-1 hover:[&_.animate-marquee]:[animation-play-state:paused] hover:[&_.animate-marquee-reverse]:[animation-play-state:paused]">
        <Track items={y2026} />
        <Track items={y2025} reverse />
      </div>
    </div>
  );
}
