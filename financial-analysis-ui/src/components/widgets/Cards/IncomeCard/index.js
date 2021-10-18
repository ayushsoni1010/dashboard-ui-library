import React from "react";
import "./style.cards.incomeCards.css";

export default function IncomeCard(__incomeCardDetails) {
  if (!__incomeCardDetails.startIcon && !__incomeCardDetails.endIcon) {
    return (
      <div className="income-card-image-icon-wrapper">
        <button className="card-icon">
          <img src={__incomeCardDetails.imageIcon} alt="Icon" />
        </button>
        <div className="card-title-wrapper">
          <p className="cards-stats">{__incomeCardDetails.stats}</p>
          <p className="cards-title">{__incomeCardDetails.title}</p>
        </div>
        <button className="three-dots-icon">
          <img src={__incomeCardDetails.imageIcon} alt="Icon" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="income-card-wrapper">
        <button className="card-icon">
          <i className={__incomeCardDetails.startIcon + " " + __incomeCardDetails.type}></i>
        </button>
        <div className="card-title-wrapper">
          <p className="cards-stats">{__incomeCardDetails.stats}</p>
          <p className="cards-title">{__incomeCardDetails.title}</p>
        </div>
        <button className="three-dots-icon">
          <i className={__incomeCardDetails.endIcon}></i>
        </button>
      </div>
    );
  }
}
