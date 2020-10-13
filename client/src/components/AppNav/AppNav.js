import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import "./AppNav.css";
import Login from "../Login/Login";

export default function AppNav() {
  return (
    <div>
      <Navbar className="navbar" fixed="top">
        <NavbarBrand href="/">
          <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
        </NavbarBrand>
        <Nav className="navbar" navbar>
          <NavItem>
            <NavLink className="linkText" href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="main">
        <Login/>
      </div>
    
    </div>
  );
}
