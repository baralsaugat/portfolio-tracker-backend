import express from "express";
import { createDayExercise } from "../models/dayexercise/dayExercise.model.js";
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
    const result = await createDayExercise(newData);

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
