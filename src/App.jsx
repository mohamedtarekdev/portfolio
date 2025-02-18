import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'simplebar-react/dist/simplebar.min.css';

import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';

function App() {
    return (
        <SimpleBar style={{ height: '100vh', color: '#00a8e8' }}>
            <>
                <Hero />
                <TechStack />
                <Experience />
                <Contacts />
            </>
        </SimpleBar>
    );
}

export default App;
