import { ImageResponse } from "next/og";
import { campaign } from "@/content/campaign";

export const dynamic = "force-static";
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
            10월 한 달, 전 수업 무료
          </div>
          <div style={{ fontSize: 28, color: "#8A847C", maxWidth: 820 }}>
            크로스 체대입시 신규 지점 오픈 기념 · 조샘 직강 · 디지털 측정 6종
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#8A847C" }}>
          {campaign.existingBranches.join(" · ")} 다음 · {campaign.branch.name}
        </div>
      </div>
    ),
    size,
  );
}
