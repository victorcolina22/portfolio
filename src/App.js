import { useTranslation } from "react-i18next";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { AboutMe } from "./components/aboutme/AboutMe";
import { Navbar } from "./components/navbar/Navbar";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { useEffect } from "react";


export const App = () => {

    const [t] = useTranslation("global");

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });
    }, [])

    return (
        <div className="animate__animated animate__fadeIn animate__slower">

            <header className='header'>
                <Navbar />

                <div className="presentation">
                    <h2 className='presentation__name'>victor colina leon</h2>
                    <div className="presentation__big-title">
                        <p className='presentation__front'>frontend</p>
                        <p className='presentation__end'>developer</p>
                    </div>

                    <div className='presentation__button'>
                        <hr />
                        <a href="#myProjects">{t("presentation.projects")}</a>
                    </div>
                </div>
            </header>

            <section data-aos='fade-up' className="aboutme-container">
                <AboutMe />
            </section>

            <section data-aos='fade-up' className="skillset-container">
                <Skills />
            </section>

            <section data-aos='fade-up' className="projects-container">
                <Projects />
            </section>

            <section data-aos='fade-up' className="contact-container">
                <Contact />
            </section>
        </div>
    )
}
