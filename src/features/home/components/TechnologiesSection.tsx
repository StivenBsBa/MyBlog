import { RevealSection } from "../../../shared/components/RevealSection";
import { technologyGroups } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function TechnologiesSection() {
  return (
    <RevealSection className="section--dark" id="tecnologias">
      <div className="container">
        <SectionHeading
          eyebrow="Tecnologías"
          title="Una caja de herramientas pragmática."
          description="Elijo tecnologías por el problema que resuelven, no por la tendencia del momento."
        />

        <div className="technology-grid">
          {technologyGroups.map((group, groupIndex) => (
            <article className="technology-group" key={group.category}>
              <div className="technology-group__heading">
                <span aria-hidden="true">0{groupIndex + 1}</span>
                <h3>{group.category}</h3>
              </div>
              <ul>
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
