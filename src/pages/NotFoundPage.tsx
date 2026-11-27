import { Link, useLocation } from "react-router-dom";
import { profile } from "../config/site";
import { Icon } from "../shared/components/Icon";
import { useDocumentMeta } from "../shared/hooks/useDocumentMeta";

export default function NotFoundPage() {
  const location = useLocation();

  useDocumentMeta({
    title: `Página no encontrada | ${profile.name}`,
    description: "La página solicitada no existe o cambió de ubicación.",
    noIndex: true,
    path: location.pathname,
  });

  return <NotFoundContent />;
}

export function NotFoundContent() {
  return (
    <section className="status-page">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <p>Puede que el enlace haya cambiado. El portafolio sigue a un clic de distancia.</p>
      <Link className="button button--primary" to="/">
        Volver al inicio <Icon name="arrow-right" />
      </Link>
    </section>
  );
}
