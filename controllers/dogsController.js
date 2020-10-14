const db = require("../models");

//defining methods for the dogsController
module.exports = {
  findAll: function (req, res) {
    db.Dog.find(req.query)
      .sort({ name: 1 })
      .then((dogs) => res.json(dogs))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Dog.findById(req.params.id)
      .then((dog) => res.json(dog))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Dog.create(req.body)
      .then((dog) => res.json(dog))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Dog.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dog) => res.json(dog))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Dog.findById({ _id: req.params.id })
      .then((dogs) => dogs.remove())
      .then((dogs) => res.json(dogs))
      .catch((err) => res.status(422).json(err));
  },
};
