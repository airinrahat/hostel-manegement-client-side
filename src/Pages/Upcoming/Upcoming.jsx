/* eslint-disable no-unused-vars */
import React from "react";
import useUpcomig from "../../hooks/useUpcomig";
import UpcomingData from "./UpcomingData";

const Upcoming = () => {
  const [upcoming] = useUpcomig();

  return (
    <div className="overflow-x-auto max-w-screen-xl mx-auto mt-10">
      <table className="table border-2  ">
        <thead className=" ">
          <h2>{upcoming.length}</h2>
          <tr className="text-2xl font-bold text-zinc-600">
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
          {upcoming.map((upcomingMeal) => (
            <UpcomingData
              key={upcomingMeal._id}
              addMealAll={upcomingMeal}
            ></UpcomingData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upcoming;
