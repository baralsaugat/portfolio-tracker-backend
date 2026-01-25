import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

import mongoClient from "./config/db.js";
mongoClient();
const port = process.env.PORT || 8000;

// loading the router
import userRouter from "./routers/users.router.js";
import loginRouter from "./routers/login.router.js";
import exerciseRouter from "./routers/exercise.router.js";
import workOutPlannerRouter from "./routers/workoutPlanner.router.js"
import { globalErrorHandler } from "./middleware/errorHandler.js";

app.use(express.json());
app.use(cors());

// use the router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/exercise", exerciseRouter);
app.use("/api/v1/workoutplanner", workOutPlannerRouter);


app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

// global express error handle
app.use("/", (req, res, next) => {
  const error = new Error("404 page not found");
  error.status = 400;
  next(error);
});
app.use(globalErrorHandler);

// listening to the port and return the error if it exists.

app.listen(port, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
