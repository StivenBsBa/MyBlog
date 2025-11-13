import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaDocker,
  FaCodeBranch,
  FaUsers,
  FaTrello,
  FaCode,
  FaCube,
  FaGlobe,
} from "react-icons/fa";

import { SiRedux, SiPostman, SiNodedotjs } from "react-icons/si";

import {
  DiRuby,
  DiPostgresql,
  DiMongodb,
  DiMysql,
  DiFirebase,
} from "react-icons/di";

import "../css/Skills.css";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "react-intersection-observer";

const SkillCategory = ({ title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`card category fade-in-section ${inView ? "is-visible" : ""}`}
    >
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <h2>Mis Habilidades</h2>
      <div className="skills-list">
        <SkillCategory title="Backend">
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
        </SkillCategory>
        <SkillCategory title="Frontend">
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
        </SkillCategory>
        <SkillCategory title="Bases de Datos">
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
        </SkillCategory>
        <SkillCategory title="DevOps & Tools">
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
        </SkillCategory>
        <SkillCategory title="Metodologías">
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
        </SkillCategory>
        <SkillCategory title="Idiomas">
          <ul>
            <li>
              <FaGlobe size={30} /> Español (Nativo)
            </li>
            <li>
              <FaGlobe size={30} /> Inglés (Intermedio – B1)
            </li>
          </ul>
        </SkillCategory>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
