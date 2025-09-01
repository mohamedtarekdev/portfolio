import Card from 'react-bootstrap/Card';
import React from 'react';

import GithubIcon from '../assets/images/icons/github-circle.svg';
import LinkIcon from '../assets/images/icons/link.svg';
import { Row } from 'react-bootstrap';

function BackgroundCard({ item }) {
    return (
        <Card
            className="project-card"
            style={{
                backgroundColor: `#${item.color}`,
            }}
        >
            <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="mb-3">{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </div>

                <Row>
                    <div className="tags d-flex justify-content-between align-items-center mb-3">
                        <div className="techs d-flex">
                            {item.project_technologies.map((tech) => (
                                <div
                                    key={tech.technologies.id}
                                    className="tech-icon-container d-flex justify-content-center align-items-center"
                                    style={{
                                        backgroundColor: `#${tech.technologies.tech_color}`,
                                    }}
                                >
                                    <img
                                        src={tech.technologies.tech_icon}
                                        alt={tech.technologies.tech_name}
                                        className="tech-icon"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="status">
                            <span
                                style={{
                                    backgroundColor: item.completed
                                        ? '#28A745'
                                        : '#007BFF',
                                }}
                            >
                                {item.completed ? 'Completed' : 'Ongoing'}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between m-0">
                        {item.github_link && (
                            <a
                                href={item.github_link}
                                target="_blank"
                                className="btn temp-btn github-btn d-flex align-items-center justify-content-between"
                            >
                                <img src={GithubIcon} alt="github" />
                                <span>Check Code</span>
                            </a>
                        )}
                        {item.demo_link && (
                            <a
                                href={item.demo_link}
                                target="_blank"
                                className="btn temp-btn demo-btn d-flex align-items-center justify-content-between"
                            >
                                <img src={LinkIcon} alt="demo" />
                            </a>
                        )}
                    </div>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default BackgroundCard;
