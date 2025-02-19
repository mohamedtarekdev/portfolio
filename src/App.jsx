import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'simplebar-react/dist/simplebar.min.css';

import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';
import { supabase } from './config/supabaseClient';

function App() {
    const [techs, setTechs] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        const [techs, experiences, contacts] = await Promise.all([
            supabase
                .from('tech_stack')
                .select('*')
                .order('id', { ascending: true }),
            supabase
                .from('experience_info')
                .select('*')
                .order('id', { ascending: true }),
            supabase
                .from('contacts')
                .select('*')
                .order('id', { ascending: true }),
        ]);

        setTechs(techs.data);
        setExperiences(experiences.data);
        setContacts(contacts.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SimpleBar style={{ height: '100vh', color: '#00a8e8' }}>
            {techs.length > 0 &&
            experiences.length > 0 &&
            contacts.length > 0 ? (
                <>
                    <Hero data={contacts} />
                    <TechStack data={techs} />
                    <Experience data={experiences} />
                    <Contacts data={contacts} />
                </>
            ) : (
                <div>Loading...</div>
            )}
        </SimpleBar>
    );
}

export default App;
