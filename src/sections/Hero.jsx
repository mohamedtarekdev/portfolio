import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import '../styles/hero.css';
import personalImage from '../assets/images/personal-image.webp';
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from '@react-spring/web';

const Hero = ({ data }) => {
    // Animation for text section
    const textSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 1000, friction: 250 },
        delay: 200, // يبدأ بعد 200ms
    });

    // Animation for image section
    const imageSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
        to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        config: { tension: 1000, friction: 250 },
        delay: 200, // يبدأ بعد النص
    });

    return (
        <div
            className="hero d-flex align-items-center"
            style={{ paddingTop: '120px' }}
        >
            <Container>
                <Row className="d-flex" style={{ height: '100vh' }}>
                    {/* Text Section */}
                    <Col md={6} className="d-flex align-items-center">
                        <animated.div
                            style={textSpring}
                            className="hero-content"
                        >
                            <h1>Hi, I'm Mohamed Tarek 👋</h1>
                            <h2>
                                <TypeAnimation
                                    sequence={[
                                        'Software Engineer',
                                        2000,
                                        '',
                                        500,
                                        'Full Stack Developer',
                                        2000,
                                        '',
                                        500,
                                    ]}
                                    speed={30}
                                    wrapper="h2"
                                    repeat={Infinity}
                                    className="text-yellow-500 text-4xl font-bold sm:text-3xl"
                                />
                            </h2>
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
                                    target="_blank"
                                    className="btn download-cv-btn"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
                        </animated.div>
                    </Col>

                    {/* Image Section */}
                    <Col
                        md={6}
                        className="d-flex align-items-end justify-content-center"
                    >
                        <animated.img
                            style={imageSpring}
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
