import React from "react";
import Home from "../pages/home/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Login from "../pages/login/Login";
import AccountCreation from "../pages/account/AcountCreation";
import Profil from "../pages/profil/Profil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<AccountCreation />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
