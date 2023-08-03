import React, { useState } from "react";
import "./layout.scss";
import toggle from "../../assets/toggle.svg";
import close from "../../assets/close.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [lang, setLang] = useState("en");
  const [showSelect, setShowSelect] = useState(false);
  const [showNav, setShowNav] = useState(false)

  const funcs = (e) => {
    if (e.target) {
      console.log(e.target.innerText)
      setShowSelect(false);
      
    }
    i18next.changeLanguage(e.target.innerText)
    setLang(e.target.innerText);
  };

  const showNavbar = (el) => {
    if(el){
      setShowNav(!showNav)
    }
  }

  const {t} = useTranslation()

  return (
    <header style={showNav ? {height: "calc(10vh + 406px)"} : {height: "max-content"}}>
      <div className="container d-flex">
        <div className="logo"><a href="#">Logo</a></div>
        <nav className={showNav ? "show container" : ""}>
          <ul className="d-flex">
            <li>
              <a href="#home">{t("layout1")}</a>
            </li>
            <li>
              <a href="#about">{t("layout2")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("layout3")}</a>
            </li>
            <li>
              <a href="#service">{t("layout4")}</a>
            </li>
            <li>
              <a href="#contact">{t("layout5")}</a>
            </li>
          </ul>
        </nav>
        <div className="select">
          <p className="d-flex" onClick={() => setShowSelect(!showSelect)}>
            {lang}{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </p>
          <ul
            className={showSelect ? "d-flex select-lang" : "hide"}
            onClick={(e) => funcs(e)}
          >
            <li>en</li>
            <li>ru</li>
            <li>uz</li>
          </ul>
        </div>
        <div className="d-flex toggle" onClick={(e) => showNavbar(e.currentTarget)}>
          <img src={showNav ? close : toggle} alt="icon toggle" />
        </div>
      </div>
    </header>
  );
};

export default Layout;
