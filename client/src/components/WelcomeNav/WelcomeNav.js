import React from "react";
import { Navbar } from "react-bootstrap";
import BlueCampK9Logo from "../../images/BlueCampK9_76.jpeg";
import "./WelcomeNav.css";

export default function WelcomeNav() {
  return (
    <Navbar sticky="top" variant="light" expand="sm" id="welcome-nav">
      <Navbar.Brand className="navbar-brand mb-1 h1">
        <img src={BlueCampK9Logo} alt="Brand Logo"></img>
      </Navbar.Brand>
      <h5 id="welcome-h5">CAMP K-9</h5>
    </Navbar>
  );
}
