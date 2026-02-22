import express from "express";
import {
  getWorkOutplanHistoryByUserId,
  createWorkOutPlan,
  getWorkoutPlanByWorkoutId,
} from "../models/workoutPlanner/workoutPlanner.model.js";
import {
  getIsWorkOutCreationHistory,
  getUserEmailByRefreshJWT,
  getUserNameByUserId,
  updateWorkOutPlanCreationByUserId,
} from "../models/users/users.model.js";

const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { refreshJWT } = req.body;

    const userEmailFromUserSchema = await getUserEmailByRefreshJWT(refreshJWT);

    const workOutData = {
      ...req.body,
      userEmail: userEmailFromUserSchema.email,
      userId: userEmailFromUserSchema._id,
    };
    console.log(workOutData);
    const result = await createWorkOutPlan(workOutData);
    const workOutPlanId = result._id;
    const { workOutPlannerName, totalDaysOfWorkout, userId } = result;
    if (result?._id) {
      await updateWorkOutPlanCreationByUserId(userId);
      return res.json({
        status: "success",
        message: "WorkOut plan created successfully",
        workOutPlanId,
        workOutPlannerName,
        totalDaysOfWorkout,
        userId,
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

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const isWorkOutHistory = await getIsWorkOutCreationHistory(userId);

    const userName = await getUserNameByUserId(userId);

    if (isWorkOutHistory) {
      const result = await getWorkOutplanHistoryByUserId(userId);

      if (result) {
        return res.json({
          status: "success",
          message: "Workout plan created history available",
          result,
          userName,
          isWorkOutHistory,
        });
      }
      return res.json({
        status: "error",
        message: "could fetch workout data",
      });
    }
    return res.json({
      status: "error",
      message: "no workout history available, create now",
      userName,
      // need to work on this to get the good practice
    });
  } catch (error) {
    return res.json({
      status: "errror",
      message: error.message,
    });
  }
});

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
