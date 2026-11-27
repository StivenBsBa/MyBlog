import type { Article, NavigationItem, Project, SocialLink } from "../shared/types/content";

const name = "Brayan Stiven Barajas Ariza";
const role = "Ingeniero de Sistemas | Backend Python e IA Aplicada";

export const profile = {
  name,
  shortName: "BB",
  role,
  location: "Medellín, Colombia",
  introduction:
    "Soy desarrollador de software especializado en backend con Python, integración de sistemas empresariales e inteligencia artificial aplicada.",
  about: [
    "He desarrollado APIs REST, servicios de chat y flujos de procesamiento documental con RAG, embeddings y recuperación vectorial.",
    "Trabajo en automatización de procesos y desarrollo de aplicaciones mantenibles con Python, bases de datos relacionales, Docker y procesamiento asíncrono.",
  ],
} as const;

export const site = {
  origin: "https://stivenbsba.github.io",
  basePath: "/MyBlog",
  name: `${name} | ${role}`,
  description: `Portafolio de ${name}, ingeniero de sistemas especializado en backend con Python e IA aplicada.`,
  socialImagePath: "/og-cover.jpg",
  socialImageAlt: "Ilustración de arquitectura de software",
} as const;

export const getSiteUrl = (path = "/") => {
  const cleanPath = path.replace(/^\/+|\/+$/g, "");
  return `${site.origin}${site.basePath}/${cleanPath}`;
};

export const socialProfiles = {
  github: "https://github.com/StivenBsBa",
  linkedin: "https://www.linkedin.com/in/brayanstiven/",
  email: "bsbariza@gmail.com",
} as const;

export const personStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${getSiteUrl()}#person`,
      name,
      jobTitle: role,
      url: getSiteUrl(),
      sameAs: [socialProfiles.github, socialProfiles.linkedin],
      knowsAbout: ["Python", "Flask", "MySQL", "LangChain", "RAG"],
    },
    {
      "@type": "WebSite",
      "@id": `${getSiteUrl()}#website`,
      name: site.name,
      url: getSiteUrl(),
      inLanguage: "es-CO",
      author: { "@id": `${getSiteUrl()}#person` },
    },
  ],
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Experiencia", sectionId: "experiencia" },
  { label: "Proyectos", sectionId: "proyectos" },
  { label: "Sobre mí", sectionId: "sobre-mi" },
  { label: "Tecnologías", sectionId: "tecnologias" },
  { label: "Laboratorio", sectionId: "laboratorio" },
  { label: "CV", sectionId: "cv" },
  { label: "Contacto", sectionId: "contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: socialProfiles.github, icon: "github" },
  { label: "LinkedIn", href: socialProfiles.linkedin, icon: "linkedin" },
];

export function getProjectMeta(project: Project) {
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
    path: project.path,
    type: "website" as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": project.repository ? "SoftwareSourceCode" : "CreativeWork",
      name: project.title,
      description: project.summary,
      url: getSiteUrl(project.path),
      ...(project.repository && { codeRepository: project.repository }),
      author: { "@id": `${getSiteUrl()}#person`, name: profile.name },
    },
  };
}

export function getArticleMeta(article: Article) {
  return {
    title: `${article.title} | ${profile.name}`,
    description: article.summary,
    path: article.path,
    type: "article" as const,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary,
      url: getSiteUrl(article.path),
      inLanguage: "es-CO",
      author: { "@type": "Person", "@id": `${getSiteUrl()}#person`, name: profile.name },
    },
  };
}
