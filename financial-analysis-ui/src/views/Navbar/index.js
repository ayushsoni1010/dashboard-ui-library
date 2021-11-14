import React from "react";
import "./style.views.navbar.css";
import NavbarOptions from "../../components/section-components/NavbarOptions";
import Categories from "../../components/section-components/Categories";

export default function Navbar() {
  return (
    <div className="navbar-section-wrapper">
      <div className="navbar-search-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="navbar-options-wrapper">
        <NavbarOptions />
      </div>
      <div className="navbar-categories-wrapper">
        <p className="categories-title">Top Categories</p>
        <Categories />
      </div>
    </div>
  );
}
