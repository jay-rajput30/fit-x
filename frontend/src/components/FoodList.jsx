import React from "react";
import { useDispatch } from "react-redux";
import { deletefood } from "../actions/actions";
import { Trash } from "lucide-react";

const FoodList = ({ foodList }) => {
  const dispatch = useDispatch();
  const deletefoodClickHandler = (foodId) => {
    dispatch(deletefood(foodId));
  };
  return (
    <section className="w-full flex flex-row gap-16 p-4">
      {foodList.map((food) => {
        return (
          <article
            key={food._id}
            className="flex justify-center flex-col items-start p-6 border-4 border-rose-300 rounded gap-2"
          >
            <p className="text-lg">
              <strong>name:</strong>
              {" " + food.name}
            </p>
            <p className="text-lg">
              <strong>calories:</strong>
              {" " + food.calories}
            </p>
            <p className="text-lg">
              <strong>protein:</strong>
              {" " + food.protein}
            </p>
            <p className="text-lg">
              <strong>carbs:</strong>
              {" " + food.carbs}
            </p>
            <p className="text-lg">
              <strong>fats:</strong>
              {" " + food.fats}
            </p>
            <Trash
              color="#be123c"
              onClick={() => deletefoodClickHandler(food._id)}
            />
          </article>
        );
      })}
    </section>
  );
};

export default FoodList;
