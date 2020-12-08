import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import HomePage from "./pages/HomePage/HomePage";
import loginPage from "./pages/loginPage/loginPage";
import FormPage from "./pages/FormPage/FormPage";
// import ExercisePage from "./pages/ExercisePage/exercises";
// import chartPage from "./pages/ChartPage/chartModel";
// import dataPage from "./components/ChartPage/dataPage";
import DogPage from "./pages/DogPage/DogPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={loginPage} />
      
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/form" component={FormPage} />
      {/* <Route exact path="/chart" component={chartPage} /> */}
      {/* <Route exact path="/data" component={dataPage} /> */}
      {/* <Route exact path="/exercise" component={ExercisePage} /> */}
      <Route exact path="/dog/:id" component={DogPage} />
      <Footer />
    </Router>
  );
};

export default App;
