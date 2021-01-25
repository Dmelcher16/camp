const db = require("../models");

//defining methods for the dogsController
module.exports = {
  findAll: function (req, res) {
    db.Dog.find(req.query)
      .sort({ name: 1 })
      .then((dbDogs) => res.json(dbDogs))
      .catch((err) => res.status(422).json(err));
  },
  // findById: function (req, res) {
  //   db.Dog.findById({ _id: req.params.id })
  //     .then((dbDog) => res.json(dbDog))
  //     .catch((err) => res.status(422).json(err));
  // },
  //TODO:  Add property to get all exercises associated with an individual dog
  findById: function (req, res) {
    db.Dog.findById({ _id: req.params.id })
      .populate("exercises")
      .exec(function (err, dbDog) {
        console.log(dbDog.exercises)
        if (err) {
          return console.error(err);
        }
        return res.json(dbDog);
      });
  },
  create: function (req, res) {
    db.Dog.create(req.body)
      .then((dbDog) => res.json(dbDog))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Dog.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbDog) => res.json(dbDog))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Dog.findById({ _id: req.params.id })
      .then((dbDogs) => dbDogs.remove())
      .then((dbDogs) => res.json(dbDogs))
      .catch((err) => res.status(422).json(err));
  },
};
