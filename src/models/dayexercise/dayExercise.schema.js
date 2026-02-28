import mongoose from "mongoose";

export const dayExerciseSchema = mongoose.Schema(
  {
    workoutDayId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "WorkOutDay",
      require: true,
    },
    exerciseId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
      required: true,
    },
    order: {
      type: Number,
    },
    sets: {
      type: Number,
      required: true,
      min: 1,
    },
    repsRange: {
      type: String,
    },
    restTime: {
      type: Number,
      default: 60,
    },
    notes: String,
  },
  { timestamp: true },
);

export default mongoose.model("WorkOutDay", dayExerciseSchema);
