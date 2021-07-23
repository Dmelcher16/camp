import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Button, Form, Spinner } from "react-bootstrap";
import {
  Label,
  Input,
  Select,
} from "../../components/CreateDogFormInputs/CreateDogFormInputs";
import bsCustomFileInput from "bs-custom-file-input";
import API from "../../utils/API";
import "./CreateDogForm.css";
import KennelContext from "../../utils/kennelContext";

const CLOUDINARY_API = process.env.REACT_APP_CLOUDINARY_API;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;

export default function CreateDogForm() {
  //setting initial state
  const [createDog, setCreateDog] = useState({
    name: "",
    age: "",
    breed: "",
    ownerFirstName: "",
    ownerLastName: "",
    image: "",
  });
  const [image, setImage] = useState("");
  const [url, setUrl] = useState();
  const { loadDogs } = useContext(KennelContext);
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
      })
        .then(alert(`${createDog.name} has been added to your kennel!`))
        .then(() =>
          setCreateDog({
            name: "",
            age: "",
            breed: "",
            ownerFirstName: "",
            ownerLastName: "",
            image: [],
          })
        )
        .then(() => setImage(""))
        .then(() => setLoading(false))
        .then(() => loadDogs())
        // .then(setLoading(false))
        .catch((err) => console.log(err));

      setLoading(false);
    }

    // eslint-disable-next-line
  }, [url]);

  function submitDog(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);
    fetch("https://api.cloudinary.com/v1_1/robbiek/image/upload/", {
      method: "post",
      body: data,
      secure: true,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.eager[0].secure_url || data.secure_url);
      })
      .then(setLoading(true))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setCreateDog({ ...createDog, [name]: value });
  }

  return (
    <div className="sidebar new-dog-form" md="3">
      <Row id="sidebar-row" className="justify-content-center">
        <Col id="form-title-col">
          <h3 id="form-title">ADD DOG</h3>
        </Col>
        <Container className="form-container">
          <form className="new-dog-form">
            <div className="form-group-inline">
              <Label>Name:</Label>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
                value={createDog.name}
              />
            </div>
            <div className="form-group-inline">
              <Label>Age (months):</Label>
              <Input
                onChange={handleInputChange}
                name="age"
                placeholder="Age (required)"
                value={createDog.age}
              />
            </div>
            <div className="form-group-inline">
              <Label>Breed:</Label>
              <Select
                onChange={handleInputChange}
                name="breed"
                value={createDog.breed}
              />
            </div>
            <div className="form-group-inline">
              <Label>Owner's First Name:</Label>
              <Input
                onChange={handleInputChange}
                name="ownerFirstName"
                placeholder="Owner's First Name (Required)"
                value={createDog.ownerFirstName}
              />
            </div>
            <div className="form-group-inline">
              <Label>Owner's Last Name:</Label>
              <Input
                onChange={handleInputChange}
                name="ownerLastName"
                placeholder="Owner's Last Name (Required)"
                value={createDog.ownerLastName}
              />
            </div>
            <div className="form-group-inline">
              <Label>Image:</Label>
            </div>
            <div className="form-group-inline custom-file">
              <Form.File
                className="custom-file-label"
                id="image"
                name="image"
                value={createDog.image}
                label="Choose File..."
                onChange={(e) => setImage(e.target.files[0])}
                custom
              />
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
                onClick={submitDog}
              >
                {loading ? (
                  <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Container>
      </Row>
    </div>
  );
}
