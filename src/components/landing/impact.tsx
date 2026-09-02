// @ts-nocheck — unused previous layout; kept for reference
import { campaign } from "@/content/campaign";

export function ImpactStrip() {
  return (
    <section className="bg-accent text-ink">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "10월", sub: "수업 전액 무료" },
            { num: "26년", sub: "검증된 커리큘럼" },
            { num: campaign.offer.ratio, sub: "실기 코칭" },
            { num: `${campaign.offer.seats}명`, sub: "선착순 정원" },
          ].map((s, i) => (
            <div
              key={s.sub}
              className={`px-6 py-8 text-center md:py-12 ${i % 2 === 0 ? "border-r border-black/10" : ""} ${i < 2 ? "border-b border-black/10 md:border-b-0" : ""} ${i === 2 ? "md:border-r" : ""}`}
            >
              <p className="tabular mb-2 text-[36px] font-black leading-none tracking-[-0.04em] md:text-[64px]">
                {s.num}
              </p>
              <p className="text-[11px] font-semibold tracking-[0.06em] text-black/55 md:text-[13px]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
