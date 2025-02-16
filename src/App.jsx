import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Contacts from './sections/Contacts';

function App() {
    return (
        <>
            <Hero />
            <TechStack />
            <Contacts />
        </>
    );
}

export default App;
