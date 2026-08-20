import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const port = Number(process.argv[2] || process.env.PORT || 4321);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(root, clean);
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    const index = join(candidate, "index.html");
    if (existsSync(index)) return index;
  }
  const html = `${candidate}.html`;
  if (existsSync(html)) return html;
  return join(root, "index.html");
}

createServer((request, response) => {
  const file = resolvePath(request.url || "/");
  response.setHeader("content-type", types[extname(file)] || "application/octet-stream");
  createReadStream(file)
    .on("error", () => {
      response.writeHead(404);
      response.end("Not found");
    })
    .pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving dist at http://127.0.0.1:${port}`);
});
