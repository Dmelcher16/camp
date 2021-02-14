import React, { useState, useEffect } from "react";
import "./AppNav.css";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../components/IsMountedRefHook/index";
import AuthStateApp from "../Login/authstate";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import BlueCampK9Logo from "../../images/BlueCampK9Logo.jpeg";

export default function AppNav() {
  const [username, setUsername] = useState("");
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    Auth.currentUserInfo()
      .then((res) => {
        if (isMountedRef.current) {
          setUsername(res.attributes.email);
        }
      })
      .catch((err) => console.log("error: ", err));
  }, [isMountedRef]);

  return (
    <Navbar sticky="top" variant="light" expand="sm">
      <Navbar.Brand className="navbar-brand mb-1 h1">
        <Link to="/">
          <img src={BlueCampK9Logo} alt="Brand Logo"></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Link className="link-name" to="/about">
              ABOUT
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="link-name" to="/">
              HOME
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <span id="status" className="navbar-text">
              LOGGED IN: {username}
            </span>
          </Nav.Item>
          <div className="navbar-text">
            <AmplifySignOut>
              <AuthStateApp />
            </AmplifySignOut>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
