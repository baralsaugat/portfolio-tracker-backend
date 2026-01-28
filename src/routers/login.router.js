import express from "express";
import { getUserByEmail } from "../models/users/users.model.js";
import { comparePassword } from "../helpers/bcrypt.helper.js";
import { createAccessJWT, createRefreshJWT } from "../helpers/jwt.helper.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await getUserByEmail(email);
    const userId = result._id;
    const hashedPWFromDB = result.password;

    const checkPassword = comparePassword(password, hashedPWFromDB);

    if (checkPassword) {
      const accessJWT = await createAccessJWT(email, result._id);

      const refreshJWT = await createRefreshJWT(email, result._id);

      return res.json({
        status: "success",
        message: "login success, welcome",
        accessJWT,
        refreshJWT,
        userId,
      });
    }
    res.json({
      status: "error",
      message: "sorry Invaild login details",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
