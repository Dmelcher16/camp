import React, { useEffect, useState } from "react";
// import "./FormPage.css";
import { Col, Row, Container } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import { Label, Input, Select, FormBtn } from "./createExerciseForm";
import API from "../../utils/exerciseAPI";

export default function ExercisePage() {
  const [dogs, setDogs] = useState([]); 
  const [createDog, setCreateDog] = useState({});
  

  useEffect(() => {
    loadDogs();
   
  }, []);

  function loadDogs() {
    API.getDogs()
      .then((res) => setDogs(res.data))
      .catch((err) => console.log(err))
  }

  

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateDog({ ...createDog, [name]: value });
  }
  console.log(createDog);

  // function handleBreedChange(event) {
  //   const {name, value} = event.target;

  // }

  function handleFormSubmit(event){
    event.preventDefault();
    if (createDog.name && createDog.age && createDog.breed && createDog.ownerFirstName && createDog.ownerLastName) {
      API.addDog({
        name: createDog.name,
        age: createDog.age,
        breed: createDog.breed,
        ownerFirstName: createDog.ownerFirstName,
        ownerLastName: createDog.ownerLastName
      })
      .then(alert(`${createDog.name} has been added to your kennel!`))
      .then((res) => loadDogs())
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
              name="Exercise"
              placeholder="Exercise Name (required)"
            />
            <Label>Walk Time:</Label>
            <Input
              onChange={handleInputChange}
              name="leashDuration"
              placeholder="Length of walk in minutes (required)"
            />
            <Label>Leash Pulls:</Label>
            <Input
              onChange={handleInputChange}
              name="leashPullDuration"
              placeholder="Length of time spent pulling in minutes (required)"
            />
            <Label>Sit/Stay attempts:</Label>
            <Input
              onChange={handleInputChange}
              name="sitStayAttempts"
              placeholder="Number of attempted sit/stay commands (Required)"
            />
            <Label>Sit/stay Successes:</Label>
            <Input
              onChange={handleInputChange}
              name="sitStaySuccess"
              placeholder="Number of times successfully sit/stayed (Required)"
            />
            <Label>Commands Attempted:</Label>
            <Input
              onChange={handleInputChange}
              name="commandsAttempted"
              placeholder="Number of commands attempted (Required)"
            />
            <Label>Commands Completed:</Label>
            <Input
              onChange={handleInputChange}
              name="commandsCompleted"
              placeholder="Number of commands completed (Required)"
            />
            <Label>Chewing:</Label>
            <Input
              onChange={handleInputChange}
              name="chewing"
              placeholder="Number of items chewed up today (Required)"
            />
            <Label>Potty Accidents:</Label>
            <Input
              onChange={handleInputChange}
              name="numPottyAccidents"
              placeholder="Number of accidents today (Required)"
            />
            <Label>Owner's Last Name:</Label>
            <Input
              onChange={handleInputChange}
              name="numPottySuccesses"
              placeholder="Number of successful potty breaks (Required)"
            />
            <FormBtn
              disabled={
                !(
                  createDog.name &&
                  createDog.age &&
                  createDog.breed &&
                  createDog.ownerFirstName &&
                  createDog.ownerLastName
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
