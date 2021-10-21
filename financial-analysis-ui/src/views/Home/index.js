import React from "react";
import "./style.views.home.css";
import NovaCard from "../../components/widgets/Cards/NovaCard";
import IncomeCard from "../../components/widgets/Cards/IncomeCard";
import PrimaryButton from "../../components/widgets/Buttons/PrimaryButton";
import creditChipIcon from "../../assets/creditChipIcon.svg";

export default function Home() {
  return (
    <div className="home-section-wrapper">
      <div className="credit-card-details-wrapper">
        <div className="credit-card-description">
          <p>Orionbank</p>
          <p>•</p>
          <p>Platinum Credit Card</p>
        </div>
        <p className="credit-card-title">NovaCard</p>
        <div className="credit-card-container">
          <NovaCard
            title="Balance"
            stats="$1,234,320"
            visaIcon="fab fa-cc-visa"
            description="Daily Shopping Card **** 2450"
            creditChipIcon={creditChipIcon}
          />
        </div>
      </div>
      <div className="primary-pay-top-up-buttons-wrapper">
        <PrimaryButton startIcon="fas fa-download" title="Top up" />
        <PrimaryButton startIcon="fas fa-dollar-sign" title="Pay" />
        <PrimaryButton startIcon="fas fa-file-invoice" title="Pay" />
      </div>

      <div className="credit-limit-history-payment-description-wrapper">
        <p className="credit-limit-title">Credit limit</p>
        <div className="credit-limit-stats-wrapper">
          <p className="left-stats">$4,430</p>
          <p className="right-stats">$10,000</p>
        </div>
        <div className="credit-limit-content-wrapper">
          <p className="credit-limit-range">
            <span></span>
          </p>
          <p>
            Minimum payment<span>$504</span>
          </p>
          <p>
            Debit for the period<span>$1430</span>
          </p>
          <p>
            Recommended payment<span>$504</span>
          </p>
        </div>
      </div>
      <div className="income-expense-card-wrapper">
        <div className="top-payment-history-cards">
          <IncomeCard
            startIcon="fas fa-download"
            title="Income"
            stats="$27,632"
            endIcon=" fas fa-ellipsis-h"
            type="orange"
          />
          <IncomeCard
            startIcon="fas fa-hand-holding-usd"
            title="Expense"
            stats="$8,632"
            endIcon=" fas fa-ellipsis-h"
            type="green"
          />
        </div>
        <div className="bottom-payment-history-card">
          <IncomeCard
            startIcon="fas fa-comment-dollar"
            title="Cashback"
            stats="$12,809"
            endIcon=" fas fa-ellipsis-h"
            type="blue"
          />
          <IncomeCard
            startIcon="fas fa-coffee"
            title="Offer"
            stats="$27,632"
            endIcon=" fas fa-ellipsis-h"
            type="red"
          />
        </div>
      </div>
    </div>
  );
}
