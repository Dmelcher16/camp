import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";

export default function AppNav() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
