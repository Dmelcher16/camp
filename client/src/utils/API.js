import axios from "axios";

export default {
  //gets all dogs
  getDogs: function () {
    return axios.get("/api/dogs");
  },
  //gets dog by id
  getDog: function (id) {
    return axios.get("/api/dogs/" + id);
  },
  //deletes dog by id
  deleteDog: function (id) {
    return axios.delete("/api/dogs/" + id);
  },
  //saves dog to database
  addDog: function (dogData) {
    return axios.post("/api/dogs", dogData);
  },
  //gets all exercises
  getExercises: function () {
    return axios.get("/api/exercises");
  },
  //gets exercises by id
  getExercise: function (id) {
    return axios.get("/api/exercises/" + id);
  },
  //deletes exercise by id
  deleteExercise: function (id) {
    return axios.delete("/api/exercises/" + id);
  },
  //saves exercise to database
  addExercise: function (exerciseData) {
    return axios.post("/api/exercises", exerciseData);
  }
};
