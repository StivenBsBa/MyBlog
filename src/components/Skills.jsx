import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGit,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";

import "../css/Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        <div className="category">
          <h3>Desarrollo Web</h3>
          <ul>
            <li>
              <FaHtml5 size={30} /> HTML
            </li>
            <li>
              <FaCss3Alt size={30} /> CSS
            </li>
            <li>
              <FaJs size={30} /> JavaScript
            </li>
            <li>
              <FaReact size={30} /> React
            </li>
            <li>
              <FaBootstrap size={30} /> Bootstrap
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Diseño</h3>
          <ul>
            <li>
              <FaFigma size={30} /> Figma
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Desarrollo Backend</h3>
          <ul>
            <li>
              <FaNodeJs size={30} /> Node.js
            </li>
            <li>
              <FaJava size={30} /> Java
            </li>
            <li>
              <FaPython size={30} /> Python
            </li>
            <li>
              <FaJs size={30} /> JavaScript
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Bases de Datos</h3>
          <ul>
            <li>
              <FaDatabase size={30} /> SQL
            </li>
            <li>
              <FaDatabase size={30} /> NoSQL
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Extra</h3>
          <ul>
            <li>
              <FaGit size={30} /> Git
            </li>
            <li>
              <FaGithub size={30} /> GitHub
            </li>
            <li>
              <FaMicrosoft size={30} /> Power BI
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
