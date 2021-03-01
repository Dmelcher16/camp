import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DogPage from "./pages/DogPage/DogPage";
import LoginPage from "./pages/loginPage/loginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/dog/:id" component={DogPage} />
      </Switch>
    </Router>
  );
};

export default App;
