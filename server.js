const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;



//requiring morgan to use as dev tool
const logger = require("morgan");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.use(logger("dev"));

//Connect to Mongo Database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/campK9", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)

app.get("*", function (req, res) {
  res.send("Hello!")
})



app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));