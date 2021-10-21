import React from 'react';
import './style.cards.creditCard.css';

export default function CreditLimitCard(__creditLimitCardProperties) {
  return (
    <div clasName="">
      <div className="">
        <img src={__creditLimitCardProperties.cardImage} alt="stats-icon" />
        <p className="">
          {__creditLimitCardProperties.stats}
        </p>
      </div>
      <div className="">
        <p className="credit-limit-card-title">
          {__creditLimitCardProperties.title}
        </p>
        <p className="credit-limit-card-price-description">
          {__creditLimitCardProperties.description}
        </p>
      </div>
    </div>
  );
}
