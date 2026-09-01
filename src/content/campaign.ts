/** 분점·일정·카카오만 바꾸면 랜딩/OG/키트가 같이 바뀝니다. */

export const campaign = {
  brand: "크로스 체대입시",
  brandEn: "CROSS P.E. ACADEMY",
  company: "(주)크로스에듀테크",
  phone: "1833-4808",
  phoneHref: "tel:1833-4808",
  kakaoUrl: "https://pf.kakao.com/_crosspe",
  siteUrl: "https://event.crosspe.kr",
  existingBranches: ["강북본점", "청량리점"],
  admissionYear: 2027,
  heritageYears: 26,
  branch: {
    name: "신규 분점",
    shortName: "분점",
    address: "주소 확정 후 입력",
    hours: "평일 06:00–22:00 · 토 07:00–18:00",
    access: "지하철·버스 동선은 주소 확정 후 공개",
    facility: "최신 실기 측정 기기 신규 도입",
    mapUrl: "",
  },
  offer: {
    headline: "10월 수업,\n전부 무료입니다.",
    subhead:
      "26년 체대입시. 최신 기기 시설에서, 12월 전에 자리를 잡으세요. 수시·정시 체대입시는 겨울에 끝나지 않습니다. 가을에 자리가 찹니다.",
    freeLabel: "10월 수업 전면 무료",
    freeStart: "2026-10-01",
    freeEnd: "2026-10-31",
    applyDeadline: "2026-09-12",
    paidStart: "2026-11-01",
    recruitUntil: "2026-12-20",
    seats: 40,
    ratio: "4:1",
    included: [
      "4:1 실기 수업",
      "최신 기기 측정",
      "종목 테스트 1회 + 기록 리포트",
      "수시·정시 트랙 상담 1회",
      "강제 결제 없음",
    ],
    after: [
      "3주차 기록 상담",
      "등록한 경우만 11월부터 유료",
      "미등록 시 무료 기간 종료로 종료",
    ],
  },
  tracks: [
    {
      id: "g2",
      n: "01",
      title: "고2 · 예비고3",
      point: "내년 수시 전에 기본기를 고정",
      detail: "지금 기록을 재고, 12월 이전에 수시 트랙을 확정합니다.",
    },
    {
      id: "g3",
      n: "02",
      title: "고3 수시",
      point: "실기 직전, 기록을 한 번 더",
      detail: "실기 시험 직전 마지막 점검. 기록 리포트로 전략을 세웁니다.",
    },
    {
      id: "n",
      n: "03",
      title: "N수 · 검정고시",
      point: "정시 한 시즌을 여기서 마침",
      detail: "정시 트랙 전문. 데이터 기반 커리큘럼으로 한 시즌을 완성합니다.",
    },
  ],
  timeline: [
    { date: "9.12", label: "신청 마감", tone: "red" as const },
    { date: "10.01", label: "무료 수업 시작", tone: "orange" as const },
    { date: "10월", label: "전면 무료 기간", tone: "bar" as const },
    { date: "3주차", label: "기록 상담", tone: "muted" as const },
    { date: "11월", label: "정규반 전환 (선택)", tone: "muted" as const },
  ],
  facilities: [
    { name: "전자 계측 게이트", desc: "10m 왕복 기록을 0.01초 단위로" },
    { name: "도약 측정 매트", desc: "제자리멀리뛰기 거리를 데이터로" },
    { name: "근력·근지구력 스테이션", desc: "윗몸일으키기·메디신볼을 같은 기준으로" },
    { name: "기록 대시보드", desc: "수업이 끝나면 리포트로 남습니다" },
  ],
  milestones: [
    { year: "2000", event: "개원" },
    { year: "2008", event: "강북본점 이전" },
    { year: "2017", event: "청량리점 오픈" },
    { year: "2026", event: "신규 분점 오픈" },
  ],
  curriculum: ["측정", "기록 분석", "4:1 보정 훈련", "재측정"],
  coaches: [
    { role: "실기 총괄", name: "김 코치", initial: "김" },
    { role: "기록 분석", name: "박 코치", initial: "박" },
    { role: "수시·정시 상담", name: "이 코치", initial: "이" },
  ],
  eventTiles: [
    { n: "01", name: "10m 왕복달리기", sub: "민첩성 · 순발력" },
    { n: "02", name: "제자리멀리뛰기", sub: "폭발력 · 하체 근력" },
    { n: "03", name: "핸드볼 던지기", sub: "상체 파워 · 협응력" },
    { n: "04", name: "윗몸일으키기", sub: "코어 근지구력" },
    { n: "05", name: "기타 · 상담 후 결정", sub: "개인 목표 맞춤" },
  ],
  reasons: [
    { title: "4:1 레슨", body: "단체 수업이 아니라 기록 단위로 코칭합니다." },
    { title: "같은 방식으로 측정", body: "시험장과 같은 종목·같은 기준으로 월간 테스트를 봅니다." },
    { title: "데이터로 상담", body: "체감이 아니라 기록 리포트로 수시·정시 트랙을 나눕니다." },
    { title: "본점과 같은 운영", body: "강북본점·청량리점과 같은 커리큘럼을 분점에 엽니다." },
  ],
  faq: [
    {
      q: "10월이 정말 전부 무료인가요?",
      a: "네. 10월 수업은 전면 무료입니다. 정규반과 같은 4:1 수업과 측정입니다. 한 타임 체험이 아닙니다.",
    },
    {
      q: "무료 끝나면 자동 결제되나요?",
      a: "되지 않습니다. 3주차 상담 후 등록한 경우만 유료로 이어집니다.",
    },
    {
      q: "시설이 본점과 다른가요?",
      a: "분점 오픈에 맞춰 최신 측정 기기를 새로 들입니다. 커리큘럼과 코칭은 26년 본점 방식 그대로입니다.",
    },
    {
      q: "고3만 받나요?",
      a: "고2 선점, 고3 수시, N수·정시 모두 받습니다. 트랙만 나눕니다.",
    },
    {
      q: "정원은 왜 제한인가요?",
      a: "실기 코칭은 슬롯제입니다. 분점 오픈 행사도 선착순 40명입니다.",
    },
    {
      q: "본점에서 옮겨도 되나요?",
      a: "강북·청량리 재원생의 분점 전환은 데스크 상담으로 안내합니다.",
    },
  ],
  grades: ["중3", "고1", "고2", "고3", "N수", "검정고시"],
  events: [
    "10m 왕복달리기",
    "제자리멀리뛰기",
    "핸드볼 던지기",
    "윗몸일으키기",
    "기타 / 상담 후 결정",
  ],
} as const;

export type Campaign = typeof campaign;
