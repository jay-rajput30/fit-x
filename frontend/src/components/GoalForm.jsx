import React, { useState } from "react";
import { addGoal } from "../actions/actions";
import { useDispatch } from "react-redux";

const GoalForm = () => {
  const [goalFormData, setGoalFormData] = useState({
    name: "",
    description: "",
    targetDate: null,
    targetCalorie: 0,
    status: "In Progress",
  });
  const dispatch = useDispatch();
  const goalFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addGoal(goalFormData));
    console.log({ goalFormData });
  };

  const targetdateChangeHandler = (e) => {
    const target = new Date(e.target.value);
    setGoalFormData({ ...goalFormData, targetDate: target.getTime() });
  };

  return (
    <form
      onSubmit={goalFormSubmitHandler}
      className="flex flex-col justify-start items-center w-1/4 mt-4 py-14 px-5  gap-6 border-rose-300 border-solid border-2 rounded "
    >
      <input
        type="text"
        placeholder="enter goal name"
        onChange={(e) =>
          setGoalFormData({ ...goalFormData, name: e.target.value })
        }
        className="exercise-input"
      />
      <input
        type="text"
        placeholder="enter goal description"
        onChange={(e) =>
          setGoalFormData({
            ...goalFormData,
            description: e.target.value,
          })
        }
        className="exercise-input"
      />
      <div className="flex justify-between w-full">
        <label htmlFor="target-date-input">target date</label>
        <input
          type="date"
          id="target-date-input"
          placeholder="enter target date"
          onChange={targetdateChangeHandler}
          className="exercise-input"
        />
      </div>

      <input
        type="number"
        value={goalFormData.targetCalorie}
        placeholder="enter target calorie"
        onChange={(e) =>
          setGoalFormData({
            ...goalFormData,
            targetCalorie: +e.target.value,
          })
        }
        className="exercise-input"
      />

      <select
        value={goalFormData.status}
        onChange={(e) =>
          setGoalFormData({ ...goalFormData, status: e.target.value })
        }
        className="exercise-input"
      >
        <option value="In Progress">In Progress</option>
        <option value="Achieved">Achieved</option>
        <option value="Abandoned">Abandoned</option>
      </select>
      <button
        type="submit"
        className="bg-rose-800 text-rose-100 px-4 py-1 rounded font-bold"
      >
        add
      </button>
    </form>
  );
};

export default GoalForm;
