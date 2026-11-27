import profileImage from "../../../assets/profile.webp";
import { profile } from "../../../config/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker">Ingeniero de Sistemas</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__specialty">Backend Python e IA aplicada</p>
          <p className="hero__intro">Desarrollo APIs, integro sistemas y construyo soluciones de procesamiento documental con RAG.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">Ver proyectos</a>
            <a className="button button--secondary" href="#cv">Ver hojas de vida</a>
            <a className="button button--secondary" href="#contacto">Contacto</a>
          </div>
          <p className="hero__location">{profile.location}</p>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src={profileImage}
              alt={`Retrato de ${profile.name}`}
              width="900"
              height="1125"
              fetchPriority="high"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
