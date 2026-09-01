import { campaign } from "@/content/campaign";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#050505] px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] leading-[1.7] text-muted">
          {campaign.company} · {campaign.phone} · {campaign.existingBranches.join(" · ")} · {campaign.heritageYears}년
          체대입시
          <span className="mx-2">·</span>
          <Link href="/kit" className="underline-offset-2 hover:underline">
            SNS 키트
          </Link>
        </p>
        <p className="text-[11px] tracking-[0.1em] text-[#333]">© 2026 {campaign.brandEn}</p>
      </div>
    </footer>
  );
}
