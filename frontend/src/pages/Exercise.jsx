import React, { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../actions/actions";
const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  useEffect(() => {
    fetchExercises(dispatch);
  }, [dispatch]);
  console.log({ exercises });
  return (
    <div className="flex items-start justify-center h-screen">
      <ExerciseForm />
      <section></section>
    </div>
  );
};

export default Exercise;
