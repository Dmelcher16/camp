import React from "react";
import "./AppNav.css";
import { Navbar, Nav } from 'react-bootstrap';

export default function AppNav() {
  return (
    <div>
      <Navbar variant="light" bg="dander" expand="sm">
        <Navbar.Brand href="/">
        <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="link-name">
            <Nav.Link id="link-name" href="/about">About</Nav.Link>
            <Nav.Link id="link-name" href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
