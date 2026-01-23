import workoutPlannerSchema from "./workoutPlanner.schema.js";

export const createWorkOutPlan = (workourPlanObj) => {
  return workoutPlannerSchema(workourPlanObj).save();
};
