import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import EducationExperience from "../components/EducationExperience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Interests from "../components/Interests";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <div>
      {/* Componente Header que probablemente contenga la barra de navegación */}
      <Header />

      {/* Sección de Acerca de */}
      <About />

      {/* Sección de Educación y Experiencia */}
      <EducationExperience />

      {/* Sección de Habilidades */}
      <Skills />

      {/* Sección de Portafolio */}
      <Portfolio />

      {/* Sección de Intereses */}
      <Interests />

      {/* Componente Footer con la información de pie de página */}
      <Footer />
    </div>
  );
};

export default Inicio;
