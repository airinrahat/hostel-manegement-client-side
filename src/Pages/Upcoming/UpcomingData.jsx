/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import useUpcomig from "../../hooks/useUpcomig";

const UpcomingData = () => {
  const [upcoming] = useUpcomig();
  //   const { name, email, title, image, like, _id, review } = upcomingMeal;
  //   const { name } = upcomingMeal;
  return (
    <tr>
      {/* <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="text-xl">{name}</td>
      <td className="text-xl">{email}</td>
      <td className="text-xl">{title}</td>
      <td className="text-xl">
        {like}
        <br />
      </td>
      <td>{review}</td> */}
      <h2>{upcoming?.name}</h2>
      {/* <td>
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
      </td> */}
    </tr>
  );
};

export default UpcomingData;
