import React from "react";
import "./App.css";
import AppNav from "./components/AppNav/AppNav.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
// import AboutPage from "./components/AboutPage/AboutPage.js";
// import HomePage from "./components/HomePage/HomePage.js";

const App = () => {
  return (
    <Router>
      <AppNav />
      <div className="main">
      <Login />
      </div>
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Link to="/">Go home</Link>
      <Link to="/about">go to about</Link> */}
      <Footer />
    </Router>
  );
};

export default App;
