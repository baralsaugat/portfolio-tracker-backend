import express from "express";
import { createWorkOutDay } from "../models/workoutday/workoutDay.model.js";
const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { workoutPlanId } = req.body;

    const newData = { ...req.body, workoutPlanId: workoutPlanId };
    const result = await createWorkOutDay(newData);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Workout Day Id created",
        result
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
