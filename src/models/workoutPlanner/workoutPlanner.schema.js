import mongoose from "mongoose";

export const workoutPlannerSchema = mongoose.Schema(
  {
    workOutPlannerName: {
      type: String,
    },
    dateCreated: {
      type: Date,
    },
    exerciseName: {
      type: String,
    },
    dayOfWorkut:{
        type:Number
    },
    orderOfExerciseEachday:{
        type:Number
    }
  },
  { timestamp: true },
);

export default mongoose.model("WorkoutPlanner", workoutPlannerSchema);
