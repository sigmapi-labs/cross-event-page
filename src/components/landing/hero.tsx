import { ApplyScrollLink } from "@/components/apply-scroll-link";
import { campaign } from "@/content/campaign";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string) {
  return `${base}${path}`;
}

export function Hero() {
  const { hero, offer, cta } = campaign;

  return (
    <>
      <section id="top" className="bg-ink pt-16 md:pt-[72px]">
        <video
          className="mx-auto block aspect-video h-auto w-full max-w-[1280px] object-contain"
          autoPlay
          muted
          loop
          playsInline
          poster={asset(hero.poster)}
        >
          <source src={asset(hero.video)} type="video/mp4" />
        </video>
      </section>

      <div className="bg-ink">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-3.5 text-center md:justify-between md:px-6 md:py-4 md:text-left">
          <p className="text-[12px] font-bold tracking-[0.16em] text-accent md:text-[13px]">{hero.eventKicker}</p>
          <p className="text-[15px] font-black tracking-tight text-paper md:text-[18px]">{hero.eventName}</p>
        </div>
      </div>

      <div className="bg-accent text-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-5 px-5 py-6 md:flex-row md:items-center md:justify-between md:gap-8 md:px-6 md:py-7">
          <div className="min-w-0 md:flex-1">
            <p className="text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[36px] lg:text-[40px]">
              {hero.offerLine}
            </p>
          </div>

          <div className="event-seats flex shrink-0 items-center gap-3 rounded-lg bg-ink px-4 py-3 text-paper md:px-5 md:py-3.5">
            <p className="tabular text-[28px] font-black leading-none tracking-tight md:text-[34px]">
              {offer.seats}
              <span className="ml-1 text-[15px] font-bold md:text-[17px]">{hero.seatsLabel}</span>
            </p>
            <span className="event-seats-note rounded-full bg-accent px-2.5 py-1 text-[11px] font-black tracking-tight text-white md:text-[12px]">
              {hero.seatsNote}
            </span>
          </div>

          <ApplyScrollLink className="event-cta inline-flex h-14 w-full shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-paper px-8 text-[16px] font-black tracking-tight text-ink hover:bg-white md:h-16 md:w-auto md:px-10 md:text-[18px]">
            {cta}
          </ApplyScrollLink>
        </div>
      </div>
    </>
  );
}
