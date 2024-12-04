import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Array de objetos que representa los proyectos en el portafolio
  const portfolioData = [
    {
      title: "LocalRoot",
      year: 2023,
      description:
        "El proyecto se centra en respaldar la cultura local en Medellín, proporcionando una plataforma para eventos, lugares turísticos y tradiciones comunitarias.",
      redirectPath: "/localroot", // Ruta para redirigir
    },
    // Puedes agregar más proyectos aquí
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
            <p className="portfolio-card-description">{project.description}</p>
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
