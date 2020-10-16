import React from "react";
import "./AppNav.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AuthStateApp from "../Login/authstate";
import{ Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';


export default function AppNav() {
  return (
    <div>
{/* //       <Navbar className="navbar" fixed="top">
//         <NavbarBrand href="/">
//           <img src="BlueCampK9Logo.jpeg" alt="logo"></img>
//         </NavbarBrand>
//         <Nav className="navbar" navbar>
//           <NavItem>
//   <Link className="linkText"  to="/about">About</Link>
//           </NavItem>
//           <NavItem>
//   <Link className="linkText"  to="/form">FormPage</Link>
//           </NavItem>
//           <NavItem>
//             <NavLink className="linkText" href="/home">Home</NavLink>
//           </NavItem>
//           <NavItem>
//             <AmplifySignOut>
//         <AuthStateApp/>
//             </AmplifySignOut>
//           </NavItem>
          
//         </Nav> */}
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
