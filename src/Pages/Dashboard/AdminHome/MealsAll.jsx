/* eslint-disable no-unused-vars */
import React from "react";
import { FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

const MealsAll = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table border-2  ">
          <thead className=" ">
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>like</th>
              <th>Reviews</th>

              <th>Update</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/mSdpnd5/soup-bg.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-xl">promi</td>
              <td className="text-xl">promi@gmail.com</td>
              <td className="text-xl">
                10
                <br />
              </td>
              <td>20</td>

              <td>
                <button className="btn bg-[#18ad50] text-white">
                  <FaEdit />
                </button>
              </td>
              <td>
                <button className="btn bg-[#ad181d] text-white">
                  <FaTrashAlt />
                </button>
              </td>
              <td>
                <button className="btn bg-[#ef8829] text-white">
                  <FaInfoCircle />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealsAll;
