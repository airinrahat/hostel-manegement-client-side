/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";

const AddMeals = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mr-5 mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Add Meal</h2>
        <p className="text-center text-xl my-3">
          It is a long established fact that a reader will be distraceted by the
          <br></br>
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <form className="my-10">
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
                  defaultValue={user?.displayName}
                  placeholder="Email"
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
                  defaultValue={user?.email}
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
                <option value="on-site-job">Breakfast</option>
                <option value="remote">Lunch</option>
                <option value="hybrid">Dinner</option>
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
                  name="reviews"
                  defaultValue={"0"}
                  placeholder="price"
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

          {/* form Ingredients
 row */}

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
                  name="Ingredients
"
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
