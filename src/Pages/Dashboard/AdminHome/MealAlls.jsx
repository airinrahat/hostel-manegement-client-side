/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MealAlls = ({ addMealAll }) => {
  const { name, email, title, image, like, _id, review } = addMealAll;

  const handleDelete = (_id) => {
    console.log(_id);

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
        fetch(`http://localhost:5000/meal/${_id}`, {
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
            }
          });

        console.log("delete confirm");
      }
    });
  };

  return (
    <tr>
      <td>
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
      <td>{review}</td>

      <td>
        <button className="btn bg-[#18ad50] text-white">
          <FaEdit />
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#ad181d] text-white"
        >
          <FaTrashAlt />
        </button>
      </td>
      <td>
        <button className="btn bg-[#ef8829] text-white">
          <FaInfoCircle />
        </button>
      </td>
    </tr>
  );
};

export default MealAlls;
