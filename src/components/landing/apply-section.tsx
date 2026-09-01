import { ApplyForm } from "@/components/apply-form";
import { campaign } from "@/content/campaign";
import { formatKoDate } from "@/lib/format";
import { Kicker } from "./kicker";

export function ApplySection() {
  const { offer } = campaign;

  return (
    <section id="apply" className="bg-ink pb-28 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Kicker text="신청" />
            <h2 className="mb-5 text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[44px]">
              10월을 무료로 쓰고,
              <br />
              12월 전에
              <br />
              자리를 확정하세요
            </h2>
            <p className="mb-9 text-[14px] leading-[1.7] text-muted">
              선착순 {offer.seats}명 · 신청 마감 {formatKoDate(offer.applyDeadline)}
              <br />
              폼 또는 카카오. 하루 안에 연락드립니다.
            </p>

            <div className="mb-7">
              <p className="mb-2 text-[12px] text-muted">전화</p>
              <a href={campaign.phoneHref} className="tabular text-[28px] font-black tracking-tight md:text-[38px]">
                {campaign.phone}
              </a>
            </div>
            <a
              href={campaign.kakaoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#FEE500] px-8 text-[15px] font-bold text-[#1A1A1A]"
            >
              카카오 상담
            </a>

            <div className="mt-10 flex flex-wrap gap-2">
              {["26년 커리큘럼", "최신 기기", "10월 전면 무료"].map((tag, i) => (
                <span
                  key={tag}
                  className={`rounded-full border border-hairline bg-[#1A1A1A] px-3.5 py-1.5 text-[12px] font-bold ${
                    i === 2 ? "text-accent" : "text-muted"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-danger/25 bg-[#0D0000] p-5">
              <p className="mb-1.5 text-[12px] font-bold text-danger">마감 임박</p>
              <p className="text-[14px] leading-relaxed text-[#AA8880]">
                9.12 마감 · 선착순 {offer.seats}명
              </p>
            </div>
          </div>

          <div className="glow-orange relative rounded-xl bg-paper p-7 text-ink md:p-11">
            <div className="absolute top-0 right-6 left-6 h-0.5 rounded bg-accent" />
            <ApplyForm />
            <p className="mt-3 text-center text-[12px] font-bold text-danger">
              9.12 마감 · 선착순 {offer.seats}명 · 10월 전면 무료
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
