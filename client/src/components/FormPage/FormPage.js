import React, { useEffect, useState } from "react";
import "./FormPage.css";
import { Col, Row } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import { Label, Input, Select, FormBtn } from "../CreateDogForm/CreateDogForm";
import API from "../../utils/API";

export default function FormPage() {
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
      .then((res) => loadDogs())
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className="FormPageImg">
      <AppNav />
      <h1>Welcome Tucker!!</h1>
      <Row>
        <Col md="8">
          <form>
            <Label>Name:</Label>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            <Label>Age:</Label>
            <Input
              onChange={handleInputChange}
              name="age"
              placeholder="Age (required)"
            />
            <Label>Breed:</Label>
            <Select
              onChange={handleInputChange}
              name="breed"
              placeholder="Breed (required)"
            />
            <Label>Owner's First Name:</Label>
            <Input
              onChange={handleInputChange}
              name="ownerFirstName"
              placeholder="Owner's First Name (Required)"
            />
            <Label>Owner's Last Name:</Label>
            <Input
              onChange={handleInputChange}
              name="ownerLastName"
              placeholder="Owner's Last Name (Required)"
            />
            <FormBtn
              // disabled={
              //   !(
              //     createDog.name &&
              //     createDog.age &&
              //     createDog.breed &&
              //     createDog.ownerFirstName &&
              //     createDog.ownerLastName
              //   )
              // }
              onClick={handleFormSubmit}
            >
              Add Dog
            </FormBtn>
          </form>
        </Col>
      </Row>
    </div>
  );
}


