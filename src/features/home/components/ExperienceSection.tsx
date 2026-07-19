import { RevealSection } from "../../../shared/components/RevealSection";
import { experience } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <RevealSection id="experiencia">
      <div className="container split-layout">
        <SectionHeading
          eyebrow="Experiencia"
          title="Productos sólidos se construyen en equipo."
          description="He trabajado entre frontend, backend y operaciones, buscando siempre que cada mejora técnica se traduzca en valor real."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.company}-${item.role}`}>
              <div className="timeline__marker" aria-hidden="true" />
              <header>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="timeline__meta">
                  {item.period} · {item.location}
                </p>
              </header>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
