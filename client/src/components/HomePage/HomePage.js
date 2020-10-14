import React from "react";
import "./HomePage.css";
import DocPic from '../../images/DogByCacti.jpg';
import { Card, Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Container>
        <div className="card-container">
            {/* <h1>Tucker's Kennel</h1> */}
          <Row className="row">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={DocPic} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
