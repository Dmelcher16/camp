import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";
import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";
import "./DogPage.css";

function DogPage() {
  //set iniitial state
  const [dog, setDog] = useState({});
  const [show, setShow] = useState(false);

  function loadDog() {
    API.getDog(id)
      .then((res) => setDog(res.data))
      .catch((err) => console.log(err));
  }

  //when component mounts get dog with _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    loadDog(id);
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
                    <Col md="auto" className="info-col">
                      <div className="text-center">
                        <img
                          id="detail-image"
                          className="mx-auto"
                          src={dog.image}
                          alt={dog.name}
                        />
                      </div>
                    </Col>
                    <Col className="info-col">
                      <div className="text-center align-self-center">
                        <ListGroup variant="flush" className="attributes">
                          <ListGroup.Item>Age: {dog.age}</ListGroup.Item>
                          <ListGroup.Item>Breed: {dog.breed}</ListGroup.Item>
                          <ListGroup.Item>
                            Owner: {dog.ownerFirstName} {dog.ownerLastName}
                          </ListGroup.Item>
                        </ListGroup>
                        <Button
                          id="add-exercise-btn"
                          variant="outline-success"
                          onClick={() => {
                            setShow(true);
                          }}
                        >
                          + Add Exercise
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>{show ? <ExerciseForm /> : null}</Row>
                  {/* <Row>

                  </Row> */}
                </Card.Body>
                <Card.Footer>
                  <Link id="link-font" to="/">
                    <Button id="to-kennel" variant="outline-success">
                      ← Back to Your Kennel
                    </Button>
                  </Link>
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
