import { useContext, useState } from 'react';

import { TranslationContext } from '../../assets/translations/TranslationContext';

import { useTranslation } from 'react-i18next';

import './navbar.css';


export const Navbar = () => {

    const [t, translate] = useTranslation("global");
    const { language } = useContext(TranslationContext);
    const [dropdown, setDropdown] = useState(false);

    const handleLanguage = () => {
        if (language === 'en') {
            translate.changeLanguage("es");
        } else {
            translate.changeLanguage("en");
        }
    }

    localStorage.setItem('lng', language);

    return (
        <>
            <nav className='navbar'>
                <h4 className='navbar__name'>VICTOR ALFONZO COLINA LEON</h4>

                <div className='navbar__items'>
                    <ul className='navbar__items__list'>
                        <li>
                            <a href='#about-me'>
                                <p>{t("navbar.about-me")}</p>
                            </a>
                        </li>
                        <li>
                            <a href='#my-skills'>
                                <p>{t("navbar.skills")}</p>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/victorcolina22' target='_blank'>
                                <p>Github</p>
                            </a>
                        </li>
                        <li>
                            <a href='#contact-me'>
                                <p>{t("navbar.contact")}</p>
                            </a>
                        </li>
                        <li>
                            <button
                                className='changeLanguage'
                                onClick={handleLanguage}>
                                <p style={{ color: (language === 'es') && "rgb(167, 167, 167)" }}>Eng</p>
                                /
                                <p style={{ color: (language === 'en') && "rgb(167, 167, 167)" }}>Esp</p>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='navbar-responsive'>
                    <button
                        className='navbar__hamburger'
                        onClick={() => setDropdown(value => !value)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={(dropdown) ? 'navbar-responsive__items' : 'hide'}>
                        <ul>
                            <li>
                                <a href='#about-me'>
                                    <p>{t("navbar.about-me")}</p>
                                </a>
                            </li>
                            <li>
                                <a href='#my-skills'>
                                    <p>{t("navbar.skills")}</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/victorcolina22' target='_blank'>
                                    <p>Github</p>
                                </a>
                            </li>
                            <li>
                                <a href='#contact-me'>
                                    <p>{t("navbar.contact")}</p>
                                </a>
                            </li>
                            <li>
                                <button
                                    className='changeLanguage'
                                    onClick={handleLanguage}>
                                    <p style={{ color: (language === 'es') && "rgb(167, 167, 167)" }}>Eng</p>
                                    /
                                    <p style={{ color: (language === 'en') && "rgb(167, 167, 167)" }}>Esp</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}
