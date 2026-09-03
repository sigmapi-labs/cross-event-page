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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaign.eventTiles.map((e) => (
            <article key={e.n} className="group overflow-hidden rounded-xl bg-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className={`object-cover origin-center transition duration-500 ease-out [@media(hover:hover)_and_(pointer:fine)]:motion-safe:group-hover:scale-[1.04] ${e.pos}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                {"badge" in e && e.badge ? (
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                    {e.badge}
                  </span>
                ) : null}
              </div>
              <div className="px-5 py-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="tabular text-[11px] font-black tracking-[0.14em] text-accent">{e.n}</span>
                  <span className="text-[12px] font-bold text-muted">{e.measure}</span>
                </div>
                <h3 className="text-[18px] font-black tracking-tight md:text-[20px]">{e.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-paper-ink">{e.tip}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-4 overflow-hidden rounded-xl md:mt-5">
          <div className="relative min-h-[200px] md:min-h-[280px]">
            <Image
              src={measure.closerImage}
              alt="시험장과 같은 실기 훈련장"
              fill
              className="object-cover object-center"
              sizes="1200px"
            />
            <div className="relative z-[1] flex min-h-[200px] flex-col justify-end px-6 py-7 md:min-h-[280px] md:px-10 md:py-9">
              <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-accent [text-shadow:0_1px_2px_rgba(0,0,0,0.8),0_2px_14px_rgba(0,0,0,0.55)]">
                시험장 = 교실
              </p>
              <p className="text-[20px] font-black leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_4px_18px_rgba(0,0,0,0.6)] md:whitespace-nowrap md:text-[clamp(15px,2.2vw,28px)]">
                {measure.closer}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed font-medium text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_3px_14px_rgba(0,0,0,0.55)] md:whitespace-nowrap md:text-[clamp(12px,1.55vw,15px)]">
                {measure.closerSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
