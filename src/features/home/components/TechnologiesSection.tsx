import { RevealSection } from "../../../shared/components/RevealSection";
import type { TechnologyGroup } from "../../../shared/types/content";
import { appliedTechnologies, skillLevels } from "../data/content";
import { SectionHeading } from "./SectionHeading";

function TechnologyGroups({ groups }: { groups: TechnologyGroup[] }) {
  return (
    <div className="technology-grid">
      {groups.map(({ category, technologies }) => (
        <section className="technology-group" key={category}>
          <h4>{category}</h4>
          <ul className="tag-list">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function TechnologiesSection() {
  return (
    <RevealSection id="tecnologias">
      <div className="container">
        <SectionHeading title="Tecnologías" />
        <div className="technology-columns">
          <section>
            <h3>Nivel y uso profesional</h3>
            <TechnologyGroups groups={skillLevels} />
          </section>
          <section>
            <h3>Herramientas y prácticas aplicadas</h3>
            <TechnologyGroups groups={appliedTechnologies} />
          </section>
        </div>
      </div>
    </RevealSection>
  );
}
