import express from "express";
import { createDailyWorkoutLog } from "../models/dailyWorkoutTracker/dailyWorkoutTracker.schema.js";
const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { workoutDayId, exerciseId } = req.body;

    const newData = {
      ...req.body,
      workoutDayId: workoutDayId,
      exerciseId: exerciseId,
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
export default router;
