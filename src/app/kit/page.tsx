import { campaign } from "@/content/campaign";
import { formatKoDate } from "@/lib/format";
import { withUtm } from "@/lib/utm";
import Link from "next/link";

const POSTS = [
  {
    channel: "인스타 릴스",
    who: "학생",
    utm: { source: "instagram", medium: "reels", campaign: "branch-open", content: "record" },
    copy: `${campaign.branch.name} 오픈. 10월 수업 전면 무료로 기록부터 확인.\n${campaign.admissionYear} 수시·정시, 12월 전에 자리 잡기.\n링크에서 신청.`,
  },
  {
    channel: "카카오 채널",
    who: "학부모",
    utm: { source: "kakao", medium: "channel", campaign: "branch-open", content: "parent" },
    copy: `${campaign.brand} ${campaign.branch.name} 오픈 행사입니다.\n${formatKoDate(campaign.offer.freeStart)}–${formatKoDate(campaign.offer.freeEnd)} 10월 수업 전면 무료.\n자동 결제 없고, 3주차 상담 후 등록을 결정합니다.\n선착순 ${campaign.offer.seats}명. ${formatKoDate(campaign.offer.applyDeadline)} 마감.`,
  },
  {
    channel: "유튜브 쇼츠",
    who: "탐색",
    utm: { source: "youtube", medium: "shorts", campaign: "branch-open", content: "lesson" },
    copy: `강북·청량리에 이은 분점. ${campaign.offer.ratio} 수업, 시험장과 같은 측정.\n10월은 전면 무료, 11월부터 유료. 자세한 일정은 페이지.`,
  },
  {
    channel: "당근 · 로컬",
    who: "분점 반경",
    utm: { source: "local", medium: "community", campaign: "branch-open", content: "map" },
    copy: `집 근처 체대입시 분점이 열립니다.\n10월 수업 전면 무료, 선착순 ${campaign.offer.seats}명.\n위치와 시간 확인 후 신청하세요.`,
  },
];

export default function KitPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
          <p className="text-[15px] font-semibold">{campaign.brand} SNS 키트</p>
          <Link href="/" className="text-[13px] text-accent">
            랜딩으로
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-[28px] font-semibold tracking-tight">같은 오퍼, 채널만 다릅니다</h1>
        <p className="mt-3 text-[15px] text-muted">
          카피는 채널에 맞게, 링크는 항상 랜딩입니다. UTM이 붙어야 어떤 콘텐츠가 신청을 만들었는지 보입니다.
        </p>
        <ol className="mt-10 space-y-6">
          {POSTS.map((p) => {
            const path = withUtm("/", p.utm);
            return (
              <li key={p.channel} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-[12px] font-semibold tracking-[0.08em] text-accent">
                  {p.channel} · {p.who}
                </p>
                <pre className="mt-3 whitespace-pre-wrap font-sans text-[15px] leading-relaxed">{p.copy}</pre>
                <p className="mt-4 break-all text-[13px] text-muted">
                  {campaign.siteUrl}
                  {path}
                </p>
              </li>
            );
          })}
        </ol>
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="text-[18px] font-semibold">주간 리듬</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-muted">
            <li>월 · 잔여 슬롯 / D-day → 신청</li>
            <li>화 · 기록 전후 클립 → 데이터</li>
            <li>수 · 4:1 수업 15초 → 수업 방식</li>
            <li>목 · 분점 시설·오는 길 → 위치</li>
            <li>금 · 학부모 FAQ → 카카오</li>
            <li>토 · 주간 기록회 → 신청</li>
            <li>일 · 스토리 투표 → 같은 링크</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
