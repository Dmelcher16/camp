import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";
import "./DogPage.css";

function DogPage(props) {
  // const [state, dispatch] = useStoreContext();
  const [dog, setDog] = useState({});
  const [exerciseForm, showExerciseForm] = useState(false);
  
  

  //when component mounts get dog with _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    API.getDog(id)
      .then((res) => setDog(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(dog)

  return (
    <div className="HomePageImg">
      <div className="overlay"></div>
      <div className="content">
        <AppNav />
        <Container>
          <Row className="justify-content-md-center">
            <Col md>
              <Card id="main-dog-card">
                <Card.Header>
                  <h1 id="dog-detail-title">{dog.name}</h1>
                </Card.Header>
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
                        <Button id="add-exercise-btn" variant="outline-success">
                          + Add Exercise
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <ExerciseForm />
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button id="to-kennel" variant="outline-success">
                    <Link id="link-font" to="/">
                      ← Back to Your Kennel
                    </Link>
                  </Button>
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
