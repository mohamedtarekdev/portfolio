import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import DownloadIcon from '../assets/images/icons/download.svg';
import Logo from '../assets/images/logo.svg';

import '../styles/navbar.css';

function NavbarComponent({ data }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById('tech-stack')
                                        .scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Teck Stack
                            </Nav.Link>
                            <Nav.Link
                                href="#experience"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById('experience')
                                        .scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Works
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById('projects')
                                        .scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href="#contacts"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .getElementById('contacts')
                                        .scrollIntoView({ behavior: 'smooth' });
                                }}
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
