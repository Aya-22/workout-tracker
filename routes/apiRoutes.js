const router = require("express").Router();
const Workout = require("../models/Workout.js");
const mongoose = require('mongoose');
const db = require("../models");

// this function the total duration of each workout from the past seven workouts on the stats page.  $addFields
router.get("/api/workout/duration", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: exercise.duration }
      }
    }])
    .limit(7)

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  
});

router.post("/api/workout", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workout/:id", ({ body }, res) => {
  db.Workout.findByIdAndUpdate(
  { _id: body.id },
  { exercise: body.exercise},
)
  .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// 
router.get("/api/workout/weight", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;