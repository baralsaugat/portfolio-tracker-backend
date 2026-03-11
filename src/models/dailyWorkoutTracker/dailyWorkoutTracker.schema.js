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
  dayExerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DayExercise",
  },
  exerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
  },
  set: [setLogSchema],
  notes: String,
});
const workoutLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    workoutPlanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutPlan",
    },
    workoutDayId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutDay",
      required: true,
    },
    scheduledDate: {
      type: Date,
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

export default mongoose.model("DailyWorkOutTracker", workoutLogSchema);
