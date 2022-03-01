import { useTranslation } from "react-i18next";

import squares from '../../assets/icons/squares.svg';
import minimize from '../../assets/icons/minimize.svg';
import closeIcon from '../../assets/icons/close.svg';
import { VscDebugStart } from 'react-icons/vsc';

import './skills.css';

export const Skills = () => {

    const [t] = useTranslation("global");

    return (
        <div className="skillSet" id="my-skills">
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
                    {t('skills.window.description')}
                </p>
            </div>
            <div className='skillSet__description'>
                <div className='skillSet__title'>
                    <h2 className='skillSet__skill'>
                        {t("skills.skill")}
                    </h2>
                    <h2 className='skillSet__set'>
                        {t("skills.set")}
                    </h2>
                </div>

                <div className="skillSet__habilities">
                    <div>
                        <VscDebugStart id="firstArrow" />
                        <p>React</p>
                    </div>
                    <div>
                        <VscDebugStart id="secondArrow" />
                        <p>TypeScript</p>
                    </div>
                    <div>
                        <VscDebugStart id="thirdArrow" />
                        <p>JavaScript (ES6+)</p>
                    </div>

                    <div>
                        <VscDebugStart id="fourthArrow" />
                        <p>HTML5</p>
                    </div>

                    <div>
                        <VscDebugStart id="fifthArrow" />
                        <p>CSS3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
