/**
 * Generates `dist/sitemap.xml` from `scripts/site-config.mjs` + Vite's
 * `dist/.vite/manifest.json`.
 *
 * Run after `vite build` so the manifest exists and every `src/assets/...`
 * reference can be resolved to the exact hashed filename Vite emitted. If a
 * route's image is missing from the manifest (or from `dist/` for `public/`
 * files), the script exits non-zero so a broken sitemap can never ship.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN, LANGS, ROUTES, localizePath } from "./site-config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const manifestPath = path.join(distDir, ".vite", "manifest.json");

if (!existsSync(manifestPath)) {
  console.error(
    `[sitemap] ${manifestPath} not found. Run \`vite build\` (with build.manifest enabled) first.`
  );
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const today = new Date().toISOString().slice(0, 10);

const xmlEscape = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Resolve a project-relative asset (`src/assets/foo.webp` or `public/bar.webp`)
 * to its public URL on SITE_ORIGIN, verifying the built file exists on disk.
 */
function resolveImageUrl(src) {
  if (src.startsWith("public/")) {
    const rel = src.slice("public/".length);
    const builtFile = path.join(distDir, rel);
    if (!existsSync(builtFile)) {
      throw new Error(`[sitemap] public asset missing from dist/: ${src}`);
    }
    return `${SITE_ORIGIN}/${rel}`;
  }

  const entry = manifest[src];
  if (!entry || !entry.file) {
    throw new Error(
      `[sitemap] "${src}" not found in Vite manifest. Is it imported by the app?`
    );
  }
  const builtFile = path.join(distDir, entry.file);
  if (!existsSync(builtFile)) {
    throw new Error(`[sitemap] manifest target missing on disk: ${entry.file}`);
  }
  return `${SITE_ORIGIN}/${entry.file.replace(/^\/+/, "")}`;
}

const urlBlocks = [];

/* Each canonical route is emitted once per language, with every sibling
   language cross-linked via xhtml:link hreflang so Google and Yandex can
   pair the uz, ru, and en pages as alternates of one another. */
for (const route of ROUTES) {
  const imageBlock = route.image
    ? (() => {
        const imageLoc = resolveImageUrl(route.image.src);
        return [
          "    <image:image>",
          `      <image:loc>${xmlEscape(imageLoc)}</image:loc>`,
          `      <image:title>${xmlEscape(route.image.title)}</image:title>`,
          `      <image:caption>${xmlEscape(route.image.caption)}</image:caption>`,
          "    </image:image>",
        ].join("\n");
      })()
    : null;

  const withTrailingSlash = (p) => (p.endsWith("/") ? p : `${p}/`);
  const urlFor = (p, l) => `${SITE_ORIGIN}${withTrailingSlash(localizePath(p, l))}`;

  const hreflangLinks = [
    ...LANGS.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(
          urlFor(route.path, l)
        )}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(
      urlFor(route.path, "uz")
    )}" />`,
  ].join("\n");

  for (const lang of LANGS) {
    const loc = urlFor(route.path, lang);
    const lines = [
      "  <url>",
      `    <loc>${xmlEscape(loc)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority}</priority>`,
      hreflangLinks,
    ];
    if (imageBlock) lines.push(imageBlock);
    lines.push("  </url>");
    urlBlocks.push(lines.join("\n"));
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <!-- Dr. Nozima Baxtiyarovna — Stomatolog va Ortoped Andijon (https://drnozima.uz) -->
${urlBlocks.join("\n\n")}
</urlset>
`;

const outPath = path.join(distDir, "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(
  `[sitemap] wrote ${urlBlocks.length} URLs (${ROUTES.length} routes × ${LANGS.length} languages, lastmod ${today}) -> ${outPath}`
);
