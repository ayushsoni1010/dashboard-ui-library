import React from "react";
import "./style.buttons.categoryButton.css";

export default function CategoryButton(__categoryButtonProperties) {
  if (!__categoryButtonProperties.startIcon) {
    return (
      <div className="primary-button-properties-only-value">
        <button>{__categoryButtonProperties.value}</button>
        <span>{__categoryButtonProperties.stats}</span>
      </div>
    );
  } else {
    return (
      <div className="primary-button-properties-start-icon-value">
        <button className={__categoryButtonProperties.type}>
          <i className={__categoryButtonProperties.startIcon}></i>
        </button>
        <p>{__categoryButtonProperties.value}</p>
        <span>{__categoryButtonProperties.stats}</span>
      </div>
    );
  }
}
