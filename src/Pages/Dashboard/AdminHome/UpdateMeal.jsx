/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMeal = () => {
  const updateMeal = useLoaderData();
  const { name, email, title, image, like, _id, review } = updateMeal;

  const handleUpdateMeals = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const like = form.like.value;
    const review = form.review.value;

    const updateMeal = {
      name,
      email,
      title,
      photo,
      like,
      review,
    };
    console.log(updateMeal);

    fetch(`http://localhost:5000/meal/${_id}`, {
      method: "Put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateMeal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "meal updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Update Meals</h2>

        <form onSubmit={handleUpdateMeals} className="my-10">
          {/* form name and email row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="name"
                  defaultValue={updateMeal?.name}
                  placeholder=" name"
                  className="w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Email
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="email"
                  name="email"
                  defaultValue={updateMeal?.email}
                  placeholder="email"
                  className="w-full"
                />
              </label>
            </div>
          </div>
          {/* form title like row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Title
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="text"
                  name="title"
                  defaultValue={updateMeal?.title}
                  placeholder="title"
                  className="w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Like
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="number"
                  name="like"
                  defaultValue={updateMeal?.like}
                  placeholder="like"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>
          </div>
          {/* form review and photo row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Reviews
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="number"
                  name="review"
                  defaultValue={updateMeal?.review}
                  placeholder="review"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Photo URL
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="text"
                  name="photo"
                  defaultValue={updateMeal?.image}
                  placeholder="Photo URL"
                  className="w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-5">
            <div className="form-control w-full ml-4">
              <label className="">
                <input
                  type="submit"
                  value="Update Meals"
                  className="btn btn-block text-white bg-[#ef8829]"
                />
              </label>
            </div>
            {/* <div className="form-control md:w-1/2 ml-4">
              <label className=" ">
                <input
                  type="reset"
                  value="RESET"
                  className="btn btn-block text-white bg-[#575757]"
                />
              </label>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMeal;
