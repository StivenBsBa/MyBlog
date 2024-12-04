import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Interests from "../components/Interests";

const Inicio = () => {
  return (
    <div>
      {/* Sección de Acerca de */}
      <About />

      {/* Sección de Educación y Experiencia */}
      <Education />
      <Experience />

      {/* Sección de Habilidades */}
      <Skills />

      {/* Sección de Portafolio */}
      <Portfolio />

      {/* Sección de Intereses */}
      <Interests />
    </div>
  );
};

export default Inicio;
