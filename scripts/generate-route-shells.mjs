import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { getArticleMeta, getProjectMeta, getSiteUrl, personStructuredData, site } from "../src/config/site.ts";
import { articles } from "../src/features/lab/data/articles.ts";
import { projects } from "../src/features/projects/data/projects.ts";

const output = resolve("dist");
const template = await readFile(resolve(output, "index.html"), "utf8");
const escapeHtml = (value) => value.replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const createShell = ({ title, description, path, type, structuredData }, content = "") => {
  const url = getSiteUrl(path);
  const image = getSiteUrl(site.socialImagePath);
  const tags = {
    name: {
      description,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    },
    property: {
      "og:locale": "es_CO",
      "og:type": type,
      "og:title": title,
      "og:description": description,
      "og:site_name": site.name,
      "og:url": url,
      "og:image": image,
      "og:image:alt": site.socialImageAlt,
      "og:image:width": "1200",
      "og:image:height": "630",
    },
  };
  const meta = Object.entries(tags).flatMap(([attribute, entries]) =>
    Object.entries(entries).map(([key, value]) =>
      `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`,
    ),
  );

  return template
    .replace(/<title>[^<]*<\/title>/i, () => [
      `<title>${escapeHtml(title)}</title>`,
      ...meta,
      `<link rel="canonical" href="${escapeHtml(url)}" />`,
      `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>`,
    ].join("\n    "))
    .replace('<div id="root"></div>', () => `<div id="root">${content}</div>`);
};

async function writeRoute(path, html) {
  const destination = resolve(output, path.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

const home = { title: site.name, description: site.description, path: "/", type: "profile", structuredData: personStructuredData };
await writeRoute(home.path, createShell(home));

for (const project of projects) {
  const overview = project.overview.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const highlights = project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const content = `<main class="container article-body">
    <article>
      <h1>${escapeHtml(project.title)}</h1>
      <p>${escapeHtml(project.status)} · ${project.year}</p>
      <p>${escapeHtml(project.summary)}</p>
      <section><h2>Acerca del proyecto</h2><p>${escapeHtml(project.contribution)}</p>${overview}</section>
      <section><h2>Alcance del proyecto</h2><ul>${highlights}</ul></section>
    </article>
  </main>`;
  const html = createShell(getProjectMeta(project), content);
  for (const path of [project.path, ...(project.aliases ?? [])]) {
    await writeRoute(path, html);
  }
}

for (const article of articles) {
  const sections = article.sections.map(({ title, text }) =>
    `<section><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></section>`,
  ).join("");
  const content = `<main class="container article-body"><article><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.summary)}</p>${sections}</article></main>`;
  await writeRoute(article.path, createShell(getArticleMeta(article), content));
}

const urls = [home, ...projects, ...articles].map(({ path }) =>
  `  <url><loc>${escapeHtml(getSiteUrl(path))}</loc></url>`,
);
await writeFile(resolve(output, "sitemap.xml"), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n"));

console.log(`Generated ${projects.length} project routes, ${articles.length} article routes and the sitemap.`);
