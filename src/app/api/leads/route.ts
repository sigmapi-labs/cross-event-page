import { campaign } from "@/content/campaign";
import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { z } from "zod";

const Lead = z.object({
  name: z.string().trim().min(1).max(40),
  phone: z.string().trim().min(8).max(20),
  grade: z.enum(campaign.grades),
  event: z.enum(campaign.events),
  channel: z.string().trim().max(40).optional(),
  memo: z.string().trim().max(500).optional(),
  consent: z.union([z.literal("on"), z.literal("true"), z.boolean()]),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  page: z.string().optional(),
});

const file = join(process.cwd(), "data", "leads.json");

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Lead.safeParse(json);
  if (!parsed.success) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const row = {
    ...parsed.data,
    at: new Date().toISOString(),
  };

  await mkdir(dirname(file), { recursive: true });
  let rows: unknown[] = [];
  try {
    rows = JSON.parse(await readFile(file, "utf8"));
  } catch {
    rows = [];
  }
  rows.push(row);
  await writeFile(file, JSON.stringify(rows, null, 2));

  return Response.json({ ok: true });
}
