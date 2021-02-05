import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
              <Row id="title-row" className="justify-content-center">
                <Col id="greeting-col" md>
                  <h1 id="greeting">Your Kennel</h1>
                </Col>
              </Row>
              <Row className="row justify-content-center">
                <KennelList />
              </Row>
              <Row id="btn-row">
                <Col>
                  <Link to="/form">
                    <span
                      id="add-dog-icon"
                      className="fa-stack fa-2x"
                      title={"Add New Dog"}
                    >
                      <i className="fa fa-circle fa-stack-2x icon-background"></i>
                      <i className="fa fa-plus fa-stack-1x"></i>
                    </span>
                  </Link>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
