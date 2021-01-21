const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: 
      {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },

      name: {
        type: String,
        trim: true,
        require: "Enter exercises type",
      },

      duration: {
        type: Number,
        required: "Enter duration",
      },

      weight: {
        type: Number,
      },
    
      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      }
    }
  ]
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercises.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
