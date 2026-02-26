import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFigma,
  SiWindows,
  SiGamedeveloper,
  SiLaragon,
} from "react-icons/si";
import { TbPrompt } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGamedeveloper />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaragon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbPrompt />
      </Col>
    </Row>
  );
}

export default Toolstack;
