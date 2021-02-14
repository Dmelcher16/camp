import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import HomePage from "./pages/HomePage/HomePage";
import DogPage from "./pages/DogPage/DogPage";
import LoginPage from "./pages/loginPage/loginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/dog/:id" component={DogPage} />
      </Switch>
    </Router>
  );
};

export default App;
