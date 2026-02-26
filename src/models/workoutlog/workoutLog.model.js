import workoutLogSchema from "./workoutLog.schema.js";

export const createWorkOutLog = (workoutLogObj) => {
  return workoutLogSchema(workoutLogObj).save();
};
