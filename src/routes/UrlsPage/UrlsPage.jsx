import { useState } from "react";
import "./Index.css";
import UrlBox from "../../components/UrlBox/UrlBox";

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
      </div>
    </div>
  );
};
export default UrlsPage;
