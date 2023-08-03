import React from "react";
import HomePages from "./pages/home/HomePages";
import "./app.scss";
import AboutPage from "./pages/about/AboutPage";
import Portfolio from "./pages/portfolio/Portfolio";
import ServicePage from "./pages/service/ServicePage";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contact/ContactPage";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

function App() {
  // const { t } = useTranslation();

  return (
    <>
      <HomePages />
      <AboutPage />
      <Portfolio />
      <ServicePage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
