import axios from "axios";

export default {
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