import workoutDaySchema from "./workoutDay.schema.js";

export const createWorkOutDay = (workOutDayObj) => {
  return workoutDaySchema(workOutDayObj).save();
};
