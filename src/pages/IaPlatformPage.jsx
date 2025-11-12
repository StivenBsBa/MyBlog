import React from 'react';
import '../css/portfolio.css'; // Assuming some shared styling

const IaPlatformPage = () => {
  return (
    <section id="ia-platform-page" className="project-detail-page">
      <div className="container">
        <h1>IA-Platform - Chatbot de Finanzas con IA</h1>
        <p className="project-intro">
          Este proyecto innovador se centra en el desarrollo de un chatbot financiero avanzado, impulsado por inteligencia artificial, diseñado para transformar la manera en que los usuarios interactúan con sus datos financieros.
        </p>
        <div className="project-features">
          <h2>Características Principales:</h2>
          <ul>
            <li>
              <strong>Análisis y Asistencia Personalizada:</strong> El chatbot ofrece análisis detallados y asistencia personalizada, adaptándose a las necesidades específicas de cada usuario para una gestión financiera más eficiente.
            </li>
            <li>
              <strong>Generación Interactiva de Tablas y Gráficos:</strong> Una de sus funcionalidades clave es la capacidad de generar tablas y gráficos interactivos a partir de datos financieros complejos. Esto facilita la visualización y comprensión de tendencias, patrones y el rendimiento general.
            </li>
            <li>
              <strong>Integración con Fuentes de Datos Financieros:</strong> Se integra con diversas fuentes de datos financieros para asegurar que la información proporcionada sea siempre actualizada y relevante, permitiendo a los usuarios tomar decisiones informadas.
            </li>
            <li>
              <strong>Mejora en la Toma de Decisiones:</strong> Al automatizar el análisis de datos y ofrecer insights impulsados por IA, el chatbot ayuda a los usuarios a mejorar significativamente su toma de decisiones financieras.
            </li>
          </ul>
        </div>
        <div className="project-technologies">
          <h2>Tecnologías Clave:</h2>
          <p>Inteligencia Artificial, Chatbot, Finanzas, Visualización de Datos, Procesamiento de Lenguaje Natural.</p>
        </div>
        {/* Puedes añadir más secciones como capturas de pantalla, demos, etc. */}
      </div>
    </section>
  );
};

export default IaPlatformPage;
