import { useTranslation } from "react-i18next";

import squares from '../../assets/icons/squares.svg';
import minimize from '../../assets/icons/minimize.svg';
import closeIcon from '../../assets/icons/close.svg';
import laptop from '../../assets/laptop.png';

import './aboutme.css';

export const AboutMe = () => {

    const [t] = useTranslation("global");

    return (
        <>
            <div className="aboutme" id="about-me">
                <div className='aboutme__description'>
                    <div className='aboutme__title'>
                        <h2 className='aboutme__about'>
                            {t("about-me.about")}
                        </h2>
                        <h2 className='aboutme__me'>
                            {t("about-me.me")}
                        </h2>
                    </div>
                    <p className='aboutme__text'>
                        {t("about-me.description")}
                    </p>
                </div>
                <div className='window'>
                    <div className='window__header'>
                        <img className='minimize' src={minimize} alt='minimize' loading="lazy" />
                        <img className='squares' src={squares} alt='squares' loading="lazy" />
                        <img className='close' src={closeIcon} alt="close-icon" loading="lazy" />
                    </div>
                    <img className='laptop' src={laptop} alt='laptop' />
                </div>
            </div>
        </>
    )
}
