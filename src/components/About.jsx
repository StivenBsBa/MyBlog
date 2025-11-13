import "../css/About.css";
import Fto from "../assets/Fto.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Sección izquierda: perfil */}
        <div className="about-profile-section">
          <div className="about-image">
            <img src={Fto} alt="Foto de perfil" />
          </div>

          <ul className="profile-list">
            <li>
              <i className="bi bi-person-fill"></i>
              <strong>Nombre:</strong> Brayan Barajas
            </li>
            <li>
              <i className="bi bi-briefcase-fill"></i>
              <strong>Ocupación:</strong> Estudiante
            </li>
            <li>
              <i className="bi bi-clock-fill"></i>
              <strong>Experiencia:</strong> Sin experiencia
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <strong>Teléfono:</strong> 3137539115
            </li>
          </ul>
        </div>

        {/* Sección derecha: descripción */}
        <div className="about-content">
          <h2>Acerca de mí</h2>
          <p>
            Soy un desarrollador junior apasionado por el mundo del desarrollo
            web. Mi enfoque principal se encuentra en el backend, aunque también
            tengo experiencia en el desarrollo web en general. Soy proactivo,
            con habilidades para resolver problemas y aprender rápidamente, lo
            que me permite adaptarme fácilmente a nuevas tecnologías y entornos
            de trabajo.
          </p>
          <p>
            Mi compromiso con el crecimiento profesional y mi disposición para
            asumir nuevos retos me hacen ideal para integrarme en un equipo
            dinámico, donde pueda contribuir con mis habilidades y aprender de
            mis colegas en proyectos desafiantes y estimulantes. Estoy
            emocionado por la oportunidad de seguir creciendo como desarrollador
            y ser parte de un equipo que comparta mi pasión por la programación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
