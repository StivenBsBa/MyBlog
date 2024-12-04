import { Card, Row, Col } from "react-bootstrap";
import "../css/Experience.css"; // Importamos el archivo CSS

const Experience = () => {
  // Array de objetos para Experiencia
  const experienceData = [
    {
      title: "En Adquisición de Experiencia",
      description:
        "No tengo experiencias profesionales previas. Actualmente estoy en la etapa de adquisición de experiencia y buscando oportunidades para desarrollarme profesionalmente en el campo del diseño y desarrollo web. Estoy comprometido/a a aprender y crecer en mi carrera para alcanzar mis metas y contribuir de manera significativa en proyectos futuros.",
    },
  ];

  return (
    <section id="experience-section">
      <h2 className="experience-title">Mi Experiencia</h2>

      <Row xs={1} sm={2} md={3} className="g-4">
        {experienceData.map((item, index) => (
          <Col key={index}>
            <Card className="experience-card">
              <Card.Body>
                <Card.Title className="experience-card-title">
                  {item.title}
                </Card.Title>
                <Card.Text className="experience-card-description">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Experience;
