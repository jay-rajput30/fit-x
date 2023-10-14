import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    targetDate: Number,
    targetCalorie: Number,
    status: {
      type: String,
      enum: ["inprogress", "achieved", "abondoned"],
    },
  },
  { timestamps: true }
);

export const Goal = mongoose.model("food", goalSchema);
