import express from "express";
import { createDailyWorkoutLog } from "../models/dailyWorkoutTracker/dailyWorkoutTracker.model.js";
const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { workoutPlanId, userId } = req.params;
    const { exerciseId, dayExerciseId, workoutDayId } = req.body;

    const newData = {
      ...req.body,
      workoutDayId: workoutDayId,
      exerciseId: exerciseId,
      dayExerciseId: dayExerciseId,
      userId: userId,
      workoutPlanId: workoutPlanId,
    };
    const result = await createDailyWorkoutLog(newData);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "exercise and day created",
        result,
      });
    }
    res.json({
      status: "error",
      message: "Error occurred while posting",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});



router.get("/user/:userId/workoutplan/:workoutplanId", async (req, res) => {
  try {
    const { userId, workoutplanId } = req.params;

    const result = await getWorkoutPlanByWorkoutId(workoutplanId);
    console.log(result);
    if (result) {
      return res.json({
        status: "success",
        message: "list of the workout plan",
        result,
      });
    } else {
      return res.json({
        status: "error",
        message: "could not get the workout data",
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
