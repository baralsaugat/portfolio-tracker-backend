import express from "express";
import {
  createExercise,
  getExercises,
} from "../models/exercise/exercise.model.js";

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

router.get("/", async (req, res) => {
  try {
    const result = await getExercises();
    if (result) {
      res.json({
        status: "success",
        message: "list of exercises",
        result,
      });
    }
    res.json({
      status: "error",
      message: "couldnot fetch the exercises",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
