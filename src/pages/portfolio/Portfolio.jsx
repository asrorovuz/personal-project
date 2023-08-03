import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [count, setCount] = useState(6)
  const {t} = useTranslation()

  const getData = async() => {
    await fetch("https://64c0124c0d8e251fd111e646.mockapi.io/project-portfolio")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    getFilterData();
  }, [data]);

  const getFilterData = (sel = "all") => {
    setFilterData(() => {
      if (sel.toLowerCase() === "all") {
        return data;
      } else {
        return data?.filter(
          (item) => item?.category?.toLowerCase() === sel.toLowerCase()
        );
      }
    });

  };

  let arr = filterData?.slice(0, count).map((el) => {
    let { id, img, url } = el;

    return (
      <div className="card" key={id}>
        <img src={img} alt="imgs" />
        <div className="hover-block">
          <a href={url}>show demo</a>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio container" id="portfolio">
      <h2>{t("portfolio__title")}</h2>

      <ul className="d-flex" onClick={(e) => getFilterData(e.target.innerText)}>
        <li>{t("portfolio__arr1")}</li>
        <li>{t("portfolio__arr2")}</li>
        <li>{t("portfolio__arr3")}</li>
      </ul>

      <div className="portfolio-cards">
        {arr}
      </div>

      <div className="show-more-btn d-flex">
        <button className="btn-show" onClick={() => setCount(count + 6)}>{t("portfolio__btn")} </button>
      </div>
    </div>
  );
};

export default Portfolio;
