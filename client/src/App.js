import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FormPage from "./pages/FormPage/FormPage";
import DogPage from "./pages/DogPage/DogPage";
// import { StoreProvider } from "./utils/GlobalState";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" >
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
          <Route path="/dog/:id">
            <DogPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
