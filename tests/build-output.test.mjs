import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readOutput = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), "utf8");
const origin = "https://stivenbsba.github.io/MyBlog";

test("home exposes the current professional profile before JavaScript", async () => {
  const html = await readOutput("index.html");
  assert.match(html, /<title>Brayan Stiven Barajas Ariza.+Backend Python e IA Aplicada<\/title>/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /"@type":"Person"/);
  assert.doesNotMatch(html, /Ruby on Rails|Full Stack Developer/);
});

test("project routes expose their own canonical URL and retain legacy aliases", async () => {
  for (const slug of ["ia-platform", "localroot"]) {
    const html = await readOutput(`proyectos/${slug}/index.html`);
    assert.ok(html.includes(`rel="canonical" href="${origin}/proyectos/${slug}"`));
    assert.ok(html.includes(`property="og:url" content="${origin}/proyectos/${slug}"`));
    assert.match(html, /id="structured-data"/);
    assert.match(html, /<h2>Alcance del proyecto<\/h2>/);
    assert.match(html, /<ul><li>/);
    assert.equal(await readOutput(`${slug}/index.html`), html);
  }
});

test("articles ship readable HTML and structured data", async () => {
  const html = await readOutput("laboratorio/arquitectura-rag/index.html");
  assert.match(html, /<h1>Arquitectura RAG con Python<\/h1>/);
  assert.match(html, /<h2>Aislamiento por tenant<\/h2>/);
  assert.match(html, /"@type":"Article"/);
  assert.ok(html.includes(`rel="canonical" href="${origin}/laboratorio/arquitectura-rag"`));
});

test("sitemap includes canonical routes only and the fallback is noindex", async () => {
  const sitemap = await readOutput("sitemap.xml");
  for (const path of ["/proyectos/ia-platform", "/proyectos/localroot", "/laboratorio/arquitectura-rag", "/laboratorio/procesamiento-kafka", "/laboratorio/evaluacion-modelos"]) {
    assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`));
  }
  for (const alias of ["/ia-platform", "/localroot"]) {
    assert.ok(!sitemap.includes(`<loc>${origin}${alias}</loc>`));
  }
  assert.doesNotMatch(sitemap, /trayectoria-anterior|proyectos\/myblog/);
  assert.match(await readOutput("404.html"), /name="robots" content="noindex"/);
});
