import { useEffect, useRef, useState } from "react";
import { RevealSection } from "../../../shared/components/RevealSection";
import { resumes } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const files = import.meta.glob<string>("/src/assets/cv/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

export function ResumeSection() {
  const [preview, setPreview] = useState<{ title: string; url: string } | null>(null);
  const viewer = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!preview) return;
    viewer.current?.focus({ preventScroll: true });
    viewer.current?.scrollIntoView({ block: "start" });
  }, [preview]);

  return (
    <RevealSection className="section--surface" id="cv">
      <div className="container">
        <SectionHeading title="Hojas de vida" />
        <div className="resource-grid">
          {resumes.map(({ title, description, file }) => {
            const url = file && files[`/src/assets/cv/${file}`];

            return (
              <article className="resource-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
                {url ? (
                  <div className="resume-actions">
                    <button
                      className="button button--secondary"
                      type="button"
                      aria-controls="cv-preview"
                      aria-expanded={preview?.url === url}
                      aria-label={`${preview?.url === url ? "Ocultar" : "Ver"} PDF de ${title}`}
                      onClick={(event) => {
                        opener.current = event.currentTarget;
                        setPreview(preview?.url === url ? null : { title, url });
                      }}
                    >
                      {preview?.url === url ? "Ocultar PDF" : "Ver PDF"}
                    </button>
                    <a className="text-link" href={url} download={file} aria-label={`Descargar PDF de ${title}`}>
                      Descargar PDF
                    </a>
                  </div>
                ) : <p className="resource-card__status">PDF pendiente</p>}
              </article>
            );
          })}
        </div>
        <section id="cv-preview" className="resume-preview" hidden={!preview} aria-labelledby={preview ? "cv-preview-title" : undefined}>
          {preview && (
            <>
              <div className="resume-preview__heading">
                <h3 id="cv-preview-title" tabIndex={-1} ref={viewer}>{preview.title}</h3>
                <button className="button button--secondary" type="button" onClick={() => {
                  setPreview(null);
                  opener.current?.focus();
                }}>
                  Cerrar visor
                </button>
                <a className="text-link" href={preview.url} target="_blank" rel="noreferrer">
                  Abrir PDF en otra pestaña
                </a>
              </div>
              <iframe src={preview.url} title={`Hoja de vida de ${preview.title}`} />
            </>
          )}
        </section>
      </div>
    </RevealSection>
  );
}
