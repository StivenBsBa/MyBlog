import type {
  EducationItem,
  ExperienceItem,
  ResourceItem,
  TechnologyGroup,
} from "../../../shared/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Corporación Universitaria Adventista",
    role: "Desarrollador Backend / Full Stack",
    period: "Feb. 2024 — actualidad",
    location: "Medellín",
    achievements: [
      "Optimicé el rendimiento frontend mediante lazy loading, code splitting y componentes reutilizables.",
      "Implementé lógica de negocio con Ruby on Rails para sistemas institucionales.",
      "Participé en migraciones que redujeron incidentes críticos en producción.",
      "Acompañé técnicamente a nuevos desarrolladores promoviendo código limpio y buenas prácticas.",
    ],
  },
  {
    company: "Agencia de Seguros",
    role: "Asistente administrativo",
    period: "Feb. 2024 — nov. 2024",
    location: "Medellín",
    achievements: [
      "Organicé bases de datos y automaticé reportes con Excel para reducir tareas manuales.",
      "Mejoré la trazabilidad de procesos administrativos y la consulta de información.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Corporación Universitaria Adventista",
    period: "2020 — en curso",
    location: "Medellín, Antioquia",
    description:
      "Formación en programación, arquitectura de software y gestión de proyectos tecnológicos.",
  },
  {
    title: "Técnico de Sistemas",
    institution: "SENA",
    period: "2018 — 2019",
    location: "Ábrego, Norte de Santander",
    description:
      "Fundamentos de programación, mantenimiento y diagnóstico de equipos de cómputo.",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Redux"],
  },
  {
    category: "Backend",
    technologies: ["Ruby on Rails", "Node.js", "Express", "Python", "FastAPI"],
  },
  {
    category: "Datos",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Entrega",
    technologies: ["Git", "Docker", "CI/CD", "Postman", "N8N"],
  },
];

export const labResources: ResourceItem[] = [
  {
    title: "Notas de arquitectura",
    description:
      "Decisiones, aprendizajes y patrones que aparecen mientras construyo productos web.",
    status: "Próximamente",
  },
  {
    title: "Experimentos",
    description:
      "Prototipos pequeños para probar ideas de IA, automatización y experiencia de usuario.",
    status: "En construcción",
  },
  {
    title: "Recursos para developers",
    description:
      "Herramientas, referencias y flujos de trabajo que me ayudan a desarrollar mejor.",
    status: "Próximamente",
  },
];
