import { campaign } from "@/content/campaign";
import Image from "next/image";
import { Kicker } from "./kicker";

export function Facilities() {
  return (
    <section id="facilities" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="시설" />
        <h2 className="mb-3.5 max-w-[600px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[52px]">
          최신식 기기를 들여,
          <br />
          기록을 추측하지 않습니다
        </h2>
        <p className="mb-12 max-w-[500px] text-[15px] leading-[1.7] text-paper-ink">
          체감이 아니라 기계가 잰 숫자로 수업합니다. 신규 분점 오픈과 함께 실기 측정 장비를 새로 들입니다.
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="/images/facility.jpg"
              alt="최신 실기 측정 시설"
              fill
              className="object-cover brightness-[0.8] contrast-110"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent to-60%" />
            <div className="pointer-events-none absolute inset-4 rounded-lg border border-accent/30">
              <p className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.2em] text-accent">
                측정 시설 · 신규 도입
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {campaign.facilities.map((s, i) => (
                <article key={s.name} className="rounded-lg border border-line border-t-[3px] border-t-accent bg-white px-5 py-6">
                  <p className="mb-3 tabular text-[22px] font-black text-accent/30">0{i + 1}</p>
                  <p className="mb-1.5 text-[14px] font-extrabold">{s.name}</p>
                  <p className="text-[13px] leading-relaxed text-muted">{s.desc}</p>
                </article>
              ))}
            </div>

            <div className="scan overflow-hidden rounded-[10px] bg-ink p-6 md:px-6 md:py-7">
              <p className="relative z-[2] mb-5 text-[11px] font-bold tracking-[0.15em] text-accent">측정 프로세스</p>
              <div className="relative z-[2] flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                {["측정", "데이터", "4:1 코칭"].map((step, i) => (
                  <div key={step} className="flex flex-1 items-center gap-2">
                    <div className="flex-1 rounded-md border border-accent bg-[#1A1A1A] px-4 py-3 text-center shadow-[0_0_16px_rgba(255,92,0,0.15)]">
                      <p className="text-[15px] font-extrabold text-accent">{step}</p>
                    </div>
                    {i < 2 ? (
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="hidden shrink-0 sm:block" aria-hidden>
                        <path d="M12 1 L19 8 L12 15" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="0" y1="8" x2="18" y2="8" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
