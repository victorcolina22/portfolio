import { useContext, useState } from 'react';

import { TranslationContext } from '../../assets/translations/TranslationContext';

import { useTranslation } from 'react-i18next';

import './navbar.css';


export const Navbar = () => {

    const [t, translate] = useTranslation("global");
    const { language } = useContext(TranslationContext);
    const [burgerMenu, setMenuBurger] = useState(false);

    const handleLanguage = () => {
        if (language === 'en') {
            translate.changeLanguage("es");
        } else {
            translate.changeLanguage("en");
        }
    }

    localStorage.setItem('lng', language);

    const handleBurgerMenu = (e) => {
        setMenuBurger(e.target.checked);
    }

    const hideBurgerMenu = () => {
        setMenuBurger(!burgerMenu);
    }

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
                            <a
                                href='https://github.com/victorcolina22'
                                target='_blank'
                                rel='noreferrer'>
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
                    <label htmlFor='menu'>
                        <div className='navbar__hamburger navbar__label'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <input
                        type="checkbox"
                        id='menu'
                        className='navbar__input'
                        onChange={handleBurgerMenu}
                        checked={burgerMenu} />

                    <div className='navbar-responsive__items'>
                        <ul>
                            <li>
                                <a
                                    href='#about-me'
                                    onClick={hideBurgerMenu}
                                >
                                    <p>{t("navbar.about-me")}</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#my-skills'
                                    onClick={hideBurgerMenu}
                                >
                                    <p>{t("navbar.skills")}</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://github.com/victorcolina22'
                                    target='_blank'
                                    rel='noreferrer'
                                    onClick={hideBurgerMenu}
                                >
                                    <p>Github</p>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#contact-me'
                                    onClick={hideBurgerMenu}
                                >
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
