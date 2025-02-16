import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import DownloadIcon from '../assets/images/icons/download.svg';
import Pdf from '../assets/pdfs/cv.pdf';

import '../styles/navbar.css';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <Nav navbarScroll className="links">
                            <Nav.Link href="#tech-stack">Teck Stack</Nav.Link>
                            <Nav.Link href="#">Works</Nav.Link>
                            <Nav.Link href="#">Projects</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                        </Nav>
                        <a
                            className="download-btn btn btn-primary"
                            href={Pdf}
                            download="Mohamed Tarek CV.pdf"
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
