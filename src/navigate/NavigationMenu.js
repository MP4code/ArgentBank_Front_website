import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png";
import "./navigation.css";
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, tokenItem } from "../data/userReducer.js";

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // pour rediriger
  const { token } = useSelector(state => state.user); // Récupération du token

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/"); // Redirection après déconnexion
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>

      {token ? (
        <button className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          <p>Sign Out</p>
        </button>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      )}
    </nav>
  );
};

export default NavigationMenu;
