import type { Project } from "../../../shared/types/content";

export const projects = [
  {
    slug: "ia-platform",
    path: "/proyectos/ia-platform",
    title: "IA Platform",
    eyebrow: "Fintech · Inteligencia artificial",
    year: 2024,
    summary:
      "Asistente financiero con IA que transforma datos complejos en explicaciones, tablas y visualizaciones comprensibles.",
    overview: [
      "IA Platform explora una forma más natural de consultar y comprender información financiera mediante una interfaz conversacional.",
      "La propuesta combina análisis personalizado, procesamiento de lenguaje natural y visualización de datos para ayudar a tomar decisiones con mayor contexto.",
    ],
    technologies: [
      "Inteligencia artificial",
      "Chatbot",
      "Visualización de datos",
      "Procesamiento de lenguaje natural",
    ],
    highlights: [
      "Análisis y asistencia adaptados a las necesidades de cada usuario.",
      "Generación de tablas y gráficos a partir de datos financieros.",
      "Integración conceptual con fuentes de información financiera.",
      "Experiencia orientada a simplificar información compleja.",
    ],
  },
  {
    slug: "localroot",
    path: "/proyectos/localroot",
    title: "LocalRoot",
    eyebrow: "Cultura · Plataforma Full Stack",
    year: 2023,
    summary:
      "Plataforma MERN para descubrir lugares y eventos culturales de Medellín con filtros, favoritos y gestión de usuarios.",
    overview: [
      "LocalRoot centraliza información útil sobre destinos turísticos y eventos de Medellín para facilitar la exploración de la ciudad.",
      "Las personas pueden descubrir contenido por categorías, guardar favoritos y personalizar su experiencia. Los perfiles administradores permiten ampliar el catálogo de lugares y eventos.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Docker", "JWT"],
    highlights: [
      "Autenticación con JWT y gestión diferenciada de usuarios.",
      "Filtros avanzados por categorías para lugares y eventos.",
      "Favoritos para planificar actividades y recorridos.",
      "Contenedores Docker y base para entregas automatizadas.",
    ],
    categories: [
      {
        title: "Lugares",
        items: [
          "Parques y naturaleza",
          "Museos y galerías",
          "Patrimonio histórico",
          "Gastronomía y vida nocturna",
        ],
      },
      {
        title: "Eventos",
        items: [
          "Festivales culturales",
          "Conciertos y espectáculos",
          "Arte y fotografía",
          "Charlas, deportes y actividades familiares",
        ],
      },
    ],
  },
] satisfies readonly Project[];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
