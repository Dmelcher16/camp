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
  const [updateDog, setUpdateDog] = useState({});

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

  const [show, setShow] = useState(false);

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

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      updateDog._id ||
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
        dog: updateDog._id,
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
        // .then(history.push("/home"))
        .then(clearExerciseForm())
        .catch((err) => console.log(err));
    }
  }

  //when component mounts get dog with _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    API.getDog(id)
      .then((res) => setDog(res.data))
      .catch((err) => console.log(err));  
  }, [id]);
  console.log(dog);



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
                  <Button id="to-kennel" variant="outline-success">
                    <Link id="link-font" to="/">
                      ← Back to Your Kennel
                    </Link>
                  </Button>
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
