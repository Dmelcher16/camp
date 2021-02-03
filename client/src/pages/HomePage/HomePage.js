import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import KennelList from "../../components/KennelList/KennelList";
import { Auth } from "aws-amplify";
import useIsMountedRef from "../../components/IsMountedRefHook/index";

function Homepage() {
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
    <div className="HomePageImg">
      <div className="overlay"></div>
      <div className="content">
        <AppNav />
        <Container>
          <Row id="main-kennel-row" className="justify-content-center">
            <div id="kennel-container" className="card-container card">
              <Row>
                <Col id="greeting-col" md>
                  <h2 id="greeting">Welcome, {username}! </h2>
                </Col>
              </Row>
              <Row id="btn-row" className="justify-content-center">
                <Link to="/form">
                  <Button id="add-dog-btn">+ Add New Dog</Button>
                </Link>
              </Row>
              <Row className="row justify-content-center">
                <KennelList />
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
