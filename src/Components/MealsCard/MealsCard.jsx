/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const MealsCard = ({ item }) => {
  const { rating, image, title, price, _id } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <div className="card-actions">
            {/* <Link to="/singlemeals/${_id}"> */}
            <Link to={`/singlemeals/${_id}`}>
              {" "}
              <button className="btn bg-[#ef8829]">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
