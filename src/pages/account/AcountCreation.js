import React, { useState } from "react";
import "../../styles/App.css";
import { useDispatch } from "react-redux";
import { newUser } from "../../data/actions";

const AcountCreation = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const emailChangeForm = (e) => {
    setEmail(e.target.value);
  };

  const passWordChangeForm = (e) => {
    setPassword(e.target.value);
  };
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const userNameChange = (e) => {
    setUserName(e.target.value);
  };
  const newUserSubmit = async () => {

    const body = {
      email,
      password,
      firstName,
      lastName,
      userName,
      rememberMe,
    };
    console.log(body);
    newUser(body, dispatch);


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
              <input type="email" id="email" value={email} onChange={emailChangeForm}
                autoComplete="on" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First Name</label>
              <input type="text" id="firstname" onChange={firstNameChange} autoComplete="on" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last Name</label>
              <input type="text" id="lastname" onChange={lastNameChange} autoComplete="on" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required onChange={userNameChange} autoComplete="on" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" minLength="5" onChange={passWordChangeForm} required autoComplete="on" />
            </div>
            <div className="input-remember">
              <input checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} type="checkbox" id="remember-me" />
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
