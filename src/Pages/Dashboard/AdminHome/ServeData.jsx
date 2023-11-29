/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServeData = ({ reqmeal }) => {
  const {
    category,
    _id,

    title,

    userName,
    userEmail,
  } = reqmeal;

  return (
    <tr>
      <th>{+1}</th>
      <td>{title}</td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>pending</td>

      <td>
        <button className="btn btn-sm text-white bg-[#ef8829]">serve</button>
      </td>
    </tr>
  );
};

export default ServeData;
