/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const SingleMealsDetails = () => {
  const singlemeals = useLoaderData();
  const { category } = singlemeals;

  const [count, setCount] = useState(1000);
  return (
    <div className="mx-auto max-w-screen-xl flex justify-center my-5">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src="https://i.ibb.co/0tZxvKb/slider1.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Admin Name: {category}</h2>
          <p>
            {" "}
            <span className="font-bold"> Meal Description</span>: If a dog chews
            shoes whose shoes does he choose?
          </p>
          <p>
            {" "}
            <span className="font-bold"> Ingredients</span> : Mixed berries,
            Banana, Almond butter, Granola, Chia seeds
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

          <button
            className="btn bg-[#18ad50] text-white mr-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Meal request
          </button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center my-4">Details Page</h3>
            <form action="/action_page.php">
              Name:
              <input
                type="text"
                // defaultValue={user.displayName}
                placeholder="Name"
                className="input input-bordered w-full my-3 "
                name="name"
              />
              Email:
              <input
                type="email"
                // defaultValue={user.email}
                placeholder="Email"
                className="input input-bordered w-full  my-3"
                name="email"
              />
              <br />
              Resume URL:
              <input
                type="url"
                placeholder="url"
                className="input input-bordered w-full  my-3"
                name="url"
              />
              <div className="flex justify-end items-center">
                <input
                  type="submit"
                  value="Apply Job"
                  className="btn btn-success mt-7  mr-4"
                />
                <div className="modal-action">
                  <form method="dialog ">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SingleMealsDetails;
