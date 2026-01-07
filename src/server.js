import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

import mongoClient from "./config/db.js";
mongoClient();

// loading the router
import userRouter from "./routers/users.router.js";
import loginRouter from "./routers/login.router.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";

app.use(express.json());

// use the router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// global express error handle
app.use("/", (req, res, next) => {
  const error = new Error("404 page not found");
  error.status = 400;
  next(error);
});
app.use(globalErrorHandler);

// listening to the port and return the error if it exists.

app.listen(3000, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Server is running on http://localhost:3000");
});
