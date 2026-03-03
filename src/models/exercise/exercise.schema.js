import mongoose from "mongoose";

export const exerciseSchema = mongoose.Schema(
  {
    exerciseName: {
      type: String,
      required: true,
    },
    exerciseType: { type: String },
    muscleGroup: {
      type: String,
      enum: [
        "chest",
        "back",
        "shoulders",
        "biceps",
        "triceps",
        "legs",
        "core",
        "whole body",
        "cardio",
      ],
      required: true,
    },
    exerciseOptionals: {
      type: String,
    },

    exerciseImage: {
      type: String,
    },
    exerciseDescription: {
      type: String,
    },
  },
  { timestamp: true },
);

export default mongoose.model("Exercise", exerciseSchema);
