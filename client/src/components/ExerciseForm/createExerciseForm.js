import React from "react";
import ExerciseList from "./ExerciseList";
import "./CreateExerciseForm.css";

export default function Label(props) {
  return (
    <div className="form-group">
      <label className="form-label" {...props} />
    </div>
  );
}

export default function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export default function Select(props) {
  return (
    <div className="form-group">
      <select className="form-control" {...props}>
        <option>Choose...</option>
        <ExerciseList />
      </select>
    </div>
  );
}

export default function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "center", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}
