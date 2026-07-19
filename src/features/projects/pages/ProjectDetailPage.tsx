import { Link, useLocation, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { Icon } from "../../../shared/components/Icon";
import { useDocumentMeta } from "../../../shared/hooks/useDocumentMeta";
import { NotFoundContent } from "../../../pages/NotFoundPage";

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const project = getProjectBySlug(params.slug ?? "");

  useDocumentMeta({
    title: project ? `${project.title} | Brayan Barajas` : "Proyecto no encontrado",
    description: project?.summary ?? "El proyecto solicitado no está disponible.",
    path: project?.path ?? location.pathname,
    noIndex: !project,
    structuredData: project
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.summary,
          url: `https://stivenbsba.github.io/MyBlog${project.path}`,
          programmingLanguage: project.technologies,
          author: {
            "@type": "Person",
            name: "Brayan Barajas",
          },
        }
      : undefined,
  });

  if (!project) return <NotFoundContent />;

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <div className="container project-detail__header-grid">
          <div>
            <Link className="back-link" to="/#proyectos">
              <Icon name="arrow-right" className="icon--back" /> Volver a proyectos
            </Link>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="project-detail__summary">{project.summary}</p>
          </div>
          <dl className="project-detail__meta">
            <div>
              <dt>Año</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Rol</dt>
              <dd>Full Stack Developer</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>Proyecto de portafolio</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container project-detail__body">
        <section aria-labelledby="project-overview-title">
          <p className="eyebrow">Contexto</p>
          <h2 id="project-overview-title">Acerca del proyecto</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <aside aria-labelledby="project-technologies-title">
          <h2 id="project-technologies-title">Tecnologías</h2>
          <ul className="tag-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </aside>

        <section className="project-detail__highlights" aria-labelledby="project-highlights-title">
          <p className="eyebrow">Funcionalidades</p>
          <h2 id="project-highlights-title">Puntos clave</h2>
          <ol>
            {project.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{highlight}</p>
              </li>
            ))}
          </ol>
        </section>

        {project.categories ? (
          <section className="project-detail__categories" aria-labelledby="project-categories-title">
            <p className="eyebrow">Cobertura</p>
            <h2 id="project-categories-title">Contenido organizado para descubrir</h2>
            <div>
              {project.categories.map((category) => (
                <article key={category.title}>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <nav className="project-detail__navigation" aria-label="Navegación del proyecto">
          <Link className="button button--primary" to="/#proyectos">
            Explorar más proyectos <Icon name="arrow-right" />
          </Link>
        </nav>
      </div>
    </article>
  );
}
