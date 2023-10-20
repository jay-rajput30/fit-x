import React from "react";
import { useSelector } from "react-redux";
import {
  calculateTotalCaloriesBurnt,
  totalCalorieRemaining,
  totalCaloriesConsumed,
} from "../utils/utils";

const Dashboard = () => {
  const exercises = useSelector((state) => state.exercises);
  const goals = useSelector((state) => state.goals);
  const foods = useSelector((state) => state.foods);

  return (
    <div className="flex flex-col gap-16 w-full items-center py-32">
      <h1 className="text-6xl text-bold">welcome to fit x</h1>
      <section className="flex flex-row gap-24">
        <div className="flex flex-col gap-4 items-center border-solid border-rose-200 rounded border-2 p-4">
          <h3 className="text-5xl">
            {calculateTotalCaloriesBurnt(exercises, foods)}
          </h3>
          <small className="text-xl font-light">total calories burnt</small>
        </div>
        <div className="flex flex-col gap-4 items-center border-solid border-rose-200 rounded border-2 p-4">
          <h3 className="text-5xl">{totalCaloriesConsumed(foods)}</h3>
          <small className="text-xl font-light">calories consumed</small>
        </div>
        <div className="flex flex-col gap-4 items-center border-solid border-rose-200 rounded border-2 p-4">
          <h3 className="text-5xl">{totalCaloriesConsumed(goals)}</h3>
          <small className="text-xl font-light">calories consumed</small>
        </div>
        <div className="flex flex-col gap-4 items-center border-solid border-rose-200 rounded border-2 p-4">
          <h3 className="text-5xl">
            {totalCalorieRemaining(foods, goals, exercises)}
          </h3>
          <small className="text-xl font-light">calories remaining</small>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
