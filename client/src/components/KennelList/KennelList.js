import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Alert } from "react-bootstrap";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./KennelList.css";

function KennelList() {
  //set initial state
  const [dogs, setDogs] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }

  //load all the dogs from database
  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <Col>
      {dogs.length ? (
        <Row id="mapRow">
          <Alert show={showConfirm} variant="danger">
            <Alert.Heading>
              This Will Permanantly Delete This Dog From Your Kennel!
            </Alert.Heading>
            <p>Do You Wish To Proceed?</p>
            <hr />
            <Row className="d-flex justify-content-end">
              <Button
                onClick={() => setShowConfirm(false)}
                variant="outline-danger"
              >
                Cancel
              </Button>
            </Row>
          </Alert>
          {dogs.map((dog) => (
            <div key={dog._id} className="card-deck">
              <Col key={dog._id} mb="3">
                <div className="card-box">
                  <Card
                    id="dog-card"
                    key={dog._id}
                    style={{ width: "18rem", text: "center" }}
                  >
                    <Link id="img-link" to={"/dog/" + dog._id}>
                      <img
                        key={dog._id}
                        alt={dog.name}
                        variant="top"
                        src={dog.image}
                        className="card-img-top"
                      />
                    </Link>
                    <Card.Body key={dog._id}>
                      <Card.Title className="dogName text-center" key={dog._id}>
                        {dog.name}
                        {!showConfirm && (
                          <span
                            id="delete-icon"
                            title="Delete From Kennel"
                            onClick={() => setShowConfirm(true)}
                          >
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                            ></FontAwesomeIcon>
                          </span>
                        )}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </div>
          ))}
        </Row>
      ) : (
        <Row className="row justify-content-center">
          <Col className="text-center">
            <h3 id="empty-kennel">
              You have not added any dogs to your kennel yet!
            </h3>
          </Col>
        </Row>
      )}
    </Col>
  );
}

export default KennelList;
