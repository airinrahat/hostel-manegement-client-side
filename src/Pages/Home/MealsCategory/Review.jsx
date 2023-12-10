/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Review = () => {
  const reviewdata = useLoaderData();
  const {
    category,
    _id,
    image,
    meal_description,
    ingredients,
    title,
    like,
    review,
  } = reviewdata;
  return (
    <div className="max-w-screen-lg mx-auto">
      <h3>this is review req{reviewdata?.category}</h3>

      <div className="p-3 text-center">
        <h2 className="text-3xl py-5">
          <u>
            <b>Reviews Please</b>
          </u>
        </h2>

        <div>
          <form action="" className="bg-slate-200 p-10 mt-0">
            <div className="flex justify-center items-center">
              <Rating style={{ maxWidth: 400 }} isRequired />
            </div>
            <div className="">
              {/* <label className="label p-0">
                <h3 className="text-lg">Rating Please :</h3>
              </label>
              <label className="">
                <input
                  type="number"
                  id="ratingInput"
                  min="0"
                  max="5"
                  step="0.5"
                  // value={inputValue}
                  name="rating"
                />
              </label> */}
              <label className="label p-0">
                <h3 className="text-lg">
                  Do you have any suggestion for me ?{" "}
                </h3>
              </label>
              <label className="">
                <input
                  type="text"
                  name="suggestion"
                  placeholder="Suggestion"
                  className="input m-0"
                  style={{ width: "100%" }}
                />
              </label>
              <label className="label p-0">
                <h3 className="text-lg">Review Detail: </h3>
              </label>
              <label className="">
                <textarea
                  name="review"
                  placeholder="Please Review"
                  className="textarea textarea-bordered"
                  style={{ width: "100%" }}
                ></textarea>
              </label>
            </div>

            <div className="mt-5">
              <input type="submit" value="Review" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
