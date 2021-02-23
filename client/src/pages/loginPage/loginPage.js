import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import WelcomeNav from "../../components/WelcomeNav/WelcomeNav";
import Login from "../../components/Login/Login";
import BlueCampK9Logo from "../../images/BlueCampK9Logo.jpeg";
import "./loginPage.css";

import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <div className="loginPageImg">
        <WelcomeNav />
        <Container>
          <Row id="login-row">
            <Col
              className="login-col text-center"
              lg={{ span: 6, offset: 6 }}
              sm={{ span: 12 }}
            >
              <Card id="login-card">
                <div className="card-image-top">
                  <img
                    className="logo"
                    src={BlueCampK9Logo}
                    alt="Brand Logo"
                  ></img>
                </div>
                <div className="card-body login-card-body">
                  <Login />
                </div>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col className="login-col text-center" lg={{ span: 4, offset: 8 }}>
              <Login />
            </Col>
          </Row> */}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
