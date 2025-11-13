import { Card, Row, Col } from "react-bootstrap";
import "../css/Education.css";
import AnimatedSection from "./AnimatedSection";
import educationData from "../data/educationData.json";
import certificatesData from "../data/certificatesData.json";

const EducationExperience = () => {
  return (
    <AnimatedSection id="education">
      <h2 className="education-title">Educación & Certificados</h2>

      {/* Bloque de Educación */}
      <div className="education-container card">
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
              <Card className="education-card h-100 interactive-card">
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
      <div className="certificate-container card">
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
              <Card className="education-card h-100 interactive-card">
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
    </AnimatedSection>
  );
};

export default EducationExperience;
