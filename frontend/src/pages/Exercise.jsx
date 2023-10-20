import React, { useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { useDispatch, useSelector } from "react-redux";
import ExerciseList from "../components/ExerciseList";
import { fetchExercises } from "../actions/actions";
const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  console.log({ exercises });
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-start h-screen gap-32">
      <ExerciseForm />

      <ExerciseList exerciseList={exercises} />
    </div>
  );
};

export default Exercise;
