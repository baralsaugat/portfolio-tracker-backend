import { userSchema } from "../users/users.schema.js";
import workoutPlannerSchema from "./workoutPlanner.schema.js";

export const createWorkOutPlan = (workourPlanObj) => {
  return workoutPlannerSchema(workourPlanObj).save();
};


export const getUserId = (refreshJWt )=>{
  return userSchema.find
}