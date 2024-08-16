import React from "react";
import "../../styles/App.css";

const AcountCreation = () => {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Create your account</h1>
          <form onSubmit="">
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last name</label>
              <input type="text" id="lastname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" minlength="8" required />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Create your account</button>

          </form>
        </section>
      </main>
    </div>

  )
};

export default AcountCreation;
