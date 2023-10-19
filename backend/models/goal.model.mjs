import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    targetDate: Date,
    targetCalorie: Number,
    status: {
      type: String,
      enum: ["In Progress", "Achieved", "Abandoned"],
    },
  },
  { timestamps: true }
);

export const Goal = mongoose.model("goal", goalSchema);
