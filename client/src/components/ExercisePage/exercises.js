import React, { useEffect, useState } from "react";
// import "../FormPage/FormPage.css";
import { Col, Row, Container } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import { Label, Input, Select, FormBtn } from "./createExerciseForm";
import API from "../../utils/exerciseAPI";

export default function ExercisePage() {
  const [dogs, setExercises] = useState([]); 
  const [createExercise, setCreateExercise] = useState({
    Exercises: "",
    leashDuration: "",
    leashPullDuration: "",
    sitStayAttempts: "",
    sitStaySuccess: "",
    commandsAttempted: "",
    commandsCompleted: "",
    chewing: "",
    numPottyAccidents: "",
    numPottySuccesses: ""
  });
  

  useEffect(() => {
    loadDogExercises();
   
  }, []);

  function loadDogExercises() {
    API.getExercises()
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err))
  }

  

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateExercise({ ...createExercise, [name]: value });
  }
  console.log(createExercise);

  // function handleBreedChange(event) {
  //   const {name, value} = event.target;

  // }

  function handleFormSubmit(event){
    event.preventDefault();
    if (createExercise.Exercises && createExercise.leashDuration && createExercise.leashPullDuration && createExercise.sitStayAttempts && createExercise.sitStaySuccess && createExercise.commandsAttempted && createExercise.commandsCompleted && createExercise.chewing && createExercise.numPottyAccidents && createExercise.numPottySuccesses) {
      API.addExercise({
        Exercises: createExercise.Exercises,
        leashDuration: createExercise.leashDuration,
        leashPullDuration: createExercise.leashPullDuration,
        sitStayAttempts: createExercise.sitStayAttempts,
        sitStaySuccess: createExercise.sitStaySuccess,
        commandsAttempted: createExercise.commandsAttempted,
        commandsCompleted: createExercise.commandsCompleted,
        chewing: createExercise.chewing,
        numPottyAccidents: createExercise.numPottyAccidents,
        numPottySuccesses: createExercise.numPottySuccesses
      })
      .then(alert(`${createExercise.Exercise} has been added to your list!`))
      .then((res) => loadDogExercises())
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className="FormPageImg">
      <AppNav />
      <h1>Add your exercises!</h1>
      <Row>
        <Col md="6">
          <Container fluid>

          <form>
            <Label>Exercise:</Label>
            <Select
              onChange={handleInputChange}
              value={createExercise.Exercises}
              name="Exercises"
              placeholder="Exercise Name (required)"
            />
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
            <Label>Commands Attempted:</Label>
            <Input
              onChange={handleInputChange}
              value={createExercise.commandsAttempted}
              name="commandsAttempted"
              placeholder="Number of commands attempted (Required)"
            />
            <Label>Commands Completed:</Label>
            <Input
              onChange={handleInputChange}
              value={createExercise.commandsCompleted}
              name="commandsCompleted"
              placeholder="Number of commands completed (Required)"
            />
            <Label>Chewing:</Label>
            <Input
              onChange={handleInputChange}
              value={createExercise.chewing}
              name="chewing"
              placeholder="Number of items chewed up today (Required)"
            />
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
            <FormBtn
              disabled={
                !(
                    createExercise.Exercises &&
                    createExercise.leashDuration &&
                    createExercise.leashPullDuration &&
                    createExercise.sitStayAttempts &&
                    createExercise.sitStaySuccess &&
                    createExercise.commandsAttempted &&
                    createExercise.commandsCompleted &&
                    createExercise.chewing &&
                    createExercise.numPottyAccidents &&
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
