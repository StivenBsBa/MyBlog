import { Card, Row, Col } from "react-bootstrap";
import "../css/Education.css"; // Importamos el archivo CSS

const EducationExperience = () => {
  // Datos para la educación y los cursos
  const educationData = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Corporación Universitaria Adventista",
      period: "2021 - 2025",
      location: "Medellín, Antioquia",
      description:
        "Actualmente me encuentro en formación en la carrera de Ingeniería de Sistemas, donde estoy adquiriendo conocimientos y habilidades en áreas como la programación, la arquitectura de software y la gestión de proyectos tecnológicos.",
    },
    {
      title: "Tecnico de Sistemas",
      institution: "SENA",
      period: "2018 - 2029",
      location: "Abrego Norte de Santander",
      description:
        "Durante mi formación como técnico, adquirí conocimientos sobre mantenimiento y reparación de equipos de cómputo, desarrollando habilidades para diagnosticar y solucionar problemas técnicos. Además, tuve mi primera inmersión en el campo de la programación, sentando las bases para mi crecimiento profesional en tecnología.",
    },
  ];

  const certificatesData = [
    {
      title: "Manejo de herramientas Microsoft office 2016: Excel",
      institution: "SENA",
      period: "26 Septiembre, 2022",
      description:
        "Curso centrado en la creación de macros, diseño de tablas e informes dinámicos.",
    },
    {
      title:
        "Desarrollo De Aplicaciones Con Manejo De Datos En La Memoria- Java",
      institution: "Coursera",
      period: "26 Mayo, 2023",
      description:
        "Curso enfocado en el desarrollo de aplicaciones con manejo eficiente de datos en memoria utilizando Java.",
    },
    {
      title: "Despliegue De Aplicaciones Y Servicios En Contenedores Docker",
      institution: "HackerRank",
      period: "Noviembre, 2024",
      description: "",
    },
    {
      title: "SQL (Basic/Intermediate/Advanced)",
      institution: "HackerRank",
      period: "28 Mayo, 2023",
      description: "Curso de SQL con ejercicios prácticos.",
    },
  ];

  return (
    <section id="education-section">
      <h2 className="education-title">Educación & Certificados</h2>

      <div className="education-container">
        <h3 className="education-subtitle">Mi Educación</h3>
        <Row xs={1} sm={2} md={3} className="g-4">
          {educationData.map((item, index) => (
            <Col key={index}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title className="education-card-title">
                    {item.title}
                  </Card.Title>
                  <Card.Subtitle className="education-card-subtitle">
                    {item.institution} | {item.period}
                  </Card.Subtitle>
                  <Card.Text className="education-card-location">
                    {item.location}
                  </Card.Text>
                  <Card.Text className="education-card-description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="certificate-container">
        <h3 className="education-subtitle">Certificados y Cursos</h3>
        <Row xs={1} sm={2} md={3} className="g-4">
          {certificatesData.map((item, index) => (
            <Col key={index}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title className="education-card-title">
                    {item.title}
                  </Card.Title>
                  <Card.Subtitle className="education-card-subtitle">
                    {item.institution} | {item.period}
                  </Card.Subtitle>
                  <Card.Text className="education-card-description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default EducationExperience;
