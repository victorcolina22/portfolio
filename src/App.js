import { useTranslation } from "react-i18next";

import { AboutMe } from "./components/aboutme/AboutMe";
import { Navbar } from "./components/navbar/Navbar";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { useEffect, useRef } from "react";


export const App = () => {

    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeUp');
            }
        })
    }
    const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '100px 0px 0px 0px',
        threshold: 0.3
    });

    const [t] = useTranslation("global");

    useEffect(() => {
        const currentTarget = {
            aboutme: aboutMeRef.current,
            skills: skillsRef.current,
            projects: projectsRef.current,
            contact: contactRef.current,
        }

        const { aboutme, skills, projects, contact } = currentTarget;

        observer.observe(aboutme);
        observer.observe(skills);
        observer.observe(projects);
        observer.observe(contact);
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

            <section className="aboutme-container" ref={aboutMeRef}>
                <AboutMe />
            </section>

            <section className="skillset-container" ref={skillsRef}>
                <Skills />
            </section>

            <section className="projects-container" ref={projectsRef}>
                <Projects />
            </section>

            <section className="contact-container" ref={contactRef}>
                <Contact />
            </section>
        </div>
    )
}
