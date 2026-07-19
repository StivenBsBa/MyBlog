import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputDirectory = new URL("../dist/", import.meta.url);
const siteUrl = "https://stivenbsba.github.io/MyBlog";

const projectPages = [
  {
    route: "proyectos/ia-platform",
    alias: "ia-platform",
    title: "IA Platform | Brayan Barajas",
  },
  {
    route: "proyectos/localroot",
    alias: "localroot",
    title: "LocalRoot | Brayan Barajas",
  },
];

const readOutput = (path) => readFile(new URL(path, outputDirectory), "utf8");

test("the home document exposes complete social metadata", async () => {
  const html = await readOutput("index.html");

  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /id="structured-data"/);
});

for (const page of projectPages) {
  test(`${page.route} has an indexable route shell`, async () => {
    const html = await readOutput(`${page.route}/index.html`);
    const aliasHtml = await readOutput(`${page.alias}/index.html`);
    const canonicalUrl = `${siteUrl}/${page.route}`;

    assert.match(html, new RegExp(`<title>${page.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</title>`));
    assert.match(html, new RegExp(`rel="canonical" href="${canonicalUrl}"`));
    assert.match(html, new RegExp(`property="og:url" content="${canonicalUrl}"`));
    assert.match(html, /"@type":"SoftwareSourceCode"/);
    assert.equal(aliasHtml, html);
  });
}

test("the sitemap contains canonical project routes only", async () => {
  const sitemap = await readOutput("sitemap.xml");

  for (const page of projectPages) {
    assert.match(sitemap, new RegExp(`${siteUrl}/${page.route}`));
    assert.doesNotMatch(sitemap, new RegExp(`<loc>${siteUrl}/${page.alias}</loc>`));
  }
});
