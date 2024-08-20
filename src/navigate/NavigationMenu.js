import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png"
import "./navigation.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToken, tokenItem } from "../data/userToken.js";
import { clearToken } from "../data/userToken.js";

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenItem); // recupération du token

  dispatch(setToken());

  const buttonLogout = () => {
    dispatch(clearToken());
    dispatch(setToken(null));
    window.location.href = "/";
  };


  return (
    <nav className="main-nav">
      pas de token
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
      </Link>
      <h1 className="sr-only">Argent Bank</h1>

      {token ? (
        // Affiche le bouton de déconnexion si le token est actif
        <Link to="/" className="main-nav-item" onClick={buttonLogout}>
          <i className="fa fa-sign-out"></i>
          <p>Sign Out</p>
        </Link>
      ) : (
        // Sinon, affiche le bouton de connexion
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      )}
    </nav>
  );
}



export default NavigationMenu;
