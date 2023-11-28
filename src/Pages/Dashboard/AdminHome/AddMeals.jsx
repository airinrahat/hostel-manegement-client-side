/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddMeals = () => {
  const { user } = useAuth();

  const handleAddMeals = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const time = form.time.value;
    const Ingredients = form.Ingredients.value;

    const rating = form.rating.value;
    const like = form.like.value;
    const price = form.price.value;
    const review = form.review.value;

    const newAddMeal = {
      name,
      email,
      title,
      time,
      Ingredients,
      photo,
      rating,
      like,
      price,
      review,
    };
    console.log(newAddMeal);

    const handleMeals = () => {};

    fetch("http://localhost:5000/meals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddMeal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "meal added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto  mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Add Meal</h2>
        <p className="text-center text-xl my-3">
          It is a long established fact that a reader will be distraceted by the
          <br></br>
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <form onSubmit={handleAddMeals} className="my-10">
          {/* form name and email row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group input input-bordered w-full outline outline-[#ef8829]">
                <input
                  type="name"
                  name="name"
                  // defaultValue={user?.displayName}
                  placeholder="name"
                  className="w-full"
                />
              </label>
            </div>

            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Email
                </span>
              </label>
              <label className="input-group input input-bordered w-full outline outline-[#ef8829]">
                <input
                  type="email"
                  name="email"
                  // defaultValue={user?.email}
                  placeholder="Email"
                  className="w-full"
                />
              </label>
            </div>
          </div>

          {/* form meal title and category row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label ]">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Meal Title
                </span>
              </label>
              <label className="input-group input border  w-full outline outline-[#ef8829] ">
                <input type="text" name="title" placeholder=" meals Title" />
              </label>
            </div>

            <div className="form-control w-full  md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Meals Category
                </span>
              </label>
              <select className="font-normal text-xl border  outline outline-[#ef8829]  rounded-md border-none   py-3 px-3">
                <option value="">Select-meals-category </option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>

          {/* form photo url and price row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Photo URL
                </span>
              </label>
              <label className="input-group input input-bordered outline outline-[#ef8829] w-full ">
                <input type="text" name="photo" placeholder="Photo URL" />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Price
                </span>
              </label>
              <label className="input-group input input-bordered w-full outline outline-[#ef8829]">
                <input
                  type="text"
                  name="price"
                  defaultValue={"$"}
                  placeholder="price"
                />
              </label>
            </div>
          </div>

          {/* form like and Reviews row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Like
                </span>
              </label>
              <label className="input-group input input-bordered w-full outline outline-[#ef8829]">
                <input
                  type="text"
                  name="like"
                  defaultValue={"0"}
                  placeholder="price"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Reviews
                </span>
              </label>
              <label className="input-group input input-bordered w-full outline outline-[#ef8829]">
                <input
                  type="text"
                  name="review"
                  defaultValue={"0"}
                  placeholder="reviews"
                />
              </label>
            </div>
          </div>

          {/* form time and rating row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600  ">
                  Rating
                </span>
              </label>
              <label className="input-group input  input-bordered outline outline-[#ef8829] ">
                <input
                  type="number"
                  name="rating"
                  placeholder="rating"
                  className=" input-bordered  w-full "
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Time
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full outline outline-[#ef8829] ">
                <input type="datetime-local" name="time" />
              </label>
            </div>
          </div>

          {/* form Ingredient row */}

          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label ]">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Ingredients
                </span>
              </label>
              <label className="input-group input border  w-full outline outline-[#ef8829] ">
                <input
                  type="text"
                  name="Ingredients"
                  placeholder=" Ingredients"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 w-full">
              <label className="label ]">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Description
                </span>
              </label>
              <label className="input-group input border  w-full outline outline-[#ef8829] ">
                <input
                  type="text"
                  name="description
"
                  placeholder=" description"
                />
              </label>
            </div>
          </div>

          {/* button */}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 ml-4">
              <label className="">
                <input
                  type="submit"
                  value="Add meal"
                  className="btn btn-block text-white bg-[#ef8829]"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className=" ">
                <input
                  type="submit"
                  value="upcoming"
                  className="btn btn-block  text-white bg-[#575757]"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeals;
