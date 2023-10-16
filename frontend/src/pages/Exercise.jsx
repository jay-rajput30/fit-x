import React, { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../actions/actions";
import ExerciseList from "../components/ExerciseList";
const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  useEffect(() => {
    fetchExercises(dispatch);
  }, [dispatch]);
  console.log({ exercises });
  return (
    <div className="flex flex-col items-center justify-start h-screen gap-32">
      <ExerciseForm />

      <ExerciseList exerciseList={exercises} />
    </div>
  );
};

export default Exercise;
