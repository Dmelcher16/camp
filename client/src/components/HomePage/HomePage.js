import React, {useState, useEffect} from "react";
import "./HomePage.css";
import DocPic from "../../images/DogByCacti.jpg";
import { Card, Container, Row, Col } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import AppNav from "../AppNav/AppNav.js";
import Footer from "../Footer/Footer.js";

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

export default HomePage;  
