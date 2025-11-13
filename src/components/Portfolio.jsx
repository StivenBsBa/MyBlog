import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import "../css/portfolio.css";
import portfolioData from "../data/portfolioData.json";

const Portfolio = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRedirect = (path) => {
    try {
      navigate(path);
    } catch (error) {
      setError("El enlace a la descripción no está disponible.");
    }
  };

  return (
    <AnimatedSection id="portfolio">
      <h2>Portafolio</h2>
      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio-card interactive-card">
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
    </AnimatedSection>
  );
};

export default Portfolio;
