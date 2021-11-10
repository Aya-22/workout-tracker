const router = require("express").Router();
const Workout = require("../models/Workout.js");
const mongoose = require('mongoose');

// this function the total duration of each workout from the past seven workouts on the stats page.  $addFields
router.get("/api/workout/duration", (req, res) => {
  Workout.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: exercise.duration }
      }
    }]);

    .then(res => {
      res.json(res);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  
});

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workout/:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// 
router.get("/api/workout/weight", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;