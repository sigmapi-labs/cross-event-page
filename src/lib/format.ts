const KO_DATE = new Intl.DateTimeFormat("ko-KR", {
  month: "numeric",
  day: "numeric",
  weekday: "short",
});

export function formatKoDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return KO_DATE.format(new Date(y, m - 1, d));
}

export function daysUntil(iso: string, from = new Date()) {
  const [y, m, d] = iso.split("-").map(Number);
  const target = new Date(y, m - 1, d, 23, 59, 59);
  return Math.ceil((target.getTime() - from.getTime()) / 86_400_000);
}
