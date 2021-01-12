import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import {
  Label,
  Input,
  Select,
  FormBtn,
} from "../../components/CreateExerciseForm/CreateExerciseForm";
import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";
import "./DogPage.css";

function DogPage() {
  //set iniitial state
  const [dog, setDog] = useState({});
  const [exercises, setExercises] = useState([]);
  const [show, setShow] = useState(false);
  const cancelBtn = document.querySelector(".cancel-btn");
  const addExerciseBtn = document.querySelector(".add-exercise-btn");
  const [createExercise, setCreateExercise] = useState({
    dog: "",
    exercises: "",
    leashDuration: "",
    leashPullDuration: "",
    sitStayAttempts: "",
    sitStaySuccess: "",
    commandsAttempted: "",
    commandsCompleted: "",
    chewing: "",
    numPottyAccidents: "",
    numPottySuccesses: "",
  });

  //defining inputs of exercise form
  const exerciseTypeSelect = document.querySelector("#type");
  const leashTrainingForm = document.querySelector(".leash-training");
  const sitStayForm = document.querySelector(".sit-stay-form");
  const commandsForm = document.querySelector(".commands-form");
  const chewingForm = document.querySelector(".chewing");
  const pottyForm = document.querySelector(".potty-form");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateExercise({ ...createExercise, [name]: value });
  }
  console.log(createExercise);

  function handleButtonShow(event) {
    console.log(this.state.show);
    let show = event.target.value;
    if (show === true) {
      cancelBtn.classList.remove("d-none");
      addExerciseBtn.classlist.add("d-none");
    }
  }

  function handleExerciseChange(event) {
    const exerciseType = event.target.value;

    if (exerciseType === "") {
      pottyForm.classList.add("d-none");
      sitStayForm.classList.add("d-none");
      leashTrainingForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
    } else if (exerciseType === "Sit/Stay") {
      sitStayForm.classList.remove("d-none");
      leashTrainingForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
      pottyForm.classList.add("d-none");
    } else if (exerciseType === "Leash Training") {
      leashTrainingForm.classList.remove("d-none");
      sitStayForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
      pottyForm.classList.add("d-none");
    } else if (exerciseType === "Commands") {
      commandsForm.classList.remove("d-none");
      sitStayForm.classList.add("d-none");
      leashTrainingForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
      pottyForm.classList.add("d-none");
    } else if (exerciseType === "Chewing") {
      chewingForm.classList.remove("d-none");
      sitStayForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      pottyForm.classList.add("d-none");
      leashTrainingForm.classList.add("d-none");
    } else if (exerciseType === "Potty Training") {
      pottyForm.classList.remove("d-none");
      sitStayForm.classList.add("d-none");
      leashTrainingForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
    }
  }

  if (exerciseTypeSelect) {
    exerciseTypeSelect.addEventListener("change", handleExerciseChange);
  }

  function clearExerciseForm() {
    setCreateExercise({
      dog: "",
      exercises: "",
      leashDuration: "",
      leashPullDuration: "",
      sitStayAttempts: "",
      sitStaySuccess: "",
      commandsAttempted: "",
      commandsCompleted: "",
      chewing: "",
      numPottyAccidents: "",
      numPottySuccesses: "",
    });
    pottyForm.classList.add("d-none");
    sitStayForm.classList.add("d-none");
    leashTrainingForm.classList.add("d-none");
    commandsForm.classList.add("d-none");
    chewingForm.classList.add("d-none");
  }

  //saves newly created exercise data to exercise db and current dog's exercises array
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      dog._id ||
      createExercise.exercises ||
      createExercise.leashDuration ||
      createExercise.leashPullDuration ||
      createExercise.sitStayAttempts ||
      createExercise.sitStaySuccess ||
      createExercise.commandsAttempted ||
      createExercise.commandsCompleted ||
      createExercise.chewing ||
      createExercise.numPottyAccidents ||
      createExercise.numPottySuccesses
    ) {
      API.addExercise({
        dog: dog._id,
        exercises: createExercise.exercises,
        leashDuration: createExercise.leashDuration,
        leashPullDuration: createExercise.leashPullDuration,
        sitStayAttempts: createExercise.sitStayAttempts,
        sitStaySuccess: createExercise.sitStaySuccess,
        commandsAttempted: createExercise.commandsAttempted,
        commandsCompleted: createExercise.commandsCompleted,
        chewing: createExercise.chewing,
        numPottyAccidents: createExercise.numPottyAccidents,
        numPottySuccesses: createExercise.numPottySuccesses,
      })
        .then(alert(`${createExercise.exercises} has been added to your list!`))
        .then(() => {
          clearExerciseForm();
          setShow(false);
          loadDog();
        })
        .catch((err) => console.log(err));
    }
  }

  const { id } = useParams();
  const loadDog = useCallback(() => {
    API.getDog(id, exercises)
      .then(function (res) {
        setDog(res.data);
      })
      .catch((err) => console.log(err));
    return setExercises(dog.exercises);
  }, [id, exercises]);

  //when component mounts get dog with _id of props.match.params.id
  useEffect(() => {
    loadDog();
  }, [loadDog]);
  console.log(dog);
  console.log(dog.exercises);

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
                        {/* {show ? <ExerciseForm onSubmit={hideForm} /> : null} */}
                        {show ? (
                          <Col className="exercise-form">
                            <Container
                              fluid
                              className="form-container"
                              name="dog"
                              value={dog._id}
                            >
                              <form>
                                <div>
                                  <Label id="exercise-label">Exercise:</Label>
                                  <Select
                                    onChange={handleInputChange}
                                    value={createExercise.exercises}
                                    name="exercises"
                                    placeholder="Exercise Name (required)"
                                    id="type"
                                  />
                                </div>
                                <div className="d-none leash-training">
                                  <Label>Walk Time:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.leashDuration}
                                    name="leashDuration"
                                    placeholder="Length of walk in minutes (required)"
                                  />
                                  <Label>Leash Pulls:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.leashPullDuration}
                                    name="leashPullDuration"
                                    placeholder="Length of time spent pulling in minutes (required)"
                                  />
                                </div>
                                <div className="d-none sit-stay-form">
                                  <Label>Sit/Stay attempts:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.sitStayAttempts}
                                    name="sitStayAttempts"
                                    placeholder="Number of attempted sit/stay commands (Required)"
                                  />
                                  <Label>Sit/stay Successes:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.sitStaySuccess}
                                    name="sitStaySuccess"
                                    placeholder="Number of times successfully sit/stayed (Required)"
                                  />
                                </div>
                                <div className="d-none commands-form">
                                  <Label>Commands Attempted:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.commandsAttempted}
                                    name="commandsAttempted"
                                    placeholder="Number of commands attempted (Required)"
                                  />
                                  <Label>
                                    Commands Successfully Completed:
                                  </Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.commandsCompleted}
                                    name="commandsCompleted"
                                    placeholder="Number of commands completed (Required)"
                                  />
                                </div>
                                <div className="d-none chewing">
                                  <Label>Chewing:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.chewing}
                                    name="chewing"
                                    placeholder="Number of items chewed up today (Required)"
                                  />
                                </div>
                                <div className="d-none potty-form">
                                  <Label>Potty Accidents:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.numPottyAccidents}
                                    name="numPottyAccidents"
                                    placeholder="Number of accidents today (Required)"
                                  />
                                  <Label>Successful Potty Breaks:</Label>
                                  <Input
                                    onChange={handleInputChange}
                                    value={createExercise.numPottySuccesses}
                                    name="numPottySuccesses"
                                    placeholder="Number of successful potty breaks (Required)"
                                  />
                                </div>
                                <div className="mb-2">
                                  <FormBtn
                                    id="exercise-submit-btn"
                                    disabled={
                                      !(
                                        createExercise.leashDuration ||
                                        createExercise.leashPullDuration ||
                                        createExercise.sitStayAttempts ||
                                        createExercise.sitStaySuccess ||
                                        createExercise.commandsAttempted ||
                                        createExercise.commandsCompleted ||
                                        createExercise.chewing ||
                                        createExercise.numPottyAccidents ||
                                        createExercise.numPottySuccesses
                                      )
                                    }
                                    variant="outline-success"
                                    onClick={handleFormSubmit}
                                  >
                                    Submit
                                  </FormBtn>
                                  <FormBtn
                                    className="cancel-btn"
                                    variant="danger"
                                    onClick={() => {
                                      setShow(false);
                                    }}
                                  >
                                    Cancel
                                  </FormBtn>
                                </div>
                              </form>
                            </Container>
                          </Col>
                        ) : null}
                        {show ? null : (
                          <Button
                            id="add-exercise-btn"
                            variant="outline-success"
                            onClick={() => {
                              setShow(true);
                            }}
                            onChange={handleButtonShow}
                          >
                            + Add Exercise
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row></Row>
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
