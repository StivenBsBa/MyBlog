import { Link } from "react-router-dom";
import { RevealSection } from "../../../shared/components/RevealSection";
import { projects } from "../../projects/data/projects";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <RevealSection id="proyectos">
      <div className="container">
        <SectionHeading
          title="Proyectos seleccionados"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card__content">
                <p className="eyebrow">{project.eyebrow} · {project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p><strong>{project.status}</strong> · {project.contribution}</p>
                <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  <Link className="text-link" to={project.path} aria-label={`Ver caso de estudio de ${project.title}`}>
                    Ver caso de estudio
                  </Link>
                  {project.repository && (
                    <a className="text-link" href={project.repository} aria-label={`Ver repositorio de ${project.title}`}>Repositorio</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
