import { BrandLogo } from "@/components/brand-logo";
import { SocialIcon } from "@/components/social-icon";
import { campaign } from "@/content/campaign";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-[#050505] px-6 py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <BrandLogo variant="white" className="h-11 w-auto opacity-90 md:h-14" />
        <p className="text-[16px] font-bold tracking-tight text-muted md:text-[18px]">{campaign.company}</p>
        <nav aria-label="소셜" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {campaign.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[16px] font-bold text-muted hover:text-accent md:text-[18px]"
            >
              <SocialIcon name={s.icon} className="size-6 shrink-0 md:size-7" />
              {s.label}
            </a>
          ))}
        </nav>
        <p className="text-[13px] tracking-[0.1em] text-[#555]">© 2026 {campaign.brandEn}</p>
      </div>
    </footer>
  );
}
