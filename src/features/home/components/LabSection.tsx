import { Link } from "react-router-dom";
import { RevealSection } from "../../../shared/components/RevealSection";
import { articles } from "../../lab/data/articles";
import { SectionHeading } from "./SectionHeading";

export function LabSection() {
  return (
    <RevealSection className="section--surface" id="laboratorio">
      <div className="container">
        <SectionHeading title="Laboratorio técnico" description="Notas prácticas sobre backend e IA aplicada." />
        <div className="lab-list">
          {articles.map(({ path, title, summary, category }) => (
            <article className="lab-entry" key={path}>
              {category && <p className="eyebrow">{category}</p>}
              <h3><Link className="text-link" to={path}>{title}</Link></h3>
              <p>{summary}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
