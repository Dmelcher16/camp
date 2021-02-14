import React, { useState, useEffect } from "react";
import { Container, Button, Form, Spinner } from "react-bootstrap";
import {
  Label,
  Input,
  Select,
} from "../../components/CreateDogFormInputs/CreateDogFormInputs";
import bsCustomFileInput from "bs-custom-file-input";
import API from "../../utils/API";
import "./CreateDogForm.css";
import "../AddDogPage/AddDogPage.css"

export default function CreateDogForm() {
  //setting initial state
  const [createDog, setCreateDog] = useState({});
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bsCustomFileInput.init();

    if (url) {
      API.addDog({
        name: createDog.name,
        age: createDog.age,
        breed: createDog.breed,
        ownerFirstName: createDog.ownerFirstName,
        ownerLastName: createDog.ownerLastName,
        image: url,
        exercises: [],
      })
        .then(() => setLoading(false))
        .then(alert(`${createDog.name} has been added to your kennel!`))

        .catch((err) => console.log(err));
    }
    console.log(loading);
    // eslint-disable-next-line
  }, [
    createDog.age,
    createDog.breed,
    createDog.name,
    createDog.ownerFirstName,
    createDog.ownerLastName,
    createDog.image,
    url,
    loading,
  ]);

  const addDog = (e) => {
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
      .then(setLoading(true))
      .catch((err) => {
        console.log(err);
      });
  };

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setCreateDog({ ...createDog, [name]: value });
  }

  return (
    <div className="sidebar new-dog-form" md="3">
      <h1 id="form-title">ADD A DOG</h1>
      <Container className="form-container">
        <form className="new-dog-form">
          <Label>Name:</Label>
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="Name (required)"
          />
          <Label>Age (months):</Label>
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
          <div className="form-group-inline custom-file">
            <Form.File
              className="custom-file-label"
              id="image"
              name="image"
              label="Choose File..."
              onChange={(e) => setImage(e.target.files[0])}
              custom
            />
            {/* <label className="custom-file-label" htmlFor="image">
                      Choose File...
                    </label> */}
          </div>
          <div className="form-group-inline">
            <Button
              className="form-btn"
              variant="success"
              disabled={
                !(
                  createDog.name &&
                  createDog.age &&
                  createDog.breed &&
                  createDog.ownerFirstName &&
                  createDog.ownerLastName &&
                  image
                )
              }
              onClick={addDog}
            >
              Submit
            </Button>

            {/* <Button className="form-btn" variant="danger" id="cancel-add-dog">
              Cancel
            </Button> */}
            {loading ? (
              <Spinner animation="border" role="status" variant="success">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : null}
          </div>
        </form>
      </Container>
    </div>
  );
}
