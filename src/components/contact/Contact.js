import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveIn } from "react-scroll-motion";

import rocket from '../../assets/rocket.svg';

import './contact.css';

const FadeUp = batch(Fade(), Move());

export const Contact = () => {

    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { name, email, message } = inputValue;

    const handleInputChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setInputValue({
            name: '',
            email: '',
            message: ''
        });

        console.log(inputValue)
    }

    const [t] = useTranslation("global");

    return (
        <>
            {/* <ScrollContainer>
                <ScrollPage page={4}> */}
            <div className="contact" id="contact-me">
                {/* <Animator animation={MoveIn(-1000, 0)}> */}
                <div className="contact__title">
                    <h2 className="contact__contact">
                        {t("contact.contact")}
                    </h2>
                    <h2 className="contact__me">
                        {t("contact.me")}
                    </h2>
                </div>
                {/* </Animator> */}
                <form
                    id="form"
                    onSubmit={handleSubmit}>
                    <label htmlFor="name">{t("form.name")}</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={name} />

                    <label htmlFor="email">{t("form.email")}</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={email} />

                    <label htmlFor="message">{t("form.message")}</label>
                    <textarea
                        name="message"
                        onChange={handleInputChange}
                        value={message} />

                    <button>{t("form.send")}</button>
                </form>
                {/* <Animator animation={FadeUp}> */}
                <img className="rocket-img" src={rocket} alt='rocket' />
                {/* <div className='contact__description'>
                </div> */}
                {/* </Animator> */}
            </div>
            {/* </ScrollPage>
            </ScrollContainer> */}
        </>
    )
}
