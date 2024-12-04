import "../css/About.css";
import Fto from "../assets/Fto.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img className="imagen" src={Fto} alt="Foto de perfil" />
        </div>
        <div className="about-content">
          <h2>Acerca de mí</h2>
          <p>
            Soy un desarrollador junior apasionado por el mundo del desarrollo
            web. Mi enfoque principal se encuentra en el backend, aunque también
            tengo experiencia en el desarrollo web en general. Soy proactivo,
            con habilidades para resolver problemas y aprender rápidamente, lo
            que me permite adaptarme fácilmente a nuevas tecnologías y entornos
            de trabajo. Mi compromiso con el crecimiento profesional y mi
            disposición para asumir nuevos retos me hacen ideal para integrarme
            en un equipo dinámico, donde pueda contribuir con mis habilidades y
            aprender de mis colegas en proyectos desafiantes y estimulantes.
            Estoy emocionado por la oportunidad de seguir creciendo como
            desarrollador y ser parte de un equipo que comparta mi pasión por la
            programación.
          </p>
          <ul>
            <li>
              <strong>Nombre:</strong> Brayan Barajas
            </li>
            <li>
              <strong>Ocupación:</strong> Estudiante
            </li>
            <li>
              <strong>Experiencia:</strong> Sin experiencia
            </li>
            <li>
              <strong>Teléfono:</strong> 3137539115
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
