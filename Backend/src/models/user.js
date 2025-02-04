import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  counter: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 },
});

export const User = mongoose.model("User", UserSchema);
