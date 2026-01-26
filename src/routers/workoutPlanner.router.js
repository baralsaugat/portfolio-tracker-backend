import express from "express";
import { createWorkOutPlan } from "../models/workoutPlanner/workoutPlanner.model.js";
import { getUserEmailByRefreshJWT } from "../models/users/users.model.js";

const router = express.Router();

// creating workoutplan
router.post("/", async (req, res) => {
  try {
    const { refreshJWT } = req.body;

    const userEmailFromUserSchema = await getUserEmailByRefreshJWT(refreshJWT);
    console.log(userEmailFromUserSchema);
    const workOutData = {
      ...req.body,
      userEmail: userEmailFromUserSchema.email,
    };
    const result = await createWorkOutPlan(workOutData);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "WorkOut plan created successfully",
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
  res.send({
    status: "ok",
    message: "you are in workout planner api",
  });
});
