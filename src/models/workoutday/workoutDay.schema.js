import mongoose from "mongoose";

export const workoutDaySchema = mongoose.Schema(
  {
    workoutPlanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutPlan",
      required: true,
    },
    dayNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    dayName: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    focusArea: {
      type: String,
      enum: [
        "chest",
        "back",
        "shoulders",
        "biceps",
        "triceps",
        "quads",
        "core",
        "glutes",
        "hamstring",
        "cardio",
        "rest",
      ],
    },
    isRestDay: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true },
);

export default mongoose.model("WorkOutDay", workoutDaySchema);
