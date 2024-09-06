import React, { useState } from "react";
import "../../styles/App.css";
import { useDispatch } from "react-redux";
import { newUser } from "../../data/actions";
import { useNavigate } from "react-router-dom";

const AcountCreation = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const newUserSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
      firstName,
      lastName,
      userName,
    };

    const goToLogin = () => navigate("/login");
    newUser(body, goToLogin);


  };

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Create your account</h1>
          <form onSubmit={newUserSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}
                autoComplete="on" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First Name</label>
              <input type="text" id="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} autoComplete="on" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last Name</label>
              <input type="text" id="lastname" value={lastName} onChange={e => setLastName(e.target.value)} autoComplete="on" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required value={userName} onChange={e => setUserName(e.target.value)} autoComplete="on" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" minLength="5" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="on" />
            </div>

            <button type="submit" className="sign-in-button">Create your account</button>

          </form>
        </section>
      </main>
    </div>

  )
};

export default AcountCreation;
