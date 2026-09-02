import { LocationMap } from "@/components/landing/location-map";
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Location() {
  const { branch } = campaign;

  return (
    <section id="location" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <Kicker text="위치" />
            <h2 className="mb-3 text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[44px]">
              {branch.name}
            </h2>
            <p className="mb-8 max-w-[440px] text-[15px] leading-[1.7] text-muted">
              강북 본원 · 청량리점에 이은 세 번째 캠퍼스입니다. 수업은 {branch.landmark}에서 합니다.
            </p>

            <p className="text-[12px] font-bold tracking-[0.12em] text-accent">주소</p>
            <p className="mt-2 text-[22px] font-black leading-snug tracking-tight md:text-[28px]">{branch.address}</p>
            <p className="mt-1 text-[14px] text-muted">{branch.landmark}</p>
          </div>

          <div className="border-t border-hairline md:border-t-0">
            {branch.accessItems.map((row) => (
              <div key={row.label} className="flex gap-5 border-b border-hairline py-4">
                <p className="w-[52px] shrink-0 text-[12px] font-bold tracking-[0.08em] text-accent">{row.label}</p>
                <p className="text-[15px] leading-relaxed text-paper">{row.value}</p>
              </div>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={branch.kakaoMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-lg px-5 text-[13px] font-bold"
                style={{ backgroundColor: "#FEE500", color: "#191919" }}
              >
                카카오맵
              </a>
              <a
                href={branch.naverMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-lg px-5 text-[13px] font-bold"
                style={{ backgroundColor: "#03C75A", color: "#191919" }}
              >
                네이버 지도
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 h-[420px] w-full overflow-hidden rounded-xl border border-hairline md:h-[560px]">
          <LocationMap lat={branch.lat} lng={branch.lng} label={branch.name} />
        </div>
      </div>
    </section>
  );
}
