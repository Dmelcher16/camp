import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import { Label, Input, Select, FormBtn } from "./createExerciseForm";
import API from "../../utils/exerciseAPI";
import { useHistory } from "react-router-dom";

export default function ExerciseForm() {
  const [exercises, setExercises] = useState([]); // eslint-disable-line
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

  const history = useHistory();

  const exerciseTypeSelect = document.querySelector("#type");
  const leashTrainingForm = document.querySelector(".leash-training");
  const sitStayForm = document.querySelector(".sit-stay-form");
  const commandsForm = document.querySelector(".commands-form");
  const chewingForm = document.querySelector(".chewing");
  const pottyForm = document.querySelector(".potty-form");

  useEffect(() => {
    loadDogExercises();
  }, []);

  function loadDogExercises() {
    API.getExercises()
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateExercise({ ...createExercise, [name]: value });
  }
  console.log(createExercise);

  function handleExerciseChange(event) {
    const exerciseType = event.target.value;

    if (exerciseType === "Sit/Stay") {
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
    } else {
      pottyForm.classList.add("d-none");
      sitStayForm.classList.add("d-none");
      leashTrainingForm.classList.add("d-none");
      commandsForm.classList.add("d-none");
      chewingForm.classList.add("d-none");
    }
  }

  if (exerciseTypeSelect) {
    exerciseTypeSelect.addEventListener("change", handleExerciseChange);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
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
        .then(history.push("/home"))
        // .then((res) => loadDogExercises())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="FormPageImg">
      <AppNav />
      <h1>Add Your Exercises!</h1>
      <Row className="justify-content-center">
        <Col md="6">
          <Container fluid className="form-container">
            <form>
              <div>
                <Label>Exercise:</Label>
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
                <Label>Commands Successfully Completed:</Label>
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
              <FormBtn
                disabled={
                  !(
                    createExercise.exercises ??
                    createExercise.leashDuration ??
                    createExercise.leashPullDuration ??
                    createExercise.sitStayAttempts ??
                    createExercise.sitStaySuccess ??
                    createExercise.commandsAttempted ??
                    createExercise.commandsCompleted ??
                    createExercise.chewing ??
                    createExercise.numPottyAccidents ??
                    createExercise.numPottySuccesses
                  )
                }
                onClick={handleFormSubmit}
              >
                Complete
              </FormBtn>
            </form>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
