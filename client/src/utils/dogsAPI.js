import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getDogOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images/random");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
