import { useTranslation } from "react-i18next";

import Window, { CloseIcon, ExpandIcon, MinimizeIcon, WindowHeader } from "../../common/components/Window";

import laptop from '../../assets/laptop.png';

import './aboutme.css';

export const AboutMe = () => {
  const [t] = useTranslation("global");

  return (
    <div className="aboutme" id="about-me">
      <div className='aboutme__description'>
        <div className='aboutme__title animate__animated animate__fadeInLeft'>
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

      <Window className="window" height="600px" width="600px">
        <WindowHeader className="window__header" height="50px">
          <MinimizeIcon className="aboutme__minimizeIcon" />
          <ExpandIcon className="aboutme__expandIcon" />
          <CloseIcon className="aboutme__closeIcon" />
        </WindowHeader>
        <img className='laptop' src={laptop} alt='laptop' />
      </Window>
    </div>
  )
}
