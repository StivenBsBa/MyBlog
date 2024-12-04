import "../css/interests.css";

const Interests = () => {
  // Array de intereses o pasatiempos
  const interestsData = [
    {
      title: "Videojuegos",
      description:
        "Me apasiona sumergirme en mundos virtuales llenos de aventuras y desafíos. Los videojuegos son una fuente inagotable de entretenimiento y creatividad.",
    },
    {
      title: "Anime",
      description:
        "El mundo del anime me fascina por sus historias profundas, personajes memorables y su capacidad de transmitir emociones únicas.",
    },
    {
      title: "Lectura",
      description:
        "Disfruto explorar libros que me transportan a nuevos mundos y me invitan a reflexionar sobre diferentes aspectos de la vida.",
    },
    {
      title: "Música",
      description:
        "La música es esencial en mi vida. Desde melodías tranquilas hasta ritmos enérgicos, siempre encuentro inspiración y confort.",
    },
    {
      title: "Explorar lugares",
      description:
        "Adoro descubrir nuevos lugares, ya sea en la naturaleza o en ciudades. Cada aventura me brinda experiencias y recuerdos inolvidables.",
    },
    {
      title: "Conocer nuevas personas",
      description:
        "Interactuar con personas de diferentes culturas me permite aprender, compartir experiencias y establecer conexiones significativas.",
    },
  ];

  return (
    <section id="interests">
      <h2>Intereses o Pasatiempos</h2>
      <div className="interests-container">
        {interestsData.map((interest, index) => (
          <div className="interest-card" key={index}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
