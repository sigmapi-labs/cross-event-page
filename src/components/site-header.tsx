import { ApplyScrollLink } from "@/components/apply-scroll-link";
import { BrandLogo } from "@/components/brand-logo";
import { campaign } from "@/content/campaign";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 md:h-[72px] md:px-6">
        <a href="#top" className="shrink-0">
          <BrandLogo variant="gnb" className="h-7 w-auto md:h-8" />
        </a>
        <ApplyScrollLink className="inline-flex h-10 shrink-0 items-center rounded-lg bg-accent px-4 text-[13px] font-bold text-white hover:bg-accent-hover sm:px-5">
          {campaign.cta}
        </ApplyScrollLink>
      </div>
    </header>
  );
}
