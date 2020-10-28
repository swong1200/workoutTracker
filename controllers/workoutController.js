const express = require("express");

const router = express.Router();

// Import the model to use its database functions
const db = require("../models");

router.get("/", function(req, res) {

});

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

// Export routes for server.js to use
module.exports = router;