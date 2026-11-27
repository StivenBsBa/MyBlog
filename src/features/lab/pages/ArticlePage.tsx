import { Link, useParams } from "react-router-dom";
import { getArticleMeta } from "../../../config/site";
import NotFoundPage from "../../../pages/NotFoundPage";
import { Icon } from "../../../shared/components/Icon";
import { useDocumentMeta } from "../../../shared/hooks/useDocumentMeta";
import type { Article } from "../../../shared/types/content";
import { articles } from "../data/articles";

function ArticleContent({ article }: { article: Article }) {
  useDocumentMeta(getArticleMeta(article));

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <div className="container article-column">
          <Link className="back-link" to="/#laboratorio">
            <Icon name="arrow-right" className="icon--back" /> Volver al laboratorio
          </Link>
          <p className="eyebrow">{article.category ?? "Nota de arquitectura"}</p>
          <h1>{article.title}</h1>
          <p className="project-detail__summary">{article.summary}</p>
        </div>
      </header>
      <div className="container article-column article-body">
        {article.sections.map(({ title, text }) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  return article ? <ArticleContent article={article} /> : <NotFoundPage />;
}
