import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Offer() {
  return (
    <section id="offer" className="scan relative overflow-hidden bg-ink py-16 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.06]"
        style={{ backgroundImage: "url(/images/runners.jpg)" }}
      />
      <div className="relative z-[2] mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="오퍼" />
        <h2 className="mb-3.5 max-w-[700px] text-[28px] font-black leading-[1.1] tracking-[-0.03em] md:text-[60px]">
          10월 수업은
          <br />
          한 시간도 돈 받지 않습니다
        </h2>
        <p className="mb-12 max-w-[560px] text-[15px] leading-[1.7] text-muted">
          10월은 정규반과 같은 4:1 수업·측정입니다. 체험 한 타임이 아닙니다. 자동 결제는 없습니다.
        </p>

        <div className="mb-10 rounded-xl border border-hairline bg-[#111] p-6 md:p-10">
          <p className="mb-7 text-[11px] font-bold tracking-[0.15em] text-accent">일정 타임라인</p>
          <Timeline />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[10px] border border-hairline bg-[#111] p-6 md:p-9">
            <p className="mb-5 text-[11px] font-bold tracking-[0.15em] text-accent">10월에 포함</p>
            {campaign.offer.included.map((item, i, arr) => (
              <div
                key={item}
                className={`flex items-center gap-3 py-2.5 ${i < arr.length - 1 ? "border-b border-hairline" : ""}`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-[14px] font-medium text-[#DDD]">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[10px] border border-hairline bg-[#1A1A1A] p-6 md:p-9">
            <div className="mb-5 flex items-center gap-3">
              <p className="text-[11px] font-bold tracking-[0.15em] text-muted">이후</p>
              <span className="rounded border border-danger bg-[#2A0000] px-2 py-0.5 text-[10px] font-bold text-danger">
                자동 결제 없음
              </span>
            </div>
            {campaign.offer.after.map((item, i, arr) => (
              <div
                key={item}
                className={`flex items-center gap-3 py-2.5 ${i < arr.length - 1 ? "border-b border-hairline" : ""}`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#444]" />
                <p className="text-[14px] text-[#888]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const nodes = campaign.timeline;

  return (
    <>
      <div className="timeline-h items-center overflow-x-auto pb-2">
        {nodes.map((n, i) => (
          <div key={n.date} className={`flex items-center ${n.tone === "bar" ? "min-w-[160px] flex-[2]" : "min-w-[100px] flex-1"}`}>
            <div className="flex shrink-0 flex-col items-center gap-2">
              {n.tone === "bar" ? (
                <span className="h-0 w-0" />
              ) : (
                <span
                  className={`relative z-[2] h-3 w-3 rounded-full border-2 ${
                    n.tone === "red"
                      ? "border-danger bg-danger shadow-[0_0_8px_#E10600]"
                      : n.tone === "orange"
                        ? "border-accent bg-accent shadow-[0_0_12px_#FF5C00]"
                        : "border-[#444] bg-[#444]"
                  }`}
                />
              )}
              <div className="text-center">
                <p
                  className={`tabular text-[13px] font-extrabold ${
                    n.tone === "red" ? "text-danger" : n.tone === "orange" || n.tone === "bar" ? "text-accent" : "text-paper"
                  }`}
                >
                  {n.date}
                </p>
                {n.tone !== "bar" ? <p className="mt-0.5 whitespace-nowrap text-[11px] text-muted">{n.label}</p> : null}
              </div>
            </div>
            {i < nodes.length - 1 ? (
              <div
                className={`relative mx-1 flex-1 ${
                  n.tone === "bar"
                    ? "h-7 rounded bg-accent shadow-[0_0_20px_rgba(255,92,0,0.6)]"
                    : "h-0.5 bg-[#333]"
                }`}
              >
                {n.tone === "bar" ? (
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] font-extrabold tracking-[0.1em] text-ink">
                    전면 무료
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="timeline-v flex-col">
        {nodes.map((n, i) => (
          <div key={n.date} className="relative flex gap-4">
            {i < nodes.length - 1 ? (
              <div
                className={`absolute top-6 bottom-0 left-[11px] w-0.5 ${
                  n.tone === "bar" ? "bg-accent shadow-[0_0_12px_rgba(255,92,0,0.5)]" : "bg-[#333]"
                }`}
              />
            ) : null}
            <div className="flex w-6 shrink-0 justify-center pt-1">
              <span
                className={`h-3 w-3 rounded-full ${
                  n.tone === "red"
                    ? "bg-danger shadow-[0_0_8px_#E10600]"
                    : n.tone === "orange" || n.tone === "bar"
                      ? "bg-accent shadow-[0_0_10px_#FF5C00]"
                      : "bg-[#444]"
                }`}
              />
            </div>
            <div className={n.tone === "bar" ? "" : "pb-7"}>
              {n.tone === "bar" ? (
                <div className="mb-7 rounded-lg bg-accent px-5 py-4 shadow-[0_0_30px_rgba(255,92,0,0.4)]">
                  <p className="text-[16px] font-black text-ink">10월 전면 무료</p>
                  <p className="mt-1 text-[12px] text-black/60">10.01 ~ 10.31</p>
                </div>
              ) : (
                <>
                  <p
                    className={`tabular text-[15px] font-extrabold ${
                      n.tone === "red" ? "text-danger" : n.tone === "orange" ? "text-accent" : "text-paper"
                    }`}
                  >
                    {n.date}
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted">{n.label}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
