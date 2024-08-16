import React from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const usernameChange = (e) => {
    setUsername(e.target.value);
  }

  const formSubmit = (e) => {

    console.log("test")
  }


  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={formSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={username} onChange={usernameChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={value} onChange={handleChange} minlength="8" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button" >Sign In</button>
            <Link to="/account">Créez un compte</Link>
          </form>
        </section>
      </main>
    </div>

  );

}

export default Login;
