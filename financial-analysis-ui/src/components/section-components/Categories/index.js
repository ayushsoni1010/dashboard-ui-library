import React from "react";
import CategoryButton from "../../widgets/Buttons/CategoryButton";
import './style.categories.css';

export default function Categories() {
    return (
      <div className="categories-options-wrapper">
        <CategoryButton
          type="btn-bg-blue"
          startIcon="fas fa-tshirt"
          value="Clothes & Fashion"
          stats="$5540"
        />
        <CategoryButton
          type="btn-bg-red"
          startIcon="fas fa-utensils"
          value="Restaurants"
          stats="$5540"
        />
        <CategoryButton
          type="btn-bg-green"
          startIcon="fas fa-theater-masks"
          value="Cinema & Theaters"
          stats="$1290"
        />
        <CategoryButton
          type="btn-bg-light-blue"
          startIcon="fas fa-briefcase-medical"
          value="Medications"
          stats="$1290"
        />
        <CategoryButton
          type="btn-bg-orange"
          startIcon="fas fa-home"
          value="House"
          stats="$1290"
        />
      </div>
    );
}