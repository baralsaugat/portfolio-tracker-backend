import mongoose from "mongoose";

export const workoutPlannerSchema = mongoose.Schema(
  {
    workOutPlannerName: {
      type: String,
    },
    dateCreated: {
      type: Date,
      require: true,
    },

    workoutByDay: {
      dayName: {
        type: String,
      },
      exerciseName: {
        type: String,
      },
    },

    totalDaysOfWorkout: {
      type: Number,
    },

    orderOfExerciseEachday: {
      type: Number,
    },

    isCreatedByUser: {
      type: Boolean,
    },
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
  },
  { timestamp: true },
);

export default mongoose.model("WorkoutPlanner", workoutPlannerSchema);
