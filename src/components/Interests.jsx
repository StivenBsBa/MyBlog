import React from "react";
import "../css/interests.css"; // Asegúrate de crear este archivo CSS

const Interests = () => {
  return (
    <section id="interests">
      <h2>Intereses o Pasatiempos</h2>
      <div className="interest">
        <h3>Videojuegos</h3>
        <p>
          Sumergirme en mundos virtuales llenos de aventuras y desafíos me
          apasiona. Desde explorar vastas tierras hasta competir en emocionantes
          batallas, los videojuegos son una fuente inagotable de entretenimiento
          y diversión para mí.
        </p>
      </div>
      <div className="interest">
        <h3>Anime</h3>
        <p>
          El mundo del anime me fascina por sus historias profundas, personajes
          memorables y su capacidad para transmitir emociones de manera única.
          Desde épicas sagas de fantasía hasta conmovedoras historias de la vida
          cotidiana, encuentro inspiración y entretenimiento en cada serie que
          descubro.
        </p>
      </div>
      <div className="interest">
        <h3>Lectura</h3>
        <p>
          Recientemente, he comenzado a explorar el mundo de la lectura y estoy
          descubriendo un placer sin igual en sumergirme en libros que me
          transportan a mundos desconocidos y me invitan a reflexionar sobre
          diferentes aspectos de la vida. Cada página es una nueva aventura y
          una oportunidad para expandir mi horizonte intelectual.
        </p>
      </div>
      <div className="interest">
        <h3>Música</h3>
        <p>
          La música es una parte esencial de mi vida, ya que me acompaña en cada
          momento y me permite conectar con diferentes emociones y estados de
          ánimo. Desde melodías tranquilas que me relajan hasta ritmos enérgicos
          que me motivan, siempre encuentro inspiración y confort en la música.
        </p>
      </div>
      <div className="interests">
        <h3>Salir a conocer lugares</h3>
        <p>
          Explorar el mundo y descubrir nuevos lugares es una de mis actividades
          favoritas. Ya sea caminando por senderos naturales, explorando museos
          o simplemente paseando por las calles de una ciudad desconocida, cada
          aventura me brinda nuevas experiencias y recuerdos inolvidables.
        </p>
      </div>
      <div className="interest">
        <h3>Conocer nuevas personas</h3>
        <p>
          Me apasiona interactuar con personas de diferentes culturas,
          antecedentes y perspectivas. Cada encuentro es una oportunidad para
          aprender algo nuevo, compartir experiencias y establecer conexiones
          significativas que enriquecen mi vida personal y profesional.
        </p>
      </div>
    </section>
  );
};

export default Interests;
