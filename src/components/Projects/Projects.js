import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pawcare from "../../Assets/Projects/pawcare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawcare}
              isBlog={false}
              title="PawCare Capstone"
              description="A comprehensive veterinary management system providing trusted pet care services, featuring medical records tracking, scheduling, and blog integration. Built with modern web technologies to ensure a seamless experience for pet owners and clinic staff."
              ghLink="https://github.com/Crizneil/pawcare-capstone.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
