export const createDailyWorkoutLog = async (workoutlogObj) => {
  return dailyWorkOutTrackerSchema(workoutlogObj).save();
};
