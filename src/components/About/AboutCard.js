import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Crisneil Bucio Sanchez</span>,
            a 4th-year <span className="purple">Software Development and UI/UX student</span> from the Philippines.
            <br />
            <br />
            I recently completed my internship at <span className="purple">Sterling Global Center</span> as an IT Support specialist. This experience greatly sharpened my technical skills, where I was responsible for installing Linux servers, troubleshooting hardware, and managing Windows deployments.
            <br />
            <br />
            Currently, I am applying my development and design skills to my latest capstone project: a comprehensive <span className="purple">pet management system</span> for the <span className="purple">Municipal Veterinary Office of Meycauayan, Bulacan</span>. I am passionate about creating software that is both technically robust and user-friendly.
          </p>
          <footer className="blockquote-footer">Crisneil Bucio Sanchez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
