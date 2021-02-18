import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Row, Col } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import CreateDogForm from "../../components/CreateDogForm/CreateDogForm";
import KennelList from "../../components/KennelList/KennelList";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import "../../components/CreateDogForm/CreateDogForm.css";
import KennelContext from "../../utils/kennelContext";

function Homepage() {
  //set initial state
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    loadDogs();
    // eslint-disable-next-line
  }, []);

  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <KennelContext.Provider value={{ dogs, loadDogs }}>
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
                  <h3 id="greeting">KENNEL</h3>
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
    </KennelContext.Provider>
  );
}

export default Homepage;
