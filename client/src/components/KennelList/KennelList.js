import React, { useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import API from "../../utils/API";
import KennelContext from "../../utils/kennelContext";
// import useIsMountedRef from "../../components/IsMountedRefHook/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./KennelList.css";

function KennelList() {
  //set initial state
  const { dogs, loadDogs } = useContext(KennelContext);

  //deletes selected dog from db based on id, then reloads dogs from db
  function deleteDog(id) {
    API.deleteDog(id)
      .then((res) => loadDogs())
      .catch((err) => console.log(err));
  }

  console.log(dogs);

  return (
    <Col>
      {dogs.length ? (
        <Row id="map-row" className="justify-content-center">
          {dogs.map((dog) => (
            <div key={dog._id} className="card-deck">
              <Col key={dog._id} mb="3">
                <div className="card-box">
                  <Card
                    id="dog-card"
                    key={dog._id}
                    style={{ width: "16rem", text: "center" }}
                  >
                    <Link id="img-link" to={"/dog/" + dog._id}>
                      <Card.Img
                        id={dog.name}
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
                            "This will permanently delete all data associated with " +
                              dog.name +
                              " from your kennel.  Do you with to proceed?"
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
                          className="dog-name text-center"
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
