import { Link } from "react-router-dom";
import { Icon } from "../../../shared/components/Icon";
import { RevealSection } from "../../../shared/components/RevealSection";
import { projects } from "../../projects/data/projects";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <RevealSection id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="Proyectos seleccionados"
          title="Ideas convertidas en producto."
          description="Una selección de proyectos donde he explorado producto, datos, arquitectura y experiencia de usuario."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className={`project-card__visual project-card__visual--${index + 1}`}>
                <span>{project.year}</span>
                <div aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="project-card__content">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <Link className="text-link" to={project.path}>
                  Ver caso de estudio <Icon name="arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
