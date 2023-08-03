import React from "react";
import Layout from "../../components/layout/Layout";
import "./homePage.scss";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const HomePages = () => {

  const {t} = useTranslation()

  return (
    <div className="home" id="home">
      <Layout/>
      <div className="banner container d-flex">
        <h1>{t("banner__content")}</h1>
      </div>
    </div>
  );
};

export default HomePages;
