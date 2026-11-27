# Brayan Barajas — Portafolio

Portafolio personal construido con React, TypeScript y Vite. El proyecto presenta experiencia, tecnologías, proyectos y un espacio en crecimiento para notas y experimentos.

## Desarrollo local

Requiere Node.js 24 o superior. El proyecto incluye `.nvmrc` con la versión recomendada.

```bash
npm ci
npm run dev
```

## Verificación

```bash
npm run check
```

El comando ejecuta ESLint, comprobación estricta de TypeScript y build de producción.

También genera y valida shells HTML para proyectos y artículos y genera el sitemap desde esas mismas rutas. Esto permite que GitHub Pages
entregue una respuesta `200` con canonical, Open Graph y datos estructurados correctos antes de
que React tome el control de la navegación.

## Arquitectura

```text
src/
├── app/        # Arranque, router y capas globales de estilos
├── assets/     # Recursos estáticos importados por la aplicación
├── config/     # Identidad, navegación y enlaces globales del sitio
├── features/   # Componentes, páginas y datos agrupados por dominio
├── pages/      # Páginas transversales, como el estado 404
└── shared/     # Componentes, hooks y contratos reutilizables
```

El despliegue a GitHub Pages se ejecuta automáticamente desde GitHub Actions al actualizar `main`. La salida se publica bajo `/MyBlog/` e incluye recuperación de rutas SPA.

## Actualización de contenido

- Perfil profesional y enlaces en `src/config/site.ts`.
- Experiencia, formación, tecnologías y versiones de CV en `src/features/home/data/content.ts`.
- Proyectos y notas en `src/features/projects/data/projects.ts` y `src/features/lab/data/articles.ts`. Agrega cada nota con un slug único, un resumen y secciones de texto.
- Para habilitar una descarga, coloca el PDF autorizado en `src/assets/cv/` y asigna su nombre a `file` en la entrada correspondiente. Si el archivo falta, la interfaz muestra un estado pendiente.
