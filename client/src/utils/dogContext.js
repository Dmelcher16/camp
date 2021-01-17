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
  loadDog: () => {}
});

export default DogContext;