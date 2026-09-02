import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Events() {
  const { measure } = campaign;

  return (
    <section id="events" className="scroll-mt-20 bg-paper py-16 text-ink md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text={measure.kicker} />
        <h2 className="mb-4 max-w-[640px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">
          {measure.title}
        </h2>
        <p className="mb-10 max-w-[560px] text-[15px] leading-[1.75] text-paper-ink">{measure.body}</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {campaign.eventTiles.map((e) => (
            <article key={e.n} className="group relative overflow-hidden rounded-xl bg-ink text-paper">
              <div className="relative aspect-[4/3]">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className={`object-cover brightness-[0.55] contrast-110 transition duration-300 group-hover:brightness-[0.65] ${e.pos}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink from-5% via-ink/40 to-transparent" />
                {"badge" in e && e.badge ? (
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                    {e.badge}
                  </span>
                ) : (
                  <span className="absolute top-3 left-3 tabular text-[12px] font-bold tracking-wide text-white/50">
                    {e.n}
                  </span>
                )}
              </div>
              <div className="relative -mt-16 px-5 pb-5">
                <h3 className="text-[20px] font-extrabold tracking-tight">{e.name}</h3>
                <p className="mt-1 text-[12px] text-muted">{e.measure}</p>
                <p className="mt-2 text-[14px] font-medium text-paper/90">{e.tip}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden rounded-xl">
          <div className="relative min-h-[200px] md:min-h-[280px]">
            <Image
              src={measure.closerImage}
              alt="시험장과 같은 실기 훈련장"
              fill
              className="object-cover object-center brightness-[0.5] contrast-110"
              sizes="1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink from-10% to-ink/40" />
            <div className="relative z-[1] flex min-h-[200px] flex-col justify-end px-6 py-7 md:min-h-[280px] md:px-10 md:py-9">
              <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-accent">시험장 = 교실</p>
              <p className="max-w-[640px] text-[20px] font-black leading-snug tracking-tight text-paper md:text-[28px]">
                {measure.closer}
              </p>
              <p className="mt-3 max-w-[520px] text-[14px] leading-relaxed text-muted">{measure.closerSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
