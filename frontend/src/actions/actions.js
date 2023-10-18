export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await fetch("https://fitxbe.onrender.com/api/exercises");
    const data = await response.json();

    dispatch({ type: "FETCH_EXERCISES_SUCCESS", payload: data.data });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "FETCH_EXERCISES_FAILURE" });
  }
};

export const addExercise = (exerciseData) => async (dispatch) => {
  try {
    const response = await fetch("https://fitxbe.onrender.com/api/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseData),
    });

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_EXERCISE_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "FETCH_EXERCISES_FAILURE" });
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fitxbe.onrender.com/api/exercises/${exerciseId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log({ response, data });
    dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: data.data._id });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "DELETE_EXERCISE_FAILURE" });
  }
};

export const fetchFoods = () => async (dispatch) => {
  try {
    const response = await fetch("https://fitxbe.onrender.com/api/food");
    const data = await response.json();

    dispatch({ type: "FETCH_FOODS_SUCCESS", payload: data.data });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "FETCH_FOODS_FAILURE" });
  }
};

export const addFood = (foodData) => async (dispatch) => {
  try {
    const response = await fetch("https://fitxbe.onrender.com/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    });

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_FOOD_SUCCESS", payload: data.data });
    }
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "ADD_FOOD_FAILURE" });
  }
};

export const deletefood = (foodId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://fitxbe.onrender.com/api/food/${foodId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    dispatch({ type: "DELETE_FOOD_SUCCESS", payload: data.data._id });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "DELETE_FOOD_FAILURE" });
  }
};
