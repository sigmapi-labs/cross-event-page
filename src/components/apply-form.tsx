import { campaign } from "@/content/campaign";

export function ApplyForm() {
  return (
    <div className="py-1">
      <p className="text-[12px] font-bold tracking-[0.14em] text-accent">사전 예약</p>
      <h3 className="mt-2 text-[22px] font-extrabold tracking-tight">신청서를 작성해 주세요.</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-paper-ink">
        이름, 연락처, 학적만 넣으면 됩니다. 하루 안에 연락드립니다.
      </p>
      <a
        href={campaign.googleFormUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent text-[15px] font-bold text-white hover:bg-accent-hover"
      >
        {campaign.cta}
      </a>
    </div>
  );
}
