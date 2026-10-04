import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CURRENT_SITE_URL = "https://toolbari.jben06503.chatgpt.site/";
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = path.join(projectRoot, "dist");
const outputDirectory = path.join(projectRoot, ".pages-dist");

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".map",
  ".svg",
  ".txt",
  ".webmanifest",
  ".xml",
]);

function inferGitHubPagesUrl(repository) {
  const [owner, name, ...extra] = String(repository || "").split("/");

  if (!owner || !name || extra.length > 0) {
    throw new Error(
      "SITE_URL is missing and GITHUB_REPOSITORY is not in the expected owner/repository format.",
    );
  }

  const isAccountSite = name.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  const pathname = isAccountSite ? "/" : `/${encodeURIComponent(name)}/`;
  return `https://${owner.toLowerCase()}.github.io${pathname}`;
}

function normalizeSiteUrl(value) {
  const siteUrl = new URL(value);

  if (siteUrl.protocol !== "https:" && siteUrl.protocol !== "http:") {
    throw new Error("SITE_URL must use http:// or https://.");
  }

  siteUrl.search = "";
  siteUrl.hash = "";
  if (!siteUrl.pathname.endsWith("/")) siteUrl.pathname += "/";
  return siteUrl.href;
}

async function rewriteTextFiles(directory, targetSiteUrl) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteTextFiles(entryPath, targetSiteUrl);
      continue;
    }

    if (!entry.isFile() || !textExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    const original = await readFile(entryPath, "utf8");
    const rewritten = original.replaceAll(CURRENT_SITE_URL, targetSiteUrl);
    if (rewritten !== original) await writeFile(entryPath, rewritten, "utf8");
  }
}

async function makeManifestSubpathSafe() {
  const manifestPath = path.join(outputDirectory, "site.webmanifest");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

  manifest.start_url = "./";
  manifest.scope = "./";
  manifest.icons = Array.isArray(manifest.icons)
    ? manifest.icons.map((icon) => {
        if (!icon || typeof icon.src !== "string" || /^(?:[a-z]+:|\/\/)/i.test(icon.src)) {
          return icon;
        }

        return { ...icon, src: `./${icon.src.replace(/^\.?\//, "")}` };
      })
    : manifest.icons;

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

const requestedSiteUrl = process.env.SITE_URL || inferGitHubPagesUrl(process.env.GITHUB_REPOSITORY);
const targetSiteUrl = normalizeSiteUrl(requestedSiteUrl);

if (path.dirname(outputDirectory) !== projectRoot || path.basename(outputDirectory) !== ".pages-dist") {
  throw new Error("Refusing to prepare an unexpected output directory.");
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(sourceDirectory, outputDirectory, { recursive: true });
await rewriteTextFiles(outputDirectory, targetSiteUrl);
await makeManifestSubpathSafe();

console.log(`Prepared ${outputDirectory}`);
console.log(`Public site URL: ${targetSiteUrl}`);
