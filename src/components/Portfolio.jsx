import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Array de objetos que representa los proyectos en el portafolio
  const portfolioData = [
    {
      title: "IA-Platform - Chatbot de Finanzas con IA",
      year: 2024,
      technologies:
        "Inteligencia Artificial, Chatbot, Finanzas, Tablas, Gráficos",
      shortDescription:
        "Chatbot financiero impulsado por IA para análisis y asistencia personalizada, con generación de tablas y gráficos.",
      description: [
        "Desarrollo de un chatbot financiero impulsado por IA para proporcionar análisis y asistencia personalizada.",
        "Capacidad para generar tablas y gráficos interactivos a partir de datos financieros, facilitando la visualización y comprensión.",
        "Integración con fuentes de datos financieros para ofrecer información actualizada y relevante.",
        "Diseñado para mejorar la toma de decisiones financieras mediante la automatización y la inteligencia artificial.",
      ],
      redirectPath: "/ia-platform", // Path for the new project
    },
    {
      title: "LocalRoot – Plataforma Cultural Fullstack",
      year: 2023,
      technologies: "MERN Stack, Redux, Docker",
      shortDescription:
        "Aplicación MERN completa para promover la cultura local en Medellín, con filtros avanzados y autenticación JWT.",
      description: [
        "Desarrollo de aplicación MERN completa con filtros avanzados, autenticación JWT y gestión de usuarios",
        "Optimización de consultas en MongoDB reduciendo tiempos de respuesta en un 35% (800ms → 520ms)",
        "Implementación de despliegue con Docker y configuración de pipeline CI/CD básico para entregas automatizadas, uso icnos de react cions",
      ],
      redirectPath: "/localroot", // Existing path
    },
  ];

  const handleRedirect = (path) => {
    try {
      navigate(path);
    } catch (error) {
      setError("El enlace a la descripción no está disponible.");
    }
  };

  return (
    <section id="portfolio">
      <h2>Portafolio</h2>
      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-card-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="portfolio-card-technologies">
              {project.technologies}
            </p>
            <p className="portfolio-card-description">
              {project.shortDescription}
            </p>
            <button
              onClick={() => handleRedirect(project.redirectPath)}
              className="view-project-button"
            >
              Ver acerca del Proyecto
            </button>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </section>
  );
};

export default Portfolio;
