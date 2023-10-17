const initialState = {
  exercises: [],
  goals: [],
  foods: [],
  loading: false,
  error: null,
};

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXERCISE_SUCCESS": {
      return { ...state, exercises: [...state.exercises, action.payload] };
    }
    case "ADD_EXERCISE_FAILURE": {
      return { ...state, loading: false, error: "unable to add new exercise" };
    }
    case "DELETE_EXERCISE_SUCCESS": {
      return {
        ...state,
        exercises: state.exercises.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
        error: null,
      };
    }
    case "DELETE_EXERCISE_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error deleting exercise",
      };
    }
    case "FETCH_EXERCISES_SUCCESS": {
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null,
      };
    }
    case "FETCH_EXERCISES_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error fetching exercises",
      };
    }
    case "ADD_FOOD_SUCCESS": {
      return { ...state, foods: [...state.foods, action.payload] };
    }
    case "ADD_FOOD_FAILURE": {
      return { ...state, loading: false, error: "unable to add new exercise" };
    }
    case "DELETE_FOOD_SUCCESS": {
      return {
        ...state,
        foods: state.foods.filter((item) => item._id !== action.payload),
        loading: false,
        error: null,
      };
    }
    case "DELETE_FOOD_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error deleting exercise",
      };
    }
    case "FETCH_FOODS_SUCCESS": {
      return {
        ...state,
        foods: action.payload,
        loading: false,
        error: null,
      };
    }
    case "FETCH_FOODS_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error fetching exercises",
      };
    }
    case "ADD_GOAL_SUCCESS": {
      return { ...state, goals: [...state.goals, action.payload] };
    }
    case "ADD_FOOD_FAILURE": {
      return { ...state, loading: false, error: "unable to add new exercise" };
    }
    case "DELETE_GOAL_SUCCESS": {
      return {
        ...state,
        goals: state.goals.filter((item) => item._id !== action.payload),
        loading: false,
        error: null,
      };
    }
    case "DELETE_GOAL_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error deleting exercise",
      };
    }
    case "FETCH_GOAL_SUCCESS": {
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null,
      };
    }
    case "FETCH_GOAL_FAILURE": {
      return {
        ...state,
        loading: false,
        error: "error fetching exercises",
      };
    }
    default:
      return state;
  }
};
