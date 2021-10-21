import React from "react";
import './style.buttons.primaryButton.css';

export default function PrimaryButton(__primaryButtonProperties) {
    return (
        <div className="primary-button-wrapper">
            <button className="primary-button-icon-wrapper"><i className={__primaryButtonProperties.startIcon}></i></button>
            <p className="primary-button-title">{__primaryButtonProperties.title}</p>
        </div>
    )
}