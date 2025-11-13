import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="footer-text">
              El único modo de hacer un gran trabajo es amar lo que haces.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <a
              href="https://www.linkedin.com/in/brayanstiven/"
              className="text-dark mx-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/StivenBsBa"
              className="text-dark mx-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
