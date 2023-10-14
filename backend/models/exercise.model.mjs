import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema(
  {
    name: String,
    duration: Number,
    calorieBurnt: Number,
  },
  { timestamps: true }
);

export const Exercise = mongoose.model("exercise", exerciseSchema);
