import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import DownloadIcon from '../assets/images/icons/download.svg';
import Logo from '../assets/images/logo.svg';

import '../styles/navbar.css';

function NavbarComponent({ data }) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // ممكن تزود/تنقص النسبة حسب طول السكشن
        );

        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar fixed-top">
            <Container>
                <Navbar.Brand className="logo" href="/">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Nav navbarScroll className="links">
                            <Nav.Link
                                href="#tech-stack"
                                className={
                                    activeSection === 'tech-stack'
                                        ? 'active'
                                        : ''
                                }
                                onClick={(e) =>
                                    scrollToSection(e, 'tech-stack')
                                }
                            >
                                Tech Stack
                            </Nav.Link>
                            <Nav.Link
                                href="#experience"
                                className={
                                    activeSection === 'experience'
                                        ? 'active'
                                        : ''
                                }
                                onClick={(e) =>
                                    scrollToSection(e, 'experience')
                                }
                            >
                                Works
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeSection === 'projects' ? 'active' : ''
                                }
                                onClick={(e) => scrollToSection(e, 'projects')}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href="#contacts"
                                className={
                                    activeSection === 'contacts' ? 'active' : ''
                                }
                                onClick={(e) => scrollToSection(e, 'contacts')}
                            >
                                Contacts
                            </Nav.Link>
                        </Nav>
                        <a
                            className="download-btn btn btn-primary"
                            href={data[0].link}
                            target="_blank"
                            download={`${data[0].value}.pdf`}
                        >
                            <span>Download CV</span>
                            <img src={DownloadIcon} alt="Download CV" />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
