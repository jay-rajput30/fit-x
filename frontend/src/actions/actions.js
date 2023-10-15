export const fetchExercises = async (dispatch) => {
  try {
    const response = await fetch("https://fitxbe.onrender.com/api/exercises");
    const data = await response.json();
    dispatch({ type: "FETCH_EXERCISES_SUCCESS", payload: data });
  } catch (e) {
    console.error("something went wrong,", e.message);
    dispatch({ type: "FETCH_EXERCISES_FAILURE" });
  }
};
