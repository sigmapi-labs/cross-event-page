import { campaign } from "@/content/campaign";
import { Kicker } from "./kicker";

const RADAR_AXES = ["10m 왕복", "제자리\n멀리뛰기", "핸드볼\n던지기", "윗몸\n일으키기", "기타 종목"];
const RADAR_VALUES = [0.82, 0.75, 0.88, 0.7, 0.65];
const BAR = [
  { week: "1주차", value: 65 },
  { week: "2주차", value: 72 },
  { week: "3주차", value: 80 },
  { week: "4주차", value: 91 },
];

export function Events() {
  return (
    <section id="events" className="bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Kicker text="실기 종목" />
        <h2 className="mb-12 text-[26px] font-black leading-[1.1] tracking-[-0.03em] md:text-[48px]">
          시험장과 같은 기준으로 재고,
          <br />
          그래프로 보여 줍니다
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {campaign.eventTiles.map((e) => (
            <article
              key={e.n}
              className="flex items-center gap-4 rounded-lg border border-line border-l-[3px] border-l-accent bg-white px-5 py-6 md:px-7 md:py-8"
            >
              <span className="shrink-0 text-[28px] font-black tracking-tight text-accent/15">{e.n}</span>
              <div>
                <p className="mb-1 text-[15px] font-extrabold">{e.name}</p>
                <p className="text-[12px] text-muted">{e.sub}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="scan relative overflow-hidden rounded-xl bg-ink p-7 text-paper md:p-11">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-[#FF2D00]" />
          <div className="relative z-[2] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
            <div>
              <p className="mb-5 text-[11px] font-bold tracking-[0.15em] text-accent">종목 밸런스 (예시)</p>
              <RadarChart />
            </div>
            <div>
              <p className="mb-5 text-[11px] font-bold tracking-[0.15em] text-accent">4주 기록 변화 (예시)</p>
              <BarChart />
              <p className="mt-3 text-center text-[11px] text-muted">100점 만점 기준 평균</p>
            </div>
          </div>
          <p className="relative z-[2] mt-8 text-center text-[13px] leading-[1.7] text-muted">
            체감 상담이 아니라 기록 리포트로 수시·정시 트랙을 나눕니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function RadarChart() {
  const cx = 110;
  const cy = 110;
  const r = 80;
  const n = RADAR_AXES.length;
  const pts = (scale: number) =>
    RADAR_AXES.map((_, i) => {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      return [cx + Math.cos(angle) * r * scale, cy + Math.sin(angle) * r * scale] as const;
    });
  const dataPoints = RADAR_AXES.map((_, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * r * RADAR_VALUES[i], cy + Math.sin(angle) * r * RADAR_VALUES[i]] as const;
  });

  return (
    <svg viewBox="0 0 220 220" className="mx-auto block w-full max-w-[240px]" aria-hidden>
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <polygon
          key={scale}
          points={pts(scale)
            .map((p) => p.join(","))
            .join(" ")}
          fill="none"
          stroke="#2A2A2A"
          strokeWidth="1"
        />
      ))}
      {pts(1).map((p, i) => (
        <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke="#2A2A2A" strokeWidth="1" />
      ))}
      <polygon
        points={dataPoints.map((p) => p.join(",")).join(" ")}
        fill="rgba(255,92,0,0.2)"
        stroke="#FF5C00"
        strokeWidth="2"
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#FF5C00" />
      ))}
      {RADAR_AXES.map((axis, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const lx = cx + Math.cos(angle) * (r + 20);
        const ly = cy + Math.sin(angle) * (r + 20);
        const lines = axis.split("\n");
        return (
          <text
            key={axis}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#8A847C"
            fontSize="9"
            fontFamily="Pretendard, sans-serif"
          >
            {lines.map((line, li) => (
              <tspan key={line} x={lx} dy={li === 0 ? (lines.length > 1 ? -6 : 0) : 12}>
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}

function BarChart() {
  const max = 100;
  return (
    <div className="flex h-[180px] items-end gap-3 px-1" role="img" aria-label="4주 기록 변화 예시 차트">
      {BAR.map((b, i) => (
        <div key={b.week} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-[150px] w-full items-end justify-center">
            <div
              className="w-7 rounded-t md:w-8"
              style={{
                height: `${(b.value / max) * 100}%`,
                backgroundColor: i === 3 ? "#FF5C00" : `rgba(255,92,0,${0.35 + i * 0.15})`,
              }}
            />
          </div>
          <p className="text-[12px] text-muted">{b.week}</p>
        </div>
      ))}
    </div>
  );
}
