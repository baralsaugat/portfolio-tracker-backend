import express from "express";

const router = express.Router();

import { hashPassword } from "../helpers/bcrypt.helper.js";
import { createUser } from "../models/users/users.model.js";

// registration
router.post("/", async (req, res) => {
  try {
    const { password } = req.body;
    const hashPass = await hashPassword(password);
    const newUser = { ...req.body, password: hashPass };
    const result = await createUser(newUser);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Registration success",
      });
    }
    res.json({
      status: "error",
      message: "could not register this account",
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
    message: "you are in user api",
  });
});
