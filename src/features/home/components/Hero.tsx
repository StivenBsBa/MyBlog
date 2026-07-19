import profileImage from "../../../assets/profile.webp";
import { Icon } from "../../../shared/components/Icon";
import { profile, socialProfiles } from "../../../config/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="availability">
            <span aria-hidden="true" />
            {profile.availability}
          </div>
          <p className="hero__kicker">Hola, soy {profile.name}</p>
          <h1 id="hero-title">
            Desarrollo productos digitales <span>claros, rápidos y escalables.</span>
          </h1>
          <p className="hero__intro">{profile.introduction}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              Ver proyectos <Icon name="arrow-right" />
            </a>
            <a
              className="button button--secondary"
              href={socialProfiles.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Hablemos <Icon name="external" />
            </a>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Enfoque</dt>
              <dd>Full Stack</dd>
            </div>
            <div>
              <dt>Ubicación</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__portrait" aria-label={`Retrato de ${profile.name}`}>
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
          <div className="hero__code-card" aria-hidden="true">
            <span>01</span>
            <code>solve(problem)</code>
            <span>02</span>
            <code>ship(value)</code>
          </div>
        </div>
      </div>
    </section>
  );
}
