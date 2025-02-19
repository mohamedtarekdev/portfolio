import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../components/Title';

import '../styles/experience.css';

const Experience = ({ data }) => {
    return (
        <div id="experience" className="experience">
            <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <Title title="My Work Experience" color="#2C2F3F" />
                    </Col>
                    <Row className="experience-content d-flex justify-content-center">
                        {data.map((item) => (
                            <Row
                                key={item.id}
                                className="experience-info d-flex justify-content-center"
                            >
                                <Col
                                    md={5}
                                    className="company-info d-flex flex-column"
                                >
                                    <Row className="d-flex justify-content-end">
                                        <Col md={8}>
                                            <h4
                                                style={{
                                                    color: `#${item.color}`,
                                                }}
                                            >
                                                {item.company}
                                            </h4>
                                            <span>{item.date}</span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={2} className="break-line-container">
                                    <div className="break-shape d-flex flex-column align-items-center h-100">
                                        <div className="break-point d-flex justify-content-center align-items-center">
                                            <span
                                                style={{
                                                    backgroundColor: `#${item.color}`,
                                                }}
                                            ></span>
                                        </div>
                                        <div className="break-line "></div>
                                    </div>
                                </Col>
                                <Col
                                    md={5}
                                    className="position-info d-flex flex-column"
                                >
                                    <h4
                                        className="job-title"
                                        style={{ color: `#${item.color}` }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p>{item.description}</p>
                                </Col>
                            </Row>
                        ))}
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;
