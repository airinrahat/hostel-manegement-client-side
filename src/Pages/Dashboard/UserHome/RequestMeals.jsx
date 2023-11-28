/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import "./RequestMeals.css";

const RequestMeals = () => {
  const requestMeal = useLoaderData();

  const [meals, setMeals] = useState(requestMeal);
  console.log(meals);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/request/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your meal has been deleted.",
                icon: "success",
              });

              const remaining = meals.filter((meal) => meal._id !== _id);
              setMeals(remaining);
            }
          });

        console.log("delete confirm");
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Request Meals</h2>
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead className="text-2xl font-bold text-black">
            <tr>
              <th>#</th>
              <th>Meal Title</th>
              <th>Likes </th>
              <th> Reviews </th>
              <th> Status</th>
              <th> Cancel</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((reqMeal, index) => (
              <tr key={reqMeal._id}>
                <th>{index + 1}</th>
                <td>{reqMeal.title}</td>
                <td>{reqMeal.like}</td>
                <td>{reqMeal.review}</td>
                <td>
                  <button className="btn btn-ghost bg-[#ef8829] btn-xs">
                    pending
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(reqMeal._id)}
                    className="btn bg-[#f1633f]"
                  >
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestMeals;
