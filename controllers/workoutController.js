// Importing
const express = require("express");
const db = require("../models");

const router = express.Router();

// getLastWorkout()
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// addExercise()
router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findOneAndUpdate({_id: params.id}, {$push: {exercises: body}}, {new: true})
    .then(dbWorkout => {
      console.log(dbWorkout)
        res.json(dbWorkout);

    })
    .catch(err => {
        res.json(err);
    });
  });

// createWorkout()
router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
// getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
  });

// Export routes for server.js to use
module.exports = router;