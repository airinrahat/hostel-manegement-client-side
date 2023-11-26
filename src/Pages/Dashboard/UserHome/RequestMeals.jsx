/* eslint-disable no-unused-vars */
import React from "react";
// import "./RequestMeals.css";

const RequestMeals = () => {
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>12</td>
              <td>12</td>
              <td>pending</td>
              <td>
                <button className="btn bg-[#ef8829]">cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestMeals;
