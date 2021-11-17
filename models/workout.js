const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise name is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required",
      },
      duration: {
        type: Number,
        
      },
      weight: {
        type: Number,
        
      },
      reps: {
        type: Number,
        
      },
      set: {
        type: Number,
        
      },
      distance: {
        type: Number,
        
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
