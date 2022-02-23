import { useTranslation } from "react-i18next";

import { AboutMe } from "./components/aboutme/AboutMe";
import { Navbar } from "./components/navbar/Navbar";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";


export const App = () => {

    const [t] = useTranslation("global");

    return (
        <div className="animate__animated animate__fadeIn animate__slower">
            <Navbar />

            <div className='presentation'>
                <h2 className='presentation__name'>victor colina leon</h2>
                <p className='presentation__front'>frontend</p>
                <p className='presentation__end'>developer</p>

                <div className='presentation__button'>
                    <hr />
                    <button>{t("presentation.projects")}</button>
                </div>
            </div>

            {/* <div className="aboutme-container">
                <AboutMe />
            </div> */}

            {/* <div className="skillset-container">
                <Skills />
            </div> */}

            {/* <div className="projects-container">
                <Projects />
            </div> */}

            {/* <div className="contact-container">
                <Contact />
            </div> */}
        </div>
    )
}
