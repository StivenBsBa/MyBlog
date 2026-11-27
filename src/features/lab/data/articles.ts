import type { Article } from "../../../shared/types/content";

export const articles: readonly Article[] = [
  {
    category: "IA aplicada",
    slug: "arquitectura-rag",
    path: "/laboratorio/arquitectura-rag",
    title: "Arquitectura RAG con Python",
    summary: "Cómo conectar la ingesta de documentos con la recuperación contextual y la generación de respuestas.",
    sections: [
      { title: "Ingesta e indexación", text: "La ingesta extrae el texto de los documentos y lo divide en fragmentos. Cada fragmento se convierte en un embedding y se almacena junto con metadatos en PostgreSQL con PGVector." },
      { title: "Recuperación y generación", text: "Una consulta se convierte en un embedding para buscar fragmentos relevantes. El modelo recibe la pregunta y el contexto recuperado. Si el contexto es insuficiente, una opción es pedir precisión o indicarlo en la respuesta." },
      { title: "Ejemplo con un manual público", text: "Imagina una pregunta como «¿Cuánto dura la garantía?». El buscador recupera la sección de garantía del manual y el modelo redacta la respuesta citando la página. Si solo recupera un fragmento sobre devoluciones, el asistente puede indicar que la duración sigue sin confirmarse." },
      { title: "Aislamiento por tenant", text: "Asocia los documentos y fragmentos a un tenant. Aplica el filtro de tenant autorizado dentro de la consulta de recuperación y limita cualquier acceso directo a documentos con la misma regla." },
    ],
  },
  {
    category: "Backend",
    slug: "procesamiento-kafka",
    path: "/laboratorio/procesamiento-kafka",
    title: "Procesamiento asíncrono con Kafka",
    summary: "Un flujo de indexación documental basado en eventos, con estados y manejo de errores.",
    sections: [
      { title: "Productores y consumidores", text: "El productor emite un evento con el identificador del documento cuando hay trabajo para la indexación. Un consumidor procesa ese evento por separado y comunica el resultado mediante un estado persistido." },
      { title: "Verificación del flujo", text: "Para probar la indexación, entrega dos veces el mismo evento de prueba y verifica que el documento quede indexado una sola vez. Después simula un fallo temporal y comprueba que un reintento complete el trabajo sin duplicar fragmentos." },
      { title: "Estados y errores", text: "Distingue estados como pendiente, en proceso, completado y fallido. Si un evento vuelve a entregarse, una operación idempotente evita duplicar los resultados. Define cuándo reintentar y cuándo registrar el fallo para revisión." },
    ],
  },
  {
    category: "Evaluación de IA",
    slug: "evaluacion-modelos",
    path: "/laboratorio/evaluacion-modelos",
    title: "Gestión y evaluación de modelos de IA",
    summary: "Versionado de datasets, evaluación automatizada y protección de datos personales.",
    sections: [
      { title: "Datasets y registro", text: "Versiona los datasets para relacionar cada evaluación con los datos que utilizó. MLflow permite registrar ejecuciones y métricas y gestionar versiones de modelos en un registro." },
      { title: "Evaluación con criterios explícitos", text: "Define qué significa una respuesta pertinente y respaldada por el contexto. Un LLM evaluador puede aplicar esa rúbrica. Conviene contrastar sus puntuaciones con ejemplos revisados por personas." },
      { title: "Ejemplo de rúbrica", text: "Para una pregunta cuya respuesta está en un documento, revisa si la respuesta contesta lo solicitado, si las afirmaciones se pueden rastrear a los fragmentos y si reconoce la falta de evidencia cuando corresponde. Guarda la versión del dataset y de la rúbrica junto con los resultados para comparar ejecuciones." },
      { title: "Protección de datos", text: "Microsoft Presidio ayuda a identificar y transformar datos personales. Revisa ejemplos de salida para detectar entidades que hayan quedado expuestas antes de reutilizar un dataset." },
    ],
  },
];
