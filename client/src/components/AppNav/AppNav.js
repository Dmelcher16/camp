import React from "react";
import "./AppNav.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AuthStateApp from "../Login/authstate";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function AppNav() {
  return (
    <div>
      <Navbar variant="light" bg="dander" expand="sm">
        <span className="navbar-brand mb-1 h1">
          <Link to="/">
            <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
          </Link>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="link-name">
            <Nav.Item>
              <Link id="link-name" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link id="link-name" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <AmplifySignOut>
                  <AuthStateApp />
                </AmplifySignOut>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
