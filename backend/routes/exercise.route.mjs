import express from "express";
import {
  addNewExercise,
  deleteExercise,
  getAllExercises,
} from "../controllers/exercise.controller.mjs";

const exerciseRouter = express.Router();

exerciseRouter.get("/", async (req, res) => {
  try {
    const { success, data, error } = await getAllExercises();
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

exerciseRouter.post("/", async (req, res) => {
  try {
    const newExerciseData = req.body;
    const { success, data, error } = await addNewExercise(newExerciseData);
    if (success) {
      res.status(200).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

exerciseRouter.delete("/:exerciseId", async (req, res) => {
  try {
    const exerciseId = req.params.exerciseId;

    const { success, data, error } = await deleteExercise(exerciseId);
    if (success) {
      res.status(204).json({ data, error, success });
    } else {
      res.status(400).json({ data, error, success });
    }
  } catch (e) {
    res.status(400).json({ data: null, error: e.message });
  }
});

export default exerciseRouter;
