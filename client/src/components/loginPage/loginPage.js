import React from "react";
import Login from "../Login/Login";
import "./loginPage.css";
import Image from "react-bootstrap/Image";

export default function loginPage() {
  return (
    <div className="loginPageImg">
      <Image className="logo" src="BlueCampK9Logo.jpeg" fluid />
      <Login />
    </div>
  );
}
