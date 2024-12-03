import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Portfolio = () => {
  const navigate = useNavigate(); // Hook para redirigir programáticamente

  const handleRedirect = () => {
    navigate("/localroot"); // Redirige a la página Localroot
  };

  return (
    <section id="portfolio">
      <h2>Portafolio</h2>
      <div className="portfolio-item">
        <h3>LocalRoot</h3>
        <p>Logo del Proyecto 1</p>
        <p>Año de inicio: 2023</p>
        <p>
          El proyecto se centra en respaldar la cultura local en Medellín,
          proporcionando una plataforma para eventos, lugares turísticos y
          tradiciones comunitarias.
        </p>
        <button onClick={handleRedirect}>Ver acerca del Proyecto</button>{" "}
        {/* Redirige al hacer clic */}
      </div>
    </section>
  );
};

export default Portfolio;
