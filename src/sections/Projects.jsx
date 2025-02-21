import React, { Component } from 'react';
import Slider from 'react-slick';

import { Col, Row } from 'react-bootstrap';
import Title from '../components/Title';

import BackgroundCard from '../components/BackgroundCard';

import '../styles/projects.css';

const Projects = ({ data }) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <div className="projects">
            <Row className="justify-content-center">
                <Col md={12}>
                    <Title title="Projects" color="#F4F5F7" />
                </Col>
            </Row>
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((item) => (
                        <BackgroundCard key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
