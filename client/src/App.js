import React from "react";
// import {
//   AmplifyAuthenticator,
//   AmplifySignUp,
//   AmplifySignIn,
// } from "@aws-amplify/ui-react";
import "./App.css";
import AppNav from "./components/AppNav/AppNav.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage.js";
import HomePage from "./components/HomePage/HomePage.js";

const App = () => {
  return (
    <Router>
      <AppNav />
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Link to="/">Go home</Link>
      <Link to="/about">go to about</Link> */}
      {/* <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label: "Custom email Label",
              placeholder: "custom email placeholder",
              required: true,
            },
            {
              type: "password",
              label: "Custom Password Label",
              placeholder: "custom password placeholder",
              required: true,
            },
            {
              type: "name",
              label: "name",
              placeholder: "Your name here",
              required: true,
            },
          ]}
        />
        <AmplifySignIn slot="sign-in" usernameAlias="email" />
      </AmplifyAuthenticator> */}
    </Router>
  );
};

export default App;
