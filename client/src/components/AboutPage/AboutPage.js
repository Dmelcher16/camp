import React from "react";
import "./AboutPage.css";
import { Image, Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import Footer from "../Footer/Footer.js";

export default function AboutPage() {
  return (
    <div className="AboutPageImg">
      <AppNav />
      <h1>About Us</h1>
      <div>
        <p>
          Training your dogs can be difficult especially in the current climate
          of the world. With all the stress and anxiety of this day and age you
          will certainly have a handful of action thrown at you. Neglect of
          other secondary responsibilities can be a subconscious side effect of
          stress, resulting in unwanted circumstances. God forbid you neglect
          your pets and are uninformed about their well being. Camp K-9 is here
          to help!
        </p>
        <p>
          {" "}
          Camp K-9 is an authenticated website where people can check their dogs
          into a specified kennel and watch their training progression as time
          goes on. There is no limit to the amount of dogs added to one's
          kennel. The more the merrier! The owner of the dogs enters the dog’s
          information and then the desired training focus. Subsequently, the
          owner is taken to a page where they can view their dogs progressions
          from the last time it was updated.
        </p>
      </div>
      <CardDeck className="card-deck">
        <Card className="card" text="light">
          <Card.Img src="tamu_obedience.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="sitting-dog.jpeg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="Dog-training.jpeg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="Protection-Dog-Training.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <Footer />
    </div>
  );
}

{
  /* <Container>
  <Row>
    <Col xs={6} md={4}>
      <Card className="card">
        <Card.Img src="WhiteCampK9Logo.jpeg" roundedCircle />
        <Card.Body>
          <Card.Title>Training Excersices</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={6} md={4}>
      <Image src="WhiteCampK9Logo.jpeg" roundedCircle />
      <h2>Training Excersices</h2>
      <h4>hello this is simple text to see what shows up</h4>
    </Col>
    <Col xs={6} md={4}>
      <Image src="WhiteCampK9Logo.jpeg" roundedCircle />
    </Col>
  </Row>
</Container>; */
}
