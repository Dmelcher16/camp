import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../../images/BlueCampK9Logo.jpeg";
import "./WelcomeNav.css";

export default function WelcomeNav() {
  return (
    <Navbar sticky="top" variant="light" expand="sm" id="welcome-nav">
      <Navbar.Brand className="navbar-brand mb-1 h1" id="welcome-brand">
        <img  src={Logo} alt="Brand Logo"></img>
      </Navbar.Brand>
      <h4 id="welcome-h5">Showcase Your Training Progress.</h4>
    </Navbar>
  );
}
