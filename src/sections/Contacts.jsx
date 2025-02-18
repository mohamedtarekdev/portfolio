import React from 'react';
import Title from '../components/Title';
import { Col, Container, Row } from 'react-bootstrap';

import '../styles/contacts.css';

import data from '../data/contacts.json';

const Contacts = () => {
    const fields = ['location', 'email', 'phone'];

    return (
        <div id="contacts" className="contacts">
            <Container>
                <Row>
                    <Col md={12}>
                        <Title title="Stay Connected" color="#2C2F3F" />
                    </Col>
                </Row>
                <Row className="contacts-info d-flex justify-content-center">
                    <Col
                        md={12}
                        className="data d-flex flex-column justify-content-center align-items-center"
                    >
                        {fields.map((field, index) => (
                            <Row key={field}>
                                {field === 'email' ? (
                                    <a
                                        href={`mailto:${data[index + 1].value}`}
                                        className={field}
                                    >
                                        {data[index + 1].value}
                                    </a>
                                ) : (
                                    <span className={field}>
                                        {data[index + 1].value}
                                    </span>
                                )}
                            </Row>
                        ))}
                    </Col>
                </Row>
                <Row className="contacts-icons d-flex justify-content-center">
                    <Col md={12} className="d-flex justify-content-center">
                        {data.slice(4).map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="icon d-flex justify-content-center align-items-center"
                                style={{
                                    backgroundColor: `#${item.background_color}`,
                                }}
                            >
                                <img src={item.icon} alt={item.value} />
                            </a>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contacts;
