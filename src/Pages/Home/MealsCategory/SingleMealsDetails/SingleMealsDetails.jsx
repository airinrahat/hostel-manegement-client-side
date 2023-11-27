/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const SingleMealsDetails = () => {
  const singledata = useLoaderData();
  const {
    category,
    _id,
    image,
    meal_description,
    ingredients,
    title,
    like,
    review,
  } = singledata;

  const { user } = useContext(AuthContext);
  // const { id } = useParams();
  // const url = `http://localhost:5000/meals/${id}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setSingleMeal(data));
  // }, [url]);

  //handle request

  const handleRequest = (e) => {
    const singleCard = {
      menuId: _id,
      title,
      like,
      review,
    };
  };

  const [count, setCount] = useState(1000);
  return (
    <div className="mx-auto max-w-screen-xl flex justify-center my-5">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="h-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Admin Name:{user?.displayName}</h2>
          <h2 className="card-title">Category: {category}</h2>
          <p>
            {" "}
            <span className="font-bold"> Meal Description</span>:{" "}
            {meal_description}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Ingredients</span> :{ingredients}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Post Time</span> :12/21/23
          </p>
          <p>
            {" "}
            <span className="font-bold"> reviews</span> :Best
          </p>

          <Rating style={{ maxWidth: 180 }} value={5} readOnly />

          <button
            onClick={() => setCount((count) => count + 1)}
            // style={{ border: "none", padding: "5px 10px" }}
          >
            <AiFillLike className="text-info text-start"></AiFillLike>{" "}
            <div className="flex justify-start">
              <b>Liked:- </b>
              {count}
            </div>
          </button>
          <div>
            <button className="btn btn-xs">reviews</button>
          </div>

          <button
            onClick={handleRequest}
            className="btn bg-[#18ad50] text-white mr-2"
          >
            Meal request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMealsDetails;
