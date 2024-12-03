import React from "react";
import "../css/localroot.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const LocalrootPage = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Función para regresar a la página anterior
  const goBack = () => {
    navigate(-1); // Navega hacia la página anterior
  };

  return (
    <>
      <Header />
      <div className="localroot-container">
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
            exuberantes hasta museos fascinantes, la plataforma ofrece una
            visión completa de lo que hace que estos destinos sean tan
            especiales.
          </p>
          <p>
            Además de la información sobre lugares, Localroot también ofrece
            detalles sobre los eventos más emocionantes que tienen lugar en
            Medellín, desde festivales culturales hasta conciertos y
            exposiciones. Los usuarios pueden explorar una amplia gama de
            eventos y obtener información esencial como fechas, ubicaciones y
            detalles de entrada.
          </p>
        </section>
        <section className="places">
          <h2>Lugares</h2>
          <ul>
            <li>Parques y Naturaleza</li>
            <li>Museos y Galerías de Arte</li>
            <li>Arquitectura Histórica</li>
            <li>Gastronomía y Mercados Locales</li>
            <li>Entretenimiento y Vida Nocturna</li>
            <li>Aventuras al Aire Libre</li>
            <li>Eventos Culturales</li>
          </ul>
        </section>
        <section className="events">
          <h2>Eventos</h2>
          <ul>
            <li>Festivales Culturales</li>
            <li>Conciertos y Espectáculos Musicales</li>
            <li>Exposiciones de Arte y Fotografía</li>
            <li>Eventos Gastronómicos</li>
            <li>Deportes y Competencias</li>
            <li>Eventos Familiares y para Niños</li>
            <li>Charlas y Conferencias</li>
          </ul>
        </section>
        {/* Botón para regresar */}
        <button onClick={goBack}>Regresar</button>{" "}
        {/* Botón para regresar a la página anterior */}
      </div>
      <Footer />
    </>
  );
};

export default LocalrootPage;
