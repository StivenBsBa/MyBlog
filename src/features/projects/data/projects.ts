import type { Project } from "../../../shared/types/content";

export const projects: readonly Project[] = [
  {
    slug: "ia-platform",
    aliases: ["/ia-platform"],
    status: "Propuesta conceptual",
    contribution: "Exploración de una interfaz conversacional para consultar y visualizar información financiera.",
    path: "/proyectos/ia-platform",
    title: "IA Platform",
    eyebrow: "Fintech · Inteligencia artificial",
    year: 2024,
    summary:
      "Propuesta de asistente financiero con IA para explicar datos y presentarlos en tablas y gráficos.",
    overview: [
      "IA Platform explora una forma más natural de consultar y comprender información financiera mediante una interfaz conversacional.",
      "El flujo propuesto parte de una pregunta sobre datos financieros, presenta la información en una tabla o gráfico y acompaña el resultado con una explicación. Un ejemplo sería comparar ingresos y gastos de dos periodos y señalar las categorías que explican el cambio.",
    ],
    technologies: [
      "Inteligencia artificial",
      "Chatbot",
      "Visualización de datos",
      "Procesamiento de lenguaje natural",
    ],
    highlights: [
      "Consultas en lenguaje natural como entrada del asistente.",
      "Tablas para comparar valores y gráficos para resumir tendencias.",
      "Integración conceptual con fuentes de información financiera.",
      "Explicaciones vinculadas al periodo y a los datos consultados.",
    ],
  },
  {
    slug: "localroot",
    aliases: ["/localroot"],
    status: "Proyecto de portafolio",
    contribution: "El proyecto documenta un catálogo cultural con filtros, favoritos y gestión de usuarios.",
    path: "/proyectos/localroot",
    title: "LocalRoot",
    eyebrow: "Cultura · Plataforma Full Stack",
    year: 2023,
    summary:
      "Plataforma MERN para descubrir lugares y eventos culturales de Medellín con filtros, favoritos y gestión de usuarios.",
    overview: [
      "LocalRoot centraliza información útil sobre destinos turísticos y eventos de Medellín para facilitar la exploración de la ciudad.",
      "El recorrido principal comienza con el catálogo: la persona filtra lugares o eventos por categoría, consulta una ficha y guarda lo que le interesa. Los perfiles administradores gestionan el contenido del catálogo.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Docker", "JWT"],
    highlights: [
      "Autenticación con JWT y gestión diferenciada de usuarios.",
      "Filtros avanzados por categorías para lugares y eventos.",
      "Favoritos para planificar actividades y recorridos.",
      "Entorno del proyecto en contenedores Docker.",
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
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
