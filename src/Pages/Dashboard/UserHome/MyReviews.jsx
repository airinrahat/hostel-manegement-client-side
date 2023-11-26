/* eslint-disable no-unused-vars */
import React from "react";

const MyReviews = () => {
  return (
    <div>
      <h3>thsi is reviews pages</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-2xl font-bold text-black">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Likes </th>
              <th> Reviews </th>
              <th> Edit</th>
              <th> Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>12</td>
              <td>12</td>

              <td>
                {" "}
                <button className="btn btn-sm bg-[#ef8829]">Edit</button>
              </td>
              <td>
                {" "}
                <button className="btn btn-sm bg-[#ef8829]">Delete</button>
              </td>
              <td>
                <button className="btn btn-sm bg-[#ef8829]">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
