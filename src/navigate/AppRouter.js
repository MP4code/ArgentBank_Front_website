import React, { useEffect } from "react";
import Home from "../pages/home/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Login from "../pages/login/Login";
import AccountCreation from "../pages/account/AcountCreation";
import Profil from "../pages/profil/Profil";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../data/actions";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.user);
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      getUser(tokenFromStorage, dispatch);
    }
  }, [token])
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate replace to="/profil" /> : <Login />} />
          <Route path="/account" element={<AccountCreation />} />
          <Route path="/profil" element={!token ? <Navigate replace to="/login" /> : <Profil />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRouter;
