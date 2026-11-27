import { Link } from "react-router-dom";
import profileImage from "../../../assets/profile.webp";
import { profile } from "../../../config/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__identity">
            <p className="hero__kicker">Ingeniero de Sistemas</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero__specialty">Backend Python e IA aplicada</p>
          </div>
          <p className="hero__intro">Desarrollo APIs, integro sistemas y construyo soluciones de procesamiento documental con RAG.</p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/#proyectos">Ver proyectos</Link>
            <Link className="button button--secondary" to="/#cv">Ver hojas de vida</Link>
            <Link className="button button--secondary" to="/#contacto">Contacto</Link>
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
