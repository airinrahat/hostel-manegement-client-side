/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServeData = ({ reqmeal, index }) => {
  const {
    category,
    _id,
    name,
    title,

    email,
  } = reqmeal;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>pending</td>

      <td>
        <button className="btn btn-sm text-white bg-[#ef8829]">serve</button>
      </td>
    </tr>
  );
};

export default ServeData;
