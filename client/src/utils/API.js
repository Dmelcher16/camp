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
  //updates dog by id
  updateDog: function (id) {
    return axios.put("/api/dogs" + id);
  },
  //deletes dog by id
  deleteDog: function (id) {
    return axios.delete("/api/dogs/" + id);
  },
  //saves dog to database
  addDog: function (dogData) {
    return axios.post("/api/dogs", dogData);
  },
};
