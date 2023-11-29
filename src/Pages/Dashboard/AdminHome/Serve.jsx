/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import ServeData from "./ServeData";

const Serve = () => {
  const reqmeals = useLoaderData();

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-2xl font-bold text-black">
              <tr>
                <th>SL</th>
                <th>Title</th>
                <th>Name </th>
                <th> Email </th>
                <th> Status</th>
                <th>Serve</th>
              </tr>
            </thead>
            <tbody>
              {reqmeals.map((reqmeal) => (
                <ServeData key={reqmeal._id} reqmeal={reqmeal}></ServeData>
              ))}
              {/* <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>promi</td>
                <td>airin@gmail.com</td>
                <td>pending</td>

                <td>
                  <button className="btn btn-sm text-white bg-[#ef8829]">
                    serve
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Serve;
