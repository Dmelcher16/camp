import React from "react";

import Breeds from "../Breeds/Breeds";

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
      <select className="form-control" default="Select..." {...props}>
        <option>Select...</option>
        <Breeds />
      </select>
    </div>
  );
}

export function FormBtn(props) {
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
