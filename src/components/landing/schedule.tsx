// @ts-nocheck — unused previous layout; kept for reference
import { campaign } from "@/content/campaign";

export function Schedule() {
  const { schedule } = campaign;
  const cells = [
    { label: "기간", value: "10.1–10.31" },
    { label: "시간", value: schedule.time },
    { label: "요일", value: "월–금 중 3일" },
    { label: "장소", value: campaign.branch.name },
  ];

  return (
    <section id="schedule" className="scroll-mt-16 bg-accent text-ink md:scroll-mt-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {cells.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-8 text-center md:py-12 ${i % 2 === 0 ? "border-r border-black/10" : ""} ${i < 2 ? "border-b border-black/10 md:border-b-0" : ""} ${i === 2 ? "md:border-r" : ""}`}
            >
              <p className="mb-2 text-[11px] font-semibold tracking-[0.08em] text-black/50">{s.label}</p>
              <p className="tabular text-[20px] font-black leading-[1.15] tracking-tight md:text-[28px]">{s.value}</p>
            </div>
          ))}
        </div>
        <p className="border-t border-black/10 px-6 py-3 text-center text-[12px] font-medium text-black/55">
          {schedule.timeLabel} · {schedule.daysHint}{" "}
          <a href="#location" className="ml-1 font-bold underline-offset-2 hover:underline">
            오시는 길
          </a>
        </p>
      </div>
    </section>
  );
}
