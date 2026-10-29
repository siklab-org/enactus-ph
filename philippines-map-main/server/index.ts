import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SVG_PATH = path.join(ROOT, "data", "ph_islands.svg");
const PORT = Number(process.env.PORT ?? 3000);

interface ProvinceUpdate {
  id: string;
  province: string;
  region: string;
}

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
};

function contentType(filePath: string): string {
  return MIME[path.extname(filePath)] ?? "application/octet-stream";
}

/** Escapes a string for safe insertion inside an XML/SVG double-quoted attribute. */
function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Applies province/region metadata onto <path id="..."> elements inside the SVG
 * source text, inserting or replacing data-province / data-region attributes.
 * Uses targeted string surgery instead of a full XML parser to keep the server
 * dependency-free; safe here because path `d` data never contains `<` or `>`.
 */
function applyUpdates(svgText: string, updates: ProvinceUpdate[]): string {
  let out = svgText;
  for (const { id, province, region } of updates) {
    const idNeedle = `id="${id}"`;
    const idIndex = out.indexOf(idNeedle);
    if (idIndex === -1) continue; // unknown id, skip silently

    const tagStart = out.lastIndexOf("<path", idIndex);
    const tagEnd = out.indexOf(">", idIndex);
    if (tagStart === -1 || tagEnd === -1) continue;

    let tag = out.slice(tagStart, tagEnd + 1);
    // strip any existing data-province / data-region attributes so re-saves are idempotent
    tag = tag
      .replace(/\s+data-province="[^"]*"/, "")
      .replace(/\s+data-region="[^"]*"/, "");

    const insertion = ` data-province="${escapeAttr(province)}" data-region="${escapeAttr(region)}"`;
    tag = tag.replace(idNeedle, `${idNeedle}${insertion}`);

    out = out.slice(0, tagStart) + tag + out.slice(tagEnd + 1);
  }
  return out;
}

async function serveStatic(req: http.IncomingMessage, res: http.ServerResponse): Promise<boolean> {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const filePath = path.join(PUBLIC_DIR, pathname);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403).end("Forbidden");
    return true;
  }

  try {
    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType(filePath) });
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

async function handleApi(req: http.IncomingMessage, res: http.ServerResponse): Promise<boolean> {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

  if (url.pathname === "/api/svg" && req.method === "GET") {
    const svg = await fs.readFile(SVG_PATH, "utf-8");
    res.writeHead(200, { "Content-Type": "image/svg+xml; charset=utf-8" });
    res.end(svg);
    return true;
  }

  if (url.pathname === "/api/svg" && req.method === "POST") {
    const chunks: Buffer[] = [];
    for await (const chunk of req) chunks.push(chunk as Buffer);
    const body = Buffer.concat(chunks).toString("utf-8");

    let updates: ProvinceUpdate[];
    try {
      const parsed = JSON.parse(body) as { updates: ProvinceUpdate[] };
      updates = parsed.updates;
      if (!Array.isArray(updates)) throw new Error("updates must be an array");
    } catch (err) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: "Invalid request body" }));
      return true;
    }

    const current = await fs.readFile(SVG_PATH, "utf-8");
    const updated = applyUpdates(current, updates);
    await fs.writeFile(SVG_PATH, updated, "utf-8");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, updated: updates.length }));
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    if (await handleApi(req, res)) return;
    if (await serveStatic(req, res)) return;
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal server error");
  }
});

server.listen(PORT, () => {
  console.log(`PH map site running at http://localhost:${PORT}`);
});
