import mongoose from "mongoose";

export const workoutLogSchema = mongoose.Schema(
  {
    WorkoutPlanId: {
      type: String,
    },
    dateCreated: {
      type: Date,
      require: true,
    },
    workoutDayName: {
      type: String,
    },
    exerciseName: {
      type: String,
    },
    sets: {
      setNumber: { type: String },
      reps: { type: Number },
      weight: { type: Number },
    },

    userId: {
      type: String,
    },
  },
  { timestamp: true },
);

export default mongoose.model("WorkoutLog", workoutLogSchema);
