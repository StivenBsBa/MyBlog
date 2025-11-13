import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../css/LocalrootPage.css"; // Import the new dedicated CSS

const LocalrootPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToPortfolio = () => {
    navigate("/", { state: { scrollTo: "portfolio" } });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scrollToSection(location.state.scrollTo);
      // Clear the state after scrolling to prevent re-scrolling on subsequent renders
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <div className="localroot-page">
      <div className="container"> {/* Added container for consistent styling */}
        <h1>Localroot - Explora Medellín</h1>
        <section className="about-localroot">
          <h2>Acerca de Localroot</h2>

          <p>
            Localroot es una plataforma innovadora diseñada para proporcionar a
            los usuarios una experiencia completa al explorar los lugares
            turísticos de Medellín y sus alrededores, así como los emocionantes
            eventos que tienen lugar en la región. Este proyecto tiene como
            objetivo ofrecer una amplia gama de información detallada sobre los
            destinos turísticos más destacados, junto con datos prácticos como
            ubicación, horarios de apertura y servicios disponibles.
          </p>
          <p>
            Con Localroot, los usuarios pueden sumergirse en la rica cultura,
            historia y belleza natural de Medellín a través de descripciones
            detalladas de cada lugar, que van desde monumentos icónicos hasta
            rincones ocultos de la ciudad y sus alrededores. Desde parques
            exuberantes hasta museos fascinantes, la plataforma ofrece una visión
            completa de lo que hace que estos destinos sean tan especiales.
          </p>
          <p>
            Además de la información sobre lugares, Localroot también ofrece
            detalles sobre los eventos más emocionantes que tienen lugar en
            Medellín, desde festivales culturales hasta conciertos y exposiciones.
            Los usuarios pueden explorar una amplia gama de eventos y obtener
            información esencial como fechas, ubicaciones y detalles de entrada.
          </p>
          <p>
            Una característica destacada de Localroot es su capacidad para
            permitir a los usuarios registrarse y personalizar su experiencia. Al
            registrarse, los usuarios pueden marcar sus lugares y eventos
            favoritos, lo que les permite planificar fácilmente sus actividades
            turísticas. Además, aquellos que deseen contribuir a la plataforma, ya
            sea creando eventos nuevos o registrando nuevos lugares, pueden
            solicitar un perfil de administrador para acceder a estas funciones
            avanzadas.
          </p>
          <p>
            Tanto los lugares como los eventos se organizan en diversas
            categorías, lo que facilita a los usuarios encontrar exactamente lo
            que están buscando. Ya sea que estén interesados en arte y cultura,
            gastronomía local, actividades al aire libre o vida nocturna,
            Localroot ofrece una experiencia completa y personalizada para cada
            tipo de viajero.
          </p>
        </section>
        <section className="places">
          <h2>Lugares</h2>
          <p>
            Descubre los lugares más fascinantes de Medellín y sus alrededores,
            organizados en diversas categorías:
          </p>
          <ul>
            <li>
              <strong>Parques y Naturaleza</strong>: Explora la exuberante
              vegetación y paisajes naturales de Medellín en sus numerosos parques
              y reservas.
            </li>
            <li>
              <strong>Museos y Galerías de Arte</strong>: Sumérgete en la rica
              historia y cultura de la ciudad a través de sus diversos museos y
              galerías de arte.
            </li>
            <li>
              <strong>Arquitectura Histórica</strong>: Maravíllate con la
              arquitectura colonial y los sitios históricos que narran la historia
              de Medellín.
            </li>
            <li>
              <strong>Gastronomía y Mercados Locales</strong>: Prueba la deliciosa
              comida local y descubre los vibrantes mercados que ofrecen una
              variedad de productos frescos y auténticos.
            </li>
            <li>
              <strong>Entretenimiento y Vida Nocturna</strong>: Disfruta de la
              animada vida nocturna de Medellín con una variedad de bares, clubes
              y eventos culturales.
            </li>
            <li>
              <strong>Aventuras al Aire Libre</strong>: Embárcate en emocionantes
              actividades al aire libre como senderismo, parapente y rafting en
              los alrededores de la ciudad.
            </li>
            <li>
              <strong>Eventos Culturales</strong>: Participa en festivales,
              conciertos y exposiciones que celebran la diversidad cultural de
              Medellín.
            </li>
            <li>
              <strong>Y mucho más...</strong>
            </li>
          </ul>
        </section>
        <section className="events">
          <h2>Eventos</h2>
          <p>
            Sumérgete en la emocionante escena de eventos de Medellín, con
            actividades para todos los gustos y edades, incluyendo:
          </p>
          <ul>
            <li>
              <strong>Festivales Culturales</strong>: Celebra la música, la danza
              y las tradiciones culturales en los diversos festivales que tienen
              lugar en la ciudad a lo largo del año.
            </li>
            <li>
              <strong>Conciertos y Espectáculos Musicales</strong>: Disfruta de
              conciertos en vivo y actuaciones musicales que van desde música
              folclórica hasta géneros contemporáneos.
            </li>
            <li>
              <strong>Exposiciones de Arte y Fotografía</strong>: Explora el arte
              local e internacional en exposiciones que exhiben obras de artistas
              emergentes y establecidos.
            </li>
            <li>
              <strong>Eventos Gastronómicos</strong>: Deléitate con festivales de
              comida, degustaciones y eventos que destacan la diversidad culinaria
              de la región.
            </li>
            <li>
              <strong>Deportes y Competencias</strong>: Participa o disfruta de
              eventos deportivos que van desde partidos de fútbol hasta
              competiciones de deportes extremos.
            </li>
            <li>
              <strong>Eventos Familiares y para Niños</strong>: Diviértete en
              actividades diseñadas para toda la familia, como espectáculos
              infantiles, talleres y juegos.
            </li>
            <li>
              <strong>Charlas y Conferencias</strong>: Aprende y participa en
              discusiones sobre una variedad de temas, desde ciencia y tecnología
              hasta arte y medio ambiente.
            </li>
            <li>
              <strong>Y mucho más...</strong>
            </li>
          </ul>
        </section>
        <button onClick={handleBackToPortfolio} className="back-button">Regresar a Portafolio</button>
      </div>
    </div>
  );
};

export default LocalrootPage;
