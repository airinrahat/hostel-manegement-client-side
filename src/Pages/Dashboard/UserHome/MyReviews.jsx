/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  // const [reqmeals, setReqmeals] = useState([]);

  // const url = `http://localhost:5000/request/email=${user.userEmail}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setReqmeals(data));
  // }, [url]);

  // console.log(reqmeals, user);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-2xl font-bold text-black">
            <tr>
              <th>Sl</th>
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
              <td>12</td>{" "}
              <td>
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
