import type { NavigationItem, SocialLink } from "../shared/types/content";

export const site = {
  origin: "https://stivenbsba.github.io",
  basePath: "/MyBlog",
  name: "Brayan Barajas | Full Stack Developer",
  description:
    "Portafolio de Brayan Barajas, desarrollador Full Stack especializado en React, Ruby on Rails, Node.js y Python.",
  socialImagePath: "/og-cover.jpg",
} as const;

export const getSiteUrl = (path = "/") => {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  const baseUrl = `${site.origin}${site.basePath}/`;

  return normalizedPath ? `${baseUrl}${normalizedPath}` : baseUrl;
};

export const personStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${getSiteUrl()}#person`,
      name: "Brayan Barajas",
      jobTitle: "Full Stack Developer",
      url: getSiteUrl(),
      sameAs: [
        "https://github.com/StivenBsBa",
        "https://www.linkedin.com/in/brayanstiven/",
      ],
      knowsAbout: ["React", "TypeScript", "Ruby on Rails", "Node.js", "Python"],
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

export const profile = {
  name: "Brayan Barajas",
  shortName: "BB",
  role: "Full Stack Developer",
  location: "Medellín, Colombia",
  availability: "Disponible para colaborar",
  introduction:
    "Construyo productos web mantenibles de extremo a extremo, con especial interés en backend, arquitectura y experiencias frontend rápidas.",
  about: [
    "Soy desarrollador Full Stack e ingeniero de sistemas en formación. Disfruto convertir problemas complejos en soluciones claras, medibles y fáciles de mantener.",
    "Trabajo principalmente con React, Ruby on Rails, Node.js y Python. Me motiva aprender, compartir conocimiento y mejorar continuamente la calidad técnica de los equipos y productos en los que participo.",
  ],
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Sobre mí", sectionId: "sobre-mi" },
  { label: "Experiencia", sectionId: "experiencia" },
  { label: "Tecnologías", sectionId: "tecnologias" },
  { label: "Proyectos", sectionId: "proyectos" },
  { label: "Laboratorio", sectionId: "laboratorio" },
  { label: "Contacto", sectionId: "contacto" },
];

export const socialProfiles = {
  github: "https://github.com/StivenBsBa",
  linkedin: "https://www.linkedin.com/in/brayanstiven/",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: socialProfiles.github, icon: "github" },
  { label: "LinkedIn", href: socialProfiles.linkedin, icon: "linkedin" },
];
