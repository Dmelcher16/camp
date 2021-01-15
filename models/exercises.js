const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todaysDate = Date.now();
const today = new Date(todaysDate);

const exerciseSchema = new Schema({
  day: {
    type: String,
    default: today.toDateString(),
  },
  exercises: {
    type: String,
    array: [
      "Stay/Sit",
      "Leash Training",
      "Completed Commands",
      "Chewing/Biting",
      "Potty Training",
    ],
    required: "Name of excercise is required",
  },
  leashDuration: {
    type: Number,
    default: 0,
  },
  leashPullDuration: {
    type: Number,
    default: 0,
  },
  sitStayAttempts: {
    type: Number,
    default: 0,
  },
  sitStaySuccess: {
    type: Number,
    default: 0,
  },
  commandsAttempted: {
    type: Number,
    default: 0,
  },

  commandsCompleted: {
    type: Number,
    default: 0,
  },
  chewing: {
    type: Number,
    default: 0,
  },
  numPottyAccidents: {
    type: Number,
    default: 0,
  },
  numPottySuccesses: {
    type: Number,
    default: 0,
  },
  dog: {
    type: Schema.Types.ObjectId,
    ref: "Dog",
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
