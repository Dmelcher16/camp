import React from "react";
import "./AboutPage.css";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";

export default function AboutPage() {
  return (
    <div className="AboutPageImg">
      <AppNav />
      <h1>About Us</h1>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className="main-story">
              <p>
                Training your dogs can be difficult especially in the current
                climate of the world. With all the stress and anxiety of this
                day and age you will certainly have a handful of action thrown
                at you. Neglect of other secondary responsibilities can be a
                subconscious side effect of stress, resulting in unwanted
                circumstances. God forbid you neglect your pets and are
                uninformed about their well being. Camp K-9 is here to help!
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="main-story">
              <p>
                Camp K-9 is an authenticated website where people can check
                their dogs into a specified kennel and watch their training
                progression as time goes on. There is no limit to the amount of
                dogs added to one's kennel. The more the merrier! The owner of
                the dogs enters the dog’s information and then the desired
                training focus. Subsequently, the owner is taken to a page where
                they can view their dogs progressions from the last time it was
                updated.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <CardDeck className="card-deck">
        <Card className="card" text="light">
          <Card.Img src="sitting-dog.jpeg" />
          <Card.Body>
            <Card.Title>Stays/Sits</Card.Title>
            <Card.Text>
              Animals have a lot of anxiety which causes problems for you.
              As an owner taking charge of your dog can be difficult,
              however with owner state of the art sit/stay training you
              don’t have to worry about your dog acting on anxiety and running off.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="tamu_obedience.jpg" />
          <Card.Body>
            <Card.Title>Leash Training</Card.Title>
            <Card.Text>
              With our state of the art leash training you can be sure your dog will
              be obedient. Leash training will allow you to relax while not fussing over your dog.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="Protection-Dog-Training.jpg" />
          <Card.Body>
            <Card.Title>Potty Training</Card.Title>
            <Card.Text>
              Accidents happen, however it can be a problem when they become consistent. Potty training
              will allow your dog to become more versatile when it comes to their ability to make rational
              decisions on what is right and wrong.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="Dog-training.jpeg" />
          <Card.Body>
            <Card.Title>Biting</Card.Title>
            <Card.Text>
              A dog’s natural instinct is to chew on things. If this habit becomes consistent,
              it may cause hundreds, possibly even thousands of dollars worth in damage. With
              this training you can be sure that your belongings will be safe.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card text="light">
          <Card.Img src="Dog-Jumping.jpeg" />
          <Card.Body>
            <Card.Title>Listening Speed</Card.Title>
            <Card.Text>
              Many dogs have a slow reaction time when it comes to listening and responding to
              commands. This emphasis will teach your dog to listen closely without dilemma.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

