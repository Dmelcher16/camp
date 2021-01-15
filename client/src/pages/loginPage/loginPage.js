import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css";
import BlueCampK9Logo from "../../images/BlueCampK9Logo.jpeg"

export default function loginPage() {
  return (
    <div>
      <style type="text/css">{`#app-nav {display: none}`}</style>
      <div className="loginPageImg">
        <img className="logo" src={BlueCampK9Logo} alt="logo" fluid="true" />
        <Login />
      </div>
    </div>
  );
}
