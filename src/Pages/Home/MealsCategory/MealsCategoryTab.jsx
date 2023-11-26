/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import MealsCard from "../../../Components/MealsCard/MealsCard";

const MealsCategoryTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 my-5">
        {items.map((item) => (
          <MealsCard key={item._id} item={item}></MealsCard>
        ))}
      </div>
    </div>
  );
};

export default MealsCategoryTab;
