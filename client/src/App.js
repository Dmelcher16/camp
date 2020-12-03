import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import loginPage from "./components/loginPage/loginPage";
import FormPage from "./components/FormPage/FormPage";
import ExercisePage from "./components/ExercisePage/exercises";
import chartPage from "./components/ChartPage/chartModel";
import dataPage from "./components/ChartPage/dataPage";
import DogPage from "./components/DogPage/DogPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={loginPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/form" component={FormPage} />
      <Route exact path="/chart" component={chartPage} />
      <Route exact path="/data" component={dataPage} />
      <Route exact path="/exercise" component={ExercisePage} />
      <Route exact path="/dog/:id" component={DogPage} />
      <Footer />
    </Router>
  );
};

export default App;
