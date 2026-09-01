export type Utm = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
};

export const emptyUtm: Utm = {
  source: "",
  medium: "",
  campaign: "",
  content: "",
};

export function readUtm(search: string): Utm {
  const q = new URLSearchParams(search);
  return {
    source: q.get("utm_source") ?? "",
    medium: q.get("utm_medium") ?? "",
    campaign: q.get("utm_campaign") ?? "",
    content: q.get("utm_content") ?? "",
  };
}

export function withUtm(path: string, utm: Partial<Utm>) {
  const url = new URL(path, "https://event.crosspe.kr");
  if (utm.source) url.searchParams.set("utm_source", utm.source);
  if (utm.medium) url.searchParams.set("utm_medium", utm.medium);
  if (utm.campaign) url.searchParams.set("utm_campaign", utm.campaign);
  if (utm.content) url.searchParams.set("utm_content", utm.content);
  return `${url.pathname}${url.search}`;
}
