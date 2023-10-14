import express from "express";
import {
  addNewGoal,
  deleteGoal,
  getAllGoals,
} from "../controllers/goal.controller.mjs";

const goalRouter = express.Router();

goalRouter.get("/", async (req, res) => {
  try {
    const { success, data, error } = await getAllGoals();
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

goalRouter.post("/", async (req, res) => {
  try {
    const newGoalData = req.body;
    const { success, data, error } = await addNewGoal(newGoalData);
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

goalRouter.delete("/:goalId", async (req, res) => {
  try {
    const goalId = req.params.goalId;

    const { success, data, error } = await deleteGoal(goalId);
    if (success) {
      res.status(204).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

export default goalRouter;
