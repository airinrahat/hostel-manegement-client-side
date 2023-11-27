/* eslint-disable no-unused-vars */
import React from "react";
import { FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import MealAlls from "./MealAlls";

const MealsAll = () => {
  const addMealAlls = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table border-2 ">
          <thead className=" ">
            <h2>{addMealAlls.length}</h2>
            <tr className="text-lg font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>

              <th>like</th>
              <th>Review</th>

              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {addMealAlls.map((addMealAll) => (
              <MealAlls key={addMealAll._id} addMealAll={addMealAll}></MealAlls>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealsAll;
