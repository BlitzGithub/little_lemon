import React from "react";
import "./Navbar.css";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbarWrapper">
        <img src={logo} alt="Company Logo" className="companyLogo" />
        <h2>LITTLE LEMON</h2>
        <img src={hamburger} alt="Hamburger" className="hamburger" />
      </div>
    </>
  );
};

export default Navbar;
