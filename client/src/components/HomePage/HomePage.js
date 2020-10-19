import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import AppNav from "../AppNav/AppNav.js";
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
        {/* <div className="card-container"> */}
          <h1>
            My Kennel{" "}
            <Link to="/form">
              <IoIosAddCircleOutline />{" "}
            </Link>
          </h1>
          <Row className="row">
            <Col>
              <CardGroup>
                <Row id="mapRow">
                  {dogs.map((dog) => (
                    <div key={dog._id} className="card-deck">
                      <Col key={dog._id} mb="3">
                        <Card
                          key={dog._id}
                          style={{ width: "18rem", text: "center" }}
                        >
                          <Card.Img
                            key={dog.image}
                            variant="top"
                            src={dog.image}
                            className="card-img-top"
                          />
                          <Card.Body key={dog._id}>
                            <Card.Title className="dogName" key={dog.name}>
                              {dog.name}
                            </Card.Title>
                            <Link to="/exercise">Add daily exercises</Link>
                          <br></br>
                          <Link to="/chart">View progress</Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    </div>
                  ))}
                </Row>
              </CardGroup>
            </Col>
          </Row>
        {/* </div> */}
      </Container>
    </div>
  );
}

export default Homepage;
