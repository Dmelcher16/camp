import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container } from "react-bootstrap";
import {
  Label,
  Input,
  Select,
  FormBtn,
} from "../ExerciseFormInputs/ExerciseFormInputs.js";

import API from "../../utils/API";
import "./ExerciseForm.css";

function ExerciseForm() {
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

  const { id } = useParams();
  useEffect(() => {
    API.getDog(id)
      .then((res) => setUpdateDog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(updateDog._id);

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
        .then(clearExerciseForm())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Col className="exercise-form">
      <Container
        fluid
        className="form-container"
        name="dog"
        value={updateDog._id}
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
            Submit
          </FormBtn>
        </form>
      </Container>
    </Col>
  );
}

export default ExerciseForm;
