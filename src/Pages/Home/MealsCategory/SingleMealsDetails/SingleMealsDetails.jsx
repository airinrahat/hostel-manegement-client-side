/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const SingleMealsDetails = () => {
  const { user } = useContext(AuthContext);
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
  console.log(singledata);
  // const userName = user?.displayName;
  // const userEmail = user?.email;

  const handleReview = (e) => {
    // e.preventDefault();

    // const form = e.target;
    // const name = form.get("name");

    // const email = form.get("email");
    // const name = form.name.value;
    // const email = form.email.value;

    const singleCard = {
      menuId: _id,
      title,
      image,
      like,

      review,
      ingredients,
      meal_description,
      category,
    };

    axios.post("http://localhost:5000/request", singleCard).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` added to your request meal`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleRequest = (e) => {
    // e.preventDefault();

    // const form = e.target;
    // const name = form.get("name");

    // const email = form.get("email");
    // const name = form.name.value;
    // const email = form.email.value;

    const singleCard = {
      menuId: _id,
      title,
      image,

      like,
      review,
      ingredients,
      meal_description,
      category,
    };
    const singledataMeal = {
      ...singleCard,
      email: user?.email,
      name: user?.displayName,
    };
    console.log(singledataMeal);
    axios.post("http://localhost:5000/request", singledataMeal).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` added to your request meal`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const [count, setCount] = useState(1000);
  return (
    <div className="mx-auto max-w-screen-xl flex justify-center my-5">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="h-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <b>Admin Name : </b>
            {user?.displayName}
          </h2>
          <h2 className="card-title">
            <b>Category : </b> {category}
          </h2>
          <p>
            {" "}
            <span className="font-bold text-sm"> Meal Description : </span>{" "}
            {meal_description}
          </p>
          {/* <p>
            {" "}
            <span className="font-bold"> Ingredients</span> :{ingredients}
          </p> */}
          <p className="m-0">
            <b>Ingredients :</b>
          </p>
          {ingredients.map((int) => (
            <li>{int}</li>
          ))}
          <p>
            {" "}
            <span className="font-bold"> Post Time : </span> 12/21/23
          </p>

          <p>
            <Rating
              // style={{ maxWidth: 100 }}
              value={5}
              readOnly
            />
          </p>

          <button onClick={() => setCount((count) => count + 1)}>
            <div className="flex gap-2 mt-1">
              <div className="mt-1">
                <AiFillLike className="text-info text-start"></AiFillLike>{" "}
              </div>
              <div className="flex justify-start mb-1">
                <b>Liked:- </b>
                {count}
              </div>
            </div>
          </button>

          <div>
            <Link to={`/reviews/${_id}`}>
              {/* <Link to=`/reviews`> */}
              <button className="btn btn-md capitalize px-4 ">reviews</button>
            </Link>
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
