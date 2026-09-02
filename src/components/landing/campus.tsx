// @ts-nocheck — unused previous layout; kept for reference
import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

export function Campus() {
  const { branch } = campaign;
  const rows = [
    { label: "주소", value: branch.address },
    { label: "운영", value: branch.hours },
    { label: "오는 길", value: branch.access },
    { label: "시설", value: branch.facility },
  ];

  return (
    <section id="campus" className="bg-surface py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-[60px]">
          <div>
            <Kicker text="위치" />
            <h2 className="mb-3.5 text-[26px] font-black leading-[1.15] tracking-[-0.03em] md:text-[44px]">
              {campaign.branch.name}
              <br />
              새 기기, 같은 운영
            </h2>
            <p className="mb-11 max-w-[400px] text-[14px] leading-[1.75] text-muted">
              체대입시는 통학이 결정을 가릅니다. 주소가 확정되면 지도와 오는 길을 이 자리에 고정합니다.
            </p>
            {rows.map((row) => (
              <div key={row.label} className="flex gap-5 border-b border-line py-[18px]">
                <p className="w-[60px] shrink-0 pt-0.5 text-[11px] font-bold tracking-[0.1em] text-accent">{row.label}</p>
                <p className="text-[14px] leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-ink">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.2] saturate-[0.3]"
              style={{ backgroundImage: "url(/images/facility.jpg)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,92,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative text-center">
              <svg width="44" height="55" viewBox="0 0 44 55" fill="none" className="mx-auto mb-3" aria-hidden>
                <path d="M22 0C9.85 0 0 9.85 0 22C0 38.5 22 55 22 55C22 55 44 38.5 44 22C44 9.85 34.15 0 22 0Z" fill="#FF5C00" />
                <circle cx="22" cy="22" r="9" fill="white" />
              </svg>
              <p className="text-[15px] font-bold text-paper">오시는 길</p>
              <p className="mt-1.5 text-[12px] text-muted">주소 확정 후 공개</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
