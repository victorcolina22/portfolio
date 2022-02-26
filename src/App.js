import { useTranslation } from "react-i18next";

import { AboutMe } from "./components/aboutme/AboutMe";
import { Navbar } from "./components/navbar/Navbar";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { useEffect, useState } from "react";

export const App = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    // style={{ transform: `translateY(${offsetY * 0.3}px)` }}

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const [t] = useTranslation("global");

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
                        <button>{t("presentation.projects")}</button>
                    </div>
                </div>
            </header>

            <section className="aboutme-container">
                <AboutMe />
            </section>

            <section className="skillset-container">
                <Skills />
            </section>

            <section className="projects-container">
                <Projects />
            </section>

            <section className="contact-container">
                <Contact />
            </section>
        </div>
    )
}
