
const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campK9");

const userEmail = Document.querySelector("#userEmail")

db.User.create({
    email: userEmail,
  }).then((dbUser) => console.log(dbUser));