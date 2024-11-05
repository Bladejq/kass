import React, { useState } from "react";
import Arrow from "../img/arrow.png";

export default function Header({ ontab }) {
  const [tab, setTab] = useState("doc");
  const onTabChange = (e) => {
    setTab(e.target.value);
    ontab();
  };

  return (
    <div className="header">
      <div className="title">
      <a href="https://kaspi.kz" target="_blank" rel="noopener noreferrer">
          <img src={Arrow} alt="" className="back-icon" />
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
            checked={tab === "doc"}
            onChange={onTabChange}
          />
          <label htmlFor="tab-btn-1">
            <p>Документ</p>
          </label>
          <input
            type="radio"
            name="tab-btn"
            id="tab-btn-2"
            value="req"
            checked={tab === "req"}
            onChange={onTabChange}
          />
          <label htmlFor="tab-btn-2">
            <p>Реквизиты</p>
          </label>
        </div>
      </div>
    </div>
  );
}
