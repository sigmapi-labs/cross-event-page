import { BrandLogo } from "@/components/brand-logo";
import { campaign } from "@/content/campaign";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#050505] px-6 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <BrandLogo variant="white" className="h-7 w-auto opacity-90" />
          <p className="text-[13px] leading-[1.7] text-muted">
            {campaign.company} · {campaign.phone} · {campaign.existingBranches.join(" · ")}
          </p>
        </div>
        <p className="text-[11px] tracking-[0.1em] text-[#333]">© 2026 {campaign.brandEn}</p>
      </div>
    </footer>
  );
}
