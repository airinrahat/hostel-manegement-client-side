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

  const handleSearch = (allmeals) => {
    return allmeals.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toUpperCase().includes(searchQuery.toUpperCase())
    );
  };

  const handleMealCategoryTypeChange = (event) => {
    setSelectedMealType(event.target.value);
    const value = event.target.value;
    const filterValue = allmeals.filter((meal) => meal.category === value);
    setMeals(filterValue);
  };

  const handleSortByA = (Ascending) => {
    let sortedData = [...meals];
    sortedData.sort((a, b) => (a.price > b.price ? 1 : -1));
    setMeals(sortedData);
    console.log(sortedData);
  };

  const handleSortByD = (Descending) => {
    let sortedData = [...meals];
    sortedData.sort((a, b) => (b.price > a.price ? 1 : -1));
    setMeals(sortedData);
    console.log(sortedData);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Menu Items On This Hostel : {allmeals.length}
      </h2>
      <div className="text-center pb-1 my-4">
        <input
          type="text"
          placeholder="Search on meals title"
          className="search border-solid border-2 border-[#ef8829]"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%", padding: "12px" }}
        />
      </div>
      <div className="flex  justify-center gap-5">
        <div className="flex justify-center items-center gap-5">
          <div className="text-center mb-2 mt-1">
            <select
              id="brand-input"
              value={selectedMealType}
              onChange={handleMealCategoryTypeChange}
              className="font-normal text-xl bg-[#f4f4f4] border-2 border-[#ef8829]  rounded-md    py-3 px-3"
            >
              <option value="">Filter By Category </option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
        </div>
        <div className="text-center mb-5 flex justify-center items-center gap-5 mt-3">
          <button
            className="btn bg-[#ef8829] text-white"
            onClick={() => handleSortByA()}
          >
            Low Price
          </button>
          <button
            className="btn bg-gray-400 text-white"
            onClick={() => handleSortByD()}
          >
            High Price
          </button>
        </div>
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
