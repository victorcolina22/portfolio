import { useTranslation } from "react-i18next";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, MoveIn } from "react-scroll-motion";

import rocket from '../../assets/rocket.svg';

import './contact.css';

const FadeUp = batch(Fade(), Move());

export const Contact = () => {

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
                <form id="form">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" />

                    <button>Enviar</button>
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
