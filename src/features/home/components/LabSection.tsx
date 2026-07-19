import { RevealSection } from "../../../shared/components/RevealSection";
import { labResources } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function LabSection() {
  return (
    <RevealSection className="section--surface" id="laboratorio">
      <div className="container">
        <SectionHeading
          eyebrow="Blog · Laboratorio · Recursos"
          title="Aprender también es documentar."
          description="Este espacio está creciendo para reunir notas técnicas, experimentos y recursos útiles para otros developers."
        />

        <div className="resource-grid">
          {labResources.map((resource, index) => (
            <article className="resource-card" key={resource.title}>
              <span className="resource-card__number" aria-hidden="true">
                0{index + 1}
              </span>
              <p className="resource-card__status">{resource.status}</p>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
