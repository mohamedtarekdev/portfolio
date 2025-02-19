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
import Loading from './components/Loading';

function App() {
    const [techs, setTechs] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [contacts, setContacts] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const [techs, experiences, contacts] = await Promise.all([
            supabase
                .from('technologies')
                .select('*')
                .order('id', { ascending: true }),
            supabase
                .from('experiences')
                .select('*')
                .order('id', { ascending: true }),
            supabase
                .from('contacts')
                .select('*')
                .order('id', { ascending: true }),
        ]);

        setTimeout(() => {
            setTechs(techs.data);
            setExperiences(experiences.data);
            setContacts(contacts.data);
            setLoading(false);
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <SimpleBar style={{ height: '100vh', color: '#00a8e8' }}>
                {!loading ? (
                    <>
                        <Hero data={contacts} />
                        <TechStack data={techs} />
                        <Experience data={experiences} />
                        <Contacts data={contacts} />
                    </>
                ) : (
                    <Loading />
                )}
            </SimpleBar>
        </>
    );
}

export default App;
