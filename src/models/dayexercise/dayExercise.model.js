import dayExerciseSchema from "./dayExercise.schema.js";

export const createDayExercise = (dayExerObj) => {
  return dayExerciseSchema(dayExerObj).save();
};