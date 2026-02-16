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

export const getUserNameByUserId = (userIdArg) => {
  return userSchema.findOne({ _id: userIdArg }).distinct("fName");
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
