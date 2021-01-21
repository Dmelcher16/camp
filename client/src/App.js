import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import DogPage from "./pages/DogPage/DogPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import { StoreProvider } from "./utils/GlobalState";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/form" component={FormPage} />
        <Route exact path="/dog/:id" component={DogPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
