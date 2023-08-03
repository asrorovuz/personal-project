import React from "react";
import "./contactPage.scss";
import { useTranslation } from "react-i18next";

const ContactPage = () => {

  const {t} = useTranslation()

  return <div className="contact container" id="contact">
    <h2>{t("contact__title")} </h2>
    <div className="contact-us d-flex">
      <div className="contact-visit">
        <h3>{t("contact__info_title")} </h3>
        <p>{t("contact__info_content")} </p>
      </div>
      <form className="d-flex">
        <label htmlFor="name">
          {t("contact__name")}
          <input type="text" name="email" id="name" placeholder="Alex Smith"/>
        </label>
        <label htmlFor="email">
          {t("contact__email")}
          <input type="email" name="email" id="email" placeholder="exam@gmail.com"/>
        </label>
        <label htmlFor="tel">
          (+998) ...
          <input type="tel" id="tel" name="tel" placeholder="90 468 95 32"/>
        </label>
        <label htmlFor="text">
          <textarea name="text" id="text" cols="30" rows="10"></textarea>
        </label>
        <input type="submit" className="d-flex" value={t("contact__btn")}/>
      </form>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.7302874386296!2d65.79626307564237!3d38.86153044882008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea7fbdd2c7dcf%3A0xd615a6530b82e0d1!2sOpen%20Web%20Academy!5e0!3m2!1sru!2s!4v1691043999289!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>;
};

export default ContactPage;
