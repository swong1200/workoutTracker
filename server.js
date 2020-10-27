const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// getLastWorkout()
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// addExercise()
app.put("/api/workouts/:id", (req, res) => {
  db.Workout.
});

// createWorkout()
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    // .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    // .catch(err => {
    //   res.json(err);
    // });
});

// getWorkoutsInRange()
app.get("/api/workouts/range", (req, res) => {
  db.Workout.
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});