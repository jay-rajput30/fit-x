import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../actions/actions";

const ExerciseForm = () => {
  const [exerciseFormData, setExerciseFormData] = useState({
    name: "",
    calorieBurnt: 0,
    duration: 0,
  });
  const dispatch = useDispatch();
  const exerciseFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addExercise(exerciseFormData));
  };
  return (
    <form
      onSubmit={exerciseFormSubmitHandler}
      className="flex flex-col justify-start items-center w-1/4 mt-4 py-14 px-5  gap-6 border-rose-300 border-solid border-2 rounded "
    >
      <input
        type="text"
        placeholder="enter exercise name"
        value={exerciseFormData.name}
        onChange={(e) =>
          setExerciseFormData({ ...exerciseFormData, name: e.target.value })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter exercise duration"
        value={setExerciseFormData.duration}
        onChange={(e) =>
          setExerciseFormData({
            ...exerciseFormData,
            duration: +e.target.value,
          })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter calories burnt by exercise"
        value={setExerciseFormData.calorieBurnt}
        onChange={(e) =>
          setExerciseFormData({
            ...exerciseFormData,
            calorieBurnt: +e.target.value,
          })
        }
        className="exercise-input"
      />
      <button
        type="submit"
        className="bg-rose-800 text-rose-100 px-4 py-1 rounded font-bold"
      >
        add
      </button>
    </form>
  );
};

export default ExerciseForm;
