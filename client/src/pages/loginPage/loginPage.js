import React from "react";
import Login from "../../components/Login/Login";
import "./loginPage.css";
// import { Image } from "react-bootstrap";
import BlueCampK9Logo from "../../images/BlueCampK9Logo.jpeg"

export default function loginPage() {
  return (
    <div>
      <style type="text/css">{`#app-nav {display: none}`}</style>
      <div className="loginPageImg">
        <img className="logo" src={BlueCampK9Logo} fluid />
        <Login />
      </div>
    </div>
  );
}
