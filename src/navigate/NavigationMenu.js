import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/argentBankLogo.png";
import "./navigation.css";
import { useSelector, useDispatch } from 'react-redux';
import { clearToken } from "../data/userReducer.js";

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // pour rediriger
  const { token, user } = useSelector(state => state.user); // Récupération du token

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
        <div className="main-nav_content">
          <Link className="main-nav-item" to="/profil">
            <i class="fa fa-user-circle"></i>
            {user.userName}
          </Link>
          <button className="main-nav-item buttonSignOut" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default NavigationMenu;
