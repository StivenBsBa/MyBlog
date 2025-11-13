import { Card, Row, Col } from "react-bootstrap";
import "../css/Experience.css";
import AnimatedSection from "./AnimatedSection";
import experienceData from "../data/experienceData.json";

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="experience-title">Experiencia Profesional</h2>

      <Row xs={1} sm={1} md={1} className="g-4">
        {experienceData.map((item, index) => (
          <Col key={index}>
            <Card className="experience-card interactive-card">
              <Card.Body>
                <Card.Title className="experience-card-title">
                  {item.title}
                </Card.Title>
                <Card.Subtitle className="experience-card-date">
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
