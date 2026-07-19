import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputDirectory = resolve("dist");
const siteUrl = "https://stivenbsba.github.io/MyBlog";

const projectRoutes = [
  {
    path: "/proyectos/ia-platform",
    aliases: ["/ia-platform"],
    title: "IA Platform | Brayan Barajas",
    description:
      "Asistente financiero con IA que transforma datos complejos en explicaciones, tablas y visualizaciones comprensibles.",
    technologies: [
      "Inteligencia artificial",
      "Chatbot",
      "Visualización de datos",
      "Procesamiento de lenguaje natural",
    ],
  },
  {
    path: "/proyectos/localroot",
    aliases: ["/localroot"],
    title: "LocalRoot | Brayan Barajas",
    description:
      "Plataforma MERN para descubrir lugares y eventos culturales de Medellín con filtros, favoritos y gestión de usuarios.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Docker", "JWT"],
  },
];

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(`<meta(?=[^>]*${attribute}="${key}")[^>]*>`, "i");
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${content}" />`);
};

const createProjectShell = (template, project) => {
  const canonicalUrl = `${siteUrl}${project.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title.replace(" | Brayan Barajas", ""),
    description: project.description,
    url: canonicalUrl,
    programmingLanguage: project.technologies,
    author: { "@type": "Person", name: "Brayan Barajas" },
  };

  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${project.title}</title>`);
  html = replaceMeta(html, "name", "description", project.description);
  html = replaceMeta(html, "property", "og:title", project.title);
  html = replaceMeta(html, "property", "og:description", project.description);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "name", "twitter:title", project.title);
  html = replaceMeta(html, "name", "twitter:description", project.description);
  html = html.replace(
    /<link rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredData)}</script>`,
  );

  return html;
};

const template = await readFile(resolve(outputDirectory, "index.html"), "utf8");

for (const project of projectRoutes) {
  const html = createProjectShell(template, project);

  for (const route of [project.path, ...project.aliases]) {
    const destination = resolve(outputDirectory, route.replace(/^\//, ""), "index.html");
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }
}

console.log(`Generated ${projectRoutes.length} canonical route shells and their aliases.`);
