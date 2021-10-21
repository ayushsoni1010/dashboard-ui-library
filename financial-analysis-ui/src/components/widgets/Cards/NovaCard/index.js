import React from "react";
import "./style.cards.novaCard.css";
import statsIcon from "../../../../assets/statsIcon.svg";

export default function NovaCard(__novaCardDetails) {
  return (
    <div className="nova-credit-card-section-wrapper">
      <div className="nova-card-content-wrapper">
        <p className="nova-card-title">{__novaCardDetails.title}</p>
        <p className="nova-card-stats">{__novaCardDetails.stats}</p>
        <div className="nova-credit-limit-card-wrapper">
          <div className="stats-wrapper-credit-limit-card">
            <img src={statsIcon} alt="stats-icon" />
            <p className="credit-limit-card-stats-description">87%</p>
          </div>
          <div className="credit-limit-card-content-wrapper">
            <p className="credit-limit-card-title">Credit limit</p>
            <p className="credit-limit-card-price-description">$5,500</p>
          </div>
        </div>
        <div className="nova-card-visa-wrapper">
          <button className="nova-card-visa-icon">
            <i className={__novaCardDetails.visaIcon}></i>
          </button>
          <p className="nova-card-visa-description">
            {__novaCardDetails.description}
          </p>
        </div>
      </div>
      <img src={__novaCardDetails.creditChipIcon} alt="Card-Chip" />
    </div>
  );
}
