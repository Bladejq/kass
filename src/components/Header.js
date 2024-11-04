import React from "react";
import arrowIcon from "../img/arrow.png";

function Header({ onTabChange }) {
  return (
    <div className="header">
      <div className="title">
        <a href="https://kaspi.kz/">
          <img src={arrowIcon} alt="back icon" className="back-icon" />
        </a>
        <h1 className="text-title">Удостоверение личности</h1>
      </div>
      <div className="tab">
        <div className="btntab">
          <input
            type="radio"
            name="tab-btn"
            id="tab-btn-1"
            value="doc"
            defaultChecked
            onChange={() => onTabChange("doc")}
          />
          <label htmlFor="tab-btn-1">
            <p>Документ</p>
          </label>
          <input
            type="radio"
            name="tab-btn"
            id="tab-btn-2"
            value="req"
            onChange={() => onTabChange("req")}
          />
          <label htmlFor="tab-btn-2">
            <p>Реквизиты</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
