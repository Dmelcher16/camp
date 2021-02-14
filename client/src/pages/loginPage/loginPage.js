import React from "react";
import Login from "../../components/Login/Login";
import "./loginPage.css";
import BlueCampK9Logo from "../../images/BlueCampK9Logo.jpeg";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <div className="loginPageImg">
        <img className="logo" src={BlueCampK9Logo} alt="logo" fluid="true" />
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
