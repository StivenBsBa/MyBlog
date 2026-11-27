import { RevealSection } from "../../../shared/components/RevealSection";
import { profile } from "../../../config/site";
import { certifications, education } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <RevealSection className="section--surface" id="sobre-mi">
      <div className="container">
        <SectionHeading title="Sobre mí" />
        <div className="about-grid">
          <section className="about-copy">
            <h3>Perfil profesional</h3>
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
          <div className="about-credentials">
            <section>
              <h3>Formación académica</h3>
              <ul className="credential-list">
                {education.map(({ institution, title, period, description }) => (
                  <li key={title}>
                    <strong>{title}</strong>
                    <span>{institution} · {period}{description && ` · ${description}`}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Certificaciones</h3>
              <ul className="credential-list">
                {certifications.map(({ title, issuer, year }) => (
                  <li key={title}>
                    <strong>{title}</strong>
                    <span>{issuer} · {year}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
