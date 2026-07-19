/* eslint-disable react-refresh/only-export-components -- This module intentionally owns route-level lazy boundaries. */
import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import { Layout } from "../shared/components/Layout";

const ProjectDetailPage = lazy(
  () => import("../features/projects/pages/ProjectDetailPage"),
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="page-loader" role="status">
      <span aria-hidden="true" />
      Cargando contenido…
    </div>
  );
}

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "proyectos/:slug",
          element: withSuspense(<ProjectDetailPage />),
        },
        {
          path: "localroot",
          element: <Navigate to="/proyectos/localroot" replace />,
        },
        {
          path: "ia-platform",
          element: <Navigate to="/proyectos/ia-platform" replace />,
        },
        { path: "*", element: withSuspense(<NotFoundPage />) },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
