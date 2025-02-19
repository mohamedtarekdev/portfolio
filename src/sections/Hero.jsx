import React from 'react';

import '../styles/hero.css';

import NavbarComponent from '../components/NavbarComponent';

const Hero = ({ data }) => {
    return (
        <div className="hero">
            <NavbarComponent data={data} />
        </div>
    );
};

export default Hero;
