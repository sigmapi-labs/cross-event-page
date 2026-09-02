import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 bg-ink py-16 md:scroll-mt-24 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="코스" />
        <h2 className="mb-3 max-w-[640px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">
          기초부터 만점까지
        </h2>
        <p className="mb-12 max-w-[480px] text-[15px] leading-[1.7] text-muted">
          트랙은 셋, 10월은 모두 무료입니다. 학년보다 지금 기록이 어디인지로 나눕니다.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {campaign.courses.map((c) => (
            <article key={c.n} className="rounded-xl border border-hairline bg-[#111] px-6 py-8">
              <p className="mb-6 tabular text-[12px] font-bold tracking-[0.16em] text-accent">{c.n}</p>
              <h3 className="mb-3 text-[28px] font-black tracking-tight">{c.title}</h3>
              <p className="mb-8 text-[15px] leading-relaxed text-muted">{c.point}</p>
              <p className="text-[13px] font-bold text-paper">{c.who}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
