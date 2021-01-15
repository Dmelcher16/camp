import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Container, Row } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import AppNav from "../../components/AppNav/AppNav.js";
import KennelList from "../../components/KennelList/KennelList";
import { Auth } from "aws-amplify";

function Homepage() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    Auth.currentUserInfo()
      .then((res) => {
        setUsername(
          res.attributes.email,
        );
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div className="HomePageImg">
      <div className="overlay"></div>
      <div className="content">
        <AppNav />
        <Container>
          <div className="card-container">
            <h1 id="welcome-h1">Welcome, {username}! </h1>
            <Row className="justify-content-center">
              <Link to="/form">
                <IoIosAddCircleOutline />
                {"Add A Dog"}
              </Link>
            </Row>
            <Row className="row justify-content-center">
              <KennelList />
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
