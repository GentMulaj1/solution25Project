import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const handleOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <div className="Navbar">
      <div className="Navbar__left">
        <Link className="Navbar__logo"></Link>

        <div className="Navbar__links">
          <Link to="/">features</Link>

          <Link to="/">shop</Link>
          <Link to="/">product</Link>
          <Link to="/">blog</Link>
          <Link to="/">pages</Link>
        </div>
      </div>

      <div className="Navbar__right">
        <Link to="/" className="navbar__icon searchIcon"></Link>

        <span className="lineInside"></span>

        <div className="Navbar__right__inside">
          <Link to="/" className="navbar__icon userIcon"></Link>

          <Link to="/" className="navbar__icon heartIcon"></Link>

          <Link to="/" className="navbar__icon bagIcon">
            <span className="bagIcon__number">1</span>
          </Link>
        </div>
      </div>

      <div className="Navbar__MobileNav">
        <div className="Navbar__MobileNav__logo"></div>

        <div className="Navbar__MobileNav__open">
          <div className="openAndCloseMobile" onClick={handleOpenMobile}>
            {!openMobile ? <IoMenu /> : <IoClose />}
          </div>

          <div
            className={` ${openMobile ? "OpenMobileMenu" : "CloseMobileMenu"}`}
          >
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
