const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

const routes = require("./controllers/workoutController");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

// Index Route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exercise Route
app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Stats Route
app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});