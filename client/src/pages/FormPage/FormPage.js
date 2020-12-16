import React, { useState, useEffect } from "react";
import "./FormPage.css";
import { Col, Row, Container } from "react-bootstrap";
import AppNav from "../../components/AppNav/AppNav.js";
import {
  Label,
  Input,
  Select,
  FormBtn,
} from "../../components/CreateDogForm/CreateDogForm";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

export default function FormPage() {
  //setting initial state
  const [createDog, setCreateDog] = useState({});
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();

  //setting hook to push data to db and redirect to homepage upon successful addition
  useEffect(() => {
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
        .then(alert(`${createDog.name} has been added to your kennel!`))
        .then(history.push("/home"))

        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, [
    createDog.age,
    createDog.breed,
    createDog.name,
    createDog.ownerFirstName,
    createDog.ownerLastName,
    createDog.image,
    url,
  ]);

  //uploads image to Cloudinary image database and returns URL for uploaded image.  Sets image URL to specific dog being added.
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
    <div className="FormPageImg">
      <AppNav />
      <Container fluid>
        <h1>Add A Dog To Your Kennel</h1>
        <Row id="formRow">
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
                <div className="form-group-inline">
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
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
                  onClick={addDog}
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
