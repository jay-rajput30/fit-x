export const calculateTotalCaloriesBurnt = (exercises, foods) => {
  const exerciseCaloriesCount = exercises.reduce(
    (acc, cur) => acc + cur.calorieBurnt,
    0
  );
  const foodCaloriesCount = foods.reduce((acc, cur) => acc + cur.calories, 0);
  const totalCalorieCount = exerciseCaloriesCount + foodCaloriesCount;
  return totalCalorieCount;
};

export const totalCaloriesConsumed = (foods) => {
  const foodCaloriesCount = foods.reduce((acc, cur) => acc + cur.calories, 0);
  return foodCaloriesCount;
};

export const totalCaloriesGoal = (goals) => {
  const caloriesGoalCount = goals.reduce(
    (acc, cur) => acc + cur.targetCalorie,
    0
  );
  return caloriesGoalCount;
};

export const totalCalorieRemaining = (foods, goals, exercises) => {
  const foodCalorieCount = foods.reduce((acc, cur) => acc + cur.calories, 0);
  const goalCalorieCount = goals.reduce(
    (acc, cur) =>
      cur.status === "In Progress" ? acc + cur.targetCalorie : acc,
    0
  );
  const exerciseCaloriesCount = exercises.reduce(
    (acc, cur) => acc + cur.calorieBurnt,
    0
  );

  const remainingCalorieCount =
    goalCalorieCount - (exerciseCaloriesCount + foodCalorieCount);

  return remainingCalorieCount < 0 ? 0 : remainingCalorieCount;
};
