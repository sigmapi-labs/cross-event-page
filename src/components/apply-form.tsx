import { campaign } from "@/content/campaign";

export function ApplyForm() {
  return (
    <div className="py-1 text-center">
      <p className="text-[16px] font-bold tracking-[0.14em] text-accent">사전 예약</p>
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
