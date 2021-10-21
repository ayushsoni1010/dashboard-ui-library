import React from "react";
import "./style.cards.transactionCards.css";

export default function TransactionCard(__transactionCardDetails) {
  return (
    <div className="transaction-card-wrapper">
      <div className="transaction-card-button-wrapper">
        <button className="transaction-card-btn-properties">
          <i className={__transactionCardDetails.startIcon + " " + __transactionCardDetails.type}></i>
        </button>
      </div>
      <div className="transaction-card-content-wrapper">
        <div className="transaction-card-title-container">
          <p className="transaction-cards-title">
            {__transactionCardDetails.title}
          </p>
          <p className="transaction-cards-date-description">
            {__transactionCardDetails.TransactionDate}
          </p>
        </div>
        <div className="transaction-card-title-history">
          <p className="cards-number">
            {"*" + __transactionCardDetails.number}
          </p>
          <p className="cards-credit-description">
            {__transactionCardDetails.Card}
          </p>
        </div>
        <div className="transaction-card-stats-wrapper">
          <p>{"- " + __transactionCardDetails.stats}</p>
        </div>
      </div>
    </div>
  );
}
