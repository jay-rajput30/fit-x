import { Goal } from "../models/goal.model.mjs";

export const getAllGoals = async () => {
  try {
    const allGoals = await Goal.find({});
    if (allGoals) {
      return { success: true, data: allGoals, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to get all goals",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const addNewGoal = async (newGoalData) => {
  try {
    const newGoal = await Goal(newGoalData);
    const goalAdded = await newGoal.save();
    if (goalAdded) {
      return { success: true, data: goalAdded, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to add new goal",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const goalDeleted = await Goal.findOneAndDelete(
      { _id: goalId },
      {
        new: true,
      }
    );
    if (goalDeleted) {
      return { success: true, data: goalDeleted, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to delete goal",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
