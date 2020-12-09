import React, { useEffect } from "react";
import { Col, Row, CardGroup, Card } from "react-bootstrap";
import API from "../../utils/API";
import { LOADING, REMOVE_DOG, UPDATE_DOGS } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import "./KennelList.css";

function KennelList() {
  //set initial state
  const [state, dispatch] = useStoreContext();
  // const [dogs, setDogs] = useState([]);

  
  const removeDogs = (id) => {
    API.deleteDog(id)
    .then(() => {
      dispatch({
        type: REMOVE_DOG,
        _id: id,
      });
    })
    .catch((err) => console.log(err));
  };
  
  const loadDogs = () => {
    dispatch({ type: LOADING });
    API.getDogs()
      .then((res) => {
        dispatch({
          type: UPDATE_DOGS,
          dogs: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  //load all the dogs from database
  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <Col>
      {state.dogs.length ? (
        <CardGroup>
          <Row id="mapRow">
            {state.dogs.map((dog) => (
              <div key={dog._id} className="card-deck">
                <Col key={dog._id} mb="3">
                  <Card
                    key={dog._id}
                    style={{ width: "18rem", text: "center" }}
                  >
                    <Link to={"/dog/" + dog._id}>
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
                      </Card.Title>
                      {/* <Link className="cardLink" to="/exercise">
                              Add daily exercises
                            </Link>
                            <br></br>
                            <Link className="cardLink" to="/chart">
                              View progress
                            </Link> */}
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </CardGroup>
      ) : (
        <Row className="row justify-content-center">
          <Col className="text-center">
            <h3 id="empty-kennel">You have not added any dogs to your kennel yet!</h3>
          </Col>
        </Row>
      )}
    </Col>
  );
}

export default KennelList;
