import React from "react";
import "./App.css";
import AppNav from "./components/AppNav/AppNav.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AboutPage from "./components/AboutPage/AboutPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import loginPage from "./components/loginPage/loginPage";


const App = () => {
  return (
    <Router>
      <AppNav />
      <Route exact path="/" component={loginPage}/>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Link to="/">HOME</Link>
      <br/>

      <Link to="/about">ABOUT</Link>
      <Footer />
    </Router>
  );
};

export default App;
