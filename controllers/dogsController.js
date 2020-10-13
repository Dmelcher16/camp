const db = require("../models");

//defining methods for the dogsController
module.exports = {
  findAll: function (req, res) {
    db.Dog.find(req.query)
      .sort({ name: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req,res){
    db.Dog.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Dog.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req,res) {
    db.Dog.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res){
    db.Dog.findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
