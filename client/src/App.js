import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
import AboutPage from "./components/AboutPage/AboutPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import loginPage from "./components/loginPage/loginPage";
import FormPage from "./components/FormPage/FormPage";
import Chart from './components/ChartPage/dogCharts'
import ExercisePage from './components/ExercisePage/exercises'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={loginPage}/>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/form" component={FormPage} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/exercise" component={ExercisePage} />
      <Footer />
    </Router>
  );
};

export default App;
