import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';

import '../styles/hero.css';

import personalImage from '../assets/images/personal-image.webp';

const Hero = ({ data }) => {
    return (
        <div
            className="hero d-flex align-items-center"
            style={{ paddingTop: '120px' }}
        >
            <Container>
                <Row className="d-flex" style={{ height: '100vh' }}>
                    {/* Text Section */}
                    <Col md={6} className="d-flex align-items-center">
                        <div className="hero-content">
                            <h1>Hi, I'm Mohamed Tarek 👋</h1>
                            <h2>Fullstack Developer</h2>
                            <p>
                                I build clean and scalable web applications
                                using modern technologies like React and
                                Node.js.
                            </p>
                            <div className="hero-buttons mt-4">
                                <a
                                    href="#projects"
                                    className="btn view-projects-btn me-3"
                                >
                                    View Projects
                                </a>
                                <a
                                    href={data[0].link}
                                    className="btn download-cv-btn"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Image Section */}
                    <Col
                        md={6}
                        className="d-flex align-items-end justify-content-center"
                    >
                        <img
                            className="personal-image"
                            src={personalImage}
                            alt="personal"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
