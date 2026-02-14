import express from "express";
import {
  createWorkOutPlan,
  getWorkoutPlanByWorkoutId,
} from "../models/workoutPlanner/workoutPlanner.model.js";
import { getUserEmailByRefreshJWT } from "../models/users/users.model.js";

const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { refreshJWT } = req.body;

    const userEmailFromUserSchema = await getUserEmailByRefreshJWT(refreshJWT);

    const workOutData = {
      ...req.body,
      userEmail: userEmailFromUserSchema.email,
    };
    const result = await createWorkOutPlan(workOutData);
    const workOutPlanId = result._id;
    const { workOutPlannerName, totalDaysOfWorkout } = result;
    if (result?._id) {
      return res.json({
        status: "success",
        message: "WorkOut plan created successfully",
        workOutPlanId,
        workOutPlannerName,
        totalDaysOfWorkout,
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

router.get("/user/:userId/workoutplan/:workoutplanId", async (req, res) => {
  try {
    const { userId, workoutplanId } = req.params;


    const result = await getWorkoutPlanByWorkoutId(workoutplanId);
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
