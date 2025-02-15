import React, { useState } from 'react';

import TechStack from './sections/TechStack';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hero from './sections/Hero';

function App() {
    return (
        <>
            <Hero />
            <TechStack />
        </>
    );
}

export default App;
