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

    workoutByDay: [
      {
        dayName: { type: String },
        exerciseName: [
          {
            type: String,
          },
        ],
      },
    ],

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamp: true },
);

export default mongoose.model("WorkoutPlanner", workoutPlannerSchema);
