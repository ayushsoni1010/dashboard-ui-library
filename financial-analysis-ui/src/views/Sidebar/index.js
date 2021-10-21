import React from "react";
import "./style.views.sidebar.css";
import OfferCard from "../../components/widgets/Cards/OfferCard";
import TransactionCard from "../../components/widgets/Cards/TransactionCard";

export default function Sidebar() {
  return (
    <div className="sidebar-section-wrapper">
      <div className="special-offers-section-wrapper">
        <div className="special-offers-content-wrapper">
          <p className="special-offers-title">Special Offers</p>
          <p className="speical-offers-see-all">See all</p>
        </div>
        <div className="special-offers-card-wrapper">
          <OfferCard
            startIcon="fab fa-gg-circle"
            type="green"
            title="Playback"
            date="05.01.2021"
            description="10% discount on clothing, shoes and cosmetics"
            endIcon="fas fa-ellipsis-v"
          />
          <OfferCard
            startIcon="fas fa-crown"
            type="blue"
            title="Capitalbank"
            date="19.01.2021"
            description="20% on repairs and appliances for the home"
            endIcon="fas fa-ellipsis-v"
          />
          <OfferCard
            startIcon="far fa-star"
            type="orange"
            title="Novabank"
            date="11.01.2021"
            description="5% discount on clothing, shoes and cosmetics"
            endIcon="fas fa-ellipsis-v"
          />
        </div>
      </div>
      <div className="last-transaction-section-wrapper">
        <div className="last-transaction-description-wrapper">
          <p className="last-transaction-title">Last Transaction</p>
        </div>
        <div className="last-transaction-card-wrapper">
          <TransactionCard
            startIcon="fas fa-gamepad"
            title="Games"
            TransactionDate="20.12.2021"
            number="1299"
            Card="Credit card"
            stats="$115,00"
            type="blue"
          />
          <TransactionCard
            startIcon="fas fa-coffee"
            title="Starbucks Cafe"
            TransactionDate="18.01.2021"
            number="9900"
            Card="Credit card"
            stats="$12,50"
            type="purple"
          />
          <TransactionCard
            startIcon="fas fa-briefcase-medical"
            title="Pharmacy"
            TransactionDate="05.01.2021"
            number="4300"
            Card="Credit card"
            stats="$35,00"
            type="red"
          />
          <TransactionCard
            startIcon="fas fa-briefcase-medical"
            title="Pharmacy"
            TransactionDate="05.01.2021"
            number="4300"
            Card="Credit card"
            stats="$35,00"
            type="red"
          />
          <TransactionCard
            startIcon="fas fa-utensils"
            title="Restaurants"
            TransactionDate="05.01.2021"
            number="4300"
            Card="Credit card"
            stats="$35,00"
            type="green"
          />
          <TransactionCard
            startIcon="fas fa-dollar-sign"
            title="Money Transfer"
            TransactionDate="04.01.2021"
            number="9800"
            Card="Credit card"
            stats="$105,00"
            type="purple"
          />
        </div>
      </div>
    </div>
  );
}
