import mongoose from "mongoose";

export const dailyWorkOutTrackerSchema = mongoose.Schema(
  {
    dateOfWorkOut: Date,
    exerciseName: {
      type: String,
    },
    setNumber: {
      type: Number,
    },
    repsPerformed: {
      type: Number,
    },
    weightOnEachSet: {
      type: Number,
    },
    restTakenbetweenEachSet: {
      type: Number,
    },
  },
  { timestamp: true },
);

export default mongoose.model("DailyWorkOutTracker", dailyWorkOutTrackerSchema);
