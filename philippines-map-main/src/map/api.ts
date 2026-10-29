import type { ProvinceUpdate } from "./types.js";

export async function fetchSvgText(): Promise<string> {
  const res = await fetch("/api/svg");
  if (!res.ok) throw new Error(`Failed to load map: ${res.status}`);
  return res.text();
}

export async function saveUpdates(updates: ProvinceUpdate[]): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/svg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ updates }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    return { ok: false, error: body.error ?? `Server responded ${res.status}` };
  }
  return { ok: true };
}
