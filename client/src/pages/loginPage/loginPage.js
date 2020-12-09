import React from "react";
import Login from "../../components/Login/Login";
import "./loginPage.css";
import { Image } from "react-bootstrap";

export default function loginPage() {
  return (
    <div>
      <style type="text/css">{`#app-nav {display: none}`}</style>
      <div className="loginPageImg">
        <Image className="logo" src="BlueCampK9Logo.jpeg" fluid />
        <Login />
      </div>
    </div>
  );
}
