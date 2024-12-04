import { Card, Row, Col } from "react-bootstrap";
import "../css/Education.css"; // Importamos el archivo CSS

const EducationExperience = () => {
  // Datos para la educación y los cursos
  const educationData = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Corporación Universitaria Adventista",
      period: "2021 - En Curso",
      location: "Medellín, Antioquia",
      description:
        "Actualmente me encuentro en formación en la carrera de Ingeniería de Sistemas, donde estoy adquiriendo conocimientos y habilidades en áreas como la programación, la arquitectura de software y la gestión de proyectos tecnológicos.",
    },
    {
      title: "Tecnico de Sistemas",
      institution: "SENA",
      period: "2018 - 2019",
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
        "Este programa capacita en el manejo avanzado de Microsoft Excel 2016, enfocándose en la creación de hojas de cálculo, uso de funciones y fórmulas, gráficos y tablas dinámicas para una gestión eficiente de la información empresarial.",
    },
    {
      title:
        "Desarrollo De Aplicaciones Con Manejo De Datos En La Memoria- Java",
      institution: "SENA",
      period: "26 Mayo, 2023",
      description:
        "Este curso enseña cómo gestionar de manera eficiente los datos en memoria utilizando arreglos y colecciones en Java, optimizando el rendimiento de las aplicaciones",
    },
    {
      title: "Despliegue De Aplicaciones Y Servicios En Contenedores Docker",
      institution: "SENA",
      period: "Noviembre, 2024",
      description:
        "Este programa enseña a utilizar Docker para crear, empaquetar y desplegar aplicaciones en contenedores, facilitando la integración entre los equipos de desarrollo y operaciones.  Gestionando contenedores, imágenes, y a aplicando conceptos de redes, virtualización y estándares, optimizando la portabilidad y eficiencia del despliegue de aplicaciones.",
    },
    {
      title: "SQL (Basic/Intermediate/Advanced)",
      institution: "HackerRank",
      period: "28 Mayo, 2023",
      description:
        "El certificado de SQL de HackerRank abarca tres niveles: básico, intermedio y avanzado, enseñando desde consultas simples hasta optimización y gestión avanzada de bases de datos, ideal para desarrollar habilidades en SQL.",
    },
  ];

  return (
    <section id="education-section">
      <h2 className="education-title">Educación & Certificados</h2>

      {/* Bloque de Educación */}
      <div className="education-container">
        <h3 className="education-subtitle">Mi Educación</h3>
        <Row
          xs={1}
          sm={
            educationData.length === 1 ? 1 : educationData.length === 2 ? 2 : 3
          }
          md={
            educationData.length === 1 ? 1 : educationData.length === 2 ? 2 : 3
          }
          className="g-4"
        >
          {educationData.map((item, index) => (
            <Col key={index}>
              <Card className="education-card h-100">
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

      {/* Bloque de Certificados */}
      <div className="certificate-container">
        <h3 className="education-subtitle">Certificados y Cursos</h3>
        <Row
          xs={1}
          sm={
            certificatesData.length === 1
              ? 1
              : certificatesData.length === 2
              ? 2
              : 3
          }
          md={
            certificatesData.length === 1
              ? 1
              : certificatesData.length === 2
              ? 2
              : 3
          }
          className="g-4"
        >
          {certificatesData.map((item, index) => (
            <Col key={index}>
              <Card className="education-card h-100">
                <Card.Body className="card-body">
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
