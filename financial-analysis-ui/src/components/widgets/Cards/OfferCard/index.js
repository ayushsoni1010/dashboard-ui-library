import React from "react";
import "./style.cards.offerCards.css";

export default function OfferCard(__offerCardDetails) {
  return (
    <div className="offer-card-wrapper">
      <div className="offer-card-upper-section-wrapper">
        <button className="offer-card-icon">
          <i className={__offerCardDetails.startIcon + " " + __offerCardDetails.type}></i>
        </button>
        <p className="offer-card-title">{__offerCardDetails.title}</p>
        <p className="offer-card-dot-contain">•</p>
        <p className="offer-card-date-description">{__offerCardDetails.date}</p>
      </div>
      <div className="offer-card-content-wrapper">
        <p className="offer-card-description">
          {__offerCardDetails.description}
        </p>
        <button className="offer-card-end-icon">
          <i className={__offerCardDetails.endIcon}></i>
        </button>
      </div>
    </div>
  );
}
