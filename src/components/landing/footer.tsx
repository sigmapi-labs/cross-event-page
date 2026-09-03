import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { campaign } from "@/content/campaign";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#050505] px-6 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <BrandLogo variant="white" className="h-7 w-auto opacity-90" />
          <p className="text-[13px] leading-[1.7] text-muted">
            {campaign.company} · {campaign.phone} · {campaign.existingBranches.join(" · ")}
          </p>
          <nav aria-label="소셜" className="flex flex-wrap gap-x-4 gap-y-2">
            {campaign.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-muted hover:text-accent"
              >
                <SocialIcon name={s.icon} />
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-[11px] tracking-[0.1em] text-[#333]">© 2026 {campaign.brandEn}</p>
      </div>
    </footer>
  );
}
