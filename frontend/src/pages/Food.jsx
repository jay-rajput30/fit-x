import React, { useEffect } from "react";
import FoodForm from "../components/FoodForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../actions/actions";
import FoodList from "../components/FoodList";

const Food = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-start h-screen gap-32">
      <FoodForm />
      <FoodList foodList={foods} />
    </div>
  );
};

export default Food;
