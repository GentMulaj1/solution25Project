import React from "react";
import "./MobileNav.scss";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="MobileNav">
      <div className="MobileNav__logo__content">
        <div className="MobileNav__logo"></div>
      </div>

      <div className="MobileNav__content">
        <Link to="/">features</Link>

        <Link to="/">shop</Link>
        <Link to="/">product</Link>
        <Link to="/">blog</Link>
        <Link to="/">pages</Link>
      </div>

      <div className="MobileNav__footer">
        <Link to="/" className="navbar__icon searchIcon"></Link>
        <Link to="/" className="navbar__icon userIcon"></Link>

        <Link to="/" className="navbar__icon heartIcon"></Link>

        <Link to="/" className="navbar__icon bagIcon">
          <span className="bagIcon__number">1</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
