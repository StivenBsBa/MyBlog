import { RevealSection } from "../../../shared/components/RevealSection";
import { experience } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <RevealSection id="experiencia">
      <div className="container">
        <SectionHeading title="Experiencia profesional" />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.company}-${item.role}`}>
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
              {item.technologies.length > 0 && <p className="timeline__meta">{item.technologies.join(" · ")}</p>}
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
