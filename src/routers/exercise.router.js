import express from "express";
import { createExercise } from "../models/exercise/exercise.model.js";

const router = express.Router();

// registration
router.post("/", async (req, res) => {
  try {
    const result = await createExercise(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Exercise created successfully",
      });
    }
    res.json({
      status: "error",
      message: "Error occurred while creating",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;

