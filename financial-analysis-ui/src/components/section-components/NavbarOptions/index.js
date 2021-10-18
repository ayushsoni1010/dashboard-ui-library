import React from "react";
import "./style.navbarOptions.css";
import SecondaryButton from "../../widgets/Buttons/SecondaryButton";
import dashboardIcon from "../../../assets/dashboardIcon.svg";
import operationsIcon from "../../../assets/operationsIcon.svg";
import catalogueIcon from "../../../assets/catalogueIcon.svg";
import analyticsIcon from "../../../assets/analyticsIcon.svg";
import documentIcon from "../../../assets/documentIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import accountIcon from "../../../assets/accountIcon.svg";
import optionIcon from "../../../assets/optionIcon.svg";


export default function NavbarOptions() {
  return (
    <div className="navbar-options-wrapper">
      <a href="/">
        <SecondaryButton imageIcon={dashboardIcon} value="Dashboard" />
      </a>
      <a href="/">
        <SecondaryButton imageIcon={operationsIcon} value="Operations" />
        <img
          src={optionIcon}
          alt="option-icon"
          className="btn-option-icon-operation"
        />
      </a>
      <a href="/">
        <SecondaryButton imageIcon={catalogueIcon} value="Catalogue" />
      </a>
      <a href="/">
        <SecondaryButton imageIcon={analyticsIcon} value="Analytics" />
      </a>
      <a href="/">
        <SecondaryButton imageIcon={documentIcon} value="Documents" />
      </a>
      <a href="/">
        <SecondaryButton imageIcon={messageIcon} value="Messages" />
        <span className="btn-new-message">NEW</span>
      </a>
      <a href="/">
        <SecondaryButton imageIcon={accountIcon} value="Accounts" />
      </a>
    </div>

    // <div className="navbar-options-wrapper">
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Dashboard" />
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Operations" />
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Catalogue" />
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Analytics" />
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Documents" />
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Messages" />
    //     <span>New</span>
    //   </a>
    //   <a href="/">
    //     <SecondaryButton startIcon="fab fa-github" value="Accounts" />
    //   </a>
    // </div>
  );
}
