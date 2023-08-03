import React from "react";
import "./aboutPage.scss";
import workingImg1 from "../../assets/working1.jpg";
import workingImg2 from "../../assets/working2.jpg";
// import i18next from "i18next";
import { useTranslation } from "react-i18next";

const AboutPage = () => {

  const {t} = useTranslation()

  return <div className="about container" id="about">
    <div className="info">
      <h2>{t("about__title")}</h2>
      <div className="text">
        {t("about__content")}
      </div>
      <div className="imgs d-flex">
        <div className="img"><img src={workingImg1} alt="working img" /></div>
        <div className="img"><img src={workingImg2} alt="working img" /></div>
      </div>
      <div className="d-flex about-info">
        <div className="d-flex">
          <span>5+</span> {t("about__arr1")}
        </div>
        <div className="d-flex">
          <span>69+</span> {t("about__arr2")}
        </div>
        <div className="d-flex">
          <span>105+</span> {t("about__arr3")}
        </div>
      </div>
    </div>
  </div>;
};

export default AboutPage;
