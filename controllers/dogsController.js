const db = require("../models");

//defining methods for the dogsController
module.exports = {
  findAll: function(req,res){
    db.Dog.find(req.query).sort({name: 1}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
  }
}