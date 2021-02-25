import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Login from "../../components/Login/Login";
import Logo76x76 from "../../images/BlueCampK9_76.jpeg";
import Logo198x198 from "../../images/BlueCampK9_198.jpeg";
import "./loginPage.css";
import LoginContext from "../../utils/loginContext";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  //set initial state
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ setShowLogin }}>
      <div>
        <div className="loginPageImg">
          <div className="overlay"></div>
          <div className="content">
            <Container id="login-container">
              <Row id="login-row">
                <Col
                  className="login-col text-center"
                  lg={{ span: 6, offset: 6 }}
                  sm={{ span: 12 }}
                >
                  {!showLogin ? (
                    <div id="brand-statement">
                      <img className="brand-logo" src={Logo198x198} alt="Brand Logo"></img>
                      <h1 id="login-page-h1">Helping You Showcase Your Pup-Training Progress.</h1>
                      <div className="inline">
                        <Button id="learn-more-btn" variant="outline-light">
                          Learn More
                        </Button>
                        <Button
                          id="login-btn"
                          variant="outline-light"
                          onClick={() => setShowLogin(true)}
                        >
                          Login/Sign-Up
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Card id="login-card">
                      <div className="card-image-top">
                        <img
                          className="logo"
                          src={Logo76x76}
                          alt="Brand Logo"
                        ></img>
                      </div>
                      <div className="card-body login-card-body">
                        <Login />
                      </div>
                    </Card>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default LoginPage;
