import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import img1 from "../../Assets/Sterling/IMG_20250811_115417.jpg";
import img2 from "../../Assets/Sterling/received_1540901116890349.jpeg";
import img3 from "../../Assets/Sterling/received_1573678660707795.jpeg";
import img4 from "../../Assets/Sterling/received_1734874823786897.jpeg";
import img5 from "../../Assets/Sterling/received_2087668064976375.jpeg";
import img6 from "../../Assets/Sterling/received_24606590462270636.jpeg";
import img7 from "../../Assets/Sterling/received_749691737738217.jpeg";
import img8 from "../../Assets/Sterling/received_823770240164733.jpeg";

function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    // Duplicate images for infinite scroll effect
    const scrollImages = [...images, ...images];

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                    My <strong className="purple">Internship </strong> Gallery
                </h1>
                <p style={{ color: "white" }}>
                    A glimpse into my time as an IT Support Intern at Sterling Global.
                </p>

                <div className="gallery-container">
                    <div className="gallery-track">
                        {scrollImages.map((img, index) => (
                            <div className="gallery-box" key={index}>
                                <img src={img} alt={`Internship ${index}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>

                <Row style={{ justifyContent: "center", padding: "50px" }}>
                    <Col md={12} className="home-about-description">
                        <h2 style={{ fontSize: "2em", color: "white" }}>
                            Experience at <span className="purple"> Sterling Global </span>
                        </h2>
                        <p className="home-about-body" style={{ textAlign: "center" }}>
                            During my 486-hour internship, I worked on end-to-end Linux server installations,
                            corporate Windows deployments, and hardware troubleshooting. These photos capture
                            the hands-on technical environment where I honed my IT infrastructure skills.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Gallery;
