import React from "react";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../actions/actions";
const ExerciseList = ({ exerciseList }) => {
  const dispatch = useDispatch();

  const deleteExerciseClickHandler = (exerciseId) => {
    dispatch(deleteExercise(exerciseId));
  };

  return (
    <section className="w-full flex flex-row gap-16 p-4">
      {exerciseList.map((exercise) => {
        return (
          <article
            key={exercise._id}
            className="flex justify-center flex-col items-start p-4 border-4 border-rose-300 rounded gap-2 "
          >
            <p className="text-lg">
              <strong>name:</strong>
              {" " + exercise.name}
            </p>
            <p className="text-lg">
              <strong>duration:</strong>
              {" " + exercise.duration}
            </p>
            <p className="text-lg">
              <strong>calorie burnt:</strong>
              {" " + exercise.calorieBurnt}
            </p>
            <Trash
              color="#be123c"
              onClick={() => deleteExerciseClickHandler(exercise._id)}
            />
          </article>
        );
      })}
    </section>
  );
};

export default ExerciseList;
