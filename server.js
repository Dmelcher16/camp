const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

//requiring morgan to use as dev tool
const logger = require("morgan");
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Add routes, both API and view
app.use(routes);

//Connect to Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/campK9", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
