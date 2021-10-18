import React from 'react';
import './style.header.css';
import logoIcon from '../../../assets/logoIcon.svg';
import squareIcon from "../../../assets/squareIcon.svg";
import optionIcon from "../../../assets/optionIcon.svg";
import analyticsIcon from "../../../assets/analyticsIcon.svg";
import bellIcon from "../../../assets/bellIcon.svg";
import avatar from "../../../assets/avatar.png";

export default function Header() {
    return (
      <header className="header">
        <div className="logo-header-wrapper">
          <a href="/">
            <button className="logo-icon-wrapper">
              <img src={logoIcon} alt="Logo-Icon" />
            </button>
            <p className="logo-header-title">ECLIPSE</p>
          </a>
        </div>
        <div className="header-options-wrapper">
          <a href="/">
            <button className="btn-square-icon">
              <img src={squareIcon} alt="Sqaure-Icon" />
            </button>
          </a>
          <a href="/">
            <button className="btn-graph-icon">
              <img src={analyticsIcon} alt="Analytics-Icon" />
            </button>
          </a>
          <a href="/">
            <button className="btn-bell-icon">
              <img src={bellIcon} alt="Bell-Icon" />
            </button>
          </a>
          <a href="/">
            <button className="btn-avatar-icon">
              <img src={avatar} alt="Profile-Icon" />
            </button>
          </a>
          <a href="/">
            <button className="btn-option-icon">
              <img src={optionIcon} alt="Option-Icon" />
            </button>
          </a>
        </div>
      </header>
    );
}