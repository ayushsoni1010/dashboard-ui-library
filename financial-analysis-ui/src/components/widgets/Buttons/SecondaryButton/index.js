import React from "react";
import "./style.buttons.secondaryButton.css";
import "../../../../styles/index.css";

export default function SecondaryButton(__secondaryButonProperties) {
  if (
    !__secondaryButonProperties.startIcon &&
    !__secondaryButonProperties.imageIcon
  ) {
    return (
      <button className="secondary-button-only-value-properties">
        {__secondaryButonProperties.value}
      </button>
    );
  } else if (
    !__secondaryButonProperties.value &&
    !__secondaryButonProperties.startIcon
  ) {
    return (
      <button className="secondary-button-only-image-icon-properties">
        <img src={__secondaryButonProperties.imageIcon} alt="Icon" />
      </button>
    );
  } else if (
    !__secondaryButonProperties.imageIcon &&
    !__secondaryButonProperties.value
  ) {
    return (
      <button className="secondary-button-only-start-icon-properties">
        <i className={__secondaryButonProperties.startIcon}></i>
      </button>
    );
  } else if (!__secondaryButonProperties.imageIcon) {
    return (
      <button className="secondary-button-start-icon-value-properties">
        <i className={__secondaryButonProperties.startIcon}></i>
        {__secondaryButonProperties.value}
      </button>
    );
  } else {
    return (
      <button className="secondary-button-image-icon-value-properties">
        <img src={__secondaryButonProperties.imageIcon} alt="icon" />
        {__secondaryButonProperties.value}
      </button>
    );
  }
}
