import React from "react";
import './style.buttons.secondaryButton.css';
import '../../../../styles/index.css';

export default function SecondaryButton(__secondaryButonProperties) {
    if (!__secondaryButonProperties.startIcon && !__secondaryButonProperties.imageIcon) {
      return (
        <button className="secondary-button-properties">
          {__secondaryButonProperties.value}
        </button>
      );
    } else if(!__secondaryButonProperties.imageIcon){
      return (
        <button className="secondary-button-icon-properties">
          <i className={__secondaryButonProperties.startIcon}></i>
          {__secondaryButonProperties.value}
        </button>
      );
  }
    else {
      return (
        <button className="secondary-button-image-icon-properties">
          <img src={__secondaryButonProperties.imageIcon} alt="icon"/>{__secondaryButonProperties.value}
        </button>
      )
  }
}