import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import 'swiper/css';

import { Col, Row } from 'react-bootstrap';
import Title from '../components/Title';
import BackgroundCard from '../components/BackgroundCard';

import '../styles/projects.css';

const Projects = ({ data }) => {
    return (
        <div id="projects" className="projects">
            <Row className="justify-content-center">
                <Col md={12}>
                    <Title title="Projects" color="#F4F5F7" />
                </Col>
            </Row>
            <div className="slider-container">
                <Swiper
                    modules={[A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BackgroundCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;
