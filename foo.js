const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campK9");

db.User.create({
  firstName: "Rob",
  lastName: "Kellen",
  email: "rob@email.com",
  password: "abbazabba",
}).then((dbUser) => console.log(dbUser));

db.Dog.create({
  name: "DOG",
  breed: "Husky",
  age: "2",
  ownerFirstName: "John",
  ownerLastName: "McEnroe",
  trainFocus: ["sit", "leash", "stay"],
}).then((dbDog) => console.log(dbDog));
