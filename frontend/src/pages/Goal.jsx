import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals } from "../actions/actions";
import GoalForm from "../components/GoalForm";
import GoalList from "../components/GoalList";

const Goal = () => {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-start h-screen gap-32">
      <GoalForm />
      <GoalList goalList={goals} />
    </div>
  );
};

export default Goal;
