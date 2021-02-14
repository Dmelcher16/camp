import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Row, Col } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import CreateDogForm from "../../components/CreateDogForm/CreateDogForm";
import KennelList from "../../components/KennelList/KennelList";
import Footer from "../../components/Footer/Footer"

function Homepage() {
  return (
    <div className="main">
      <AppNav />
      <CreateDogForm />
      <div className="main-homepage">
        <Row id="main-kennel-row" className="justify-content-center">
          <Col id="kennel-col">
            {/* <Row id="btn-row">
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
            </Row> */}
            <Row id="title-row" className="justify-content-center">
              <Col id="greeting-col" md>
                <h1 id="greeting">KENNEL</h1>
              </Col>
            </Row>
            <Row className="row justify-content-center">
              <KennelList />
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
