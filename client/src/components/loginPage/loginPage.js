import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Login/Login";
import "./loginPage.css";
import AppNav from "../AppNav/AppNav.js";
import Footer from "../Footer/Footer.js";

export default function loginPage() {
  return (
    <Router>
      <div className="loginPageImg">
        <AppNav />
        <Login />
        <Footer />
      </div>
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Link to="/">Go home</Link>
      <Link to="/about">go to about</Link> */}
    </Router>
  );
}
