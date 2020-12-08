import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Container, Row } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import AppNav from "../../components/AppNav/AppNav.js";
import KennelList from "../../components/KennelList/KennelList"


function Homepage() {
  

  return (
    <div className="HomePageImg">
      <AppNav />
      <Container>
        <div className="card-container">
          <h1>
            My Kennel{" "}
            <Link to="/form">
              <IoIosAddCircleOutline />{" "}
            </Link>
          </h1>
          <Row className="row justify-content-center">
            <KennelList />
          </Row>
        </div>
      </Container>
    </div>
  );
}


export default Homepage;
