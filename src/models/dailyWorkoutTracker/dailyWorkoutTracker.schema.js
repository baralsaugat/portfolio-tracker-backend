import mongoose from "mongoose";

const setLogSchema = mongoose.Schema({
  setNumber: {
    type: Number,
  },
  weight: {
    type: Number,
    min: 0,
  },
  reps: {
    type: Number,
    min: 0,
  },
  notes: String,
});

const exerciseLogSchema = new mongoose.Schema({
  dayExercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DayExercise",
  },
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
  },
  set: [setLogSchema],
  notes: String,
});
const workoutLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    workoutPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutPlan",
    },
    workoutDay: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutDay",
      required: true,
    },
    scheduledDate: {
      type: Date,
      required: true,
    },
    completedDate: {
      type: Date,
    },
    duration: {
      type: Number, // in minutes
      min: 0,
    },
    exercises: [exerciseLogSchema],
    overallFeeling: {
      type: String,
      enum: ["great", "good", "okay", "tired", "exhausted"],
    },
    notes: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "in-progress", "completed", "skipped"],
      default: "scheduled",
    },
  },
  { timestamp: true },
);

export default mongoose.model("DailyWorkOutTracker", dailyWorkOutTrackerSchema);
