import React from "react";
import ExerciseList from "../ExerciseList/ExerciseList";
import { Button } from "react-bootstrap";
import "./CreateExerciseForm.css";

export function Label(props) {
  return (
    <div className="form-group">
      <label className="form-label" {...props} />
    </div>
  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function Select(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
        <option>Choose...</option>
        <ExerciseList />
      </select>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <Button
      {...props}
      style={{ float: "center", marginBottom: 10 }}
      className="btn"
    >
      {props.children}
    </Button>
  );
}
