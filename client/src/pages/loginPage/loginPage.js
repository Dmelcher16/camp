import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../../components/Login/Login";
import "./loginPage.css";

import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div>
      <div className="loginPageImg">
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Login />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
