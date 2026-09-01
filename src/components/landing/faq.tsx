import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Faq() {
  return (
    <section id="faq" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[720px] px-5 md:px-6">
        <Kicker text="FAQ" />
        <h2 className="mb-12 text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[44px]">
          학부모가
          <br />
          여기서 멈춥니다
        </h2>
        <div className="border-t border-line">
          {campaign.faq.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                <span className="text-[14px] font-bold leading-snug md:text-[16px]">{item.q}</span>
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-[#E8E4DC] text-[20px] font-light text-muted transition-colors group-open:bg-accent group-open:text-white">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="pb-5 text-[14px] leading-[1.75] text-paper-ink">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
