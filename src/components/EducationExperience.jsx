import React from "react";
import "../css/EducationExperience.css"; // Asegúrate de que este archivo de CSS esté creado

const EducationExperience = () => {
  return (
    <section id="education">
      <h2>Educación & Experiencia</h2>

      <div className="education">
        <h3>Mi Educación</h3>
        <p>
          <strong>Ingeniería de Sistemas</strong>
        </p>
        <p>
          <em>Universidad / Carrera Profesional | 2021 - 2025</em>
        </p>
        <p>Corporación Universitaria Adventista | Medellín</p>
        <p>
          Actualmente me encuentro en formación en la carrera de Ingeniería de
          Sistemas, donde estoy adquiriendo conocimientos y habilidades en áreas
          como la programación, la arquitectura de software y la gestión de
          proyectos tecnológicos.
        </p>
      </div>

      <div className="experience">
        <h3>Mi Experiencia</h3>
        <p>
          <strong>Aún en Adquisición de Experiencia</strong>
        </p>
        <p>No tengo experiencias profesionales previas</p>
        <p>
          Actualmente estoy en la etapa de adquisición de experiencia y buscando
          oportunidades para desarrollarme profesionalmente en el campo del
          diseño y desarrollo web. Estoy comprometido/a a aprender y crecer en
          mi carrera para alcanzar mis metas y contribuir de manera
          significativa en proyectos futuros.
        </p>
      </div>
    </section>
  );
};

export default EducationExperience;
