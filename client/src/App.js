import React from "react";
// import "./App.css";
// import AppNav from "./components/AppNav/AppNav.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
// import HomePage from "./components/HomePage/HomePage";
import loginPage from "./components/loginPage/loginPage";
// import AboutPage from "./components/AboutPage/AboutPage.js";
// import HomePage from "./components/HomePage/HomePage.js";

const App = () => {
  return (
    <Router>
      <div>
       <Route exact path="/" component={loginPage} />
       <Route exact path="/about" component={AboutPage} />
       <Route exact path="/home" component={HomePage} />
      </div>

      {/* <AppNav />
      <div className="main">
      <Login />
      </div>
      <Footer /> */}
      
    </Router>
  );
};

export default App;
