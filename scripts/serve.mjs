import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png"
};

http.createServer((request, response) => {
  let requestedPath;
  try {
    requestedPath = decodeURIComponent(request.url.split("?")[0]);
  } catch (error) {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }
  requestedPath = requestedPath === "/" ? "index.html" : requestedPath.replace(/^\/+/, "");
  let filePath = path.resolve(root, requestedPath);
  if (requestedPath.endsWith("/")) filePath = path.join(filePath, "index.html");

  if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== path.join(root, "index.html")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.setHeader("Content-Type", types[path.extname(filePath).toLowerCase()] || "application/octet-stream");
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
