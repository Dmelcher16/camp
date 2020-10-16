import React, { useState, useEffect } from "react";
import "./HomePage.css";
import DocPic from "../../images/DogByCacti.jpg";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import AppNav from "../AppNav/AppNav.js";
import Footer from "../Footer/Footer.js";
import API from "../../utils/API";

function Homepage() {
  //set initial state
  const [dogs, setDogs] = useState([]);

  //load all the dogs and store them with setDogs
  useEffect(() => {
    loadDogs();
  }, []);

  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="HomePageImg">
      <AppNav />
      <Container>
        <div className="card-container">
          <h1>
            Tucker's Kennel <IoIosAddCircleOutline />{" "}
          </h1>
          <Row className="row">
            <Col>
              <CardGroup>
                {dogs.map((dog) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={DocPic} />
                    <Card.Body key={dog._id}>
                      <Card.Title key={dog.name}>{dog.name}</Card.Title>
                    </Card.Body>
                  </Card>
                ))}
              </CardGroup>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Homepage;
