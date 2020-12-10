import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
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
          <Row>
            <Col md={12}>
              <Card id="mainDogCard">
                <Card.Title>
                  <h1>{dog.name}</h1>
                </Card.Title>
                <Card.Body>
                  <Row className="justify-content-center">
                    <Col>
                      <img id="detailImage" src={dog.image} alt={dog.name} />
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
