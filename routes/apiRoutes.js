const router = require("express").Router();
const Workout = require("../models/Workout.js");
const mongoose = require('mongoose');

// this function the total duration of each workout from the past seven workouts on the stats page.  $addFields
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "exercise.duration" }
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

router.post("/api/workouts/", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(
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
router.get("/api/workouts", (req, res) => {
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