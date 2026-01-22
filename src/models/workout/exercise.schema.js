import mongoose from "mongoose";

export const exerciseSchema = mongoose.Schema(
  {
    exerciseName: {
      type: String,
      required: true,
    },
    exerciseType: { type: String },
    exerciseOptionals: {
      type: String,
    },
    repsRecommended: { Number },
    restRecommended: { Number },
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
