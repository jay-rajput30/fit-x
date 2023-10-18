import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../actions/actions";

const FoodForm = () => {
  const [foodFormData, setFoodFormData] = useState({
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  const dispatch = useDispatch();

  const foodFormSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(foodFormData));
    setFoodFormData({
      name: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
    });
  };

  return (
    <form
      onSubmit={foodFormSubmitHandler}
      className="flex flex-col justify-start items-center w-1/4 mt-4 py-14 px-5 gap-6 border-rose-300 border-solid border-2 rounded "
    >
      <input
        type="text"
        placeholder="enter food name"
        value={foodFormData.name}
        onChange={(e) =>
          setFoodFormData({ ...foodFormData, name: e.target.value })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter calories count"
        value={foodFormData.calories}
        onChange={(e) =>
          setFoodFormData({
            ...foodFormData,
            calories: +e.target.value,
          })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter protein count"
        value={foodFormData.protein}
        onChange={(e) =>
          setFoodFormData({
            ...foodFormData,
            protein: +e.target.value,
          })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter carbs count"
        value={foodFormData.carbs}
        onChange={(e) =>
          setFoodFormData({
            ...foodFormData,
            carbs: +e.target.value,
          })
        }
        className="exercise-input"
      />
      <input
        type="number"
        placeholder="enter fats count"
        value={foodFormData.fats}
        onChange={(e) =>
          setFoodFormData({
            ...foodFormData,
            fats: +e.target.value,
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

export default FoodForm;
