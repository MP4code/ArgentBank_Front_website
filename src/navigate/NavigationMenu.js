import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png"
import "./navigation.css"

const NavigationMenu = () => {
  return (
    <nav className="main-nav">
      <Link to="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
      </Link>


      <Link to="/login" className="main-nav-item">
        <p>Sign In</p>
      </Link>
    </nav>
  );
};

export default NavigationMenu;
