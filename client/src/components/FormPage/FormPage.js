import React from "react";
import "./FormPage.css";
import { Button, Form, Col, Row } from "react-bootstrap";
import AppNav from '../AppNav/AppNav'
export default function FormPage() {
  return (
    <div className="FormPage">
      <AppNav />
      <h1>Welcome Tucker!!</h1>
      <div className="form-container">
        <Form className="form">
          <h4>Add a dog to Start Your Kennel:</h4>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="8">
              <Form.Control />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="breed">
            <Form.Label column sm="2">
              Breed
            </Form.Label>
            <Col sm="8">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="age">
            <Form.Label column sm="2">
              Age
            </Form.Label>
            <Col sm="3">
              <Form.Control />
            </Col>
            <Form.Label column sm="2">
              Yr(s)
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} controlId="ownername">
            <Form.Label column sm="4">
              Owner's First Name
            </Form.Label>
            <Col sm="8">
              <Form.Control />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="ownerlastname">
            <Form.Label column sm="4">
              Owner's Last Name
            </Form.Label>
            <Col sm="8">
              <Form.Control />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="ownerlastname">
            <Form.Label column sm="8">
              Training Focus (Select All That Apply):
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} controlId="training-choices">
            <Form.Label column sm="12">
            <Button variant="light">Stays/Sits</Button>
            <Button variant="light">Biting/Chewing</Button>
            <Button variant="light">Listening Speed</Button>
            <Button variant="light">Leash Training</Button>
            <Button variant="light">Potty Training</Button>
            </Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
