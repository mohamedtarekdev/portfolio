import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'simplebar-react/dist/simplebar.min.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Contacts from './sections/Contacts';
import { supabase } from './config/supabaseClient';
import Loading from './components/Loading';
import Projects from './sections/Projects';
import NavbarComponent from './components/NavbarComponent';
import Footer from './sections/Footer';

function App() {
    const [techs, setTechs] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contacts, setContacts] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const [techs, experiences, projects, contacts] = await Promise.all([
            supabase
                .from('technologies')
                .select('*')
                .order('tech_order', { ascending: true }),
            supabase
                .from('experiences')
                .select('*')
                .order('order', { ascending: true }),
            supabase
                .from('projects')
                .select(
                    `
                        *,
                        project_technologies (
                            technologies (*)
                        )
                    `
                )
                .order('order', { ascending: false }),
            supabase
                .from('contacts')
                .select('*')
                .order('order', { ascending: true }),
        ]);

        setTimeout(() => {
            setTechs(techs.data);
            setExperiences(experiences.data);
            setProjects(projects.data);
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
                        {/* <NavbarComponent data={contacts} /> */}
                        <Hero data={contacts} />
                        <TechStack data={techs} />
                        <Experience data={experiences} />
                        <Projects data={projects} />
                        <Contacts data={contacts} />
                        <Footer />
                    </>
                ) : (
                    <Loading />
                )}
            </SimpleBar>
        </>
    );
}

export default App;
