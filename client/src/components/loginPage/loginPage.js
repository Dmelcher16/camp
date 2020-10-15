import React from "react";
import AppNav from "../AppNav/AppNav";
import Login from "../Login/Login";
import "./loginPage.css";

export default function loginPage() {
  return (
   <div>
      <AppNav />
      <div className="loginPage">
        <Login />
      </div>
   </div>
    
  );
}
