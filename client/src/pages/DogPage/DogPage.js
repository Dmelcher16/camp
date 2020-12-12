import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import API from "../../utils/API";
import "./DogPage.css";

function DogPage() {
  const [dog, setDog] = useState({});
  const [exerciseForm, showExerciseForm] = useState(false);

  //when component mounts get dog with _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    API.getDog(id)
      .then((res) => setDog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="HomePageImg">
      <div className="overlay"></div>
      <div className="content">
        <AppNav />
        <Container>
          <Row className="justify-content-md-center">
            <Col md>
              <Card id="main-dog-card">
                <Card.Title>
                  <h1 id="dog-detail-title">{dog.name}</h1>
                </Card.Title>
                <Card.Body>
                  <Row className="justify-content-center">
                    <Col md="auto">
                      <div className="text-center">
                        <img
                          id="detail-image"
                          className="mx-auto"
                          src={dog.image}
                          alt={dog.name}
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="text-center align-self-center">
                        <ListGroup variant="flush" className="attributes">
                          <ListGroup.Item>Age: {dog.age}</ListGroup.Item>
                          <ListGroup.Item>Breed: {dog.breed}</ListGroup.Item>
                          <ListGroup.Item>
                            Owner: {dog.ownerFirstName} {dog.ownerLastName}
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Link to="/">← Back to Your Kennel</Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    </div>
  );
}

export default DogPage;
