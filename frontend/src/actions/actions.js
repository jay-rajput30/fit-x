export const fetchExercises = async (dispatch) => {
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
    console.log({ resonse, data });
    dispatch({ type: "DELETE_EXERCISE_SUCCESS", payload: exerciseId });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "DELETE_EXERCISE_FAILURE" });
  }
};
