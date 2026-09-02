// @ts-nocheck — unused previous layout; kept for reference
import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[4/5]">
            <Image
              src="/images/facility.jpg"
              alt="디지털 실기 측정 시설"
              fill
              className="object-cover brightness-[0.75] contrast-110"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent to-55%" />
            <p className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] text-accent">
              측정 시설 · 신규 도입
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
          </div>

          <div>
            <Kicker text="시험장 = 교실" />
            <h2 className="mb-5 max-w-[520px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[44px]">
              실제 입시 현장과
              <br />
              100% 유사한 환경에서
              <br />
              측정합니다
            </h2>
            <p className="mb-10 max-w-[440px] text-[15px] leading-[1.75] text-muted">
              체대입시에 필요한 디지털 측정장비를 전부 들입니다. 추측 코칭이 아니라, 시험장과 같은 기준으로
              기록을 남깁니다.
            </p>

            <p className="mb-4 text-[11px] font-bold tracking-[0.15em] text-accent">측정 프로세스</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              {campaign.process.map((step, i) => (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div className="flex-1 rounded-md border border-accent bg-[#1A1A1A] px-4 py-3 text-center">
                    <p className="text-[15px] font-extrabold text-accent">{step}</p>
                  </div>
                  {i < campaign.process.length - 1 ? (
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      className="hidden shrink-0 sm:block"
                      aria-hidden
                    >
                      <path
                        d="M12 1 L19 8 L12 15"
                        stroke="#FF5C00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line x1="0" y1="8" x2="18" y2="8" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-muted">완벽한 측정 + 만점 동작. 숫자로 다음 수업을 잡습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
