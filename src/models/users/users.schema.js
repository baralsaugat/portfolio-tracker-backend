import mongoose from "mongoose";

export const userSchema = mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    dob: { type: Date },
    dateSignedUp: { type: Date, default: Date.now },
    email: { type: String, required: true },
    password: { type: String, required: true },
    refreshJWT: {
      token: {
        type: String,
        require: true,
      },
      addedAt: {
        type: Date,
        require: true,
        default: Date.now(),
      },
    },
    workoutPlanCreatedMinOne: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true },
);

export default mongoose.model("User", userSchema);
