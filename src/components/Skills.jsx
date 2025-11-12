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
  FaDocker,
  FaCodeBranch,
  FaUsers,
  FaTrello,
  FaCode,
  FaCube,
  FaGlobe,
  FaGem,
} from "react-icons/fa";

import {
  SiRedux,
  SiPostman,
  SiNodedotjs,
} from "react-icons/si";

import {
  DiRuby,
  DiPostgresql,
  DiMongodb,
  DiMysql,
  DiFirebase,
} from "react-icons/di";

import "../css/Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        <div className="category">
          <h3>Backend</h3>
          <ul>
            <li>
              <FaPython size={30} /> Python (FastAPI)
            </li>
            <li>
              <FaNodeJs size={30} /> Node.js (Express)
            </li>
            <li>
              <DiRuby size={30} /> Ruby on Rails
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Frontend</h3>
          <ul>
            <li>
              <FaReact size={30} /> React
            </li>
            <li>
              <SiRedux size={30} /> Redux
            </li>
            <li>
              <FaJs size={30} /> JavaScript (ES6+)
            </li>
            <li>
              <FaHtml5 size={30} /> HTML5
            </li>
            <li>
              <FaCss3Alt size={30} /> CSS3
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Bases de Datos</h3>
          <ul>
            <li>
              <DiPostgresql size={30} /> PostgreSQL
            </li>
            <li>
              <DiMongodb size={30} /> MongoDB
            </li>
            <li>
              <DiMysql size={30} /> MySQL
            </li>
            <li>
              <DiFirebase size={30} /> Firebase
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>DevOps & Tools</h3>
          <ul>
            <li>
              <FaGit size={30} /> Git
            </li>
            <li>
              <FaDocker size={30} /> Docker
            </li>
            <li>
              <SiPostman size={30} /> Postman
            </li>
            <li>
              <FaCodeBranch size={30} /> CI/CD básico
            </li>
            <li>
              <SiNodedotjs size={30} /> N8N
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Metodologías</h3>
          <ul>
            <li>
              <FaUsers size={30} /> Scrum
            </li>
            <li>
              <FaTrello size={30} /> Kanban
            </li>
            <li>
              <FaCode size={30} /> Clean Code
            </li>
            <li>
              <FaCube size={30} /> SOLID
            </li>
          </ul>
        </div>
        <div className="category">
          <h3>Idiomas</h3>
          <ul>
            <li>
              <FaGlobe size={30} /> Español (Nativo)
            </li>
            <li>
              <FaGlobe size={30} /> Inglés (Intermedio – B1)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
