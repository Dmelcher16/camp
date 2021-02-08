import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import KennelList from "../../components/KennelList/KennelList";

function Homepage() {
  return (
    <div className="HomePageImg">
      <div className="overlay"></div>
      <div className="content">
        <AppNav />
        <Container>
          <Row id="main-kennel-row" className="justify-content-center">
            <div id="kennel-container" className="card-container card">
              <Row id="btn-row">
                <Col id="plus-btn-col">
                  <Link to="/form">
                    <span
                      id="add-dog-icon"
                      className="fa-stack fa-2x"
                      title={"Add New Dog"}
                    >
                      <i className="fa fa-circle fa-stack-1x icon-background"></i>
                      <i className="fa fa-plus fa-stack-1x"></i>
                    </span>
                  </Link>
                </Col>
              </Row>
              <Row id="title-row" className="justify-content-center">
                <Col id="greeting-col" md>
                  <h1 id="greeting">Your Kennel</h1>
                </Col>
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
