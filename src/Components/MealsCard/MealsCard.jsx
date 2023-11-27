/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const MealsCard = ({ item }) => {
  const { rating, image, title, price, _id, category } = item;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-60" src={image} alt="meal!" />
        </figure>

        <div className="card-body text-start">
          <h2 className="card-title font-bold">{title}</h2>
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
      {/* <div className="card ">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="p-5 gap-0 card-body">
          <h2 className="text-2xl card-title">Spanish</h2>
          <h3 className="text-1xl">
            <b>Total Student</b> : 327
          </h3>
          <p>
            <b>Description</b> : {description}
          </p>
          {items.availableSeat === 0 || isAdmin || isInstructor ? (
            <>
              <button disabled className="btn btn-primary ">
                <span className="text-rose-600">Sorry Seat Not Available</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleFavbtn(item._id)}
                disabled={items.disabled}
                className="btn btn-primary"
              >
                Select This Class
              </button>
            </>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default MealsCard;
