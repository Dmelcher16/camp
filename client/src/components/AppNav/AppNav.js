import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import "./AppNav.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AuthStateApp from "../Login/authstate";
import{ Link } from 'react-router-dom'


export default function AppNav() {
  return (
    <div>
      <Navbar className="navbar" fixed="top">
        <NavbarBrand href="/">
          <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
        </NavbarBrand>
        <Nav className="navbar" navbar>
          <NavItem>
  <Link className="linkText"  to="/about">About</Link>
          </NavItem>
          <NavItem>
            <NavLink className="linkText" href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <AmplifySignOut>
        <AuthStateApp/>
            </AmplifySignOut>
          </NavItem>
          
        </Nav>
      </Navbar>
  
    
    </div>
  );
}
