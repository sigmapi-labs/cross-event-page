import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Tracks() {
  return (
    <section id="tracks" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="누구를 위한 행사인가" />
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[480px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[52px]">
            트랙은 셋, 오퍼는 하나
            <br />
            <span className="text-accent">10월은 모두 무료</span>
          </h2>
          <p className="max-w-[420px] text-[15px] leading-[1.75] text-paper-ink">
            체대입시는 12월까지 정원을 채우고 다음 해 수시·정시를 돌립니다. 10월 무료는 그 전에 기록과 시설을 확인하고
            자리를 여는 기간입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
          {campaign.tracks.map((t, i) => (
            <article
              key={t.id}
              className={`relative overflow-hidden bg-white px-6 py-8 md:px-9 md:py-10 ${
                i === 0 ? "rounded-[10px] md:rounded-r-none" : i === 2 ? "rounded-[10px] md:rounded-l-none" : "rounded-[10px] md:rounded-none"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-accent" />
              <p className="mb-5 text-[36px] font-black leading-none tracking-[-0.05em] text-accent/12 md:text-[48px]">
                {t.n}
              </p>
              <h3 className="mb-2.5 text-[22px] font-extrabold tracking-tight">{t.title}</h3>
              <p className="mb-3 text-[15px] font-bold leading-snug">{t.point}</p>
              <p className="text-[14px] leading-relaxed text-muted">{t.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
