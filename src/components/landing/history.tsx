// @ts-nocheck — unused previous layout; kept for reference
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function History() {
  return (
    <section id="history" className="relative overflow-hidden bg-ink py-16 md:py-24">
      <p
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-60px] -translate-y-1/2 select-none text-[120px] font-black leading-none tracking-[-0.06em] text-accent/[0.06] md:text-[280px]"
      >
        26
      </p>

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="26년" />
        <h2 className="mb-16 max-w-[640px] text-[26px] font-black leading-[1.1] tracking-[-0.03em] md:text-[52px]">
          26년 동안 같은 시험을,
          <br />
          더 정확하게 가르쳤습니다
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[60px]">
          <div>
            <p className="mb-8 text-[11px] font-bold tracking-[0.15em] text-accent">연혁</p>
            <div className="flex flex-row gap-0 overflow-x-auto md:flex-col md:overflow-visible">
              {campaign.milestones.map((m, i) => (
                <div key={m.year} className="relative flex min-w-[140px] gap-5 md:min-w-0">
                  {i < campaign.milestones.length - 1 ? (
                    <div className="absolute top-6 bottom-0 left-[11px] hidden w-px bg-hairline md:block" />
                  ) : null}
                  <div className="shrink-0">
                    <div
                      className={`h-[22px] w-[22px] rounded-full border-2 ${
                        i === campaign.milestones.length - 1
                          ? "border-accent bg-accent shadow-[0_0_16px_#FF5C00]"
                          : "border-[#333] bg-charcoal"
                      }`}
                    />
                  </div>
                  <div className="pb-9">
                    <p className="tabular mb-1 text-[13px] font-bold text-accent">{m.year}</p>
                    <p className="text-[15px] font-bold">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[13px] leading-[1.7] text-muted">본점과 같은 커리큘럼을 분점에 엽니다.</p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-[10px] border border-hairline bg-[#111] p-6 md:px-6 md:py-7">
              <p className="mb-6 text-[11px] font-bold tracking-[0.15em] text-accent">커리큘럼 다이어그램</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {campaign.curriculum.map((stage, i) => (
                  <div key={stage} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-accent text-[12px] font-extrabold text-ink">
                      0{i + 1}
                    </span>
                    <p className="text-[14px] font-bold">{stage}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] leading-relaxed text-muted">
                시험장과 같은 종목, 같은 기준. 단체 구호가 아니라 기록 단위 코칭.
              </p>
            </div>

            <div>
              <p className="mb-5 text-[11px] font-bold tracking-[0.15em] text-accent">강사진</p>
              <div className="coach-row grid grid-cols-1 gap-3 sm:grid-cols-3">
                {campaign.coaches.map((c) => (
                  <article key={c.role} className="coach-card rounded-lg border border-hairline border-t-[3px] border-t-accent bg-[#1A1A1A] px-4 py-5">
                    <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#2A2A2A] text-[16px] font-extrabold text-accent">
                      {c.initial}
                    </div>
                    <p className="mb-1 text-[15px] font-extrabold">{c.name}</p>
                    <p className="text-[12px] font-semibold text-accent">{c.role}</p>
                    <p className="mt-1.5 text-[11px] text-muted">본점과 동일한 방식</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-center text-[12px] text-muted">검증된 커리큘럼 · 검증된 강사진 · 26년</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
