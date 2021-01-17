const db = require("../models");

//defining methods for Exercises Controller
module.exports = {
  findAll: function (req, res) {
    db.Exercises.find(req.query)
      .sort({ day: -1 })
      .then((dbExercises) => res.json(dbExercises))
      .catch((err) => res.status(422).json(err));
  },
  findByDogID: function (req, res) {
    db.Exercises.find({ dog: req.params.id })
      .then((dbExercise) => res.json(dbExercise))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Exercises.find(req.params.id)
      .then((dbExercise) => res.json(dbExercise))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Exercises.create(req.body)
      .then(function (dbExercise) {
        return db.Dog.findOneAndUpdate(
          // _id: { exercises: dog }
          { _id: dbExercise.dog },
          { $push: { exercises: dbExercise._id } },
          { new: true }
        );
      })
      .then(function (dbDog) {
        res.json(dbDog);
        // console.log(dbDog);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Exercises.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbExercise) => res.json(dbExercise))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Exercises.findById({ _id: req.params.id })
      .then((dbExercises) => dbExercises.remove())
      .then((dbExercises) => res.json(dbExercises))
      .catch((err) => res.status(422).json(err));
  },
};
