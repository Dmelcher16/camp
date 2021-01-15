import React from "react";

const DogContext = React.createContext({
  age: "",
  breed: "",
  exercises: [],
  image: "",
  name: "",
  ownerFirstName: "",
  ownerLastName: "",
  startDate: "",
  _id: "",
});

export default DogContext;