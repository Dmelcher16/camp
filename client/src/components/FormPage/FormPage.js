import React, { useState, useEffect } from "react";
import "./FormPage.css";
import { Col, Row, Container } from "react-bootstrap";
import AppNav from "../AppNav/AppNav.js";
import { Label, Input, Select, FormBtn } from "../CreateDogForm/CreateDogForm";
import API from "../../utils/API";
import {useHistory} from "react-router-dom";



export default function FormPage() {
  //setting initial state
  const [createDog, setCreateDog] = useState({});
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

//  use Effect(() => {
//    if (url){
//      fetch("/createDog")
//    }
//  })




  const dogDetails = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "campk9");
    data.append("cloud_name", "robbiek");
    fetch("https://api.cloudinary.com/v1_1/robbiek/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateDog({ ...createDog, [name]: value });
  }
  

  //will handle creation of new dog to db
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      createDog.name &&
      createDog.age &&
      createDog.breed &&
      createDog.ownerFirstName &&
      createDog.ownerLastName &&
      createDog.image
    ) {
      API.addDog({
        name: createDog.name,
        age: createDog.age,
        breed: createDog.breed,
        ownerFirstName: createDog.ownerFirstName,
        ownerLastName: createDog.ownerLastName,
        image: createDog.image,
      })
        .then(alert(`${createDog.name} has been added to your kennel!`))

        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="FormPageImg">
      <AppNav />
      <Container fluid>
        <h1>Welcome Tucker!!</h1>
        <Row>
          <Col md="6">
            <Container className="form-container">
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
                <Select onChange={handleInputChange} name="breed" />
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
                <Label>Image:</Label>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
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
                  onClick={dogDetails}
                >
                  Add Dog
                </FormBtn>
              </form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
