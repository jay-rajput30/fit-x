import React, { useState } from "react";

const ExerciseForm = () => {
  const [exerciseFormData, setExerciseFormData] = useState({
    name: "",
    caloriesBurnt: 0,
    duration: 0,
  });
  const exerciseFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ exerciseFormData });
  };
  return (
    <form
      onSubmit={exerciseFormSubmitHandler}
      className="flex flex-col justify-start items-center w-1/4 mt-8 py-14 px-5 h-1/3 gap-6 border-rose-300 border-solid border-4 rounded "
    >
      <input
        type="text"
        placeholder="enter exercise name"
        onChange={(e) =>
          setExerciseFormData({ ...exerciseFormData, name: e.target.value })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter exercise duration"
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
        placeholder="enter calories burnt bye exercise"
        onChange={(e) =>
          setExerciseFormData({
            ...exerciseFormData,
            caloriesBurnt: +e.target.value,
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
