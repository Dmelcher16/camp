const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todaysDate = Date.now();
const today = new Date(todaysDate);

const DogSchema = new Schema({
  startDate: {
    type: String,
    default: today.toLocaleDateString(),
  },
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
    required: "Please enter the last name of the owner",
  },
  image: {
    type: String,
    default:
      "https://www.zurn.com/media-library/images-(1)/product_400x400/image-placeholder-400x400?maxsidesize=330",
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],

  ownerFullName: String,
});

DogSchema.methods.setOwnerFullName = function () {
  this.ownerFullName = `${this.ownerFirstName} ${this.ownerLastName}`;
  console.log(this.ownerFullName);
  return this.ownerFullName;
};

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;
