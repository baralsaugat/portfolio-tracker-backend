import express from "express";
import { createWorkOutLog } from "../models/workoutlog/workoutLog.model.js";
const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const result = await createWorkOutLog(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "WorkOut plan log posted successfully",
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
