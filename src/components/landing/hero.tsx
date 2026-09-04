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
        <div className="px-5 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-2xl">
            <video
              className="block aspect-video h-auto w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              poster={asset(hero.poster)}
            >
              <source src={asset(hero.video)} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <div className="bg-accent text-ink">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-5 py-[28px] md:grid-cols-[1fr_min(46%,520px)] md:items-stretch md:gap-16 md:px-6">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[36px] lg:text-[44px]">
              <span className="whitespace-pre-line md:hidden">{hero.offerLine.replace(", ", ",\n")}</span>
              <span className="hidden md:inline">{hero.offerLine}</span>
            </p>
            <p className="mt-3 break-keep text-[15px] font-semibold tracking-tight md:text-[18px] lg:text-[20px]">
              {campaign.branch.shortName} 오픈 기념{" "}
              <strong className="font-black">{offer.seats}명</strong> 선착순!
            </p>
          </div>
          <div className="relative flex w-full justify-end md:h-full">
            <div className="relative w-full md:h-full md:w-1/2">
              <div className="pointer-events-none absolute bottom-[calc(100%-1px)] left-1/2 -translate-x-1/2">
                <div className="event-seats-bubble relative">
                  <span className="inline-flex items-center whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[12px] font-black leading-none tracking-tight text-white md:text-[13px]">
                    {hero.seatsNote}
                  </span>
                  <span
                    aria-hidden
                    className="absolute top-full left-1/2 -mt-px -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-ink"
                  />
                </div>
              </div>
              <ApplyScrollLink className="event-cta flex h-12 w-full items-center justify-center rounded-lg bg-paper px-8 text-[16px] font-black tracking-tight !text-ink hover:bg-white md:h-full md:text-[24px] lg:text-[26px]">
                {cta}
              </ApplyScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
