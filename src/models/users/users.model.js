import usersSchema from "./users.schema.js";
import userSchema from "./users.schema.js";

export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

export const getAllUser = () => {
  return userSchema.find();
};
export const getUserByEmail = (emailArg) => {
  return userSchema.findOne({ email: emailArg });
};

export const getUserNameByUserId = async (userIdArg) => {
  const user = await userSchema.findById(userIdArg).select("fName");

  return user.fName;
};

export const getIsWorkOutCreationHistory = async (userIdArg) => {
  const userData = await userSchema
    .findById(userIdArg)
    .select("workoutPlanCreatedMinOne");

  return userData.workoutPlanCreatedMinOne;
};

export const updateWorkOutPlanCreationByUserId = (userIdArg) => {
  return userSchema.updateOne(
    { _id: userIdArg },
    { workoutPlanCreatedMinOne: true },
  );
};
export const getUserEmailByRefreshJWT = (token) => {
  return userSchema.findOne({ "refreshJWT.token": token }).select("email");
};

export const storeRefreshJWT = async (_id, token) => {
  return userSchema.findOneAndUpdate(
    { _id },
    { $set: { "refreshJWT.token": token, "refreshJWT.addedAt": Date.now() } },
    {
      new: true,
    },
  );
};
