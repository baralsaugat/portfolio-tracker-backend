import dailyWorkOutTrackerSchema from './dailyWorkoutTracker.schema.js';

export const createDailyWorkoutLog = async (workoutlogObj) => {
  return dailyWorkOutTrackerSchema(workoutlogObj).save();
};
