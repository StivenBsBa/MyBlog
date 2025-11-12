import { Card, Row, Col } from "react-bootstrap";
import "../css/Experience.css"; // Importamos el archivo CSS
import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  // Array de objetos para Experiencia
  const experienceData = [
    {
      title:
        "Desarrollador Backend / Fullstack | Corporación Universitaria Adventista",
      date: "Feb 2024 – Presente · Medellín",
      description: [
        "Optimización del rendimiento del frontend en un 30% mediante lazy loading, code splitting y memoización en React",
        "Creación de componentes reutilizables fortaleciendo la mantenibilidad y consistencia visual del sistema académico",
        "Implementación de lógica de negocio en Ruby on Rails mejorando la eficiencia y escalabilidad del sistema institucional",
        "Participación en migración de sistemas institucionales reduciendo incidentes críticos en producción en un 60%",
        "Mentoría técnica a nuevos desarrolladores promoviendo estándares de código limpio y buenas prácticas",
      ],
    },
    {
      title: "Asistente Administrativo | Agencia de Seguros",
      date: "Feb 2024 – Nov 2024 · Medellín",
      description: [
        "Gestión y organización de bases de datos en Excel, reduciendo tiempos de consulta en 25% mediante estructuración optimizada",
        "Optimización de procesos administrativos y digitales, mejorando trazabilidad y atención al cliente",
        "Automatización de reportes con Excel (fórmulas, tablas dinámicas), digitalizando tareas rutinarias",
      ],
    },
  ];

  return (
    <AnimatedSection id="experience">
      <h2 className="experience-title">Mi Experiencia</h2>

      <Row xs={1} sm={1} md={1} className="g-4">
        {experienceData.map((item, index) => (
          <Col key={index}>
            <Card className="card experience-card interactive-card">
              <Card.Body>
                <Card.Title className="experience-card-title">
                  {item.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.date}
                </Card.Subtitle>
                <Card.Text className="experience-card-description">
                  <ul>
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </AnimatedSection>
  );
};

export default Experience;
