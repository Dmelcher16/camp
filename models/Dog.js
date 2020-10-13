const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "You must enter a name for the dog",
  },
  breed: {
    type: String,
    trim: true,
    required:
      "You must select a breed.  If mixed please choose the dominant breed of the mix.",
  },
  age: {
    type: Number,
    max: [30, "Please double-check you entered the correct age."],
    default: 1,
  },
  ownerFirstName: {
    type: String,
    trim: true,
    required: "Please enter the first name of the owner",
  },
  ownerLastName: {
    type: String,
    trim: true,
    required: "Last Name is Required",
  },
  trainFocus: [
    {
      type: String,
      required: true,
    },
  ],

  ownerFullName: String,
});

DogSchema.methods.setOwnerFullName = function () {
  this.ownerFullName = `${this.ownerFirstName} ${this.ownerLastName}`;
  console.log(this.ownerFullName)
  return this.ownerFullName;
};

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;
