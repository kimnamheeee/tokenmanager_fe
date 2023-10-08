import { useState } from "react";
import "./Index.css";
import UrlBox from "../../components/UrlBox/UrlBox";
import abstractShape2 from "../../assets/images/abstract-shape2.png";

const UrlsPage = () => {
  return (
    <div className="UrlsPage">
      <h1>Select Your Project</h1>
      <div className="urls-container">
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div>
        {/* <div className="url-row-container">
          <UrlBox />
          <UrlBox />
        </div> */}
        <div className="url-plus-button">
          <div className="url-plus-button-text">+</div>
        </div>
        <div className="img-crop">
          <img src={abstractShape2} className="abstract-shape2" />
        </div>
      </div>
    </div>
  );
};
export default UrlsPage;
