import { Exercise } from "../models/exercise.model.mjs";

export const getAllExercises = async () => {
  try {
    const allExercises = await Exercise.find({});
    if (allExercises) {
      return { success: true, data: allExercises, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to get all exercises",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const addNewExercise = async (newExerciseData) => {
  try {
    const newExercise = await Exercise(newExerciseData);
    const exerciseAdded = await newExercise.save();
    if (exerciseAdded) {
      return { success: true, data: exerciseAdded, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to add new exercise",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const deleteExercise = async (exerciseId) => {
  console.log({ exerciseId });
  try {
    const exerciseDeleted = await Exercise.findOneAndDelete(
      { _id: exerciseId },
      {
        new: true,
      }
    );
    if (exerciseDeleted) {
      return { success: true, data: exerciseDeleted, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to delete exercise",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
