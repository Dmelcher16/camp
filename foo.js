const mongoose = require("mongoose");
const db = require("./models");

// const { db } = require("./models/Exercises");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campK9");

// db.Dog.create({
//   name: "DOG",
//   breed: "Husky",
//   age: "2",
//   ownerFirstName: "John",
//   ownerLastName: "McEnroe",
//   trainFocus: ["sit", "leash", "stay"],
// }).then((dbDog) => console.log(dbDog));

db.Exercises.create({
  Name: "Stay/Sit",
  leashDuration: "10",
  leashPullDuration: "2",
  sitStayAttempts: "5",
  sitStaySuccess: 4,
  commandsAttempted: 6,
  commandsCompleted: 3,
  chewing: 1,
  numPottyAccidents: 2,
  numPottySuccesses: 4,
}).then((dbExercises) => console.log(dbExercises))
