import { campaign } from "@/content/campaign";
import Image from "next/image";
import { FacilitySlider } from "./facility-slider";
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
                  <span className="tabular text-[16px] font-black tracking-[0.14em] text-accent">{e.n}</span>
                  <span className="text-[12px] font-bold text-muted">{e.measure}</span>
                </div>
                <h3 className="text-[18px] font-black tracking-tight md:text-[20px]">{e.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-paper-ink">{e.tip}</p>
              </div>
            </article>
          ))}
        </div>

        <FacilitySlider images={measure.closerImages} title={measure.closer} sub={measure.closerSub} />
      </div>
    </section>
  );
}
