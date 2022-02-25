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
                    <h1 className="contact__contact">
                        {t("contact.contact")}
                    </h1>
                    <h1 className="contact__me">
                        {t("contact.me")}
                    </h1>
                </div>
                {/* </Animator> */}

                {/* <Animator animation={FadeUp}> */}
                <div className='contact__description'>
                    <img src={rocket} alt='rocket' />
                </div>
                {/* </Animator> */}
            </div>
            {/* </ScrollPage>
            </ScrollContainer> */}
        </>
    )
}
