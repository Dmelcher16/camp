import React from "react";
import Login from "../Login/Login";
import "./loginPage.css";
import Footer from "../Footer/Footer.js";

export default function loginPage() {
  return (
   <div>
      <div className="loginPageImg">
        <Login />
        <Footer />
      </div>
   </div>
    
  );
}
