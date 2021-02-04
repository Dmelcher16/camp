import React, { useEffect, useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./KennelList.css";

function KennelList() {
  //set initial state
  const [dogs, setDogs] = useState([]);

  // Loads all dogs and sets them to dogs
  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err));
  }

  //deletes selected dog from db based on id, then reloads dogs from db
  function deleteDog(id) {
    API.deleteDog(id)
      .then((res) => loadDogs())
      .catch((err) => console.log(err));
  }

  // Load all dogs and store them with setDogs
  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <Col>
      {dogs.length ? (
        <Row id="mapRow">
          {dogs.map((dog) => (
            <div key={dog._id} className="card-deck">
              <Col key={dog._id} mb="3">
                <div className="card-box">
                  <Card
                    id="dog-card"
                    key={dog._id}
                    style={{ width: "15rem", text: "center" }}
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
                    <span
                      id="delete-icon"
                      title={"Delete " + dog.name + " From Kennel"}
                      onClick={() => {
                        if (
                          window.confirm(
                            "This will permanently delete all data associated with " + dog.name + " from your kennel.  Do you with to proceed?" 
                          )
                        )
                          deleteDog(dog._id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </span>
                    <Link id="img-link" to={"/dog/" + dog._id}>
                      <Card.Body className="kennel-card-body" key={dog._id}>
                        <Card.Title
                          className="dogName text-center"
                          key={dog._id}
                        >
                          {dog.name}
                        </Card.Title>
                      </Card.Body>
                    </Link>
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
