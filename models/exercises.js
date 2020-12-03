const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
    required: "Duration of leash time is required",
  },
  leashPullDuration: {
    type: Number,
    required: "Time spent pulling on the leash required",
  },
  sitStayAttempts: {
    type: Number,
    required: "Number of attempted sit/stay commands is required",
  },
  sitStaySuccess: {
    type: Number,
    required: "Number of times successfully sit/stayed required",
  },
  commandsAttempted: {
    type: Number,
    required: "Number of commands attempted required",
  },

  commandsCompleted: {
    type: Number,
    required: "Number of commands completed required",
  },
  chewing: {
    type: Number,
    required: "Number of items chewed up today required",
  },
  numPottyAccidents: {
    type: Number,
    required: "Number of accidents today required",
  },
  numPottySuccesses: {
    type: Number,
    required: "Number of successful potty breaks required",
  },
});

const Exercise = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercise;
