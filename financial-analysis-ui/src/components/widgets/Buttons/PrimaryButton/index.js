import React from "react";
import "./style.buttons.primaryButton.css";

export default function PrimaryButton(__primaryButtonProperties) {
  if (!__primaryButtonProperties.startIcon) {
    return (
      <div className="primary-button-properties-only-value">
        <button>{__primaryButtonProperties.value}</button>
        <span>{__primaryButtonProperties.stats}</span>
      </div>
    );
  } else {
    return (
      <div className="primary-button-properties-start-icon-value">
        <button className={__primaryButtonProperties.type}>
          <i className={__primaryButtonProperties.startIcon}></i>
        </button>
        <p>{__primaryButtonProperties.value}</p>
        <span>{__primaryButtonProperties.stats}</span>
      </div>
    );
  }
}
