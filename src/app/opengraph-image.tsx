import { ImageResponse } from "next/og";
import { campaign } from "@/content/campaign";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#F4F1EA",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <span>{campaign.brandEn}</span>
          <span>{campaign.admissionYear} 입시</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, color: "#FF5C00" }}>{campaign.offer.freeLabel}</div>
          <div style={{ fontSize: 64, lineHeight: 1.15, fontWeight: 800, letterSpacing: -2 }}>
            10월 수업, 전부 무료입니다.
          </div>
          <div style={{ fontSize: 28, color: "#8A847C", maxWidth: 820 }}>
            26년 체대입시 · 최신 기기 · 선착순 {campaign.offer.seats}명
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8A847C" }}>
          {campaign.existingBranches.join(" · ")} 다음 캠퍼스
        </div>
      </div>
    ),
    size,
  );
}
