import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';

import rocket from '../../assets/rocket.svg';

import './contact.css';

export const Contact = () => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [t] = useTranslation("global");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pw0hhnn', 'template_1sesg6v', e.target, 'XTX0MXxvzdvconHDR')
            .then((result) => {
                if (result.status === 200) {
                    enqueueSnackbar(t('notifications.success'), {
                        variant: 'success'
                    });
                } else {
                    enqueueSnackbar(t('notifications.error'), {
                        variant: 'error'
                    });
                }
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <>
            <div className="contact" id="contact-me">
                <div className="contact__title">
                    <h2 className="contact__contact">
                        {t("contact.contact")}
                    </h2>
                    <h2 className="contact__me">
                        {t("contact.me")}
                    </h2>
                </div>
                <form
                    id="form"
                    onSubmit={handleSubmit}>
                    <label htmlFor="name">{t("form.name")}</label>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('form.placeholder.name')}
                        required />

                    <label htmlFor="email">{t("form.email")}</label>
                    <input
                        type="email"
                        name="email"
                        placeholder={t('form.placeholder.email')}
                        required />

                    <label htmlFor="message">{t("form.message")}</label>
                    <textarea name="message" />

                    <button>{t("form.send")}</button>
                </form>
                <img className="rocket-img" src={rocket} alt='rocket' />
            </div>
        </>
    )
}
