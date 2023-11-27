/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AllMeal = ({ allmeal }) => {
  //   const { title } = allmeal;
  const { rating, category, image, title, price, _id } = allmeal;

  return (
    <div className="mx-auto max-w-screen-xl">
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{category}</h2>

          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <div className="card-actions">
            <Link to={`/singlemeals/${_id}`}>
              {" "}
              <button className="btn bg-[#ef8829]">Details</button>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-60" src={image} alt="meal!" />
        </figure>

        <div className="card-body text-start">
          <h2 className="card-title font-bold">Title: {title}</h2>
          <h3 className="text-xl">
            <b>Category : </b>
            {category}
          </h3>
          <p>
            <b>Price</b> : ${price}
          </p>

          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <div className="card-actions">
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

export default AllMeal;
