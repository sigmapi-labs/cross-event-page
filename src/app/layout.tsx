import type { Metadata } from "next";
import { campaign } from "@/content/campaign";
import "./globals.css";

const title = `${campaign.brand} ${campaign.branch.name} · 10월 전면 무료`;
const description = `${campaign.offer.freeLabel}. ${campaign.offer.subhead}`;

export const metadata: Metadata = {
  metadataBase: new URL(campaign.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ko_KR",
    type: "website",
    siteName: campaign.brand,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
