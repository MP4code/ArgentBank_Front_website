import React, { useState } from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setToken } from '../../data/userToken.js';


const Login = () => {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/profil";
  }
  //Variable et valeurs entrés 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      email: email,
      password: password,
    };
    console.log("le body: ", body);

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const contentType = response.headers.get("Content-Type");

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          dispatch(setToken(data.token)); // Enregistre dans Redux

          localStorage.setItem("token", data.token); // Enregistre uniquement le token
          window.location.href = "/profil";

        } else {
          alert("Vos identifiants sont incorrects");
        }
      } else {
        alert("Erreur lors de la connexion");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
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
              <input type="checkbox" id="remember-me" />
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
