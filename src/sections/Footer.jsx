import { Container } from 'react-bootstrap';
import React from 'react';

import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center py-2">
            <Container>
                <span>
                    © {new Date().getFullYear()} Mohamed Tarek. All rights
                    reserved.
                </span>
            </Container>
        </footer>
    );
};

export default Footer;
