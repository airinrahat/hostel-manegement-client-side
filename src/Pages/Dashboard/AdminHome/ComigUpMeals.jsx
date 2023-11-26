/* eslint-disable no-unused-vars */
import React from "react";

const ComigUpMeals = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-2xl font-bold text-black">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Name </th>
              <th> Email </th>
              <th> Status</th>
              <th>Serve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>promi</td>
              <td>airin@gmail.com</td>
              <td>pending</td>

              <td>
                <button className="btn btn-sm bg-[#ef8829]">serve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComigUpMeals;
