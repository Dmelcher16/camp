import React from "react";
import "./AboutPage.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import Footer from "../Footer/Footer.js";

export default function AboutPage() {
  return (
    <div className="AboutPageImg">
      <AppNav />
     <h1>About Us</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="training_tips.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="WhiteCampK9Logo.jpeg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="tamu_obedience.jpg" roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src="training_tips.jpg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="WhiteCampK9Logo.jpeg" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="tamu_obedience.jpg" roundedCircle />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
