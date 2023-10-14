import { Food } from "../models/food.model.mjs";

export const getAllFoods = async () => {
  try {
    const allFoods = await Food.find({});
    if (allFoods) {
      return { success: true, data: allFoods, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to get all food items",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const addNewFood = async (newFoodData) => {
  try {
    const newFood = await Food(newFoodData);
    const foodAdded = await newFood.save();
    if (foodAdded) {
      return { success: true, data: foodAdded, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to add new food item",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const deleteFood = async (FoodId) => {
  try {
    const FoodDeleted = await Food.findOneAndDelete(
      { _id: FoodId },
      {
        new: true,
      }
    );
    if (FoodDeleted) {
      return { success: true, data: FoodDeleted, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to delete food item",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
