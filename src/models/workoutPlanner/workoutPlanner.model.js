import { userSchema } from "../users/users.schema.js";
import workoutPlannerSchema from "./workoutPlanner.schema.js";

export const createWorkOutPlan = (workourPlanObj) => {
  return workoutPlannerSchema(workourPlanObj).save();
};

export const getWorkoutPlanByWorkoutId = (workoutIdArg) => {
  return workoutPlannerSchema
    .findById(workoutIdArg)
    .select(
      "workOutPlannerName userId userEmail workoutByDay totalDaysOfWorkout orderOfExerciseEachday isCreatedByUser dateCreated",
    );
};

export const getWorkOutplanHistoryByUserId = (userIdArg) => {
  return workoutPlannerSchema.find({ userId: userIdArg });
};
