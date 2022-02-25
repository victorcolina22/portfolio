import { useTranslation } from "react-i18next";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveIn } from "react-scroll-motion";

import squares from '../../assets/icons/squares.svg';
import minimize from '../../assets/icons/minimize.svg';
import closeIcon from '../../assets/icons/close.svg';
import './skills.css';

const FadeUp = batch(Fade(), Move());

export const Skills = () => {

    const [t] = useTranslation("global");

    return (
        <>
            {/* <ScrollContainer>
                <ScrollPage page={2}> */}
            <div className="skillSet" id="my-skills">
                {/* <Animator animation={FadeUp}> */}
                <div className="userWindow">
                    <div className='userWindow__header'>
                        <img className='minimize' src={minimize} alt='minimize-icon' loading="lazy" />
                        <img className='squares' src={squares} alt='squares-icon' loading="lazy" />
                        <img className='close' src={closeIcon} alt='close-icon' loading="lazy" />
                    </div>

                    <div className='userWindow__avatar'>
                        <div className='head'></div>
                        <div className='body'></div>
                    </div>
                    <p className="userWindow__text">
                        Currently one of the fields I am most excited about yet one of the least explored by me, currently getting used to effective design patterns and data algorithms,
                        for deep learning and decision making with TensorflowJS for developing nice problem solving apps through AI.
                    </p>
                </div>
                {/* </Animator> */}

                {/* <Animator animation={MoveIn(1000, 0)}> */}
                <div className='skillSet__description'>
                    <div className='skillSet__title'>
                        <h1 className='skillSet__skill'>
                            {t("skills.skill")}
                        </h1>
                        <h1 className='skillSet__set'>
                            {t("skills.set")}
                        </h1>
                    </div>

                    <div className="skillSet__habilities">

                    </div>
                </div>
                {/* </Animator> */}
            </div>
            {/* </ScrollPage>
            </ScrollContainer> */}
        </>
    )
}
