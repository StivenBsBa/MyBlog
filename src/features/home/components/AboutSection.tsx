import { RevealSection } from "../../../shared/components/RevealSection";
import { profile } from "../../../config/site";
import { education } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <RevealSection className="section--surface" id="sobre-mi">
      <div className="container about-grid">
        <SectionHeading eyebrow="Sobre mí" title="Ingeniería con intención y curiosidad." />

        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="education-grid" aria-label="Formación académica">
            {education.map((item) => (
              <article className="education-card" key={`${item.institution}-${item.title}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p className="education-card__institution">{item.institution}</p>
                <p>{item.description}</p>
                <small>{item.location}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
