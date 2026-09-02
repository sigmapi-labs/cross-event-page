"use client";

import { ApplyScrollLink } from "@/components/apply-scroll-link";
import { campaign } from "@/content/campaign";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-ink px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-lg gap-2.5">
        <a
          href={campaign.kakaoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#FEE500] text-[14px] font-bold text-[#1A1A1A]"
        >
          카카오 상담
        </a>
        <ApplyScrollLink className="flex h-12 flex-1 items-center justify-center rounded-lg bg-accent text-[14px] font-bold text-white">
          {campaign.cta}
        </ApplyScrollLink>
      </div>
    </div>
  );
}
