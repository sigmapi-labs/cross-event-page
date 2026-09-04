import { LocationMap } from "@/components/landing/location-map";
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Location() {
  const { branch } = campaign;

  return (
    <section id="location" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-10">
          <div>
            <Kicker text="위치" />
            <h2 className="mb-8 text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[44px]">
              {branch.name}
            </h2>

            <p className="text-[16px] font-bold tracking-[0.12em] text-accent">주소</p>
            <p className="mt-2 break-keep text-[22px] font-black leading-snug tracking-tight md:text-[28px]">{branch.address}</p>
            <p className="mt-1 text-[14px] text-muted">{branch.landmark}</p>

            <div className="mt-8">
              {branch.accessItems.map((row) => (
                <div key={row.label} className="flex gap-5 border-b border-hairline py-4">
                  <p className="w-[52px] shrink-0 text-[12px] font-bold tracking-[0.08em] text-accent">{row.label}</p>
                  <p className="text-[15px] leading-relaxed text-paper">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[280px] overflow-hidden rounded-xl border border-hairline md:h-[360px] lg:h-[420px]">
            <LocationMap lat={branch.lat} lng={branch.lng} label={branch.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
