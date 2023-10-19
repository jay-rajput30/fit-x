import { Trash } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../actions/actions";

const GoalList = ({ goalList }) => {
  const dispatch = useDispatch();
  const deleteGoalClickHandler = (goalId) => {
    dispatch(deleteGoal(goalId));
  };
  return (
    <section className="w-full flex flex-row gap-16 p-4">
      {goalList.map((goal) => {
        return (
          <article
            key={goal._id}
            className="flex justify-center flex-col items-start p-6 border-4 border-rose-300 rounded gap-2"
          >
            <p className="text-lg">
              <strong>name: </strong>
              {" " + goal.name}
            </p>
            <p className="text-lg">
              <strong>description: </strong>
              {" " + goal.description}
            </p>
            <p className="text-lg">
              <strong>Target Date: </strong>
              {" " + goal.targetDate}
            </p>
            <p className="text-lg">
              <strong>Target Calorie: </strong>
              {" " + goal.targetCalorie}
            </p>
            <Trash
              color="#be123c"
              onClick={() => deleteGoalClickHandler(goal._id)}
            />
          </article>
        );
      })}
    </section>
  );
};

export default GoalList;
