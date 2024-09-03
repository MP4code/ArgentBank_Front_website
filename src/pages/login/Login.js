import React, { useState } from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { loginUser } from "../../data/actions";



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  // Fonction pour saugarder les identifiants 

  // Fonction pour soumettre le formulaire
  const formSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const body = {
      email,
      password,
      rememberMe,
    };
    console.log(body);
    loginUser(body, dispatch);

  };

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={formSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                // autoComplete sinon error dans la console.
                autoComplete="email"
                onChange={emailChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
                minLength="5"
                required
              />
            </div>
            <div className="input-remember">
              <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <Link to="/account">Créez un compte</Link>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
