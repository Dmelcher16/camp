const db = require("../models/Exercises");

//defining methods for Exercises Controller
module.exports = {
  findAll: function (req, res) {
    db.Exercises.find(req.query)
      .sort({ day: -1 })
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Exercises.find(req.params.id)
      .then((exercise) => res.json(exercise))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Exercises.create(req.body)
      .then((exercise) => res.json(exercise))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Exercises.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((exercise) => res.json(exercise))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Exercises.findById({ _id: req.params.id })
      .then((exercises) => exercises.remove())
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(422).json(err));
  },
};
