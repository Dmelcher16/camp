import axios from "axios";

export default {
  //gets all dogs
  getExercises: function () {
    return axios.get("/api/exercises");
  },
  //gets dog by id
  getExercise: function (id) {
    return axios.get("/api/exercises/" + id);
  },
  //deletes dog by id
  deleteExercise: function (id) {
    return axios.delete("/api/exercises/" + id);
  },
  //saves dog to database
  addExercise: function (exerciseData) {
    return axios.post("/api/exercises", exerciseData);
  },
};