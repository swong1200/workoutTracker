const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
     type: {
         type: String,
         required: "Exercise Type is Required"
     },
     name: {
         type: String,
         trim: true,
         required: "Name of Exercise is Required"
     },
     duration: {
         type: Number,
         required: "Duration is Required"
     },
     weight: {
         type: Number
     },
     reps: {
         type: Number
     },
     sets: {
         type: Number
     },
     distance: {
         type: Number
     }
    },
  ],
}, opts);

WorkoutSchema.virtual('totalDuration').get(function() {
    let sum = 0;
    for (let index = 0; index < exercises.length; index++) {
        sum += exercises.duration[index];
    }
    return sum;
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
