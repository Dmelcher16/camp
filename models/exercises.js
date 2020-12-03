const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  dog: {
    type: Schema.Types.ObjectId,
    ref: "Dog"
  },
  day: {
    type: Date,
    default: Date.now,
  },
  // type: {
  //   type: String,
  //   trim: true,
  //   enum: [
  //     "Stay/Sit",
  //     "Leash Training",
  //     "Completed Commands",
  //     "Chewing/Biting",
  //     "Potty Training",
  //   ],
  //   required: "Type of excercise is required",
  // },
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
});

const Exercise = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercise;
