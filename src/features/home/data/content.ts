import type { EducationItem, ExperienceItem, TechnologyGroup } from "../../../shared/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Corporación Universitaria Adventista (UNAC)",
    role: "Desarrollador de Sistemas Institucionales",
    period: "23 de junio de 2026 — actualidad",
    location: "Medellín, Colombia",
    achievements: [
      "Mantengo aplicaciones institucionales en PHP y MySQL y desarrollo funcionalidades para procesos administrativos.",
      "Administro bases de datos MySQL y trabajo con consultas SQL, procedimientos almacenados y reportes institucionales.",
      "Integro aplicaciones y servicios externos, incluidos servicios del ecosistema Microsoft.",
      "Participo puntualmente en la migración de módulos PHP hacia C# y .NET.",
    ],
    technologies: ["PHP", "MySQL", "SQL", "C#", ".NET"],
  },
  {
    company: "Metatech Solutions S.A.S.",
    role: "Desarrollador Backend Python",
    period: "1 de mayo de 2026 — 21 de octubre de 2026",
    location: "Colombia",
    achievements: [
      "Desarrollé APIs REST y servicios de chat con LangChain, gestión de prompts, historial persistente y validación de mensajes.",
      "Implementé ingesta, fragmentación, embeddings y recuperación documental con RAG y PGVector, con procesamiento por tenant.",
      "Integré productores y consumidores Kafka para procesamiento asíncrono e indexación documental.",
      "Desarrollé componentes de versionado de datasets, anonimización con Microsoft Presidio y registro de modelos.",
      "Implementé componentes para entrenamiento y evaluación con MLflow, LLM-as-a-judge y criterios de calidad. Participé en pruebas unitarias y de integración.",
    ],
    technologies: ["Python", "Flask", "LangChain", "PostgreSQL", "PGVector", "Kafka", "Presidio", "MLflow", "Git", "Docker"],
  },
  {
    company: "Corporación Universitaria Adventista",
    role: "Desarrollador Backend / Full Stack",
    period: "Inicio registrado en febrero de 2024",
    location: "Medellín",
    technologies: ["React", "Ruby on Rails"],
    achievements: [
      "Desarrollé componentes reutilizables en React para aplicaciones institucionales y optimicé su carga mediante lazy loading y code splitting.",
      "Implementé lógica de negocio con Ruby on Rails para sistemas institucionales.",
      "Participé en migraciones de aplicaciones.",
      "Acompañé técnicamente a nuevos desarrolladores promoviendo código limpio y buenas prácticas.",
    ],
  },
  {
    company: "Agencia de Seguros",
    role: "Asistente administrativo",
    period: "Febrero — noviembre de 2024",
    location: "Medellín",
    technologies: [],
    achievements: [
      "Organicé bases de datos y automaticé reportes con Excel para reducir tareas manuales.",
      "Atendí consultas de clientes y di seguimiento a incidencias relacionadas con sus solicitudes.",
      "Organicé la información de los casos para facilitar su consulta y seguimiento.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Ingeniería de Sistemas",
    institution: "Corporación Universitaria Adventista",
    period: "2021–2025",
    description: "Finalizado",
  },
  {
    title: "Técnico en Sistemas",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    period: "2018–2019",
  },
];

export const certifications = [
  { title: "Despliegue de Aplicaciones y Servicios en Contenedores Docker", issuer: "SENA", year: 2025 },
  { title: "Scrum Foundation Professional Certification (SFPC)", issuer: "CertiProf", year: 2024 },
  { title: "Certificate of Accomplishment (Python)", issuer: "HackerRank", year: 2023 },
];

export const skillLevels: TechnologyGroup[] = [
  { category: "Uso en proyectos", technologies: ["Python", "Flask", "FastAPI", "MySQL", "LangChain", "RAG"] },
  { category: "Nivel intermedio", technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "PostgreSQL", "Docker"] },
  { category: "Nivel básico", technologies: ["PHP", "Node.js", "Express", "NestJS", "Next.js", "C#", ".NET"] },
];

export const appliedTechnologies: TechnologyGroup[] = [
  { category: "Backend e integración", technologies: ["APIs REST", "Apache Kafka", "Procesamiento asíncrono", "Integración de servicios"] },
  { category: "Datos e IA", technologies: ["SQL", "Procedimientos almacenados", "PGVector", "Embeddings", "Microsoft Presidio", "MLflow"] },
  { category: "Entorno y calidad", technologies: ["Git", "Linux", "Postman", "Bruno", "Pruebas automatizadas"] },
];

interface Resume {
  title: string;
  description: string;
  file?: string;
}

export const resumes: Resume[] = [
  { title: "Desarrollador de Software — General", file: "CV_Brayan_Barajas_Desarrollador_Software_General.pdf", description: "Opción recomendada para vacantes generales de ingeniería de software." },
  { title: "Desarrollador Backend Python", file: "CV_Brayan_Barajas_Backend_Python.pdf", description: "Enfocado en APIs, bases de datos e integración de sistemas." },
  { title: "Desarrollador Backend Python + IA Aplicada", file: "CV_Brayan_Barajas_Backend_Python_IA.pdf", description: "Enfocado en RAG, procesamiento documental y evaluación de modelos." },
];
