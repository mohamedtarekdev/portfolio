import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import DownloadIcon from '../assets/images/icons/download.svg';

import '../styles/navbar.css';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Nav navbarScroll>
                            <Nav.Link href="#tech-stack">Teck Stack</Nav.Link>
                            <Nav.Link href="#">Works</Nav.Link>
                            <Nav.Link href="#">Projects</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                        </Nav>
                        <Button variant="primary" className="download-btn">
                            <span>Download CV</span>
                            <img src={DownloadIcon} alt="Download CV" />
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
