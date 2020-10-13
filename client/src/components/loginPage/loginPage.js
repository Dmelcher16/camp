import React from 'react'
import AppNav from "../AppNav/AppNav";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import "./loginPage.css"

export default function loginPage() {
    return (
        <Router>
        <AppNav />
      <div className="loginPage">
      <Login />
      </div>
      {/* <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Link to="/">Go home</Link>
      <Link to="/about">go to about</Link> */}
      <Footer />
    </Router>
    )
}