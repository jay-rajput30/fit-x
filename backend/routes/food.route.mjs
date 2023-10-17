import express from "express";
import {
  addNewFood,
  deleteFood,
  getAllFoods,
} from "../controllers/food.controller.mjs";

const foodRouter = express.Router();

foodRouter.get("/", async (req, res) => {
  try {
    const { success, data, error } = await getAllFoods();
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

foodRouter.post("/", async (req, res) => {
  try {
    const newFoodData = req.body;
    const { success, data, error } = await addNewFood(newFoodData);
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

foodRouter.delete("/:foodId", async (req, res) => {
  try {
    const foodId = req.params.foodId;

    const { success, data, error } = await deleteFood(foodId);
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

export default foodRouter;
