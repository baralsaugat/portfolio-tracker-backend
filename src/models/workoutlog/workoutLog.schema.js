import mongoose from "mongoose";

export const workoutLogSchema = mongoose.Schema(
  {
    workoutPlanId: {
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
    workoutPlanId: {
      type: String,
    },
  },
  { timestamp: true },
);

export default mongoose.model("WorkoutLog", workoutLogSchema);
