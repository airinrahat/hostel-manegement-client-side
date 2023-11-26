/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import useMenu from "../../hooks/useMenu";
import { useLoaderData } from "react-router-dom";
import AllMeal from "./AllMeal";

const AllMeals = () => {
  const allmeals = useLoaderData();
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");

  const url = `http://localhost:5000/meals`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [url]);
  console.log(meals);
  const handleMealTypeChange = (event) => {
    setSelectedMealType(event.target.value);
    const value = event.target.value;
    const filterValue = allmeals.filter((meal) => meal.category === value);
    setMeals(filterValue);
  };

  // Filter meals based on the selected meals  type
  const filteredMeals = selectedMealType
    ? meals.filter((meal) => meal.category === selectedMealType)
    : meals;

  const handleSearch = (allmeals) => {
    return allmeals.filter(
      (item) =>
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toUpperCase().includes(searchQuery.toUpperCase())
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Menu Items On This Marketplace : {allmeals.length}
      </h2>
      <div className="text-center pb-3 my-4">
        <input
          type="text"
          placeholder="Search on meals title"
          className="search border-solid border-2 border-[#ef8829]"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%", padding: "12px" }}
        />
      </div>

      <div className="text-center mb-5 mt-3">
        <select
          id="brand-input"
          value={selectedMealType}
          onChange={handleMealTypeChange}
          className="font-normal text-xl bg-[#f4f4f4]  rounded-md border-none outline-[#ef8829]  py-3 px-3"
        >
          <option value="">Filter By Category </option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6 my-5">
        {handleSearch(meals).map((allmeal) => (
          <AllMeal key={allmeal._id} allmeal={allmeal}></AllMeal>
        ))}
      </div>
    </div>
  );
};

export default AllMeals;
