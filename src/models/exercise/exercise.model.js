import exerciseSchema from "./exercise.schema.js";

export const createExercise = (exerObj) => {
  return exerciseSchema(exerObj).save();
};
