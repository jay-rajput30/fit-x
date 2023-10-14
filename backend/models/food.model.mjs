import mongoose from "mongoose";

const foodSchema = mongoose.Schema(
  {
    name: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
  },
  { timestamps: true }
);

export const Food = mongoose.model("food", foodSchema);
