import { useTranslation } from "react-i18next";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveIn } from "react-scroll-motion";

import squares from '../../assets/icons/squares.svg';
import minimize from '../../assets/icons/minimize.svg';
import closeIcon from '../../assets/icons/close.svg';
import starwarsApp from '../../assets/projects/starwars-preview.PNG'

import './projects.css'
import { useEffect, useState } from "react";

const FadeUp = batch(Fade(), Move());


export const Projects = () => {

    const [t] = useTranslation("global");

    return (
        <>
            {/* <ScrollContainer>
                <ScrollPage page={3}> */}
            {/* <Animator animation={FadeUp}> */}
            <div className="projects" id="myProjects">
                <h2 className="projects__title">
                    {t("projects.projects")}
                </h2>

                <div className="projects__carousel">
                    <div className="projects__header">
                        <img className='minimize' src={minimize} alt='minimize' loading="lazy" />
                        <img className='squares' src={squares} alt='squares' loading="lazy" />
                        <img className='close' src={closeIcon} alt="close-icon" loading="lazy" />
                    </div>

                    <div className="projects__body" style={{ position: "relative" }}>
                        <div className="starwars-project">
                            <a
                                href="https://github.com/victorcolina22/star-wars-blog-reading-list-react"
                                target="_blank"
                                rel="noreferrer"
                                className="starwars-project__description">
                                <p>{t("projects.starwars-app")}</p>
                            </a>
                            <img className="projects__preview" src={starwarsApp} alt="starwars-app-project" />
                        </div>
                    </div>
                </div>
            </div>
            {/* </Animator> */}
            {/* </ScrollPage>
            </ScrollContainer> */}
        </>
    )
}
