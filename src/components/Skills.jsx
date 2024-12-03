import React from "react";
import "../css/Skills.css"; // Asegúrate de que este archivo de CSS esté en la ruta correcta

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        <div className="category">
          <h3>Desarrollo Web</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="category">
          <h3>Diseño</h3>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
        <div className="category">
          <h3>Desarrollo Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="category">
          <h3>Bases de Datos</h3>
          <ul>
            <li>SQL</li>
          </ul>
        </div>
        <div className="category">
          <h3>Extra</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Power BI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
